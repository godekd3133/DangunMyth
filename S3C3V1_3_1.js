class S3C3V1_3_1 extends Scene {
  constructor() {
    super();
    this.PREFIX = "Images/S3/C3/V1/_3/_1/";
    this.웅녀_X = 588;
    this.웅녀_Y = 350;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.SCENE_SECONDS = 6;
    this.startMinute = 0;
    this.startSecond = 0;
    this.startMillis = 0;
    this.heartSize = 0;
    this.diameter = height - 400; // 최대크기
    this.minimumSize = this.diameter - 350;
    this.angle = 0;
  }

  OnEnter() {
    this.웅녀_X = 588;
    this.웅녀_Y = 350;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.heartSize = 0;
    this.SCENE_SECONDS = 6;
    this.diameter = height - 400; // 최대크기
    this.minimumSize = this.diameter - 350;
    this.angle = 0;

    // 이미지 로드
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("웅녀", this.PREFIX + "웅녀");
    imageManager.LoadImage("환웅", this.PREFIX + "환웅");
    imageManager.LoadImage("heart", this.PREFIX + "heart");
    soundManager.PlaySound("Choice");

    this.startMinute = minute();
    this.startSecond = second();
    this.startMillis = millis();
  }

  OnDraw() {
    let d1 =
      this.minimumSize +
      sin(this.angle) * (this.diameter / 2) +
      this.diameter / 2;

    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "웅녀",
      createVector(this.웅녀_X, this.웅녀_Y),
      createVector(0.2, 0.2)
    );
    imageManager.DrawImageScale(
      "환웅",
      createVector(this.환웅_X, this.환웅_Y),
      createVector(0.3, 0.3)
    );
    imageManager.DrawImageScale(
      "heart",
      createVector(width / 2, height / 2),
      createVector(d1 / 2000, d1 / 2000)
    );

    if (
      isTimeExceeded(this.startMinute, this.startSecond, this.SCENE_SECONDS)
    ) {
      sceneManager.ChangeScene(new S3C3V1_3_2());
    }

    this.angle += 0.1;
    this.diameter += 7.0;
    this.minimumSize += 15;
  }

  OnExit() {}
}
