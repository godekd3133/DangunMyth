class S1C3 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 8; // narr. 7sec

    this.GOD_IMAGE = "Images/S1/C3/god";
    this.BACKGROUND_IMAGE = "Images/S1/C3/background";
    this.CLOUD_IMAGE = "Images/S1/C3/cloud";
    this.DEFAULT_FACE = "Images/S1/C3/god_smile";
    this.TELLING_FACES = [
      "Images/S1/C3/god_telling1",
      "Images/S1/C3/god_telling2",
    ];

    this.GOD_WIDTH = width / 2.1;
    this.GOD_HEIGHT = this.GOD_WIDTH * 1.18;
    this.isNarrOut = false;

    this.cloudY = 0;
    this.godY = 0;
    this.currentImageIndex = 0;
    this.changeInterval = 30;
  }

  OnEnter() {
    this.isNarrOut = false;

    imageManager.LoadImage("background", this.BACKGROUND_IMAGE);
    imageManager.LoadImage("cloud01", this.CLOUD_IMAGE);

    imageManager.LoadImage("god", this.GOD_IMAGE);
    imageManager.LoadImage("face", this.DEFAULT_FACE);
    imageManager.LoadImage("text", "Images/S1/C3/text");

    let imageCount = this.TELLING_FACES.length;
    this.currentImageIndex = 0;
    this.godY = 0;
    this.cloudY = 0;

    for (let i = 0; i < imageCount; i++) {
      imageManager.LoadImage("telling" + i, this.TELLING_FACES[i]);
    }

    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImageScale(
      "god",
      createVector(width / 2, height / 2 + this.godY, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "face",
      createVector(width / 2, height / 2 + this.godY, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "cloud01",
      createVector(width / 2, height / 2 + this.cloudY, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImage("text", createVector(width / 2, height / 2));
  }

  OnDraw() {
    if (!this.isNarrOut) {
      this.isNarrOut = !this.isNarrOut;
      soundManager.PlaySound("S1/C3/narr");
    }

    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImageScale(
      "god",
      createVector(width / 2, height / 2 + this.godY, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "telling" + this.currentImageIndex,
      createVector(width / 2, height / 2 + this.godY, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "cloud01",
      createVector(width / 2, height / 2 + this.cloudY, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImage("text", createVector(width / 2, height / 2));

    this.godY += (100 * timeManager.deltaTime) / this.SCENE_DURATION;
    this.cloudY += (100 * timeManager.deltaTime) / this.SCENE_DURATION;

    if (frameCount % this.changeInterval === 0) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.TELLING_FACES.length;
    }

    if (
      this.cloudY >= 100 ||
      timeManager.time - this.enterTime >= this.SCENE_DURATION
    ) {
      sceneManager.ChangeScene(new S1C4());
    }
  }

  OnExit() {}
}
