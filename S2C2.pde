public class S2C2 extends Scene {
  public float SCENE_DURATION = 6f;

  public float ROTATE_INTERVAL = 0.167f;
  public float rotateTick = 0f;

  public float WALK_INTERVAL = 0.090f;
  public float walkTick = 0f;
  private int imageNumber = 1;
  private int imageMaxNumber = 3;
  private int imageNumberDelta = 1;

  private int rock_x = 1000;
  private int rock_y = 450;

  private int rock_width = 200;
  private int rock_height = 200;

  private float _rock_size = 0.5;
  private float _rock_rotate = 0.01;

  private float tiger_x = 20;
  private float tiger_y = 400;
  private float bear_x = -200;
  private float bear_y = 400;

  private int animation = 1;

  private float stepDuration = 0f;
  private float stepSoundInterval = 0.3f;
  private float stepSeconds = 0;
  private int stepID = 0;

  private boolean isPlayedEffect = false;

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

    sound.LoadSound("S2_S3_FootStuckRock", "Sounds/Effects/FootStuckRock2.mp3");
    sound.LoadSound("step1", "Sounds/Effects/Step_Cave2.mp3");
    sound.LoadSound("step2", "Sounds/Effects/Step_Cave3.mp3");
    sound.LoadSound("step3", "Sounds/Effects/Step_Cave4.mp3");
    image.LoadImage("tiger1", "Images/S2/C2/tiger1");
    image.LoadImage("tiger2", "Images/S2/C2/tiger2");
    image.LoadImage("tiger3", "Images/S2/C2/tiger3");
    image.LoadImage("bear1", "Images/S2/C2/bear1");
    image.LoadImage("bear2", "Images/S2/C2/bear2");
    image.LoadImage("bear3", "Images/S2/C2/bear3");

    _rock_size = 0.5;
    _rock_rotate = 0.01;
    tiger_x = 20;
    tiger_y = 400;
    bear_x = -200;
    bear_y = 400;
    animation = 1;
    rotateTick = 0f;
    walkTick = 0f;
    isPlayedEffect = false;
  }

  @Override public void OnDraw() {
    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S2C3());
    }
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));

    // image.DrawImageScale("tiger_face", new PVector(tiger_x + 30, tiger_y - 50, 0), new PVector(0.2,0.2,0));
    // image.DrawImageScale("tiger_left", new PVector(tiger_x - 30, tiger_y + 140, 0), new PVector(0.2,0.2,0), animation * -0.15);
    // image.DrawImageScale("tiger_right", new PVector(tiger_x + 30, tiger_y + 140, 0), new PVector(0.2,0.2,0), animation * 0.15);
    // image.DrawImageScale("tiger_body", new PVector(tiger_x, tiger_y, 0), new PVector(0.2,0.2,0));

    // image.DrawImageScale("bear_face", new PVector(bear_x + 20, bear_y - 30, 0), new PVector(0.2,0.2,0));
    // image.DrawImageScale("bear_left", new PVector(bear_x - 30, bear_y + 140, 0), new PVector(0.2,0.2,0), animation * -0.15);
    // image.DrawImageScale("bear_right", new PVector(bear_x + 30, bear_y + 140, 0), new PVector(0.2,0.2,0), animation * 0.15);
    // image.DrawImageScale("bear_body", new PVector(bear_x, bear_y, 0), new PVector(0.2,0.2,0));

    image.DrawImageScale("tiger" + imageNumber, new PVector(tiger_x, tiger_y + 30, 0), new PVector(0.2,0.2,0));
    image.DrawImageScale("bear" + imageNumber, new PVector(bear_x, bear_y + 30, 0), new PVector(0.2,0.2,0));

    // move tiger, bear
    if (time.time - enterTime > 4.167f) {
      rotateTick += time.deltaTime;
      if (rotateTick > ROTATE_INTERVAL) {
        rotateTick = 0;
        _rock_rotate *= -1;
      }
      image.DrawImageScale("rock", new PVector(rock_x, rock_y, 0), new PVector(_rock_size, _rock_size, 0), _rock_rotate);

      if (_rock_size >= 0.4f) {
        _rock_size -= 0.6f * time.deltaTime;
      }
    } else {
      walkTick += time.deltaTime;

      //발소리
      if (stepSeconds >= stepSoundInterval && stepDuration < 4.167f) {
        stepID = int(random(2));
        if (stepID == 0) {
          sound.PlaySound("step1");
        }
        else if (stepID == 1) {
          sound.PlaySound("step2");
        }
        else if (stepID == 2) {
          sound.PlaySound("step3");
        }
        stepSeconds = 0;
      } else {
        stepDuration += time.deltaTime;
        stepSeconds += time.deltaTime;
      }
      if (walkTick > WALK_INTERVAL) {
        walkTick = 0;
        animation *= -1;

        imageNumber += imageNumberDelta;

        // if (imageNumber == 1 || imageNumber == imageMaxNumber) {
          //   imageNumberDelta *= -1;
          // }
        if (imageNumber == imageMaxNumber) {
          imageNumber = 1;
        }
      }
      tiger_x += 180 * time.deltaTime;
      bear_x += 180 * time.deltaTime;
    }
    if (time.time- enterTime >SCENE_DURATION) {
      scene.ChangeScene(new S2C3());
    }
    if (!isPlayedEffect && time.time- enterTime > 4.367f) {
      sound.PlaySound("S2_S3_FootStuckRock");
      isPlayedEffect = true;
    }
  }

  @Override public void OnExit() {
  }
}
