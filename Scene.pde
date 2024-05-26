public abstract class Scene {
  public float enterTime;

  public Scene() {
  }
  public abstract void OnEnter();
  public abstract void OnDraw();
  public abstract void OnExit();
}
