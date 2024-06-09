class S3C3V1_3_2 extends Scene {
  constructor() {
    super();
    this.preparationTime = 1;
    this.fadeoutTime = 4;
    this.BACKGROUND_IMAGE = "Images/S3/C3/V1/_3/_2/Background";
    this.CHARACTER_IMAGE = "Images/S3/C3/V1/_3/_2/Characters";
    this.alpha = 255;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.BACKGROUND_IMAGE);
    imageManager.LoadImage("character", this.CHARACTER_IMAGE);
    this.alpha = 255;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1, 0)
    );
    imageManager.DrawImageScale(
      "character",
      createVector(width / 2, height / 2),
      createVector(0.25, 0.25, 0),
      0,
      this.alpha
    );
    if (time.time - enterTime >= 1) {
      this.alpha -= (255 / this.fadeoutTime) * time.deltaTime;
    }
    if (this.alpha <= 0) {
      this.preparationTime -= time.deltaTime;
      if (this.preparationTime <= 0) {
        sceneManager.ChangeScene(new S3C3V1_3_3());
      }
    }
  }

  OnExit() {}
}