public class S1C15V1 extends Scene {
  private final static String PREFIX = "Images/S1/C15-1/";
  public float SCENE_DURATION = 10f;
  private float HWANUNG_BODY_X = width / 2;
  private float HWANUNG_BODY_Y = height / 2 + 50;
  private float HWANUNG_BODY_SCALE = 0.25;
  private float HWANUNG_FACE_X = width / 2;
  private float HWANUNG_FACE_Y = height / 2 - 120;
  private float HWANUNG_FACE_SCALE = 0.3;
  private float HWANUNG_SWEAT_X = width / 2 + 10;
  private float HWANUNG_SWEAT_Y = height / 2;
  private float HWANUNG_SWEAT_SCALE = 0.4;
  private float flowY = 0;
  private float faceX = 0;

  @Override public void OnEnter() {
    image.LoadImage("background", PREFIX + "background");
    image.LoadImage("HWANUNG_BODY", PREFIX + "HWANUNG_BODY");
    image.LoadImage("HWANUNG_FACE", PREFIX + "HWANUNG_FACE");
    image.LoadImage("HWANUNG_SWEAT", PREFIX + "HWANUNG_SWEAT");
    flowY = 0;
    faceX = 0;
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImageScale("HWANUNG_BODY", new PVector(HWANUNG_BODY_X, HWANUNG_BODY_Y), new PVector(HWANUNG_BODY_SCALE, HWANUNG_BODY_SCALE));
    faceX = sin(float(millis()) * 0.004) * 4;
    image.DrawImageScale("HWANUNG_FACE", new PVector(HWANUNG_FACE_X + faceX + 2, HWANUNG_FACE_Y), new PVector(HWANUNG_FACE_SCALE, HWANUNG_FACE_SCALE));
    if (flowY <= 1.0) {
      flowY += 0.02;
    } else {
      flowY = 0;
    }
    HWANUNG_SWEAT_Y = height / 2 +(flowY * 40) - 150;
    image.DrawImageScale("HWANUNG_SWEAT", new PVector(HWANUNG_SWEAT_X + 4, HWANUNG_SWEAT_Y), new PVector(HWANUNG_SWEAT_SCALE, HWANUNG_SWEAT_SCALE));

    if (time.time - enterTime > SCENE_DURATION) {
      //scene.ChangeScene("S1C16");
    }
  }

  @Override public void OnExit() {
  }
}
