class S3C3V2_1_3 extends Scene {
  constructor() {
    super();
    this.GIRL_X = 900;
    this.GIRL_Y = 480;
    this.GIRL_SCALE = 0.15;
    this.GIRL_EYE_Y = 410;
    this.HWAN_X = 300;
    this.HWAN_Y = 480;
    this.HWAN_SCALE = 0.15;
    this.HWAN_MOUSE_Y = 405;
    this.HWAN_SHOE_Y = this.HWAN_Y + 140;
    this.startMillis = 0;
    this.stepTime = 0;
    this.curTime = 0;
    this.narrDuration = 0;
  }

  OnEnter() {
    this.startMillis = millis();
  }

  OnDraw() {
    this.sound();
    // 배경화면
    imageManager.DrawImage("s3c3v2_1_3_background", createVector(width / 2, height / 2));
    imageManager.DrawImage(
      "s3c3v2_1_3_hwanwoong_text",
      createVector(width / 2, height / 2 + 100)
    );
    imageManager.DrawImage(
      "s3c3v2_1_3_girl_text",
      createVector(width / 2, height / 2 + 100)
    );

    // girl
    imageManager.DrawImageScale(
      "s3c3v2_1_3_girl_body",
      createVector(this.GIRL_X, this.GIRL_Y),
      createVector(this.GIRL_SCALE, this.GIRL_SCALE)
    );

    // hwan
    if (this.HWAN_X <= this.GIRL_X - 400) {
      this.HWAN_X += 1.5;
      if (Math.floor(millis() / 500) % 2 === 0) {
        imageManager.DrawImageScale(
          "s3c3v2_1_3_hwan_shoe_1",
          createVector(this.HWAN_X + 17, this.HWAN_SHOE_Y),
          createVector(this.HWAN_SCALE, this.HWAN_SCALE)
        );
      } else {
        imageManager.DrawImageScale(
          "s3c3v2_1_3_hwan_shoe_2",
          createVector(this.HWAN_X + 17, this.HWAN_SHOE_Y),
          createVector(this.HWAN_SCALE, this.HWAN_SCALE)
        );
      }
    } else {
      imageManager.DrawImageScale(
        "s3c3v2_1_3_hwan_shoe_2",
        createVector(this.HWAN_X + 17, this.HWAN_SHOE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
    }
    if (Math.floor(millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "s3c3v2_1_3_girl_eye_1",
        createVector(this.GIRL_X, this.GIRL_EYE_Y),
        createVector(this.GIRL_SCALE, this.GIRL_SCALE)
      );
      imageManager.DrawImageScale(
        "s3c3v2_1_3_hwan_body",
        createVector(this.HWAN_X, this.HWAN_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
      imageManager.DrawImageScale(
        "s3c3v2_1_3_hwan_mouse_1",
        createVector(this.HWAN_X + 10, this.HWAN_MOUSE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
    } else {
      imageManager.DrawImageScale(
        "s3c3v2_1_3_girl_eye_2",
        createVector(this.GIRL_X, this.GIRL_EYE_Y),
        createVector(this.GIRL_SCALE, this.GIRL_SCALE)
      );
      imageManager.DrawImageScale(
        "s3c3v2_1_3_hwan_body",
        createVector(this.HWAN_X, this.HWAN_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
      imageManager.DrawImageScale(
        "s3c3v2_1_3_hwan_mouse_2",
        createVector(this.HWAN_X + 10, this.HWAN_MOUSE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
    }
    if (this.stepTime > 0.5 && this.curTime < 4.8) {
      soundManager.PlaySound("Effects/Step_Rock_02");
      this.stepTime = 0;
    } else {
      this.stepTime += timeManager.deltaTime;
    }
    this.curTime += timeManager.deltaTime;
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }

  sound() {
    // 씬 시작 후 1초 뒤 대사1 시작
    if (
      soundManager.hasSound("S3/C3/V2/_1/_3/hwanwoong") &&
      isTimeExceededMillis(this.startMillis, 1)
    ) {
      this.narrDuration = soundManager.soundDuration("S3/C3/V2/_1/_3/hwanwoong");
      soundManager.playSoundOnce("S3/C3/V2/_1/_3/hwanwoong");
      this.startMillis = millis(); // 대사 1 시작 millis
    }
    // 대사 1 종료 후 1.2초 뒤 대사2 시작
    if (
      !soundManager.hasSound("S3/C3/V2/_1/_3/hwanwoong") &&
      soundManager.hasSound("S3/C3/V2/_1/_3/woonggirl") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.2)
    ) {
      this.narrDuration = soundManager.soundDuration("S3/C3/V2/_1/_3/woonggirl");
      soundManager.playSoundOnce("S3/C3/V2/_1/_3/woonggirl");
      this.startMillis = millis();
    }
    // 대사 2 종료 후 1초 뒤 다음 장면으로 이동
    if (
      !soundManager.hasSound("S3/C3/V2/_1/_3/hwanwoong") &&
      !soundManager.hasSound("S3/C3/V2/_1/_3/woonggirl") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)
    ) {
      sceneManager.ChangeScene(new S3C3V2_2_1());
    }
  }
}
