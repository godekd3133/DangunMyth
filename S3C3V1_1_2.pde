public class S3C3V1_1_2 extends Scene {
  private int _time = 0;

  private float tiger_x = 800;
  private float tiger_y = 400;
  private float bear_x = 500;
  private float bear_y = 400;

  private float bear_star_size = 0.2;
  private float tiger_star_size = 0.1;
  private float bear_star_a = 0.03;
  private float tiger_star_a = -0.03;

  public S3C3V1_1_2() {
    //backgroundAlpha = 255;
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S3/C3/V1/_1/_2/background");
    image.LoadImage("bear", "Images/S3/C3/V1/_1/_2/bear");
    image.LoadImage("bear_star", "Images/S3/C3/V1/_1/_2/bear_star");
    image.LoadImage("tiger", "Images/S3/C3/V1/_1/_2/tiger");
    image.LoadImage("tiger_star", "Images/S3/C3/V1/_1/_2/tiger_star");

    _time = 0;
    tiger_x = 800;
    tiger_y = 400;
    bear_x = 500;
    bear_y = 400;
    bear_star_size = 0.2;
    tiger_star_size = 0.1;
    bear_star_a = 0.03;
    tiger_star_a = -0.03;
  }

  @Override public void OnDraw() {
    if (_time > 300) {
      // 다음 씬 이동?
      return;
    }
    _time++;
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));

    image.DrawImageScale("bear", new PVector(bear_x, bear_y, 0), new PVector(0.2, 0.2, 0));
    image.DrawImageScale("tiger", new PVector(tiger_x, tiger_y, 0), new PVector(0.2, 0.2, 0));

    if (_time % 3 == 0) {
      bear_star_size -= bear_star_a;
      tiger_star_size -= tiger_star_a;

      if (bear_star_size > 0.2 || bear_star_size < 0.1) {
        bear_star_a *= -1;
      }
      if (tiger_star_size > 0.2 || tiger_star_size < 0.1) {
        tiger_star_a *= -1;
      }
    }
    image.DrawImageScale("bear_star", new PVector(300, 200, 0), new PVector(bear_star_size, bear_star_size, 0));
    image.DrawImageScale("tiger_star", new PVector(1000, 200, 0), new PVector(tiger_star_size, tiger_star_size, 0));

  }

  @Override public void OnExit() {
  }
}
