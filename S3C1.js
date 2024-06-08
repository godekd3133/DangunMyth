class S3C1 extends Scene {
  SCENE_DURATION = 3;
  animalScale = 0.25;
  utilScale = 0.05;
  animalY = height - 280;
  jumpY = 0;
  jumpDir = 1;
  garlicX = width / 2 + 315;
  garlicY = animalY - 15;
  ssugX = width / 2 + 110;
  ssugY = animalY - 15;
  utilY = height - 120;
  garlicInitVelY = 15;
  garlicInitVelX = 5;
  garlicCurrentVelY = garlicInitVelY;
  garlicRotate = 1.0;
  garlicAngle = random(0.05, 0.15);
  ssugInitVelY = 18;
  ssugInitVelX = 3;
  ssugCurrentVelY = ssugInitVelY;
  ssugRotate = 1.0;
  ssugAngle = random(0.05, 0.15);
  isNarrOut;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", "Images/S3/C1/background");
    image.LoadImage("bear", "Images/S3/C1/bear");
    image.LoadImage("tiger", "Images/S3/C1/tiger");
    image.LoadImage("garlic", "Images/S3/C1/garlic");
    image.LoadImage("ssug", "Images/S3/C1/ssug");
    image.LoadImage("text", "Images/S3/C1/text");
    sound.LoadSound("narr", "Sounds/S3/C1/narr/narr.mp3");
    this.isNarrOut = false;
  }
  OnDraw() {
    if (!this.isNarrOut) {
      this.isNarrOut = !this.isNarrOut;
      sound.PlaySound("narr");
    }
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(1, 1)
    );
    image.DrawImageScale(
      "text",
      new p5.Vector(width / 2, height / 2 - 50),
      new p5.Vector(1, 1)
    );
    image.DrawImageScale(
      "bear",
      new p5.Vector(width / 2 - 210, this.animalY),
      new p5.Vector(this.animalScale, this.animalScale)
    ); // up and down animation
    if (this.jumpY < 0) this.jumpY = 0;
    if (this.jumpY > 15) this.jumpDir *= -1;
    this.jumpY += this.jumpDir;
    image.DrawImageScale(
      "tiger",
      new p5.Vector(width / 2 + 230, this.animalY - this.jumpY),
      new p5.Vector(this.animalScale, this.animalScale)
    ); // util animation
    // garlic part
    if (this.garlicY < this.utilY) {
      this.garlicY -= this.garlicCurrentVelY;
      this.garlicX += this.garlicInitVelX;
      this.garlicCurrentVelY--;
      this.garlicRotate += this.garlicAngle;
    }
    image.DrawImageScale(
      "garlic",
      new p5.Vector(this.garlicX, this.garlicY),
      new p5.Vector(this.utilScale, this.utilScale),
      this.garlicRotate
    ); // ssug part
    if (this.ssugY < this.utilY) {
      this.ssugY -= this.ssugCurrentVelY;
      this.ssugX += this.ssugInitVelX;
      this.ssugCurrentVelY--;
      this.ssugRotate += this.ssugAngle;
    }
    image.DrawImageScale(
      "ssug",
      new p5.Vector(this.ssugX, this.ssugY),
      new p5.Vector(this.utilScale, this.utilScale),
      this.ssugRotate
    );
    if (time.time - enterTime > this.SCENE_DURATION) {
      scene.ChangeScene(new S3C2());
    }
  }
  OnExit() {}
}
