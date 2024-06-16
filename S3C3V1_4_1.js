class S3C3V1_4_1 extends Scene {
  constructor() {
    super();
    this.범녀_X = 588;
    this.범녀_Y = 350;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.SCENE_SECONDS = 6;
    this.startMinute = 0;
    this.startSecond = 0;
    this.startMillis = 0;
    this.heartSize = 0;
    this.diameter = 0;
    this.minimumSize = 0;
    this.angle = 0;
  }

  OnEnter() {
    this.범녀_X = 588;
    this.범녀_Y = 350;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.heartSize = 0;
    this.SCENE_SECONDS = 4;
    this.diameter = height - 400; // 최대크기
    this.minimumSize = this.diameter - 350;
    this.angle = 0;

    // 이미지 로드
    soundManager.PlaySound("Choice");
    this.startMinute = minute();
    this.startSecond = second();
    this.startMillis = millis();
  }

  OnDraw() {
    // 최소크기, 최대크기
    let d1 =
      this.minimumSize +
      (sin(this.angle) * this.diameter) / 2 +
      this.diameter / 2;

    imageManager.DrawImage("s3c3v1_4_1_background", createVector(width / 2, height / 2));

    // 범녀 선택 씬
    imageManager.DrawImageScale(
      "s3c3v1_4_1_범녀1",
      createVector(this.범녀_X, this.범녀_Y),
      createVector(0.2, 0.2)
    );
    imageManager.DrawImageScale(
      "s3c3v1_4_1_환웅",
      createVector(this.환웅_X, this.환웅_Y),
      createVector(0.3, 0.3)
    );
    imageManager.DrawImageScale(
      "s3c3v1_4_1_heart",
      createVector(width / 2, height / 2),
      createVector(d1 / 2000, d1 / 2000)
    );

    // 씬 시작 후 SCENE_SECONDS 초 경과시 다음 장면으로 이동
    if (
      isTimeExceeded(this.startMinute, this.startSecond, this.SCENE_SECONDS)
    ) {
      sceneManager.ChangeScene(new S3C3V1_4_2());
    }
    this.angle += 0.1; // 크기 증가 속도
    this.diameter += 7.0; // 최대크기 증가
    this.minimumSize += 15; // 최소크기 증가
  }

  OnExit() {}
}
