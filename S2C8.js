class S2C8 extends Scene {
  static PREFIX = "Images/S2/C8/";
  centerVector;
  centerX;
  centerY;
  sunY = 600;
  cloudXDistance = 0;
  speed = 0.8;
  playingNarr = false;
  Chicken = false;
  SCENE_DURATION = 3;
  OnEnter() {
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.centerVector = new p5.Vector(this.centerX, this.centerY);
    this.sunY = 600;
    this.cloudXDistance = 0;
    image.LoadImage("cloud_left", S2C8.PREFIX + "cloud_left");
    image.LoadImage("cloud_right", S2C8.PREFIX + "cloud_right");
    image.LoadImage("cloud_middle", S2C8.PREFIX + "cloud_middle");
    image.LoadImage("lake", S2C8.PREFIX + "lake");
    image.LoadImage("mountains", S2C8.PREFIX + "mountains");
    image.LoadImage("sky", S2C8.PREFIX + "sky");
    image.LoadImage("sun", S2C8.PREFIX + "sun");
    image.LoadImage("text", S2C8.PREFIX + "text");
    sound.LoadSound("narr", "Sounds/S2/C8/narr/narr.mp3");
    sound.LoadSound("Chicken", "Sounds/Effects/Chicken_02.mp3");
  }
  OnDraw() {
    image.DrawImage("sky", this.centerVector);
    image.DrawImage("sun", new p5.Vector(this.centerX, this.sunY));
    image.DrawImage("mountains", this.centerVector);
    image.DrawImage("lake", this.centerVector);
    image.DrawImage(
      "cloud_left",
      new p5.Vector(this.centerX - this.cloudXDistance, this.centerY)
    );
    image.DrawImage(
      "cloud_right",
      new p5.Vector(this.centerX + this.cloudXDistance, this.centerY)
    );
    image.DrawImage(
      "cloud_middle",
      new p5.Vector(this.centerX - this.cloudXDistance, this.centerY)
    );
    image.DrawImage("text", this.centerVector);
    if (time.time - enterTime > 1 && !this.playingNarr) {
      sound.PlaySound("narr");
      this.playingNarr = true;
    }
    if (time.time - enterTime > 3 && !this.Chicken) {
      sound.PlaySound("Chicken");
      this.Chicken = true;
    }
    if (this.sunY < 400) {
      scene.ChangeScene(new S3C1());
    } else {
      this.sunY -= this.speed;
      this.cloudXDistance += this.speed;
    }
  }
  OnExit() {}
}
