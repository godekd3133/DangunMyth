public class S3C3V2 extends Scene {
  private float SCENE_DURATION = 5; // 5초 동안 씬 진행

  private float tiger_SCALE = 0.2;
  private float bear_SCALE = 0.25;

  private float bear_X = 300;
  private float bear_Y = 450;
  private float tiger_X = 800;
  private float tiger_Y = 250;

  private float bear_EYE_X = 295;
  private float bear_EYE_Y = 400;
  private float bear_MOU_X = 305;
  private float bear_MOU_Y = 460;

  private int startTime = 0;

  private int imageIndex = 0;
  private String[] tigerList = {
    "tigerMove", "tigerStop" }
  ;

  private float WALK_INTERVAL = 0.075f;
  private float walkTick = 0f;

  public S3C3V2() {
  }

  @Override public void OnEnter() {
    image.LoadImage("text", "Images/S3/C3/V2/_1/_0/text");
    image.LoadImage("background", "Images/S3/C3/V2/_1/_0/background");
    image.LoadImage("bear", "Images/S3/C3/V2/_1/_0/bear");
    image.LoadImage("bearE", "Images/S3/C3/V2/_1/_0/bearE");
    image.LoadImage("bearM", "Images/S3/C3/V2/_1/_0/bearM");
    image.LoadImage("tigerMove", "Images/S3/C3/V2/_1/_0/tigerMove");
    image.LoadImage("tigerStop", "Images/S3/C3/V2/_1/_0/tigerStop");

    sound.LoadSound("woonggirl", "Sounds/S3/C3/V2/_0/narr/woonggirl.mp3");
    sound.PlaySound("woonggirl");

    tiger_X = 800;
    tiger_Y = 250;
    bear_SCALE = 0.25;
    bear_X = 300;
    bear_Y = 450;
    tiger_SCALE = 0.2;

    bear_EYE_X = 295;
    bear_EYE_Y = 400;
    bear_MOU_X = 305;
    bear_MOU_Y = 460;
    imageIndex = 0;
    walkTick = 0f;

  }

  @Override public void OnDraw() {
    int currentProcessingTime =(millis() - startTime) / 1000;
    boolean isEating = currentProcessingTime % 2 == 1;
    int positionToMoveHead = isEating ? 5 : 0;  //입 왔다갔다

    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImageScale("bearE", new PVector(bear_EYE_X, bear_EYE_Y), new PVector(bear_SCALE, bear_SCALE, 0));
    image.DrawImageScale("bear", new PVector(bear_X, bear_Y), new PVector(bear_SCALE, bear_SCALE, 0));
    image.DrawImageScale("bearM", new PVector(bear_MOU_X, bear_MOU_Y + positionToMoveHead), new PVector(bear_SCALE, bear_SCALE, 0));

    if (tiger_X < 950) {
      walkTick += time.deltaTime;
      if (walkTick > WALK_INTERVAL) {
        walkTick =0f;
        imageIndex++;
      }
    }
    image.DrawImageScale(tigerList[imageIndex % 2], new PVector(tiger_X, tiger_Y), new PVector(tiger_SCALE, tiger_SCALE, 0));
    image.DrawImage("text", new PVector(width / 2, height / 2));

    if (tiger_X < 950) {
      tiger_X += 90* time.deltaTime;
      tiger_Y -= 0.5f* time.deltaTime;
      tiger_SCALE -= 0.06f * time.deltaTime;
    }
    if (time.time- enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S3C3V2_1_1());
    }
  }

  @Override public void OnExit() {
    sound.stopNowPlaying();
  }
}
