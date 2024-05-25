public class S2C2 extends Scene {
  private int backgroundAlpha;

  private static final int rock_x = 1100;
  private static final int rock_y = 500;

  private static final int rock_width = 200;
  private static final int rock_height = 200;

  private int _time = 0;
  private float _rock_size = 0.4;
  private float _rock_rotate = 0.01;

  private float tiger_x = 20;
  private float tiger_y = 400;
  private float bear_x = -200;
  private float bear_y = 400;

  private int animation = 1;

  public S2C2() {
    backgroundAlpha = 255;

    _time = 0;
    _rock_size = 0.4;
    _rock_rotate = 0.01;
    tiger_x = 20;
    tiger_y = 400;
    bear_x = -200;
    bear_y = 400;

    animation = 1;

  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C2/background");
    image.LoadImage("rock", "Images/S2/C2/rock");
    image.LoadImage("tiger_body", "Images/S2/C2/tiger_body");
    image.LoadImage("tiger_face", "Images/S2/C2/tiger_face");
    image.LoadImage("tiger_left", "Images/S2/C2/tiger_foot_right");
    image.LoadImage("tiger_right", "Images/S2/C2/tiger_foot_left");

    image.LoadImage("bear_body", "Images/S2/C2/bear_body");
    image.LoadImage("bear_face", "Images/S2/C2/bear_face");
    image.LoadImage("bear_left", "Images/S2/C2/bear_foot_right");
    image.LoadImage("bear_right", "Images/S2/C2/bear_foot_left");
  }

  @Override public void OnDraw() {
    if (_time > 320) {
      // 다음 씬 이동?
      print("end");
      return;
    }
    _time++;

    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));

    noStroke();
    fill(0, backgroundAlpha);
    rect(0, 0, width, height);

    if (backgroundAlpha > 0) {
      backgroundAlpha -= 4;
    }
    // move tiger, bear

    if (_time > 190) {
      if (_time % 10 == 0) {
        _rock_rotate *= -1;
      }
      image.DrawImageScale("rock", new PVector(rock_x, rock_y, 0), new PVector(_rock_size, _rock_size, 0), _rock_rotate);

      if (_rock_size >= 0.2) {
        _rock_size -= 0.01;
      }
    } else {
      if (_time % 5 == 0) {
        animation*= -1;
        tiger_x += 20;
        bear_x += 20;
      }
    }
    image.DrawImageScale("tiger_face", new PVector(tiger_x + 30, tiger_y - 50, 0), new PVector(0.2,0.2,0));
    image.DrawImageScale("tiger_left", new PVector(tiger_x - 30, tiger_y + 140, 0), new PVector(0.2,0.2,0), animation * -0.15);
    image.DrawImageScale("tiger_right", new PVector(tiger_x + 30, tiger_y + 140, 0), new PVector(0.2,0.2,0), animation * 0.15);
    image.DrawImageScale("tiger_body", new PVector(tiger_x, tiger_y, 0), new PVector(0.2,0.2,0));

    image.DrawImageScale("bear_face", new PVector(bear_x + 20, bear_y - 30, 0), new PVector(0.2,0.2,0));
    image.DrawImageScale("bear_left", new PVector(bear_x - 30, bear_y + 140, 0), new PVector(0.2,0.2,0), animation * -0.15);
    image.DrawImageScale("bear_right", new PVector(bear_x + 30, bear_y + 140, 0), new PVector(0.2,0.2,0), animation * 0.15);
    image.DrawImageScale("bear_body", new PVector(bear_x, bear_y, 0), new PVector(0.2,0.2,0));
  }

  @Override public void OnExit() {
  }
}
