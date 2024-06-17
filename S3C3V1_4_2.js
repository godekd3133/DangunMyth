class S3C3V1_4_2 extends Scene {
  constructor() {
    super();
    this.SCENE_SECONDS = 5;
    this.preparationTime = 1;
    this.alpha = 1;
    this.fadeoutTime = 4;
  }

  OnEnter() {
    this.alpha = 255;
    this.fadeoutTime = 4;
    this.preparationTime = 1;
  }

  OnDraw() {
    imageManager.DrawImage("s3c3v1_4_2_background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "s3c3v1_4_2_family",
      createVector(width / 2, height / 2),
      createVector(0.25, 0.25),
      0,
      this.alpha
    );

    if (timeManager.time - this.enterTime >= 1) {
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
