public class S3C3V1_1 extends Scene {
  private final static String PREFIX = "Images/S3/C3/V1/_1/";
  private float SCENE_DURATION = 4.5f;

  private boolean narrFlag = false;

  public S3C3V1_1() {
  }

  @Override public void OnEnter() {
    println("S3C3V1_1");
    image.LoadImage("background", PREFIX + "background");
    image.LoadImage("bear1", PREFIX + "bear1");
    image.LoadImage("bear2", PREFIX + "bear2");
    image.LoadImage("tiger", PREFIX + "tiger");
    image.LoadImage("text", PREFIX + "text");

    sound.LoadSound("Bear", "Sounds/S3/C3/V1/_1/Bear.mp3");

    narrFlag = false;

    enterTime = time.time;
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    image.DrawImageScale("bear"+((millis()/500)%2+1), new PVector(500, 400, 0), new PVector(0.25, 0.25, 0));
    image.DrawImageScale("tiger", new PVector(width / 2, height / 2, 0), new PVector(0.25, 0.25, 0));

    image.DrawImage("text", new PVector(width / 2, height / 2, 0));

    if (!narrFlag) {
      narrFlag = true;
      sound.PlaySound("Bear");
    }
    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S3C3V1_2());
    }
  }

  @Override public void OnExit() {
  }
}
