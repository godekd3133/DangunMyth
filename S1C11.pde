public class S1C11 extends Scene {
  private static final float HWANIN_BODY_X = 250.0f;
  private static final float HWANIN_BODY_Y = 520.0f;
  private static final float HWANIN_EYE_X = 250.0f;
  private static final float HWANIN_EYE_Y = 420.0f;
  private static final float HWANIN_SCALE = 0.35f;

  private static final float HWANWOONG_BODY_X = 1100.0f;
  private static final float HWANWOONG_BODY_Y = 580.0f;
  private static final float HWANWOONG_EYE_X = 1025.0f;
  private static final float HWANWOONG_EYE_Y = 385.0f;
  private static final float HWANWOONG_SCALE = 0.35f;

  private static final int NEXT_SCENE_COUNT = 200;

  private int sceneCount = 0;

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C11/background");

    image.LoadImage("hwanin_body", "Images/S1/C11/hwanin_body");
    image.LoadImage("hwanin_expression1", "Images/S1/C11/hwanin_expression1");
    image.LoadImage("hwanin_expression2", "Images/S1/C11/hwanin_expression2");

    image.LoadImage("hwanwoong_body", "Images/S1/C11/hwanwoong_body");
    image.LoadImage("hwanwoong_expression1", "Images/S1/C11/hwanwoong_expression1");
    image.LoadImage("hwanwoong_expression2", "Images/S1/C11/hwanwoong_expression2");
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));

    image.DrawImageScale("hwanin_body", new PVector(HWANIN_BODY_X, HWANIN_BODY_Y), new PVector(HWANIN_SCALE, HWANIN_SCALE, 0));
    image.DrawImageScale("hwanwoong_body", new PVector(HWANWOONG_BODY_X, HWANWOONG_BODY_Y), new PVector(HWANWOONG_SCALE, HWANWOONG_SCALE, 0));

    sceneCount++;
    // 입, 움직임 인터랙션 반복
    if ((sceneCount/10)%2==0) {
      image.DrawImageScale("hwanin_expression1", new PVector(HWANIN_EYE_X, HWANIN_EYE_Y), new PVector(HWANIN_SCALE, HWANIN_SCALE, 0));
      image.DrawImageScale("hwanwoong_expression1", new PVector(HWANWOONG_EYE_X, HWANWOONG_EYE_Y), new PVector(HWANWOONG_SCALE, HWANWOONG_SCALE, 0));
    } else {
      image.DrawImageScale("hwanin_expression2", new PVector(HWANIN_EYE_X, HWANIN_EYE_Y), new PVector(HWANIN_SCALE, HWANIN_SCALE, 0));
      image.DrawImageScale("hwanwoong_expression2", new PVector(HWANWOONG_EYE_X, HWANWOONG_EYE_Y), new PVector(HWANWOONG_SCALE, HWANWOONG_SCALE, 0));
    }
    if (sceneCount > NEXT_SCENE_COUNT) {
      // scene.ChangeScene(new S1C12());
    }
  }

  @Override public void OnExit() {
  }
}
