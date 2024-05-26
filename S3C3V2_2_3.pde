public class S3C3V2_2_3 extends Scene {
  private final static String PREFIX = "Images/S3/C3/V2/_2/_3/";
  private float SCENE_DURATION = 7f;

  public S3C3V2_2_3() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", PREFIX + "background");
    image.LoadImage("dangun", PREFIX + "dangun");

    enterTime = time.time;
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    image.DrawImageScale("dangun", new PVector(width / 2, height / 2 + 60, 0), new PVector(0.22, 0.22, 0));

    if (time.time - enterTime > SCENE_DURATION) {
      //scene.ChangeScene(엔딩크래딧);
    }
  }

  @Override public void OnExit() {

  }
}
