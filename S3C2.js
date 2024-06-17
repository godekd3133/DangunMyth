class S3C2 extends Scene {
  constructor() {
    super();
    this.thinkScale = 0.3;
    this.thinkY = 200;
    this.thinkLeftX = 200;
    this.thinkRightX = width - 200;
    this.selectOption = 0; // 0 : None / 1 : Left / 2 : Right
    this.isEffectOut = false;
  }

  OnEnter() {
    this.isEffectOut = false;
  }

  OnDraw() {
    // init select option
    this.selectOption = 0;

    imageManager.DrawImageScale(
      "s3c2_background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "s3c2_eye_white",
      createVector(width / 2 - 10, height - 240),
      createVector(0.2, 0.2)
    );
    imageManager.DrawImageScale(
      "s3c2_body",
      createVector(width / 2, height - 200),
      createVector(0.23, 0.23)
    );

    // Mouse animation
    if (mouseX <= width / 2 - 200 && mouseY <= height / 2) {
      this.selectOption = 1;
      imageManager.DrawImageScale(
        "s3c2_left",
        createVector(this.thinkLeftX + 60, this.thinkY + 50),
        createVector(this.thinkScale + 0.04, this.thinkScale + 0.04)
      );
      imageManager.DrawImageScale(
        "s3c2_eye_black",
        createVector(width / 2 - 15, height - 255),
        createVector(0.23, 0.23)
      );

      if (mouseIsPressed) {
        sceneManager.ChangeScene(new S3C3V1_1());
        if (!this.isEffectOut) {
          soundManager.PlaySound("S3/C2/effect");
          this.isEffectOut = !this.isEffectOut;
        }
      }
    } else {
      imageManager.DrawImageScale(
        "s3c2_left",
        createVector(this.thinkLeftX, this.thinkY),
        createVector(this.thinkScale, this.thinkScale)
      );
    }
    if (mouseX >= width / 2 + 200 && mouseY <= height / 2) {
      this.selectOption = 2;
      imageManager.DrawImageScale(
        "s3c2_right",
        createVector(this.thinkRightX - 60, this.thinkY + 50),
        createVector(this.thinkScale + 0.04, this.thinkScale + 0.04)
      );
      imageManager.DrawImageScale(
        "s3c2_eye_black",
        createVector(width / 2 - 9, height - 255),
        createVector(0.23, 0.23)
      );

      if (mouseIsPressed) {
        sceneManager.ChangeScene(new S3C3V2());
        if (!this.isEffectOut) {
          soundManager.PlaySound("S3/C2/effect");
          this.isEffectOut = !this.isEffectOut;
        }
      }
    } else {
      imageManager.DrawImageScale(
        "s3c2_right",
        createVector(this.thinkRightX, this.thinkY),
        createVector(this.thinkScale, this.thinkScale)
      );
    }
    //Button
    if (mouseX <= width / 2 - 200 && mouseY <= height / 2) {
      imageManager.DrawImageScale(
        "s3c2_Button1",
        createVector(width / 2, height / 2),
        createVector(0.7, 0.7)
      );
    } else if (mouseX >= width / 2 + 200 && mouseY <= height / 2) {
      imageManager.DrawImageScale(
        "s3c2_Button2",
        createVector(width / 2, height / 2),
        createVector(0.7, 0.7)
      );
    }
    if (this.selectOption == 0)
      imageManager.DrawImageScale(
        "s3c2_eye_black",
        createVector(width / 2 - 12, height - 245),
        createVector(0.23, 0.23)
      );
  }

  OnExit() {}
}
