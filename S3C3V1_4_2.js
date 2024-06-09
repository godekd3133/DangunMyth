class S3C3V1_4_2 extends Scene {
  constructor() {
    super();
    this.SCENE_SECONDS = 5;
    this.PREFIX = "Images/S3/C3/V1/_4/_2/";
    this.preparationTime = 1;
    this.alpha = 1;
    this.fadeoutTime = 4;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("family", this.PREFIX + "family");

    this.alpha = 255;
    this.fadeoutTime = 4;
    this.preparationTime = 3;
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "family",
      createVector(width / 2, height / 2),
      createVector(0.25, 0.25),
      0,
      this.alpha
    );

    if (timeManager.time - timeManager.enterTime >= 1) {
      this.alpha -= (255 / this.fadeoutTime) * timeManager.deltaTime;
    }
    if (this.alpha <= 0) {
      this.preparationTime -= timeManager.deltaTime;
      if (this.preparationTime <= 0) {
        sceneManager.ChangeScene(new S3C3V1_4_3());
      }
    }
  }

  OnExit() {}
}
