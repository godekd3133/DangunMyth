public class TimeManager {
  public float deltaTime;
  private float currentTime = 0f;
  private float lastTime = 0f;

  public TimeManager() {
    lastTime = millis();
  }

  public void OnDraw() {
    //get deltaTime on processing
    lastTime = currentTime;
    currentTime = millis();
    deltaTime =(currentTime - lastTime) / 1000f;
  }
}
