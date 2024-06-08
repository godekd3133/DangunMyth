class S3C3V2_1_1 extends Scene {
  static PREFIX = "Images/S3/C3/V2/_1/_1/";
  static SOUND_PREFIX = "Sounds/S3/C3/V2/_1/_1/narr/";
  centerVector;
  centerX;
  centerY;
  sunY = 600;
  cloudXDistance = 0;
  speed = 0.8;
  SCENE_DURATION = 3;
  OnEnter() {
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.centerVector = new p5.Vector(this.centerX, this.centerY);
    this.sunY = 600;
    this.cloudXDistance = 0;
    image.LoadImage("text", S3C3V2_1_1.PREFIX + "text");
    image.LoadImage("cloud_left", S3C3V2_1_1.PREFIX + "cloud_left");
    image.LoadImage("cloud_right", S3C3V2_1_1.PREFIX + "cloud_right");
    image.LoadImage("cloud_middle", S3C3V2_1_1.PREFIX + "cloud_middle");
    image.LoadImage("lake", S3C3V2_1_1.PREFIX + "lake");
    image.LoadImage("mountains", S3C3V2_1_1.PREFIX + "mountains");
    image.LoadImage("sky", S3C3V2_1_1.PREFIX + "sky");
    image.LoadImage("sun", S3C3V2_1_1.PREFIX + "sun");
    sound.LoadSound("narr", S3C3V2_1_1.SOUND_PREFIX + "narr.mp3");
    sound.PlaySound("narr");
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
    if (this.sunY < 400) {
      scene.ChangeScene(new S3C3V2_1_2());
    } else {
      this.sunY -= this.speed;
      this.cloudXDistance += this.speed;
    }
  }
  OnExit() {
    sound.stopNowPlaying();
  }
}
