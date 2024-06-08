class S3C3V1_4_3 extends Scene {
  SCENE_DURATION = 7; // 5초 동안 씬 진행
  imageNames = [
    "background",
    "body",
    "head",
    "arm",
    "mouth1",
    "mouth2",
    "ally",
    "enemy1",
    "enemy2",
    "enemy3",
    "flag",
  ];
  imagePath = "Images/S3/C3/V1/_4/_3/";
  manScale = 0.3;
  allyScale = 0.2;
  enemyScale1 = 0.2;
  enemyScale2 = 0.13;
  ANIMATION_TICK_INTERVAL = 1.0;
  animationTick = 0;
  isAnimating = true;
  firstFlag = false;
  constructor() {}
  OnEnter() {
    // println("143 Enter");
    for (imageName of this.imageNames)
      image.LoadImage(imageName, this.imagePath + imageName);
    image.LoadImage("text", "Images/S3/C3/V1/_4/_3/text");
    sound.LoadSound("narr", "Sounds/S3/C3/V1/_4/_3/narr.mp3");
    this.animationTick = 0;
    this.firstFlag = false;
  }
  OnDraw() {
    this.animationTick += time.deltaTime;
    if (this.animationTick >= this.ANIMATION_TICK_INTERVAL) {
      this.animationTick = 0;
      this.isAnimating = !this.isAnimating;
    }
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(1, 1)
    );
    image.DrawImageScale(
      "enemy2",
      new p5.Vector(100, 450),
      new p5.Vector(this.enemyScale2, this.enemyScale2)
    );
    image.DrawImageScale(
      "enemy2",
      new p5.Vector(200, 450),
      new p5.Vector(this.enemyScale2, this.enemyScale2)
    );
    image.DrawImageScale(
      "enemy1",
      new p5.Vector(500, 450),
      new p5.Vector(this.enemyScale2, this.enemyScale2)
    );
    image.DrawImageScale(
      "enemy3",
      new p5.Vector(350, 450),
      new p5.Vector(this.enemyScale1, this.enemyScale1)
    );
    image.DrawImageScale(
      "ally",
      new p5.Vector(1180, 500),
      new p5.Vector(this.allyScale, this.allyScale)
    );
    image.DrawImageScale(
      "flag",
      new p5.Vector(1300, 250),
      new p5.Vector(0.25, 0.25),
      0.3
    );
    if (this.isAnimating) {
      image.DrawImageScale(
        "arm",
        new p5.Vector(950, 280),
        new p5.Vector(this.manScale, this.manScale),
        0.3
      );
    } else {
      image.DrawImageScale(
        "arm",
        new p5.Vector(900, 300),
        new p5.Vector(this.manScale, this.manScale)
      );
    }
    image.DrawImageScale(
      "body",
      new p5.Vector(900, 500),
      new p5.Vector(this.manScale, this.manScale)
    );
    image.DrawImageScale(
      "head",
      new p5.Vector(1050, 300),
      new p5.Vector(this.manScale, this.manScale),
      0.2
    );
    if (this.isAnimating) {
      image.DrawImageScale(
        "mouth1",
        new p5.Vector(1050, 300),
        new p5.Vector(this.manScale, this.manScale),
        0.2
      );
    } else {
      image.DrawImageScale(
        "mouth2",
        new p5.Vector(1050, 300),
        new p5.Vector(this.manScale, this.manScale),
        0.2
      );
    }
    image.DrawImage("text", new p5.Vector(width / 2, height / 2, 0));
    if (time.time - this.enterTime >= this.SCENE_DURATION) {
      scene.CreditScene();
    }
    if (!this.firstFlag) {
      this.firstFlag = true;
      sound.PlaySound("narr");
    }
  }
  OnExit() {
    // scene.ChangeScene(new ENDING());
  }
}
