public class S3C3V1_1 extends Scene {
  private final static String PREFIX = "Images/S3/C3/V1/_1/";
  private float SCENE_DURATION = 7f;

  private boolean bearMouthAction;
  private float bearMouthScale;

  private boolean narrFlag = false;

  public S3C3V1_1() {
  }

  @Override public void OnEnter() {
    println("S3C3V1_1");
    image.LoadImage("background", PREFIX + "background");
    image.LoadImage("bear", PREFIX + "bear");
    image.LoadImage("bearMouth", PREFIX + "bear_mouth");
    image.LoadImage("tiger", PREFIX + "tiger");

    image.LoadImage("text", PREFIX + "text");

    sound.LoadSound("Bear", "Sounds/S3/C3/V1/_1/Bear.mp3");

    narrFlag = false;

    bearMouthAction = true;
    bearMouthScale = 0.25f;
    enterTime = time.time;
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    image.DrawImageScale("bear", new PVector(width / 2, height / 2, 0), new PVector(0.25, 0.25, 0));
    image.DrawImageScale("tiger", new PVector(width / 2, height / 2, 0), new PVector(0.25, 0.25, 0));

    image.DrawImageScale("bearMouth", new PVector(width / 2 - 100, height / 2 + 55, 0), new PVector(bearMouthScale, bearMouthScale, 0));
    image.DrawImage("text", new PVector(width / 2, height / 2, 0));

    if (!narrFlag) {
      narrFlag = true;
      sound.PlaySound("Bear");
    }
    bearMouthScale = bearMouthAction? bearMouthScale + 0.01 : bearMouthScale - 0.01;
    if (bearMouthScale > 0.5 || bearMouthScale < 0.25) {
      bearMouthAction = !bearMouthAction;
    }
    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S3C3V1_2());
    }
  }

  @Override public void OnExit() {
  }
}
