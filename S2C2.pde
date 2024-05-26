public class S2C2 extends Scene {
  public float SCENE_DURATION = 10f;

  public float ROTATE_INTERVAL = 0.167f;
  public float rotateTick = 0f;

  public float WALK_INTERVAL = 0.075f;
  public float walkTick = 0f;

  private int rock_x = 1100;
  private int rock_y = 500;

  private int rock_width = 200;
  private int rock_height = 200;

  private float _rock_size = 0.4;
  private float _rock_rotate = 0.01;

  private float tiger_x = 20;
  private float tiger_y = 400;
  private float bear_x = -200;
  private float bear_y = 400;

  private int animation = 1;

  public S2C2() {
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
    _rock_size = 0.4;
    _rock_rotate = 0.01;
    tiger_x = 20;
    tiger_y = 400;
    bear_x = -200;
    bear_y = 400;
    animation = 1;
    rotateTick = 0f;
    walkTick = 0f;
  }

  @Override public void OnDraw() {
    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S2C3());
    }
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));

    // move tiger, bear
    if (time.time -enterTime > 3.167f) {
      rotateTick += time.deltaTime;
      if (rotateTick > ROTATE_INTERVAL) {
        rotateTick = 0;
        _rock_rotate *= -1;
      }
      image.DrawImageScale("rock", new PVector(rock_x, rock_y, 0), new PVector(_rock_size, _rock_size, 0), _rock_rotate);

      if (_rock_size >= 0.2f) {
        _rock_size -= 0.6f * time.deltaTime;
      }
    } else {
      walkTick += time.deltaTime;
      if (walkTick > WALK_INTERVAL) {
        walkTick = 0;
        animation *= -1;
      }
      tiger_x += 240 * time.deltaTime;
      bear_x += 240 * time.deltaTime;
    }
    image.DrawImageScale("tiger_face", new PVector(tiger_x + 30, tiger_y - 50, 0), new PVector(0.2,0.2,0));
    image.DrawImageScale("tiger_left", new PVector(tiger_x - 30, tiger_y + 140, 0), new PVector(0.2,0.2,0), animation * -0.15);
    image.DrawImageScale("tiger_right", new PVector(tiger_x + 30, tiger_y + 140, 0), new PVector(0.2,0.2,0), animation * 0.15);
    image.DrawImageScale("tiger_body", new PVector(tiger_x, tiger_y, 0), new PVector(0.2,0.2,0));

    image.DrawImageScale("bear_face", new PVector(bear_x + 20, bear_y - 30, 0), new PVector(0.2,0.2,0));
    image.DrawImageScale("bear_left", new PVector(bear_x - 30, bear_y + 140, 0), new PVector(0.2,0.2,0), animation * -0.15);
    image.DrawImageScale("bear_right", new PVector(bear_x + 30, bear_y + 140, 0), new PVector(0.2,0.2,0), animation * 0.15);
    image.DrawImageScale("bear_body", new PVector(bear_x, bear_y, 0), new PVector(0.2,0.2,0));

    if (time.time- enterTime >SCENE_DURATION) {
      scene.ChangeScene(new S2C3());
    }
  }

  @Override public void OnExit() {
  }
}
