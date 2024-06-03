public class S3C3V1_1_1 extends Scene {
  private int _time = 0;
  private float SCENE_DURATION = 5.33f; // 5초 동안 씬 진행

  private float tiger_x = 800;
  private float tiger_y = 400;
  private float bear_x = 500;
  private float bear_y = 400;

  public S3C3V1_1_1() {
  }

  @Override public void OnEnter() {
    println("Enter S3C3V1_1_1");
    image.LoadImage("background", "Images/S3/C3/V1/_1/_1/background");
    image.LoadImage("bear_before", "Images/S3/C3/V1/_1/_1/bear_before");
    image.LoadImage("bear_after", "Images/S3/C3/V1/_1/_1/bear_after");
    image.LoadImage("tiger_before", "Images/S3/C3/V1/_1/_1/tiger_before");
    image.LoadImage("tiger_after", "Images/S3/C3/V1/_1/_1/tiger_after");

    _time = 0;
  }

  @Override public void OnDraw() {
    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S3C3V1_1_2());
    }
    _time+=2;
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));

    if (_time < 100) {
      image.DrawImageScale("bear_before", new PVector(bear_x, bear_y, 0), new PVector(0.3, 0.3, 0), 0);
      image.DrawImageScale("tiger_before", new PVector(tiger_x, tiger_y, 0), new PVector(0.3, 0.3, 0), 0);
    } else {
      image.DrawImageScale("bear_before", new PVector(bear_x, bear_y, 0), new PVector(0.3, 0.3, 0), 0, 255);
      image.DrawImageScale("bear_after", new PVector(bear_x, bear_y, 0), new PVector(0.3, 0.3, 0), 0, _time);

      image.DrawImageScale("tiger_before", new PVector(tiger_x, tiger_y, 0), new PVector(0.3, 0.3, 0), 0, 255);
      image.DrawImageScale("tiger_after", new PVector(tiger_x, tiger_y, 0), new PVector(0.3, 0.3, 0), 0, _time);

    }
  }

  @Override public void OnExit() {
  }
}
