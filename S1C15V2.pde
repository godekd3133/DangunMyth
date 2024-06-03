public class S1C15V2 extends Scene {
  private final static String PREFIX = "Images/S1/C15-2/";
  public float SCENE_DURATION = 10f;
  private float HWANUNG_BODY_X = width / 2;
  private float HWANUNG_BODY_Y = height / 2 + 20;
  private float HWANUNG_BODY_SCALE = 0.215;
  private float HWANUNG_FACE_X = width / 2 + 4;
  private float HWANUNG_FACE_Y = height / 2 - 125;
  private float HWANUNG_FACE_SCALE = 0.25;
  private int startMinute;
  private int startSecond;
  private float cloudY = 30f;

  @Override public void OnEnter() {
    cloudY = 30f;
    image.LoadImage("background", PREFIX + "background");
    image.LoadImage("HWANUNG_BODY", PREFIX + "HWANUNG_BODY");
    image.LoadImage("HWANUNG_FACE", PREFIX + "HWANUNG_FACE");
    image.LoadImage("cloud", PREFIX + "cloud");
    startMinute=minute();
    startSecond=second();
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImageScale("HWANUNG_BODY", new PVector(HWANUNG_BODY_X, HWANUNG_BODY_Y - cloudY), new PVector(HWANUNG_BODY_SCALE, HWANUNG_BODY_SCALE));
    image.DrawImageScale("HWANUNG_FACE", new PVector(HWANUNG_FACE_X, HWANUNG_FACE_Y - cloudY), new PVector(HWANUNG_FACE_SCALE, HWANUNG_FACE_SCALE));
    image.DrawImage("cloud", new PVector(width / 2, height / 2 - cloudY));
    cloudY -= 0.2f;
    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S1C16());
    }
  }

  @Override public void OnExit() {
  }
}
