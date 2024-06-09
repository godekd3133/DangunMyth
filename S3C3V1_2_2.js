class S3C3V1_2_2 extends Scene {
  constructor() {
    super();
    this.PREFIX = "Images/S3/C3/V1/_2/_2/";
    this.moveMillis = 5000;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.tongueY = 0;
    this.startMinute = 0;
    this.startSecond = 0;
    this.startMillis = 0;
    this.darkenMillis = 1500;
    this.selected = false;
    this.lastScene = null;
  }

  OnEnter() {
    this.lastScene = new S3C3V1_2_1();

    // 이미지 로드
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("범녀", this.PREFIX + "범녀1");
    imageManager.LoadImage("웅녀", this.PREFIX + "웅녀");
    imageManager.LoadImage("환웅", this.PREFIX + "환웅");
    imageManager.LoadImage("button_left", this.PREFIX + "button_left");
    imageManager.LoadImage("button_right", this.PREFIX + "button_right");
    imageManager.LoadImage("S3C3V1_2_2_TEXT", this.PREFIX + "text");

    this.startMinute = minute();
    this.startSecond = second();
    this.startMillis = millis();
    this.tongueY = 0;
  }

  OnDraw() {
    this.tongueY += 30 * time.deltaTime;

    if (this.tongueY > 13) {
      this.tongueY *= -1;
    }
    let elapsedMills = millis() - this.startMillis;
    imageManager.DrawImage("background", createVector(width / 2, height / 2));

    // 검은색 반투명
    fill(0, min(128, lerp(255, 128, this.darkenMillis / elapsedMills)));
    rect(0, 0, width, height);

    let hoveredTiger =
      mouseX > 280 && mouseX < 280 + 200 && mouseY > 150 && mouseY < 150 + 460;
    let hoveredBear =
      mouseX > 500 && mouseX < 500 + 200 && mouseY > 150 && mouseY < 150 + 460;

    let tigerScale = hoveredTiger ? 0.22 : 0.2;
    let bearScale = hoveredBear ? 0.22 : 0.2;

    imageManager.DrawImageScale(
      "범녀",
      createVector(this.lastScene.범녀_X_End, this.lastScene.범녀_Y_End),
      createVector(tigerScale, tigerScale)
    );
    imageManager.DrawImageScale(
      "웅녀",
      createVector(this.lastScene.웅녀_X_End, this.lastScene.웅녀_Y_End),
      createVector(bearScale, bearScale)
    );
    imageManager.DrawImageScale(
      "환웅",
      createVector(this.환웅_X, this.환웅_Y),
      createVector(0.3, 0.3)
    );
    imageManager.DrawImageScale(
      "S3C3V1_2_2_TEXT",
      createVector(width / 2, height / 2),
      createVector(1.0, 1.0)
    );

    if (hoveredTiger) {
      imageManager.DrawImageScale(
        "button_left",
        createVector(width / 2 - 60, height / 2 - 80),
        createVector(0.8, 0.8)
      );
    }

    if (hoveredBear) {
      imageManager.DrawImageScale(
        "button_right",
        createVector(width / 2, height / 2 - 55),
        createVector(0.8, 0.8)
      );
    }
    this.checkClick();
  }

  checkClick() {
    if (mouseIsPressed && !this.selected) {
      if (
        mouseX > 280 &&
        mouseX < 280 + 200 &&
        mouseY > 150 &&
        mouseY < 150 + 460
      ) {
        sceneManager.ChangeScene(new S3C3V1_4_1());
        this.selected = true;
      }
      if (
        mouseX > 500 &&
        mouseX < 500 + 200 &&
        mouseY > 150 &&
        mouseY < 150 + 460
      ) {
        sceneManager.ChangeScene(new S3C3V1_3_1());
        this.selected = true;
      }
    }
  }

  OnExit() {}
}
