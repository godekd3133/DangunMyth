public class S3C3V2_1_2 extends Scene {
  private float SCENE_DURATION = 4f;
  private float GIRL_X = 600;
  private float GIRL_Y = 550;
  private float GIRL_SCALE = 0.4;
  private float GIRL_EYE_Y = 380;
  private float GIRL_EYE_X = 620;
  private float GIRL_HAND_X = 630;
  private float GIRL_HAND_Y = 550;

  private int startMillis;

  public S3C3V2_1_2() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S3/C3/V2/_1/_2/background");
    image.LoadImage("text", "Images/S3/C3/V2/_1/_2/text");

    image.LoadImage("girlbody", "Images/S3/C3/V2/_1/_2/girlbody");
    image.LoadImage("girlface", "Images/S3/C3/V2/_1/_2/girlface");
    image.LoadImage("girlface2", "Images/S3/C3/V2/_1/_2/girlface2");
    image.LoadImage("girlhand", "Images/S3/C3/V2/_1/_2/girlhand");

    sound.LoadSound("woonggirl", "Sounds/S3/C3/V2/_1/_2/narr/woonggirl.mp3");
    startMillis=millis();

    GIRL_X = 600;
    GIRL_Y = 550;
    GIRL_SCALE = 0.4;
    GIRL_EYE_Y = 380;
    GIRL_EYE_X = 620;
    GIRL_HAND_X = 630;
    GIRL_HAND_Y = 550;
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImage("text", new PVector(width / 2, height / 2));

    GIRL_HAND_Y-=2;
    if (abs(GIRL_HAND_Y) == 500 || abs(GIRL_HAND_Y) == 550) {
      GIRL_HAND_Y*=-1;
    }
    //girl
    image.DrawImageScale("girlbody", new PVector(GIRL_X, GIRL_Y), new PVector(GIRL_SCALE, GIRL_SCALE, 0));
    image.DrawImageScale("girlhand", new PVector(GIRL_HAND_X, abs(GIRL_HAND_Y)), new PVector(GIRL_SCALE, GIRL_SCALE, 0));
    if ((millis()/500)%2==0) {
      image.DrawImageScale("girlface", new PVector(GIRL_EYE_X, GIRL_EYE_Y), new PVector(GIRL_SCALE, GIRL_SCALE, 0));
    } else {
      image.DrawImageScale("girlface2", new PVector(GIRL_EYE_X, GIRL_EYE_Y), new PVector(GIRL_SCALE, GIRL_SCALE, 0));
    }
    if (sound.hasSound("woonggirl")&&isTimeExceededMillis(startMillis, 1)) {
      sound.playSoundOnce("woonggirl");
    }
    // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    if (time.time - enterTime >= SCENE_DURATION) {
      scene.ChangeScene(new S3C3V2_1_3());
    }
  }

  @Override public void OnExit() {
    sound.stopNowPlaying();
  }
}
