class S3C3V1_3 extends Scene {
  constructor() {
    super();
    this.centerVector = createVector();
    this.centerX = 0;
    this.centerY = 0;
    this.sunY = 600;
    this.cloudXDistance = 0;
    this.speed = 0.8;
    this.playingChicken = false;
    this.chickenTime = 0;
    this.SCENE_DURATION = 3;
  }

  OnEnter() {
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.centerVector = createVector(this.centerX, this.centerY);
    this.sunY = 600;
    this.cloudXDistance = 0;
    soundManager.PlaySound("Effects/NatureSound");
  }

  OnDraw() {
    imageManager.DrawImage("s3c3v1_3_sky", this.centerVector);
    imageManager.DrawImage("s3c3v1_3_sun", createVector(this.centerX, this.sunY));
    imageManager.DrawImage("s3c3v1_3_mountains", this.centerVector);
    imageManager.DrawImage("s3c3v1_3_lake", this.centerVector);
    imageManager.DrawImage(
      "s3c3v1_3_cloud_left",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "s3c3v1_3_cloud_right",
      createVector(this.centerX + this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "s3c3v1_3_cloud_middle",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage("s3c3v1_3_text", this.centerVector);

    if (!this.playingChicken && this.chickenTime > 1) {
      soundManager.PlaySound("Effects/Chicken_02");
      this.playingChicken = true;
    } else {
      this.chickenTime += deltaTime / 1000; // Convert milliseconds to seconds
    }

    if (this.sunY < 400) {
      sceneManager.ChangeScene(new S3C3V1_1_1());
    } else {
      this.sunY -= this.speed;
      this.cloudXDistance += this.speed;
    }
  }

  OnExit() {}
}
