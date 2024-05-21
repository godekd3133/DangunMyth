public class S1C7 extends Scene {
  private static final float HWAN_BODY_X = 880.0f;
  private static final float HWAN_BODY_Y = 760.0f;
  private static final float HWAN_EYE_Y = 480.0f;
  private static final float HWAN_SCALE = 0.4f;

  private static final int NEXT_SCENE_COUNT = 200;

  private int sceneCount = 0;

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C7/background");
    image.LoadImage("hwan_body", "Images/S1/C7/hwan_body");
    image.LoadImage("hwan_expression1", "Images/S1/C7/hwan_expression1");
    image.LoadImage("hwan_expression2", "Images/S1/C7/hwan_expression2");
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImageScale("hwan_body", new PVector(HWAN_BODY_X, HWAN_BODY_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));

    sceneCount++;
    if ((sceneCount/10)%2==0) {
      image.DrawImageScale("hwan_expression1", new PVector(HWAN_BODY_X, HWAN_EYE_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
    } else {
      image.DrawImageScale("hwan_expression2", new PVector(HWAN_BODY_X, HWAN_EYE_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
    }
    if (sceneCount > NEXT_SCENE_COUNT) {
      // scene.ChangeScene(new S1C8());
    }
  }

  @Override public void OnExit() {
  }
}
