class S3C3V2_2_1 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 5; // 5초 동안 씬 진행
    this.SOUND_PREFIX = "Sounds/S3/C3/V2/_2/_1/narr/";
    this.EXTRA_Y = 580;
    this.COUPLE_Y = 500;
    this.extraScale = createVector(0.2, 0.2, 0);
    this.coupleScale = createVector(0.33, 0.33, 0);
    this.startMillis = 0;
    this.narrDuration = 0;
  }

  OnEnter() {
    this.startMillis = millis(); // 씬 시작 millis
  }

  OnDraw() {
    imageManager.DrawImage("s3c3v2_2_1_background", createVector(width / 2, height / 2));

    imageManager.DrawImageScale(
      "s3c3v2_2_1_extra_left",
      createVector(150, this.EXTRA_Y),
      this.extraScale
    );
    imageManager.DrawImageScale(
      "s3c3v2_2_1_extra_right",
      createVector(1150, this.EXTRA_Y),
      this.extraScale
    );

    imageManager.DrawImageScale(
      "s3c3v2_2_1_couple",
      createVector(width / 2, this.COUPLE_Y),
      this.coupleScale
    );

    // 씬 시작 후 1초 뒤 대사1 시작
    if (
      soundManager.hasSound("haha") &&
      isTimeExceededMillis(this.startMillis, 1)
    ) {
      this.narrDuration = soundManager.soundDuration("haha");
      soundManager.playSoundOnce("haha");
      this.startMillis = millis(); // 대사 1 시작 millis
    }
    // 대사 1 종료 후 1초 뒤 다음 장면으로 이동
    if (
      !soundManager.hasSound("haha") &&
      !soundManager.hasSound("thank") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)
    ) {
      sceneManager.ChangeScene(new S3C3V2_2_2());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}
