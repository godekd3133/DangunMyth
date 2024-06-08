class S3C3V1_2_2 extends Scene {
  PREFIX = "Images/S3/C3/V1/_2/_2/";
  moveMillis = 5000;
  환웅_X = 1150;
  환웅_Y = 500;
  tongueY = 0;
  startMinute;
  startSecond;
  startMillis;
  darkenMillis = 1500;
  selected = false;
  lastScene;
  OnEnter() {
    // 이미지 로드
    this.lastScene = new S3C3V1_2_1();
    image.LoadImage("background", this.PREFIX + "background");
    image.LoadImage("범녀", this.PREFIX + "범녀1");
    image.LoadImage("웅녀", this.PREFIX + "웅녀");
    image.LoadImage("환웅", this.PREFIX + "환웅");
    image.LoadImage("button_left", this.PREFIX + "button_left");
    image.LoadImage("button_right", this.PREFIX + "button_right");
    image.LoadImage("S3C3V1_2_2_TEXT", this.PREFIX + "text");
    this.startMinute = new Date().getMinutes();
    this.startSecond = new Date().getSeconds();
    this.startMillis = Date.now();
    this.tongueY = 0;
  }
  OnDraw() {
    this.tongueY += 30 * time.deltaTime;
    if (this.tongueY > 13) {
      this.tongueY *= -1;
    }
    let elapsedMills = Date.now() - this.startMillis;
    image.DrawImage("background", new p5.Vector(width / 2, height / 2)); // 검은색 반투명
    fill(0, Matn.min(128, lerp(255, 128, this.darkenMillis / elapsedMills)));
    rect(0, 0, width, height);
    let hoveredTiger =
      mouseX > 280 && mouseX < 280 + 200 && mouseY > 150 && mouseY < 150 + 460;
    let hoveredBear =
      mouseX > 500 && mouseX < 500 + 200 && mouseY > 150 && mouseY < 150 + 460;
    let tigerScale = hoveredTiger ? 0.22 : 0.2;
    let bearScale = hoveredBear ? 0.22 : 0.2;
    image.DrawImageScale(
      "범녀",
      new p5.Vector(this.lastScene.범녀_X_End, this.lastScene.범녀_Y_End),
      new p5.Vector(tigerScale, tigerScale)
    );
    image.DrawImageScale(
      "웅녀",
      new p5.Vector(this.lastScene.웅녀_X_End, this.lastScene.웅녀_Y_End),
      new p5.Vector(bearScale, bearScale)
    );
    image.DrawImageScale(
      "환웅",
      new p5.Vector(this.환웅_X, this.환웅_Y),
      new p5.Vector(0.3, 0.3)
    );
    image.DrawImageScale(
      "S3C3V1_2_2_TEXT",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(1.0, 1.0)
    );
    if (hoveredTiger) {
      image.DrawImageScale(
        "button_left",
        new p5.Vector(width / 2 - 60, height / 2 - 80),
        new p5.Vector(0.8, 0.8)
      );
    }
    if (hoveredBear) {
      image.DrawImageScale(
        "button_right",
        new p5.Vector(width / 2, height / 2 - 55),
        new p5.Vector(0.8, 0.8)
      );
    }
    this.checkClick();
  }
  checkClick() {
    if (mousePressed && this.selected == false) {
      if (
        mouseX > 280 &&
        mouseX < 280 + 200 &&
        mouseY > 150 &&
        mouseY < 150 + 460
      ) {
        scene.ChangeScene(new S3C3V1_4_1());
        this.selected = true;
      }
      if (
        mouseX > 500 &&
        mouseX < 500 + 200 &&
        mouseY > 150 &&
        mouseY < 150 + 460
      ) {
        scene.ChangeScene(new S3C3V1_3_1());
        this.selected = true;
      }
    }
  }
  OnExit() {}
}
