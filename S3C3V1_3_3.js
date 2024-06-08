class S3C3V1_3_3 extends Scene {
  preparationTime = 5;
  BACKGROUND_IMAGE = "Images/S3/C3/V1/_3/_3/Background";
  DANGUN_IMAGE = "Images/S3/C3/V1/_3/_3/Dangun";
  alpha = 1;
  fadeoutTime = 6;
  firstFlag = false;
  constructor() {}
  OnEnter() {
    // println("133 Enter");
    image.LoadImage("background", this.BACKGROUND_IMAGE);
    image.LoadImage("dangun", this.DANGUN_IMAGE);
    image.LoadImage("text", "Images/S3/C3/V1/_3/_3/text");
    sound.LoadSound("narr", "Sounds/S3/C3/V1/_3/_3/narr.mp3");
    this.firstFlag = false;
    this.alpha = 255;
    this.fadeoutTime = 6;
    this.preparationTime = 5;
  }
  OnDraw() {
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2, 0),
      new p5.Vector(1, 1, 0)
    );
    image.DrawImageScale(
      "dangun",
      new p5.Vector(width / 2, height / 2, 0),
      new p5.Vector(0.25, 0.25, 0),
      0,
      this.alpha
    );
    image.DrawImage("text", new p5.Vector(width / 2, height / 2, 0)); // if (time.time - enterTime >= 1f) {
    //   alpha -= 255/fadeoutTime * time.deltaTime;
    // }
    if (time.time - this.enterTime >= this.preparationTime) {
      scene.CreditScene();
    }
    if (!this.firstFlag) {
      this.firstFlag = true;
      sound.PlaySound("narr");
    }
  }
  OnExit() {}
}
