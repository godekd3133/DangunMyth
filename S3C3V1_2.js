class S3C3V1_2 extends Scene {
  static PREFIX = "Images/S3/C3/V1/_2/";
  static CHARACTER_SCALE = 0.25;
  static BEAR_X = 470;
  static BEAR_Y = 460;
  static BEAR_EYE_X = BEAR_X - 5;
  static BEAR_EYE_Y = BEAR_Y - 50;
  static TIGER_X = BEAR_X + 350;
  static TIGER_Y = BEAR_Y;
  static SCENE_SCONDS = 4; // 4초 동안 씬 진행
  startMinute;
  startSecond;
  tongueY = 0; // ??????
  narrFlag = false;
  OnEnter() {
    // 이미지 로드
    image.LoadImage("background", S3C3V1_2.PREFIX + "background");
    image.LoadImage("text", S3C3V1_2.PREFIX + "text");
    image.LoadImage("bear_body", S3C3V1_2.PREFIX + "bear_body");
    image.LoadImage("bear_eye", S3C3V1_2.PREFIX + "bear_eye");
    image.LoadImage("tiger1", S3C3V1_2.PREFIX + "tiger1");
    image.LoadImage("tiger2", S3C3V1_2.PREFIX + "tiger2");
    sound.LoadSound("Tiger", "Sounds/S3/C3/V1/_2/Tiger.mp3");
    this.narrFlag = false;
    this.startMinute = minute();
    this.startSecond = second();
  }
  OnDraw() {
    if (!this.narrFlag) {
      this.narrFlag = true;
      sound.PlaySound("Tiger");
    }
    image.DrawImage("background", new p5.Vector(width / 2, height / 2));
    image.DrawImage("text", new p5.Vector(width / 2, height / 2));
    image.DrawImageScale(
      "bear_eye",
      new p5.Vector(S3C3V1_2.BEAR_EYE_X, S3C3V1_2.BEAR_EYE_Y),
      new p5.Vector(S3C3V1_2.CHARACTER_SCALE, S3C3V1_2.CHARACTER_SCALE)
    );
    image.DrawImageScale(
      "bear_body",
      new p5.Vector(S3C3V1_2.BEAR_X, S3C3V1_2.BEAR_Y),
      new p5.Vector(S3C3V1_2.CHARACTER_SCALE, S3C3V1_2.CHARACTER_SCALE)
    );
    image.DrawImageScale(
      "tiger" + (((millis() / 500) % 2) + 1),
      new p5.Vector(S3C3V1_2.TIGER_X, S3C3V1_2.TIGER_Y),
      new p5.Vector(S3C3V1_2.CHARACTER_SCALE, S3C3V1_2.CHARACTER_SCALE)
    ); // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    if (
      isTimeExceeded(this.startMinute, this.startSecond, S3C3V1_2.SCENE_SCONDS)
    ) {
      scene.ChangeScene(new S3C3V1_3());
    }
  }
  OnExit() {
    sound.stopNowPlaying();
  }
}
