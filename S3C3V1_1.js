class S3C3V1_1 extends Scene {
  constructor() {
    super();
    this.PREFIX = "Images/S3/C3/V1/_1/";
    this.SCENE_DURATION = 4.5;
    this.narrFlag = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("bear1", this.PREFIX + "bear1");
    imageManager.LoadImage("bear2", this.PREFIX + "bear2");
    imageManager.LoadImage("tiger", this.PREFIX + "tiger");
    imageManager.LoadImage("text", this.PREFIX + "text");


    this.narrFlag = false;
  }

  OnDraw() {
    imageManager.DrawImage(
      "background",
      createVector(width / 2, height / 2, 0)
    );
    imageManager.DrawImageScale(
      "bear" + Math.floor(((millis() / 500) % 2) + 1),
      createVector(475, 400, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "tiger",
      createVector(width / 2 + 25, height / 2, 0),
      createVector(0.25, 0.25, 0)
    );

    imageManager.DrawImage("text", createVector(width / 2, height / 2, 0));

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
