class S3C3V1_3 extends Scene {
  static PREFIX = "Images/S3/C3/V1/_3/_0/";
  centerVector;
  centerX;
  centerY;
  sunY = 600;
  cloudXDistance = 0;
  speed = 0.8;
  playingChicken = false;
  chickenTime = 0;
  SCENE_DURATION = 3;
  OnEnter() {
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.centerVector = new p5.Vector(this.centerX, this.centerY);
    this.sunY = 600;
    this.cloudXDistance = 0;
    image.LoadImage("cloud_left", S3C3V1_3.PREFIX + "cloud_left");
    image.LoadImage("cloud_right", S3C3V1_3.PREFIX + "cloud_right");
    image.LoadImage("cloud_middle", S3C3V1_3.PREFIX + "cloud_middle");
    image.LoadImage("lake", S3C3V1_3.PREFIX + "lake");
    image.LoadImage("mountains", S3C3V1_3.PREFIX + "mountains");
    image.LoadImage("sky", S3C3V1_3.PREFIX + "sky");
    image.LoadImage("sun", S3C3V1_3.PREFIX + "sun");
    image.LoadImage("text", S3C3V1_3.PREFIX + "text");
    sound.LoadSound("bird", "Sounds/Effects/NatureSound.wav");
    sound.LoadSound("chicken", "Sounds/Effects/Chicken_02.mp3");
    sound.PlaySound("bird");
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
    if (!this.playingChicken && this.chickenTime > 1) {
      sound.PlaySound("chicken");
      this.playingChicken = true;
    } else {
      this.chickenTime += time.deltaTime;
    }
    if (this.sunY < 400) {
      scene.ChangeScene(new S3C3V1_1_1());
    } else {
      this.sunY -= this.speed;
      this.cloudXDistance += this.speed;
    }
  }
  OnExit() {}
}
