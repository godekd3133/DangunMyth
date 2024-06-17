class S2C8 extends Scene {
  constructor() {
    super();
    this.centerVector;
    this.centerX;
    this.centerY;
    this.sunY = 600;
    this.cloudXDistance = 0;
    this.speed = 0.8;
    this.playingNarr = false;
    this.Chicken = false;
    this.SCENE_DURATION = 3;
  }

  OnEnter() {
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.centerVector = createVector(this.centerX, this.centerY);
    this.sunY = 600;
    this.cloudXDistance = 0;
  }

  OnDraw() {
    imageManager.DrawImage("s2c8_sky", this.centerVector);
    imageManager.DrawImage("s2c8_sun", createVector(this.centerX, this.sunY));
    imageManager.DrawImage("s2c8_mountains", this.centerVector);
    imageManager.DrawImage("s2c8_lake", this.centerVector);
    imageManager.DrawImage(
      "s2c8_cloud_left",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "s2c8_cloud_right",
      createVector(this.centerX + this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "s2c8_cloud_middle",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage("s2c8_text", this.centerVector);

    if (timeManager.time - this.enterTime > 1 && !this.playingNarr) {
      soundManager.PlaySound("S2/C8/narr");
      this.playingNarr = true;
    }
    if (timeManager.time - this.enterTime > 3 && !this.Chicken) {
      soundManager.PlaySound("Chicken");
      this.Chicken = true;
    }
    if (this.sunY < 400) {
      sceneManager.ChangeScene(new S3C1());
    } else {
      this.sunY -= this.speed;
      this.cloudXDistance += this.speed;
    }
  }

  OnExit() {}
}
