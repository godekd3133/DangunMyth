class S3C3V1_3 extends Scene {
  constructor() {
    super();
    this.PREFIX = "Images/S3/C3/V1/_3/_0/";
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

    imageManager.LoadImage("cloud_left", this.PREFIX + "cloud_left");
    imageManager.LoadImage("cloud_right", this.PREFIX + "cloud_right");
    imageManager.LoadImage("cloud_middle", this.PREFIX + "cloud_middle");
    imageManager.LoadImage("lake", this.PREFIX + "lake");
    imageManager.LoadImage("mountains", this.PREFIX + "mountains");
    imageManager.LoadImage("sky", this.PREFIX + "sky");
    imageManager.LoadImage("sun", this.PREFIX + "sun");
    imageManager.LoadImage("text", this.PREFIX + "text");
    soundManager.PlaySound("Effects/NatureSound");
  }

  OnDraw() {
    imageManager.DrawImage("sky", this.centerVector);
    imageManager.DrawImage("sun", createVector(this.centerX, this.sunY));
    imageManager.DrawImage("mountains", this.centerVector);
    imageManager.DrawImage("lake", this.centerVector);
    imageManager.DrawImage(
      "cloud_left",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "cloud_right",
      createVector(this.centerX + this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "cloud_middle",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage("text", this.centerVector);

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
