public class S1C11 extends Scene {
  private final static String IMG_PREFIX = "Images/S1/C11/";
  private final static String SOUND_PREFIX = "Sounds/S1/C11/narr/";

  private float HWANIN_BODY_X = 250.0f;
  private float HWANIN_BODY_Y = 520.0f;
  private float HWANIN_EYE_X = 250.0f;
  private float HWANIN_EYE_Y = 420.0f;
  private float HWANIN_SCALE = 0.35f;

  private float HWANWOONG_BODY_X = 1100.0f;
  private float HWANWOONG_BODY_Y = 580.0f;
  private float HWANWOONG_EYE_X = 1025.0f;
  private float HWANWOONG_EYE_Y = 385.0f;
  private float HWANWOONG_SCALE = 0.35f;

  private int SCENE_SCONDS = 3; // 3초 동안 씬 진행
  private int startMinute;
  private int startSecond;
  private int startMillis;

  private float narrDuration;

  @Override public void OnEnter() {
    image.LoadImage("background", IMG_PREFIX+"background");

    image.LoadImage("hwanin_body", IMG_PREFIX+"hwanin_body");
    image.LoadImage("hwanin_expression1", IMG_PREFIX+"hwanin_expression1");
    image.LoadImage("hwanin_expression2", IMG_PREFIX+"hwanin_expression2");

    image.LoadImage("hwanwoong_body", IMG_PREFIX+"hwanwoong_body");
    image.LoadImage("hwanwoong_expression1", IMG_PREFIX+"hwanwoong_expression1");
    image.LoadImage("hwanwoong_expression2", IMG_PREFIX+"hwanwoong_expression2");
    startMinute=minute();
    startSecond=second();
    // 씬 시작 millis
    startMillis = millis();

    sound.LoadSound("hwanin", SOUND_PREFIX+"hwanin.mp3");
    sound.LoadSound("hwanwoong", SOUND_PREFIX+"hwanwoong.mp3");
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));

    image.DrawImageScale("hwanin_body", new PVector(HWANIN_BODY_X, HWANIN_BODY_Y), new PVector(HWANIN_SCALE, HWANIN_SCALE, 0));
    image.DrawImageScale("hwanwoong_body", new PVector(HWANWOONG_BODY_X, HWANWOONG_BODY_Y), new PVector(HWANWOONG_SCALE, HWANWOONG_SCALE, 0));

    // 입, 움직임 인터랙션 반복
    if ((millis()/500)%2==0) {
      image.DrawImageScale("hwanin_expression1", new PVector(HWANIN_EYE_X, HWANIN_EYE_Y), new PVector(HWANIN_SCALE, HWANIN_SCALE, 0));
      image.DrawImageScale("hwanwoong_expression1", new PVector(HWANWOONG_EYE_X, HWANWOONG_EYE_Y), new PVector(HWANWOONG_SCALE, HWANWOONG_SCALE, 0));
    } else {
      image.DrawImageScale("hwanin_expression2", new PVector(HWANIN_EYE_X, HWANIN_EYE_Y), new PVector(HWANIN_SCALE, HWANIN_SCALE, 0));
      image.DrawImageScale("hwanwoong_expression2", new PVector(HWANWOONG_EYE_X, HWANWOONG_EYE_Y), new PVector(HWANWOONG_SCALE, HWANWOONG_SCALE, 0));
    }
    // 씬 시작 후 1.5초 뒤 대사1 시작
    if (sound.hasSound("hwanin")&&isTimeExceededMillis(startMillis, 1.5)) {
      narrDuration=sound.soundDuration("hwanin");
      sound.playSoundOnce("hwanin");
      startMillis = millis(); // 대사 1 시작 millis
    }
    // 대사 1 종료 후 1초 뒤 대사2 시작
    if (!sound.hasSound("hwanin")&&sound.hasSound("hwanwoong")&&isTimeExceededMillis(startMillis, narrDuration+1.0)) {
      narrDuration=sound.soundDuration("hwanwoong");
      sound.playSoundOnce("hwanwoong");
      startMillis = millis();
    }
    // 대사 2 종료 후 1초 뒤 다음 장면으로 이동
    if (!sound.hasSound("hwanin")&&!sound.hasSound("hwanwoong")&&isTimeExceededMillis(startMillis, narrDuration+1.0)) {
      scene.ChangeScene(new S1C13());
    }
    // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    // if (isTimeExceeded(startMinute, startSecond, SCENE_SCONDS)) {
      //   scene.ChangeScene(new S1C14());
      // }
  }

  @Override public void OnExit() {
    sound.stopNowPlaying();
  }
}
