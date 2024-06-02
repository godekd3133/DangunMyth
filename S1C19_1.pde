public class S1C19_1 extends Scene {
  public float SCENE_DURATION = 10f;
  private float tigerX = width - 200;
  private float tigerY = height - 150;
  private float bearX = width - 450;
  private float bearY = height - 150;

  private boolean narrFlag = false;
  private float narrDuration = 4.5f;

  private boolean animalVoiceFlag = false;

  private String[] leftRoutine = {
    "left_leg0", "left_leg1", "left_leg0", "left_leg2", "left_leg0"}
  ;
  private String[] rightRoutine = {
    "right_leg0", "right_leg2", "right_leg0", "right_leg1", "right_leg0"}
  ;
  private int currentIndex = 0;

  private float changeInterval = 0.075f;
  private float changeTick = 0f;

  public S1C19_1() {
  }

  @Override public void OnEnter() {
    tigerX = width - 200;
    tigerY = height - 350;
    bearX = width - 400;
    bearY = height - 350;
    changeTick = 0f;

    animalVoiceFlag = false;
    narrFlag = false;

    image.LoadImage("background", "Images/S1/C19/background0");
    image.LoadImage("hwangwoong", "Images/S1/C19/hwanwoong_back");
    image.LoadImage("tiger_eyes", "Images/S1/C19/tiger_eyes");
    image.LoadImage("tiger_skin", "Images/S1/C19/tiger_skin");
    image.LoadImage("tiger_left_leg0", "Images/S1/C19/tiger_left_leg0");
    image.LoadImage("tiger_left_leg1", "Images/S1/C19/tiger_left_leg1");
    image.LoadImage("tiger_left_leg2", "Images/S1/C19/tiger_left_leg2");
    image.LoadImage("tiger_right_leg0", "Images/S1/C19/tiger_right_leg0");
    image.LoadImage("tiger_right_leg1", "Images/S1/C19/tiger_right_leg1");
    image.LoadImage("tiger_right_leg2", "Images/S1/C19/tiger_right_leg2");
    image.LoadImage("bear_eyes", "Images/S1/C19/bear_eyes");
    image.LoadImage("bear_skin", "Images/S1/C19/bear_skin");
    image.LoadImage("bear_left_leg0", "Images/S1/C19/bear_left_leg0");
    image.LoadImage("bear_left_leg1", "Images/S1/C19/bear_left_leg1");
    image.LoadImage("bear_left_leg2", "Images/S1/C19/bear_left_leg2");
    image.LoadImage("bear_right_leg0", "Images/S1/C19/bear_right_leg0");
    image.LoadImage("bear_right_leg1", "Images/S1/C19/bear_right_leg1");
    image.LoadImage("bear_right_leg2", "Images/S1/C19/bear_right_leg2");

    image.LoadImage("C19-1-Text", "Images/S1/C19/C19-1-Text");

    sound.LoadSound("narr", "Sounds/S1/C19-1/narr.mp3");
    sound.LoadSound("Tiger", "Sounds/S1/C19-1/Tiger.mp3");
    sound.LoadSound("Bear", "Sounds/S1/C19-1/Bear.mp3");

  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    image.DrawImage("C19-1-Text", new PVector(width / 2, height / 2, 0));
    image.DrawImageScale("hwangwoong", new PVector(320, height - 280, 0), new PVector(0.25f, 0.25f, 0));
    image.DrawImageScale("tiger_eyes", new PVector(tigerX, tigerY, 0), new PVector(0.15f, 0.15f, 0));
    image.DrawImageScale("tiger_"+ leftRoutine[currentIndex], new PVector(tigerX, tigerY, 0), new PVector(0.15f, 0.15f, 0));
    image.DrawImageScale("tiger_skin", new PVector(tigerX, tigerY, 0), new PVector(0.15f, 0.15f, 0));
    image.DrawImageScale("tiger_"+ rightRoutine[currentIndex], new PVector(tigerX, tigerY, 0), new PVector(0.15f, 0.15f, 0));
    image.DrawImageScale("bear_eyes", new PVector(bearX, bearY, 0), new PVector(0.15f, 0.15f, 0));
    image.DrawImageScale("bear_" + leftRoutine[currentIndex], new PVector(bearX, bearY, 0), new PVector(0.15f, 0.15f, 0));
    image.DrawImageScale("bear_skin", new PVector(bearX, bearY, 0), new PVector(0.15f, 0.15f, 0));
    image.DrawImageScale("bear_" + rightRoutine[currentIndex], new PVector(bearX, bearY, 0), new PVector(0.15f, 0.15f,0));

    // if (bearX > width / 2) {
      //   tigerX -= 30f*time.deltaTime;
      //   bearX -= 30f*time.deltaTime;
      // }
    changeTick += time.deltaTime;
    if (changeTick >= changeInterval) {
      currentIndex++;
      if (currentIndex >= leftRoutine.length) {
        currentIndex = 0;
      }
      changeTick = 0f;
    }
    //
    if (!narrFlag) {
      narrFlag = true;
      sound.PlaySound("narr");
    }
    //
    if (time.time - enterTime >= narrDuration) {
      if (!animalVoiceFlag) {
        animalVoiceFlag = true;
        sound.PlaySound("Tiger");
        sound.PlaySound("Bear");

      }
    }
    if (time.time - enterTime >= SCENE_DURATION) {
      scene.ChangeScene(new S1C19_2());
    }
  }

  @Override public void OnExit() {
  }
}
