class S3C3V1_2 extends Scene {
  constructor() {
    super();
    this.PREFIX = "Images/S3/C3/V1/_2/";
    this.CHARACTER_SCALE = 0.25;
    this.BEAR_X = 470;
    this.BEAR_Y = 460;
    this.BEAR_EYE_X = this.BEAR_X - 5;
    this.BEAR_EYE_Y = this.BEAR_Y - 50;
    this.TIGER_X = this.BEAR_X + 350;
    this.TIGER_Y = this.BEAR_Y;
    this.SCENE_SECONDS = 4; // 4초 동안 씬 진행
    this.startMinute = 0;
    this.startSecond = 0;
    this.tongueY = 0; // Not sure what this is for
    this.narrFlag = false;
  }

  OnEnter() {
    // 이미지 로드
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("text", this.PREFIX + "text");
    imageManager.LoadImage("bear_body", this.PREFIX + "bear_body");
    imageManager.LoadImage("bear_eye", this.PREFIX + "bear_eye");
    imageManager.LoadImage("tiger1", this.PREFIX + "tiger1");
    imageManager.LoadImage("tiger2", this.PREFIX + "tiger2");
    soundManager.LoadSound("Tiger", "Sounds/S3/C3/V1/_2/Tiger.mp3");

    this.narrFlag = false;
    this.startMinute = minute();
    this.startSecond = second();
  }

  OnDraw() {
    if (!this.narrFlag) {
      this.narrFlag = true;
      soundManager.PlaySound("Tiger");
    }
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImage("text", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "bear_eye",
      createVector(this.BEAR_EYE_X, this.BEAR_EYE_Y),
      createVector(this.CHARACTER_SCALE, this.CHARACTER_SCALE)
    );
    imageManager.DrawImageScale(
      "bear_body",
      createVector(this.BEAR_X, this.BEAR_Y),
      createVector(this.CHARACTER_SCALE, this.CHARACTER_SCALE)
    );
    imageManager.DrawImageScale(
      "tiger" + (((millis() / 500) % 2) + 1),
      createVector(this.TIGER_X, this.TIGER_Y),
      createVector(this.CHARACTER_SCALE, this.CHARACTER_SCALE)
    );

    // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    if (
      isTimeExceeded(this.startMinute, this.startSecond, this.SCENE_SECONDS)
    ) {
      sceneManager.ChangeScene(new S3C3V1_3());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}
