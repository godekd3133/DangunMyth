class S3C3V2_2_2 extends Scene {
  constructor() {
    super();
    this.preparationTime = 1;
    this.alpha = 255;
    this.fadeoutTime = 4;
  }

  OnEnter() {
    this.alpha = 255;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "s3c3v2_2_2_background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );
    imageManager.DrawImageScale(
      "s3c3v2_2_2_character",
      createVector(width / 2, height / 2, 0),
      createVector(0.25, 0.25, 0),
      0,
      this.alpha
    );
    if (timeManager.time - this.enterTime >= 1) {
      this.alpha -= (255 / this.fadeoutTime) * timeManager.deltaTime;
    }
    if (this.alpha <= 0) {
      this.preparationTime -= timeManager.deltaTime;
      if (this.preparationTime <= 0) {
        sceneManager.ChangeScene(new S3C3V2_2_3());
      }
    }
  }

  OnExit() {}
}
