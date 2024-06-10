class S3C3V1_4_3 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 7;
    this.imageNames = [
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
    this.imagePath = "Images/S3/C3/V1/_4/_3/";
    this.manScale = 0.3;
    this.allyScale = 0.2;
    this.enemyScale1 = 0.2;
    this.enemyScale2 = 0.13;

    this.ANIMATION_TICK_INTERVAL = 1.0;
    this.animationTick = 0;
    this.isAnimating = true;

    this.firstFlag = false;
  }

  OnEnter() {
    this.imageNames.forEach((imageName) =>
      imageManager.LoadImage(imageName, this.imagePath + imageName)
    );

    imageManager.LoadImage("text", "Images/S3/C3/V1/_4/_3/text");

    this.animationTick = 0;
    this.firstFlag = false;
  }

  OnDraw() {
    this.animationTick += timeManager.deltaTime;
    if (this.animationTick >= this.ANIMATION_TICK_INTERVAL) {
      this.animationTick = 0;
      this.isAnimating = !this.isAnimating;
    }

    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );

    imageManager.DrawImageScale(
      "enemy2",
      createVector(100, 450),
      createVector(this.enemyScale2, this.enemyScale2)
    );
    imageManager.DrawImageScale(
      "enemy2",
      createVector(200, 450),
      createVector(this.enemyScale2, this.enemyScale2)
    );
    imageManager.DrawImageScale(
      "enemy1",
      createVector(500, 450),
      createVector(this.enemyScale2, this.enemyScale2)
    );
    imageManager.DrawImageScale(
      "enemy3",
      createVector(350, 450),
      createVector(this.enemyScale1, this.enemyScale1)
    );
    imageManager.DrawImageScale(
      "ally",
      createVector(1180, 500),
      createVector(this.allyScale, this.allyScale)
    );
    imageManager.DrawImageScale(
      "flag",
      createVector(1300, 250),
      createVector(0.25, 0.25),
      0.3
    );

    if (this.isAnimating)
      imageManager.DrawImageScale(
        "arm",
        createVector(950, 280),
        createVector(this.manScale, this.manScale),
        0.3
      );
    else
      imageManager.DrawImageScale(
        "arm",
        createVector(900, 300),
        createVector(this.manScale, this.manScale)
      );

    imageManager.DrawImageScale(
      "body",
      createVector(900, 500),
      createVector(this.manScale, this.manScale)
    );
    imageManager.DrawImageScale(
      "head",
      createVector(1050, 300),
      createVector(this.manScale, this.manScale),
      0.2
    );

    if (this.isAnimating)
      imageManager.DrawImageScale(
        "mouth1",
        createVector(1050, 300),
        createVector(this.manScale, this.manScale),
        0.2
      );
    else
      imageManager.DrawImageScale(
        "mouth2",
        createVector(1050, 300),
        createVector(this.manScale, this.manScale),
        0.2
      );

    imageManager.DrawImage("text", createVector(width / 2, height / 2));

    if (timeManager.time - timeManager.enterTime >= this.SCENE_DURATION) {
      sceneManager.CreditScene();
    }
    if (!this.firstFlag) {
      this.firstFlag = true;
      soundManager.PlaySound("S3/C3/V1/_4/_3/narr");
    }
  }

  OnExit() {
    // sceneManager.ChangeScene(new ENDING());
  }
}
