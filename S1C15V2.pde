public class S1C15V2 extends Scene {
  private final static String PREFIX = "Images/S1/C15-2/";
  public float SCENE_DURATION = 10f;
  private float HWANUNG_BODY_X = width / 2;
  private float HWANUNG_BODY_Y = height / 2 + 50;
  private float HWANUNG_BODY_SCALE = 0.25;
  private float HWANUNG_FACE_X = width / 2 + 6;
  private float HWANUNG_FACE_Y = height / 2 - 120;
  private float HWANUNG_FACE_SCALE = 0.3;
  private float faceY = 0;
  private int startMinute;
  private int startSecond;

  @Override public void OnEnter() {
    image.LoadImage("background", PREFIX + "background");
    image.LoadImage("HWANUNG_BODY", PREFIX + "HWANUNG_BODY");
    image.LoadImage("HWANUNG_FACE", PREFIX + "HWANUNG_FACE");
    startMinute=minute();
    startSecond=second();
    faceY = 0f;
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImageScale("HWANUNG_BODY", new PVector(HWANUNG_BODY_X, HWANUNG_BODY_Y), new PVector(HWANUNG_BODY_SCALE, HWANUNG_BODY_SCALE));
    faceY = sin(float(millis()) * 0.01) * 4;
    image.DrawImageScale("HWANUNG_FACE", new PVector(HWANUNG_FACE_X, HWANUNG_FACE_Y + faceY), new PVector(HWANUNG_FACE_SCALE, HWANUNG_FACE_SCALE));

    if (time.time - enterTime > SCENE_DURATION) {
      //scene.ChangeScene("S1C16");
    }
  }

  @Override public void OnExit() {
  }
}
