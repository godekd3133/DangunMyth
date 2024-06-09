class S3C1 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 3;
    this.animalScale = 0.25;
    this.utilScale = 0.05;
    this.animalY = height - 280;
    this.jumpY = 0;
    this.jumpDir = 1;
    this.garlicX = width / 2 + 315;
    this.garlicY = this.animalY - 15;
    this.ssugX = width / 2 + 110;
    this.ssugY = this.animalY - 15;
    this.utilY = height - 120;
    this.garlicInitVelY = 15;
    this.garlicInitVelX = 5;
    this.garlicCurrentVelY = this.garlicInitVelY;
    this.garlicRotate = 1.0;
    this.garlicAngle = random(0.05, 0.15);
    this.ssugInitVelY = 18;
    this.ssugInitVelX = 3;
    this.ssugCurrentVelY = this.ssugInitVelY;
    this.ssugRotate = 1.0;
    this.ssugAngle = random(0.05, 0.15);
    this.isNarrOut = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "Images/S3/C1/background");
    imageManager.LoadImage("bear", "Images/S3/C1/bear");
    imageManager.LoadImage("tiger", "Images/S3/C1/tiger");
    imageManager.LoadImage("garlic", "Images/S3/C1/garlic");
    imageManager.LoadImage("ssug", "Images/S3/C1/ssug");
    imageManager.LoadImage("text", "Images/S3/C1/text");
    soundManager.LoadSound("narr", "Sounds/S3/C1/narr/narr.mp3");
    this.isNarrOut = false;
  }

  OnDraw() {
    if (!this.isNarrOut) {
      this.isNarrOut = true;
      soundManager.PlaySound("narr");
    }
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "text",
      createVector(width / 2, height / 2 - 50),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "bear",
      createVector(width / 2 - 210, this.animalY),
      createVector(this.animalScale, this.animalScale)
    );

    // up and down animation
    if (this.jumpY < 0) this.jumpY = 0;
    if (this.jumpY > 15) this.jumpDir *= -1;
    this.jumpY += this.jumpDir;

    imageManager.DrawImageScale(
      "tiger",
      createVector(width / 2 + 230, this.animalY - this.jumpY),
      createVector(this.animalScale, this.animalScale)
    );

    // util animation
    // garlic part
    if (this.garlicY < this.utilY) {
      this.garlicY -= this.garlicCurrentVelY;
      this.garlicX += this.garlicInitVelX;
      this.garlicCurrentVelY--;
      this.garlicRotate += this.garlicAngle;
    }
    imageManager.DrawImageScale(
      "garlic",
      createVector(this.garlicX, this.garlicY),
      createVector(this.utilScale, this.utilScale),
      this.garlicRotate
    );

    // ssug part
    if (this.ssugY < this.utilY) {
      this.ssugY -= this.ssugCurrentVelY;
      this.ssugX += this.ssugInitVelX;
      this.ssugCurrentVelY--;
      this.ssugRotate += this.ssugAngle;
    }
    imageManager.DrawImageScale(
      "ssug",
      createVector(this.ssugX, this.ssugY),
      createVector(this.utilScale, this.utilScale),
      this.ssugRotate
    );

    if (time.time - enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C2());
    }
  }

  OnExit() {}
}
