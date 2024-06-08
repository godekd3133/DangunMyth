class S3C3V2_1_3 extends Scene {
  GIRL_X = 900;
  GIRL_Y = 480;
  GIRL_SCALE = 0.15;
  GIRL_EYE_Y = 410;
  HWAN_X = 300;
  HWAN_Y = 480;
  HWAN_SCALE = 0.15;
  HWAN_MOUSE_Y = 405;
  HWAN_SHOE_Y = HWAN_Y + 140;
  startMillis;
  narrDuration;
  stepTime = 0;
  curTime = 0;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", "Images/S3/C3/V2/_1/_3/background");
    image.LoadImage("hwanwoong_text", "Images/S3/C3/V2/_1/_3/hwanwoong_text");
    image.LoadImage("girl_text", "Images/S3/C3/V2/_1/_3/girl_text");
    sound.LoadSound("woonggirl", "Sounds/S3/C3/V2/_1/_3/narr/woonggirl.mp3");
    sound.LoadSound("hwanwoong", "Sounds/S3/C3/V2/_1/_3/narr/hwanwoong.mp3"); // girl
    image.LoadImage("girl_body", "Images/S3/C3/V2/_1/_3/girl");
    image.LoadImage("girl_eye_1", "Images/S3/C3/V2/_1/_3/girleye1");
    image.LoadImage("girl_eye_2", "Images/S3/C3/V2/_1/_3/girleye2"); // hwan
    image.LoadImage("hwan_body", "Images/S3/C3/V2/_1/_3/hwan");
    image.LoadImage("hwan_mouse_1", "Images/S3/C3/V2/_1/_3/hwanmouse1");
    image.LoadImage("hwan_mouse_2", "Images/S3/C3/V2/_1/_3/hwanmouse2");
    image.LoadImage("hwan_shoe_1", "Images/S3/C3/V2/_1/_3/hwanshoe");
    image.LoadImage("hwan_shoe_2", "Images/S3/C3/V2/_1/_3/hwanshoe2");
    sound.LoadSound("Step", "Sounds/Effects/Step_Rock_02.mp3");
    this.GIRL_X = 900;
    this.GIRL_Y = 480;
    this.GIRL_SCALE = 0.15;
    this.GIRL_EYE_Y = 410;
    this.HWAN_X = 300;
    this.HWAN_Y = 480;
    this.HWAN_SCALE = 0.15;
    this.HWAN_MOUSE_Y = 405;
    this.HWAN_SHOE_Y = this.HWAN_Y + 140;
    this.startMillis = Date.now();
  }
  OnDraw() {
    this.sound(); // 배경화면
    image.DrawImage("background", new p5.Vector(width / 2, height / 2));
    image.DrawImage(
      "hwanwoong_text",
      new p5.Vector(width / 2, height / 2 + 100)
    );
    image.DrawImage("girl_text", new p5.Vector(width / 2, height / 2 + 100)); // girl
    image.DrawImageScale(
      "girl_body",
      new p5.Vector(this.GIRL_X, this.GIRL_Y),
      new p5.Vector(this.GIRL_SCALE, this.GIRL_SCALE, 0)
    ); // hwan
    if (this.HWAN_X <= this.GIRL_X - 400) {
      this.HWAN_X += 1.5;
      if ((Date.now() / 500) % 2 == 0) {
        image.DrawImageScale(
          "hwan_shoe_1",
          new p5.Vector(this.HWAN_X + 17, this.HWAN_SHOE_Y),
          new p5.Vector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
        );
      } else {
        image.DrawImageScale(
          "hwan_shoe_2",
          new p5.Vector(this.HWAN_X + 17, this.HWAN_SHOE_Y),
          new p5.Vector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
        );
      }
    } else {
      image.DrawImageScale(
        "hwan_shoe_2",
        new p5.Vector(this.HWAN_X + 17, this.HWAN_SHOE_Y),
        new p5.Vector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
      );
    }
    if ((Date.now() / 500) % 2 == 0) {
      image.DrawImageScale(
        "girl_eye_1",
        new p5.Vector(this.GIRL_X, this.GIRL_EYE_Y),
        new p5.Vector(this.GIRL_SCALE, this.GIRL_SCALE, 0)
      );
      image.DrawImageScale(
        "hwan_body",
        new p5.Vector(this.HWAN_X, this.HWAN_Y),
        new p5.Vector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
      );
      image.DrawImageScale(
        "hwan_mouse_1",
        new p5.Vector(this.HWAN_X + 10, this.HWAN_MOUSE_Y),
        new p5.Vector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
      );
    } else {
      image.DrawImageScale(
        "girl_eye_2",
        new p5.Vector(this.GIRL_X, this.GIRL_EYE_Y),
        new p5.Vector(this.GIRL_SCALE, this.GIRL_SCALE, 0)
      );
      image.DrawImageScale(
        "hwan_body",
        new p5.Vector(this.HWAN_X, this.HWAN_Y),
        new p5.Vector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
      );
      image.DrawImageScale(
        "hwan_mouse_2",
        new p5.Vector(this.HWAN_X + 10, this.HWAN_MOUSE_Y),
        new p5.Vector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
      );
    }
    if (this.stepTime > 0.5 && this.curTime < 4.8) {
      sound.PlaySound("Step");
      this.stepTime = 0;
    } else {
      this.stepTime += time.deltaTime;
    }
    this.curTime += time.deltaTime;
  }
  OnExit() {
    sound.stopNowPlaying();
  }
  sound() {
    // 씬 시작 후 1초 뒤 대사1 시작
    if (
      sound.hasSound("hwanwoong") &&
      isTimeExceededMillis(this.startMillis, 1)
    ) {
      this.narrDuration = sound.soundDuration("hwanwoong");
      sound.playSoundOnce("hwanwoong");
      this.startMillis = Date.now(); // 대사 1 시작 millis
    } // 대사 1 종료 후 1.2초 뒤 대사2 시작
    if (
      !sound.hasSound("hwanwoong") &&
      sound.hasSound("woonggirl") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.2)
    ) {
      this.narrDuration = sound.soundDuration("woonggirl");
      sound.playSoundOnce("woonggirl");
      this.startMillis = Date.now();
    } // 대사 2 종료 후 1초 뒤 다음 장면으로 이동
    if (
      !sound.hasSound("hwanwoong") &&
      !sound.hasSound("woonggirl") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)
    ) {
      scene.ChangeScene(new S3C3V2_2_1());
    }
  }
}
