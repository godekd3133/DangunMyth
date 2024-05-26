public class S1C2 extends Scene {
  private static final String BACKGROUND_IMAGE = "Images/S1/C2/background";
  private static final String CLOUD_IMAGE = "Images/S1/C2/cloud";
  private static final int MAX_TIMER = 25;

  private int backgroundAlpha;
  private int cloudX;

  public S1C2() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", BACKGROUND_IMAGE);
    image.LoadImage("cloud01", CLOUD_IMAGE);

    backgroundAlpha = 255;
    cloudX = 0;
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(0.67f, 0.67f, 0));
    image.DrawImageScale("cloud01", new PVector(width / 2 - cloudX, height / 2, 0), new PVector(0.67f, 0.67f, 0));

    fill(0, backgroundAlpha);
    rect(0, 0, width, height);

    if (backgroundAlpha > 0) {
      backgroundAlpha -= 70 - time.deltaTime;
    }
    if (cloudX > width / 2 + 200) {
      // scene.ChangeScene(new S1C3());
    }
  }

  @Override public void OnExit() {
  }
}
