public class S1C9 extends Scene {
  private int cloudX;
  private int handY;

  public S1C9() {
    cloudX = 0;
    handY = 0;
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C9/background");
    image.LoadImage("cloud01", "Images/S1/C9/cloud_01");
    image.LoadImage("cloud02", "Images/S1/C9/cloud_02");
    image.LoadImage("cloud03", "Images/S1/C9/cloud_03");
    image.LoadImage("hand", "Images/S1/C9/hand");
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));

    image.DrawImage("cloud01", new PVector(width / 2 - 400 + cloudX, height / 2, 0));
    image.DrawImage("cloud02", new PVector(width / 2 - 400 + cloudX, height / 2, 0));
    image.DrawImage("cloud03", new PVector(width / 2 + 400 - cloudX, height / 2, 0));

    image.DrawImageScale("hand", new PVector(width / 2 + 250, height + 200 - handY, 0), new PVector(0.67, 0.67, 0), -0.6);

    if (cloudX < 400) {
        cloudX += 2;
    } 
    if (handY < 300) {
        handY += 3;
    }

    if (cloudX < 400) {
      //scene.ChangeScene(new S1C10());
    }
  }

  @Override public void OnExit() {
  }
}
