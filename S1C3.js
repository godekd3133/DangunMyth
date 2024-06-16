class S1C3 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 8; // narr. 7sec

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

    this.currentImageIndex = 0;
    this.godY = 0;
    this.cloudY = 0;

    imageManager.DrawImageScale(
      "s1c3_background",
      createVector(width / 2, height / 2, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImageScale(
      "s1c3_god",
      createVector(width / 2, height / 2 + this.godY, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "s1c3_face",
      createVector(width / 2, height / 2 + this.godY, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "s1c3_cloud01",
      createVector(width / 2, height / 2 + this.cloudY, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImage("s1c3_text", createVector(width / 2, height / 2));
  }

  OnDraw() {
    if (!this.isNarrOut) {
      this.isNarrOut = !this.isNarrOut;
      soundManager.PlaySound("S1/C3/narr");
    }

    imageManager.DrawImageScale(
      "s1c3_background",
      createVector(width / 2, height / 2, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImageScale(
      "s1c3_god",
      createVector(width / 2, height / 2 + this.godY, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "s1c3_telling" + this.currentImageIndex,
      createVector(width / 2, height / 2 + this.godY, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "s1c3_cloud01",
      createVector(width / 2, height / 2 + this.cloudY, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImage("s1c3_text", createVector(width / 2, height / 2));

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
