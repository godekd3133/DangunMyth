public class S3C3V1_2 extends Scene {
  private final static String PREFIX = "Images/S3/C3/V1/_2/";
  private final static String SOUND_PREFIX = "Sounds/S3/C3/V1/_2/narr/";

  private final static float CHARACTER_SCALE = 0.3;

  private final static float BEAR_X = 470;
  private final static float BEAR_Y = 460;
  private final static float BEAR_EYE_X = BEAR_X-8;
  private final static float BEAR_EYE_Y = BEAR_Y-60;

  private final static float TIGER_X = BEAR_X+350;
  private final static float TIGER_Y = BEAR_Y+70;
  private final static float TIGER_HEAD_X = TIGER_X-30;
  private final static float TIGER_HEAD_Y = TIGER_Y-145;
  private final static float TIGER_TONGUE_X = TIGER_HEAD_X-25;
  private final static float TIGER_TONGUE_Y = TIGER_HEAD_Y+110;

  private float tongueY = 0;

  // private final static int SCENE_SCONDS = 3; // 3초 동안 씬 진행
  // private int startMinute;
  // private int startSecond;
  private int startMillis;
  private float narrDuration;

  @Override public void OnEnter() {
    // 이미지 로드
    image.LoadImage("background", PREFIX+"background");

    image.LoadImage("bear_body", PREFIX+"bear_body");
    image.LoadImage("bear_eye", PREFIX+"bear_eye");

    image.LoadImage("tiger_body", PREFIX+"tiger_body");
    image.LoadImage("tiger_head", PREFIX+"tiger_head");
    image.LoadImage("tiger_tongue", PREFIX+"tiger_tongue");
    sound.LoadSound("tiger", SOUND_PREFIX+"tiger.mp3");

    startMillis = millis();
  }

  @Override public void OnDraw() {
    tongueY+=0.5;

    if (tongueY>13) {
      tongueY *=-1;
    }
    image.DrawImage("background", new PVector(width / 2, height / 2));

    image.DrawImageScale("bear_eye", new PVector(BEAR_EYE_X, BEAR_EYE_Y), new PVector(CHARACTER_SCALE, CHARACTER_SCALE));
    image.DrawImageScale("bear_body", new PVector(BEAR_X, BEAR_Y), new PVector(CHARACTER_SCALE, CHARACTER_SCALE));

    image.DrawImageScale("tiger_body", new PVector(TIGER_X, TIGER_Y), new PVector(CHARACTER_SCALE, CHARACTER_SCALE));
    image.DrawImageScale("tiger_tongue", new PVector(TIGER_TONGUE_X, TIGER_TONGUE_Y+abs(tongueY)), new PVector(CHARACTER_SCALE, CHARACTER_SCALE));
    image.DrawImageScale("tiger_head", new PVector(TIGER_HEAD_X, TIGER_HEAD_Y), new PVector(CHARACTER_SCALE, CHARACTER_SCALE));
    // 씬 시작 후 1.5초 뒤 대사2 시작
    if (sound.hasSound("tiger")&&isTimeExceededMillis(startMillis, narrDuration+1.5)) {
      narrDuration=sound.soundDuration("tiger");
      sound.playSoundOnce("tiger");
      startMillis = millis();
    }
    // 대사 2 종료 후 1.5초 뒤 다음 장면으로 이동
    if (!sound.hasSound("tiger")&&isTimeExceededMillis(startMillis, narrDuration+1.5)) {
      scene.ChangeScene(new S3C3V1_1_1());
    }
    // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    // if (isTimeExceeded(startMinute, startSecond, SCENE_SCONDS)) {
      //   scene.ChangeScene(new S3C3V1_1_1());
      // }
  }

  @Override public void OnExit() {
  }
}
