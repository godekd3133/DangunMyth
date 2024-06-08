class S3C3V2_1_2 extends Scene {
  SCENE_DURATION = 4;
  GIRL_X = 600;
  GIRL_Y = 550;
  GIRL_SCALE = 0.4;
  GIRL_EYE_Y = 380;
  GIRL_EYE_X = 620;
  GIRL_HAND_X = 630;
  GIRL_HAND_Y = 550;
  startMillis;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", "Images/S3/C3/V2/_1/_2/background");
    image.LoadImage("text", "Images/S3/C3/V2/_1/_2/text");
    image.LoadImage("girlbody", "Images/S3/C3/V2/_1/_2/girlbody");
    image.LoadImage("girlface", "Images/S3/C3/V2/_1/_2/girlface");
    image.LoadImage("girlface2", "Images/S3/C3/V2/_1/_2/girlface2");
    image.LoadImage("girlhand", "Images/S3/C3/V2/_1/_2/girlhand");
    sound.LoadSound("woonggirl", "Sounds/S3/C3/V2/_1/_2/narr/woonggirl.mp3");
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
    image.DrawImage("background", new p5.Vector(width / 2, height / 2));
    image.DrawImage("text", new p5.Vector(width / 2, height / 2));
    this.GIRL_HAND_Y = lerp(
      550,
      515,
      (time.time - this.enterTime) / this.SCENE_DURATION
    ); //girl
    image.DrawImageScale(
      "girlbody",
      new p5.Vector(this.GIRL_X, this.GIRL_Y),
      new p5.Vector(this.GIRL_SCALE, this.GIRL_SCALE, 0)
    );
    image.DrawImageScale(
      "girlhand",
      new p5.Vector(this.GIRL_HAND_X, Math.abs(this.GIRL_HAND_Y)),
      new p5.Vector(this.GIRL_SCALE, this.GIRL_SCALE, 0)
    );
    if ((millis() / 500) % 2 == 0) {
      image.DrawImageScale(
        "girlface",
        new p5.Vector(this.GIRL_EYE_X, this.GIRL_EYE_Y),
        new p5.Vector(this.GIRL_SCALE, this.GIRL_SCALE, 0)
      );
    } else {
      image.DrawImageScale(
        "girlface2",
        new p5.Vector(this.GIRL_EYE_X, this.GIRL_EYE_Y),
        new p5.Vector(this.GIRL_SCALE, this.GIRL_SCALE, 0)
      );
    }
    if (
      sound.hasSound("woonggirl") &&
      isTimeExceededMillis(this.startMillis, 1)
    ) {
      sound.playSoundOnce("woonggirl");
    } // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    if (time.time - this.enterTime >= this.SCENE_DURATION) {
      scene.ChangeScene(new S3C3V2_1_3());
    }
  }
  OnExit() {
    sound.stopNowPlaying();
  }
}
