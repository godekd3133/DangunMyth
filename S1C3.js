class S1C3 extends Scene {
  SCENE_DURATION = 8; // narr. 7sec
  GOD_IMAGE = "Images/S1/C3/god";
  BACKGROUND_IMAGE = "Images/S1/C3/background";
  CLOUD_IMAGE = "Images/S1/C3/cloud";
  DEFAULT_FACE = "Images/S1/C3/god_smile";
  TELLING_FACES = ["Images/S1/C3/god_telling1", "Images/S1/C3/god_telling2"];
  GOD_WIDTH = width / 2.1;
  GOD_HEIGHT = GOD_WIDTH * 1.18;
  isNarrOut = false;
  cloudY;
  godY;
  currentImageIndex = 0;
  changeInterval = 30;
  constructor() {}
  OnEnter() {
    this.isNarrOut = false;
    image.LoadImage("background", this.BACKGROUND_IMAGE);
    image.LoadImage("cloud01", this.CLOUD_IMAGE);
    image.LoadImage("god", this.GOD_IMAGE);
    image.LoadImage("face", this.DEFAULT_FACE);
    image.LoadImage("text", "Images/S1/C3/text");
    sound.LoadSound("narr", "Sounds/S1/C3/narr/narr.mp3");
    let imageCount = this.TELLING_FACES.length;
    this.currentImageIndex = 0;
    this.godY = 0;
    this.cloudY = 0;
    for (let i = 0; i < imageCount; i++) {
      image.LoadImage("telling" + i, this.TELLING_FACES[i]);
    }
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2, 0),
      new p5.Vector(0.67, 0.67, 0)
    );
    image.DrawImageScale(
      "god",
      new p5.Vector(width / 2, height / 2 + this.godY, 0),
      new p5.Vector(0.25, 0.25, 0)
    );
    image.DrawImageScale(
      "face",
      new p5.Vector(width / 2, height / 2 + this.godY, 0),
      new p5.Vector(0.25, 0.25, 0)
    );
    image.DrawImageScale(
      "cloud01",
      new p5.Vector(width / 2, height / 2 + this.cloudY, 0),
      new p5.Vector(0.67, 0.67, 0)
    );
    image.DrawImage("text", new p5.Vector(width / 2, height / 2));
  }
  OnDraw() {
    if (!this.isNarrOut) {
      this.isNarrOut = !this.isNarrOut;
      sound.PlaySound("narr");
    }
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2, 0),
      new p5.Vector(0.67, 0.67, 0)
    );
    image.DrawImageScale(
      "god",
      new p5.Vector(width / 2, height / 2 + this.godY, 0),
      new p5.Vector(0.25, 0.25, 0)
    );
    image.DrawImageScale(
      "telling" + this.currentImageIndex,
      new p5.Vector(width / 2, height / 2 + this.godY, 0),
      new p5.Vector(0.25, 0.25, 0)
    );
    image.DrawImageScale(
      "cloud01",
      new p5.Vector(width / 2, height / 2 + this.cloudY, 0),
      new p5.Vector(0.67, 0.67, 0)
    );
    image.DrawImage("text", new p5.Vector(width / 2, height / 2));
    this.godY += (100 * time.deltaTime) / this.SCENE_DURATION;
    this.cloudY += (100 * time.deltaTime) / this.SCENE_DURATION;
    if (frameCount % this.changeInterval == 0) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.TELLING_FACES.length;
    }
    if (this.cloudY >= 100 || time.time - enterTime >= this.SCENE_DURATION) {
      scene.ChangeScene(new S1C4());
    }
  }
  OnExit() {}
}
