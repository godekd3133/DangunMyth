public class S1C7 extends Scene {
  private String PREFIX = "S1/C7/";
  private String IMG_PREFIX = "Images/"+PREFIX;
  private String SOUND_PREFIX = "Sounds/"+PREFIX+"narr/";
  //public float SCENE_DURATION = 3f;

  private float HWAN_BODY_X = 950.0f;
  private float HWAN_BODY_Y = 760.0f;
  private float HWAN_EYE_Y = 480.0f;
  private float HWAN_SCALE = 0.4f;

  private int startMillis;
  private float narrDuration;

  @Override public void OnEnter() {
    image.LoadImage("background", IMG_PREFIX+"background");
    image.LoadImage("text", IMG_PREFIX+"text");
    image.LoadImage("hwan_body", IMG_PREFIX+"hwan_body");
    image.LoadImage("hwan_expression1", IMG_PREFIX+"hwan_expression1");
    image.LoadImage("hwan_expression2", IMG_PREFIX+"hwan_expression2");
    sound.LoadSound("narr", SOUND_PREFIX+"narr.mp3");
    sound.LoadSound("hwan", SOUND_PREFIX+"hwan.mp3");

    // 씬 시작 millis
    startMillis = millis();
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImage("text", new PVector(width / 2, height / 2));

    image.DrawImageScale("hwan_body", new PVector(HWAN_BODY_X, HWAN_BODY_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));

    if ((millis()/500)%2==0) {
      image.DrawImageScale("hwan_expression1", new PVector(HWAN_BODY_X, HWAN_EYE_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
    } else {
      image.DrawImageScale("hwan_expression2", new PVector(HWAN_BODY_X, HWAN_EYE_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
    }
    // 씬 시작 후 1.5초 뒤 대사1 시작
    if (sound.hasSound("narr")&&isTimeExceededMillis(startMillis, 1.5)) {
      narrDuration=sound.soundDuration("narr");
      sound.playSoundOnce("narr");
      startMillis = millis(); // 대사 1 시작 millis
    }
    // 대사 1 종료 후 1초 뒤 대사2 시작
    if (!sound.hasSound("narr")&&sound.hasSound("hwan")&&isTimeExceededMillis(startMillis, narrDuration+1.0)) {
      narrDuration=sound.soundDuration("hwan");
      sound.playSoundOnce("hwan");
      startMillis = millis();
    }
    // 대사 2 종료 후 1초 뒤 다음 장면으로 이동
    if (!sound.hasSound("narr")&&!sound.hasSound("hwan")&&isTimeExceededMillis(startMillis, narrDuration+1.0)) {
      scene.ChangeScene(new S1C8());
    }
    // 다음 장면으로 이동
    // if (time.time - enterTime >= SCENE_DURATION) {
      //   scene.ChangeScene(new S1C8());
      // }
  }

  @Override public void OnExit() {
    sound.stopNowPlaying();
  }
}
