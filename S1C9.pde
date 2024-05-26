public class S1C9 extends Scene {
  public float SCENE_DURATION = 10f;
  public float MOVING_DURATION = 5f;
  public float PREPARATION_DURATION = 5f;
  private float cloudX;
  private float handY;

  public S1C9() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C9/background");
    image.LoadImage("cloud01", "Images/S1/C9/cloud_01");
    image.LoadImage("cloud02", "Images/S1/C9/cloud_02");
    image.LoadImage("cloud03", "Images/S1/C9/cloud_03");
    image.LoadImage("hand", "Images/S1/C9/hand");

    cloudX = 0;
    handY = 0;
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));

    image.DrawImage("cloud01", new PVector(width / 2 - 400 + cloudX, height / 2, 0));
    image.DrawImage("cloud02", new PVector(width / 2 - 400 + cloudX, height / 2, 0));
    image.DrawImage("cloud03", new PVector(width / 2 + 400 - cloudX, height / 2, 0));

    image.DrawImageScale("hand", new PVector(width / 2 + 250, height + 200 - handY, 0), new PVector(0.67, 0.67, 0), -0.6);
    cloudX = lerp(0, 400,min(1,(time.time - enterTime) / MOVING_DURATION));
    handY = lerp(0, 300,min(1,(time.time -enterTime) / MOVING_DURATION));

    if ((time.time-enterTime) >= SCENE_DURATION) {
      scene.ChangeScene(new S1C11());
    }
  }

  @Override public void OnExit() {
  }
}
