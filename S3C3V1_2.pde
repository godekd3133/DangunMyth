public class S3C3V1_2 extends Scene {
  private final static String PREFIX = "Images/S3/C3/V1/_2/";

  private final static float CHARACTER_SCALE = 0.3;

  private final static float BEAR_X = 470;
  private final static float BEAR_Y = 460;
  private final static float BEAR_EYE_X = BEAR_X-8;
  private final static float BEAR_EYE_Y = BEAR_Y-60;

  private final static float TIGER_X = BEAR_X+350;
  private final static float TIGER_Y = BEAR_Y;

  private final static int SCENE_SCONDS = 3; // 3초 동안 씬 진행
  private int startMinute;
  private int startSecond;

  @Override public void OnEnter() {
    // 이미지 로드
    image.LoadImage("background", PREFIX+"background");
    image.LoadImage("text", PREFIX+"text");

    image.LoadImage("bear_body", PREFIX+"bear_body");
    image.LoadImage("bear_eye", PREFIX+"bear_eye");
    image.LoadImage("tiger1", PREFIX+"tiger1");
    image.LoadImage("tiger2", PREFIX+"tiger2");

    startMinute = minute();
    startSecond = second();
  }

  @Override public void OnDraw() {
    tongueY+=0.5;

    if (tongueY>13) {
      tongueY *=-1;
    }
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImage("text", new PVector(width / 2, height / 2));

    image.DrawImageScale("bear_eye", new PVector(BEAR_EYE_X, BEAR_EYE_Y), new PVector(CHARACTER_SCALE, CHARACTER_SCALE));
    image.DrawImageScale("bear_body", new PVector(BEAR_X, BEAR_Y), new PVector(CHARACTER_SCALE, CHARACTER_SCALE));

    image.DrawImageScale("tiger"+((millis()/500)%2+1), new PVector(TIGER_X, TIGER_Y), new PVector(CHARACTER_SCALE, CHARACTER_SCALE));

    // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    if (isTimeExceeded(startMinute, startSecond, SCENE_SCONDS)) {
      scene.ChangeScene(new S3C3V1_3());
    }
  }

  @Override public void OnExit() {
  }
}
