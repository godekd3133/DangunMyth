public class S1C14 extends Scene {
  public float SCENE_DURATION = 10f;

  public S1C14() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C14/background");
    enterTime = time.time;
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    
    if (time.time - enterTime > SCENE_DURATION) {
      //scene.ChangeScene(new S1C15());
    }
  }

  @Override public void OnExit() {
  }
}
