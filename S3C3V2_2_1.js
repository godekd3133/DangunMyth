class S3C3V2_2_1 extends Scene {
  SCENE_DURATION = 5; // 5초 동안 씬 진행
  static PREFIX = "Images/S3/C3/V2/_2/_1/";
  static SOUND_PREFIX = "Sounds/S3/C3/V2/_2/_1/narr/";
  static EXTRA_Y = 580;
  static COUPLE_Y = 500;
  extraScale = new p5.Vector(0.2, 0.2, 0);
  coupleScale = new p5.Vector(0.33, 0.33, 0);
  startMillis;
  narrDuration;
  OnEnter() {
    image.LoadImage("background", S3C3V2_2_1.PREFIX + "background");
    image.LoadImage("couple", S3C3V2_2_1.PREFIX + "couple");
    image.LoadImage("extra_left", S3C3V2_2_1.PREFIX + "extra_left");
    image.LoadImage("extra_right", S3C3V2_2_1.PREFIX + "extra_right");
    sound.LoadSound("haha", S3C3V2_2_1.SOUND_PREFIX + "haha.mp3");
    this.startMillis = millis(); // 씬 시작 millis
  }
  OnDraw() {
    image.DrawImage("background", new p5.Vector(width / 2, height / 2));
    image.DrawImageScale(
      "extra_left",
      new p5.Vector(150, S3C3V2_2_1.EXTRA_Y),
      this.extraScale
    );
    image.DrawImageScale(
      "extra_right",
      new p5.Vector(1150, S3C3V2_2_1.EXTRA_Y),
      this.extraScale
    );
    image.DrawImageScale(
      "couple",
      new p5.Vector(width / 2, S3C3V2_2_1.COUPLE_Y),
      this.coupleScale
    ); // 씬 시작 후 1초 뒤 대사1 시작
    if (sound.hasSound("haha") && isTimeExceededMillis(this.startMillis, 1)) {
      this.narrDuration = sound.soundDuration("haha");
      sound.playSoundOnce("haha");
      this.startMillis = millis(); // 대사 1 시작 millis
    } // 대사 1 종료 후 1초 뒤 다음 장면으로 이동
    if (
      !sound.hasSound("haha") &&
      !sound.hasSound("thank") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)
    ) {
      scene.ChangeScene(new S3C3V2_2_2());
    }
  }
  OnExit() {
    sound.stopNowPlaying();
  }
}
