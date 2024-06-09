class S1C11 extends Scene {
  constructor() {
    super();
    this.IMG_PREFIX = "Images/S1/C11/";
    this.SOUND_PREFIX = "Sounds/S1/C11/narr/";

    this.HWANIN_BODY_X = 200.0;
    this.HWANIN_BODY_Y = 520.0;
    this.HWANIN_EYE_X = 200.0;
    this.HWANIN_EYE_Y = 420.0;
    this.HWANIN_SCALE = 0.35;

    this.HWANWOONG_BODY_X = 1100.0;
    this.HWANWOONG_BODY_Y = 580.0;
    this.HWANWOONG_EYE_X = 1025.0;
    this.HWANWOONG_EYE_Y = 385.0;
    this.HWANWOONG_SCALE = 0.35;

    this.SCENE_SCONDS = 3; // 3초 동안 씬 진행
    this.startMillis = 0;

    this.narrDuration = 0;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.IMG_PREFIX + "background");
    imageManager.LoadImage("text", this.IMG_PREFIX + "text");

    imageManager.LoadImage("hwanin_body", this.IMG_PREFIX + "hwanin_body");
    imageManager.LoadImage(
      "hwanin_expression1",
      this.IMG_PREFIX + "hwanin_expression1"
    );
    imageManager.LoadImage(
      "hwanin_expression2",
      this.IMG_PREFIX + "hwanin_expression2"
    );

    imageManager.LoadImage(
      "hwanwoong_body",
      this.IMG_PREFIX + "hwanwoong_body"
    );
    imageManager.LoadImage(
      "hwanwoong_expression1",
      this.IMG_PREFIX + "hwanwoong_expression1"
    );
    imageManager.LoadImage(
      "hwanwoong_expression2",
      this.IMG_PREFIX + "hwanwoong_expression2"
    );

    this.startMillis = millis();

    soundManager.LoadSound("hwanin", this.SOUND_PREFIX + "hwanin.mp3");
    soundManager.LoadSound("hwanwoong", this.SOUND_PREFIX + "hwanwoong.mp3");
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImage("text", createVector(width / 2, height / 2));

    imageManager.DrawImageScale(
      "hwanin_body",
      createVector(this.HWANIN_BODY_X, this.HWANIN_BODY_Y),
      createVector(this.HWANIN_SCALE, this.HWANIN_SCALE, 0)
    );
    imageManager.DrawImageScale(
      "hwanwoong_body",
      createVector(this.HWANWOONG_BODY_X, this.HWANWOONG_BODY_Y),
      createVector(this.HWANWOONG_SCALE, this.HWANWOONG_SCALE, 0)
    );

    // 입, 움직임 인터랙션 반복
    if ((millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "hwanin_expression1",
        createVector(this.HWANIN_EYE_X, this.HWANIN_EYE_Y),
        createVector(this.HWANIN_SCALE, this.HWANIN_SCALE, 0)
      );
      imageManager.DrawImageScale(
        "hwanwoong_expression1",
        createVector(this.HWANWOONG_EYE_X, this.HWANWOONG_EYE_Y),
        createVector(this.HWANWOONG_SCALE, this.HWANWOONG_SCALE, 0)
      );
    } else {
      imageManager.DrawImageScale(
        "hwanin_expression2",
        createVector(this.HWANIN_EYE_X, this.HWANIN_EYE_Y),
        createVector(this.HWANIN_SCALE, this.HWANIN_SCALE, 0)
      );
      imageManager.DrawImageScale(
        "hwanwoong_expression2",
        createVector(this.HWANWOONG_EYE_X, this.HWANWOONG_EYE_Y),
        createVector(this.HWANWOONG_SCALE, this.HWANWOONG_SCALE, 0)
      );
    }

    // 씬 시작 후 1.5초 뒤 대사1 시작
    if (
      soundManager.hasSound("hwanin") &&
      isTimeExceededMillis(this.startMillis, 1.5)
    ) {
      this.narrDuration = soundManager.soundDuration("hwanin");
      soundManager.playSoundOnce("hwanin");
      this.startMillis = millis(); // 대사 1 시작 millis
    }

    // 대사 1 종료 후 1초 뒤 대사2 시작
    if (
      !soundManager.hasSound("hwanin") &&
      soundManager.hasSound("hwanwoong") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)
    ) {
      this.narrDuration = soundManager.soundDuration("hwanwoong");
      soundManager.playSoundOnce("hwanwoong");
      this.startMillis = millis();
    }

    // 대사 2 종료 후 1초 뒤 다음 장면으로 이동
    if (
      !soundManager.hasSound("hwanin") &&
      !soundManager.hasSound("hwanwoong") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)
    ) {
      sceneManager.ChangeScene(new S1C13());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }

  isTimeExceededMillis(startMillis, endSeconds) {
    let nowTotalMilliseconds = millis();
    let endMilliseconds = endSeconds * 1000;
    return nowTotalMilliseconds - startMillis >= endMilliseconds;
  }
}
