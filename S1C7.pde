public class S1C7 extends Scene {
  private final static String PREFIX = "Images/S1/C7/";
  private static final float HWAN_BODY_X = 880.0f;
  private static final float HWAN_BODY_Y = 760.0f;
  private static final float HWAN_EYE_Y = 480.0f;
  private static final float HWAN_SCALE = 0.4f;

  private final static int SCENE_SCONDS = 3; // 3초 동안 씬 진행
  private int startMinute;
  private int startSecond;

  @Override public void OnEnter() {
    image.LoadImage("background", PREFIX+"background");
    image.LoadImage("hwan_body", PREFIX+"hwan_body");
    image.LoadImage("hwan_expression1", PREFIX+"hwan_expression1");
    image.LoadImage("hwan_expression2", PREFIX+"hwan_expression2");
    startMinute=minute();
    startSecond=second();
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));

    image.DrawImageScale("hwan_body", new PVector(HWAN_BODY_X, HWAN_BODY_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));

    if ((millis()/500)%2==0) {
      image.DrawImageScale("hwan_expression1", new PVector(HWAN_BODY_X, HWAN_EYE_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
    } else {
      image.DrawImageScale("hwan_expression2", new PVector(HWAN_BODY_X, HWAN_EYE_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
    }
    // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    if (isTimeExceeded(startMinute, startSecond, SCENE_SCONDS)) {
      scene.ChangeScene(new S1C8());
    }
  }

  @Override public void OnExit() {
  }
}
