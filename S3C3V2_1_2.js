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
    imageManager.LoadImage("background", "Images/S3/C3/V2/_1/_2/background");
    imageManager.LoadImage("text", "Images/S3/C3/V2/_1/_2/text");

    imageManager.LoadImage("girlbody", "Images/S3/C3/V2/_1/_2/girlbody");
    imageManager.LoadImage("girlface", "Images/S3/C3/V2/_1/_2/girlface");
    imageManager.LoadImage("girlface2", "Images/S3/C3/V2/_1/_2/girlface2");
    imageManager.LoadImage("girlhand", "Images/S3/C3/V2/_1/_2/girlhand");

    soundManager.LoadSound(
      "woonggirl",
      "Sounds/S3/C3/V2/_1/_2/narr/woonggirl.mp3"
    );
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
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImage("text", createVector(width / 2, height / 2));

    this.GIRL_HAND_Y = lerp(
      550,
      515,
      (timeManager.time - timeManager.enterTime) / this.SCENE_DURATION
    );

    //girl
    imageManager.DrawImageScale(
      "girlbody",
      createVector(this.GIRL_X, this.GIRL_Y),
      createVector(this.GIRL_SCALE, this.GIRL_SCALE)
    );
    imageManager.DrawImageScale(
      "girlhand",
      createVector(this.GIRL_HAND_X, abs(this.GIRL_HAND_Y)),
      createVector(this.GIRL_SCALE, this.GIRL_SCALE)
    );
    if ((millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "girlface",
        createVector(this.GIRL_EYE_X, this.GIRL_EYE_Y),
        createVector(this.GIRL_SCALE, this.GIRL_SCALE)
      );
    } else {
      imageManager.DrawImageScale(
        "girlface2",
        createVector(this.GIRL_EYE_X, this.GIRL_EYE_Y),
        createVector(this.GIRL_SCALE, this.GIRL_SCALE)
      );
    }
    if (
      soundManager.hasSound("woonggirl") &&
      isTimeExceededMillis(this.startMillis, 1)
    ) {
      soundManager.playSoundOnce("woonggirl");
    }
    // 씬 시작 후 SCENE_DURATION 초 경과시 다음 장면으로 이동
    if (timeManager.time - timeManager.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C3V2_1_3());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}
