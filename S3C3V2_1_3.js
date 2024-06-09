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
    imageManager.LoadImage("background", "Images/S3/C3/V2/_1/_3/background");
    imageManager.LoadImage(
      "hwanwoong_text",
      "Images/S3/C3/V2/_1/_3/hwanwoong_text"
    );
    imageManager.LoadImage("girl_text", "Images/S3/C3/V2/_1/_3/girl_text");

    soundManager.LoadSound(
      "woonggirl",
      "Sounds/S3/C3/V2/_1/_3/narr/woonggirl.mp3"
    );
    soundManager.LoadSound(
      "hwanwoong",
      "Sounds/S3/C3/V2/_1/_3/narr/hwanwoong.mp3"
    );

    // girl
    imageManager.LoadImage("girl_body", "Images/S3/C3/V2/_1/_3/girl");
    imageManager.LoadImage("girl_eye_1", "Images/S3/C3/V2/_1/_3/girleye1");
    imageManager.LoadImage("girl_eye_2", "Images/S3/C3/V2/_1/_3/girleye2");

    // hwan
    imageManager.LoadImage("hwan_body", "Images/S3/C3/V2/_1/_3/hwan");
    imageManager.LoadImage("hwan_mouse_1", "Images/S3/C3/V2/_1/_3/hwanmouse1");
    imageManager.LoadImage("hwan_mouse_2", "Images/S3/C3/V2/_1/_3/hwanmouse2");
    imageManager.LoadImage("hwan_shoe_1", "Images/S3/C3/V2/_1/_3/hwanshoe");
    imageManager.LoadImage("hwan_shoe_2", "Images/S3/C3/V2/_1/_3/hwanshoe2");
    soundManager.LoadSound("Step", "Sounds/Effects/Step_Rock_02.mp3");

    this.startMillis = millis();
  }

  OnDraw() {
    this.sound();
    // 배경화면
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImage(
      "hwanwoong_text",
      createVector(width / 2, height / 2 + 100)
    );
    imageManager.DrawImage(
      "girl_text",
      createVector(width / 2, height / 2 + 100)
    );

    // girl
    imageManager.DrawImageScale(
      "girl_body",
      createVector(this.GIRL_X, this.GIRL_Y),
      createVector(this.GIRL_SCALE, this.GIRL_SCALE)
    );

    // hwan
    if (this.HWAN_X <= this.GIRL_X - 400) {
      this.HWAN_X += 1.5;
      if ((millis() / 500) % 2 === 0) {
        imageManager.DrawImageScale(
          "hwan_shoe_1",
          createVector(this.HWAN_X + 17, this.HWAN_SHOE_Y),
          createVector(this.HWAN_SCALE, this.HWAN_SCALE)
        );
      } else {
        imageManager.DrawImageScale(
          "hwan_shoe_2",
          createVector(this.HWAN_X + 17, this.HWAN_SHOE_Y),
          createVector(this.HWAN_SCALE, this.HWAN_SCALE)
        );
      }
    } else {
      imageManager.DrawImageScale(
        "hwan_shoe_2",
        createVector(this.HWAN_X + 17, this.HWAN_SHOE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
    }
    if ((millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "girl_eye_1",
        createVector(this.GIRL_X, this.GIRL_EYE_Y),
        createVector(this.GIRL_SCALE, this.GIRL_SCALE)
      );
      imageManager.DrawImageScale(
        "hwan_body",
        createVector(this.HWAN_X, this.HWAN_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
      imageManager.DrawImageScale(
        "hwan_mouse_1",
        createVector(this.HWAN_X + 10, this.HWAN_MOUSE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
    } else {
      imageManager.DrawImageScale(
        "girl_eye_2",
        createVector(this.GIRL_X, this.GIRL_EYE_Y),
        createVector(this.GIRL_SCALE, this.GIRL_SCALE)
      );
      imageManager.DrawImageScale(
        "hwan_body",
        createVector(this.HWAN_X, this.HWAN_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
      imageManager.DrawImageScale(
        "hwan_mouse_2",
        createVector(this.HWAN_X + 10, this.HWAN_MOUSE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
    }
    if (this.stepTime > 0.5 && this.curTime < 4.8) {
      soundManager.PlaySound("Step");
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
      soundManager.hasSound("hwanwoong") &&
      this.isTimeExceededMillis(this.startMillis, 1)
    ) {
      this.narrDuration = soundManager.soundDuration("hwanwoong");
      soundManager.playSoundOnce("hwanwoong");
      this.startMillis = millis(); // 대사 1 시작 millis
    }
    // 대사 1 종료 후 1.2초 뒤 대사2 시작
    if (
      !soundManager.hasSound("hwanwoong") &&
      soundManager.hasSound("woonggirl") &&
      this.isTimeExceededMillis(this.startMillis, this.narrDuration + 1.2)
    ) {
      this.narrDuration = soundManager.soundDuration("woonggirl");
      soundManager.playSoundOnce("woonggirl");
      this.startMillis = millis();
    }
    // 대사 2 종료 후 1초 뒤 다음 장면으로 이동
    if (
      !soundManager.hasSound("hwanwoong") &&
      !soundManager.hasSound("woonggirl") &&
      this.isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)
    ) {
      sceneManager.ChangeScene(new S3C3V2_2_1());
    }
  }
}
