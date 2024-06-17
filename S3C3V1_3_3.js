class S3C3V1_3_3 extends Scene {
  constructor() {
    super();
    this.preparationTime = 5;
    this.fadeoutTime = 6;
    this.alpha = 255;
    this.firstFlag = false;
  }

  OnEnter() {
    this.firstFlag = false;
    this.alpha = 255;
    this.preparationTime = 8;
    this.fadeoutTime = 7;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "s3c3v1_3_3_background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );
    imageManager.DrawImageScale(
      "s3c3v1_3_3_dangun",
      createVector(width / 2, height / 2, 0),
      createVector(0.25, 0.25, 0),
      0,
      this.alpha
    );
    imageManager.DrawImage("s3c3v1_3_3_text", createVector(width / 2, height / 2, 0));

    if (timeManager.time - this.enterTime >= this.preparationTime) {
      sceneManager.CreditScene();
    }

    if (!this.firstFlag) {
      this.firstFlag = true;
      soundManager.PlaySound("S3/C3/V1/_3/_3/narr");
    }
  }

  OnExit() {}
}
