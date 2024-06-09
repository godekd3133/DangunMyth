class S3C3V1_3_3 extends Scene {
  constructor() {
    super();
    this.preparationTime = 5;
    this.fadeoutTime = 6;
    this.BACKGROUND_IMAGE = "Images/S3/C3/V1/_3/_3/Background";
    this.DANGUN_IMAGE = "Images/S3/C3/V1/_3/_3/Dangun";
    this.alpha = 255;
    this.firstFlag = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.BACKGROUND_IMAGE);
    imageManager.LoadImage("dangun", this.DANGUN_IMAGE);
    imageManager.LoadImage("text", "Images/S3/C3/V1/_3/_3/text");
    soundManager.LoadSound("narr", "Sounds/S3/C3/V1/_3/_3/narr.mp3");
    this.firstFlag = false;
    this.alpha = 255;
    this.preparationTime = 5;
    this.fadeoutTime = 6;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );
    imageManager.DrawImageScale(
      "dangun",
      createVector(width / 2, height / 2, 0),
      createVector(0.25, 0.25, 0),
      0,
      this.alpha
    );
    imageManager.DrawImage("text", createVector(width / 2, height / 2, 0));

    if (time.time - enterTime >= this.preparationTime) {
      sceneManager.CreditScene();
    }

    if (!this.firstFlag) {
      this.firstFlag = true;
      soundManager.PlaySound("narr");
    }
  }

  OnExit() {}
}