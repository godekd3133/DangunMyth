public class S1C1 extends Scene {
  private int backgroundAlpha;
  private int cloudX;

  public S1C1() {
    backgroundAlpha = 255;
    cloudX = 0;
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C1/background");
    image.LoadImage("cloud01", "Images/S1/C1/cloud_01");
    image.LoadImage("cloud02", "Images/S1/C1/cloud_02");
    image.LoadImage("cloud03", "Images/S1/C1/cloud_03");
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(0.67f, 0.67f, 0));

    image.DrawImageScale("cloud01", new PVector(width / 2 - cloudX, height / 2, 0), new PVector(0.67f, 0.67f, 0));
    image.DrawImageScale("cloud02", new PVector(width / 2 + cloudX, height / 2, 0), new PVector(0.67f, 0.67f, 0));
    image.DrawImageScale("cloud03", new PVector(width / 2 - cloudX, height / 2, 0), new PVector(0.67f, 0.67f, 0));

    noStroke();
    fill(0, backgroundAlpha);
    rect(0, 0, width, height);

    if (backgroundAlpha > 0) {
      backgroundAlpha -= 4;
    }
    if (backgroundAlpha < 180) {
      cloudX += 8;
    }
    if (cloudX > width / 2 + 200) {
      //secne.ChangeScene(new S1C2());
    }
  }

  @Override public void OnExit() {
  }
}
