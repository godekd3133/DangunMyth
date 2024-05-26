public class S2C5 extends Scene {
  public float SCENE_DURATION =5f;

  public S2C5() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C5/background");
    image.LoadImage("bear1", "Images/S2/C5/bear1");
    image.LoadImage("bear2", "Images/S2/C5/bear2");
    image.LoadImage("tiger1", "Images/S2/C5/tiger1");
    image.LoadImage("tiger2", "Images/S2/C5/tiger2");
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));
    image.DrawImageScale("bear1", new PVector(width / 2, height / 2), new PVector(0.2, 0.2));
    image.DrawImageScale("bear2", new PVector(width / 2, height / 2), new PVector(0.2, 0.2));
    image.DrawImageScale("tiger1", new PVector(width / 2, height / 2), new PVector(0.2, 0.2));
    image.DrawImageScale("tiger2", new PVector(width / 2, height / 2), new PVector(0.2, 0.2));

    if (time.time - enterTime > SCENE_DURATION) {
      //미니게임
      //scene.ChangeScene(new S2C6());
    }
  }

  @Override public void OnExit() {
  }
}
