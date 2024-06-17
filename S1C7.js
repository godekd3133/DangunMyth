class S1C7 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 6;

    this.HWAN_BODY_X = 980.0;
    this.HWAN_BODY_Y = 590.0;
    this.HWAN_EYE_Y = 310.0;
    this.HWAN_SCALE = 0.4;

    this.startMillis;
    this.narrDuration;
  }

  OnEnter() {
    this.startMillis = millis(); // 씬 시작 millis
  }

  OnDraw() {
    imageManager.DrawImage(
      "s1c7_background",
      createVector(width / 2, height / 2)
    );
    imageManager.DrawImage("s1c7_text", createVector(width / 2, height / 2));

    imageManager.DrawImageScale(
      "s1c7_hwan_body",
      createVector(this.HWAN_BODY_X, this.HWAN_BODY_Y),
      createVector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
    );

    if (Math.floor(millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "s1c7_hwan_expression1",
        createVector(this.HWAN_BODY_X, this.HWAN_EYE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
      );
    } else {
      imageManager.DrawImageScale(
        "s1c7_hwan_expression2",
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
