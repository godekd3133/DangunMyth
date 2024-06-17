class S3C3V2_1_2 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 4;
    this.GIRL_X = 600;
    this.GIRL_Y = 550;
    this.GIRL_SCALE = 0.4;
    this.GIRL_EYE_Y = 380;
    this.GIRL_EYE_X = 620;
    this.GIRL_HAND_X = 630;
    this.GIRL_HAND_Y = 550;
    this.startMillis = 0;
  }

  OnEnter() {

    this.startMillis = millis();

    this.GIRL_X = 600;
    this.GIRL_Y = 550;
    this.GIRL_SCALE = 0.4;
    this.GIRL_EYE_Y = 380;
    this.GIRL_EYE_X = 620;
    this.GIRL_HAND_X = 630;
    this.GIRL_HAND_Y = 550;
  }

  OnDraw() {
    imageManager.DrawImage("s3c3v2_1_2_background", createVector(width / 2, height / 2));
    imageManager.DrawImage("s3c3v2_1_2_text", createVector(width / 2, height / 2));

    this.GIRL_HAND_Y = lerp(
      550,
      515,
      (timeManager.time - this.enterTime) / this.SCENE_DURATION
    );

    //girl
    imageManager.DrawImageScale(
      "s3c3v2_1_2_girlbody",
      createVector(this.GIRL_X, this.GIRL_Y),
      createVector(this.GIRL_SCALE, this.GIRL_SCALE)
    );
    imageManager.DrawImageScale(
      "s3c3v2_1_2_girlhand",
      createVector(this.GIRL_HAND_X, abs(this.GIRL_HAND_Y)),
      createVector(this.GIRL_SCALE, this.GIRL_SCALE)
    );
    if (Math.floor(millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "s3c3v2_1_2_girlface",
        createVector(this.GIRL_EYE_X, this.GIRL_EYE_Y),
        createVector(this.GIRL_SCALE, this.GIRL_SCALE)
      );
    } else {
      imageManager.DrawImageScale(
        "s3c3v2_1_2_girlface2",
        createVector(this.GIRL_EYE_X, this.GIRL_EYE_Y),
        createVector(this.GIRL_SCALE, this.GIRL_SCALE)
      );
    }
    if (
      soundManager.hasSound("S3/C3/V2/_1/_2/woonggirl") &&
      isTimeExceededMillis(this.startMillis, 1)
    ) {
      soundManager.playSoundOnce("S3/C3/V2/_1/_2/woonggirl");
    }
    // 씬 시작 후 SCENE_DURATION 초 경과시 다음 장면으로 이동
    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C3V2_1_3());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}
