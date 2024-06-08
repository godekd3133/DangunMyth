class S3C3V1_1 extends Scene {
  static PREFIX = "Images/S3/C3/V1/_1/";
  SCENE_DURATION = 4.5;
  narrFlag = false;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", S3C3V1_1.PREFIX + "background");
    image.LoadImage("bear1", S3C3V1_1.PREFIX + "bear1");
    image.LoadImage("bear2", S3C3V1_1.PREFIX + "bear2");
    image.LoadImage("tiger", S3C3V1_1.PREFIX + "tiger");
    image.LoadImage("text", S3C3V1_1.PREFIX + "text");
    sound.LoadSound("Bear", "Sounds/S3/C3/V1/_1/Bear.mp3");
    this.narrFlag = false;
    enterTime = time.time;
  }
  OnDraw() {
    image.DrawImage("background", new p5.Vector(width / 2, height / 2, 0));
    image.DrawImageScale(
      "bear" + (((millis() / 500) % 2) + 1),
      new p5.Vector(475, 400, 0),
      new p5.Vector(0.25, 0.25, 0)
    );
    image.DrawImageScale(
      "tiger",
      new p5.Vector(width / 2 + 25, height / 2, 0),
      new p5.Vector(0.25, 0.25, 0)
    );
    image.DrawImage("text", new p5.Vector(width / 2, height / 2, 0));
    if (!this.narrFlag) {
      this.narrFlag = true;
      sound.PlaySound("Bear");
    }
    if (time.time - this.enterTime > this.SCENE_DURATION) {
      scene.ChangeScene(new S3C3V1_2());
    }
  }
  OnExit() {}
}
