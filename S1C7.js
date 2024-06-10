class S1C7 extends Scene {
  constructor() {
    super();
    this.PREFIX = "S1/C7/";
    this.IMG_PREFIX = "Images/" + this.PREFIX;
    this.SOUND_PREFIX = "Sounds/" + this.PREFIX + "narr/";
    this.SCENE_DURATION = 6;

    this.HWAN_BODY_X = 980.0;
    this.HWAN_BODY_Y = 590.0;
    this.HWAN_EYE_Y = 310.0;
    this.HWAN_SCALE = 0.4;

    this.startMillis;
    this.narrDuration;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.IMG_PREFIX + "background");
    imageManager.LoadImage("text", this.IMG_PREFIX + "text");
    imageManager.LoadImage("hwan_body", this.IMG_PREFIX + "hwan_body");
    imageManager.LoadImage(
      "hwan_expression1",
      this.IMG_PREFIX + "hwan_expression1"
    );
    imageManager.LoadImage(
      "hwan_expression2",
      this.IMG_PREFIX + "hwan_expression2"
    );

    this.startMillis = millis(); // 씬 시작 millis
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImage("text", createVector(width / 2, height / 2));

    imageManager.DrawImageScale(
      "hwan_body",
      createVector(this.HWAN_BODY_X, this.HWAN_BODY_Y),
      createVector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
    );

    if ((millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "hwan_expression1",
        createVector(this.HWAN_BODY_X, this.HWAN_EYE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
      );
    } else {
      imageManager.DrawImageScale(
        "hwan_expression2",
        createVector(this.HWAN_BODY_X, this.HWAN_EYE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
      );
    }
    // 씬 시작 후 1.5초 뒤 대사1 시작
    if (
      soundManager.hasSound("S1/C7/hwan") &&
      isTimeExceededMillis(this.startMillis, 1.0)
    ) {
      this.narrDuration = soundManager.soundDuration("S1/C7/hwan");
      soundManager.playSoundOnce("S1/C7/hwan");
      this.startMillis = millis();
    }

    /* // 대사 2 종료 후 1초 뒤 다음 장면으로 이동
    if (!soundManager.hasSound("narr") && !soundManager.hasSound("S1/C7/hwan") && isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)) {
      scene.ChangeScene(new S1C8());
    }
    */

    // 다음 장면으로 이동
    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C8());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}
