class S3C3V2_1_1 extends Scene {
  constructor() {
    super();
    this.SOUND_PREFIX = "Sounds/S3/C3/V2/_1/_1/narr/";

    this.centerVector;
    this.centerX;
    this.centerY;
    this.sunY = 600;
    this.cloudXDistance = 0;
    this.speed = 0.8;

    this.SCENE_DURATION = 3;
  }

  OnEnter() {
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.centerVector = createVector(this.centerX, this.centerY);
    this.sunY = 600;
    this.cloudXDistance = 0;

    soundManager.PlaySound("S3/C3/V2/_1/_1/narr");
  }

  OnDraw() {
    imageManager.DrawImage("s3c3v2_1_1_sky", this.centerVector);
    imageManager.DrawImage("s3c3v2_1_1_sun", createVector(this.centerX, this.sunY));
    imageManager.DrawImage("s3c3v2_1_1_mountains", this.centerVector);
    imageManager.DrawImage("s3c3v2_1_1_lake", this.centerVector);
    imageManager.DrawImage(
      "s3c3v2_1_1_cloud_left",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "s3c3v2_1_1_cloud_right",
      createVector(this.centerX + this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "s3c3v2_1_1_cloud_middle",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage("s3c3v2_1_1_text", this.centerVector);

    if (this.sunY < 400) {
      sceneManager.ChangeScene(new S3C3V2_1_2());
    } else {
      this.sunY -= this.speed;
      this.cloudXDistance += this.speed;
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}
