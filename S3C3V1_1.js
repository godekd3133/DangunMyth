class S3C3V1_1 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 4.5;
    this.narrFlag = false;
  }

  OnEnter() {
    this.narrFlag = false;
  }

  OnDraw() {
    imageManager.DrawImage(
      "s3c3v1_1_background",
      createVector(width / 2, height / 2, 0)
    );
    imageManager.DrawImageScale(
      "s3c3v1_1_bear" + Math.floor(((millis() / 500) % 2) + 1),
      createVector(475, 400, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "s3c3v1_1_tiger",
      createVector(width / 2 + 25, height / 2, 0),
      createVector(0.25, 0.25, 0)
    );

    imageManager.DrawImage("s3c3v1_1_text", createVector(width / 2, height / 2, 0));

    if (!this.narrFlag) {
      this.narrFlag = true;
      soundManager.PlaySound("S3/C3/V1/_1/Bear");
    }
    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C3V1_2());
    }
  }

  OnExit() {}
}
