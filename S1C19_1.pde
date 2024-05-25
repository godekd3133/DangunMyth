public class S1C19_1 extends Scene {
  private float tigerX = width - 200;
  private float tigerY = height - 150;
  private float bearX = width - 450;
  private float bearY = height - 150;
  private String[] leftRoutine = {
    "left_leg0", "left_leg1", "left_leg0", "left_leg2", "left_leg0"}
  ;
  private String[] rightRoutine = {
    "right_leg0", "right_leg2", "right_leg0", "right_leg1", "right_leg0"}
  ;
  private int currentIndex = 0;
  private int changeInterval = 3;

  public S1C19_1() {
  }

  @Override public void OnEnter() {
    tigerX = width - 200;
    tigerY = height - 150;
    bearX = width - 450;
    bearY = height - 150;

    image.LoadImage("background", "Images/S1/C19/background1");
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
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    image.DrawImageScale("hwangwoong", new PVector(320, height - 280, 0), new PVector(0.25f, 0.25f, 0));
    image.DrawImageScale("tiger_eyes", new PVector(tigerX, tigerY, 0), new PVector(0.2f, 0.2f, 0));
    image.DrawImageScale("tiger_"+ leftRoutine[currentIndex], new PVector(tigerX, tigerY, 0), new PVector(0.2f, 0.2f, 0));
    image.DrawImageScale("tiger_skin", new PVector(tigerX, tigerY, 0), new PVector(0.2f, 0.2f, 0));
    image.DrawImageScale("tiger_"+ rightRoutine[currentIndex], new PVector(tigerX, tigerY, 0), new PVector(0.2f, 0.2f, 0));
    image.DrawImageScale("bear_eyes", new PVector(bearX, bearY, 0), new PVector(0.2f, 0.2f, 0));
    image.DrawImageScale("bear_" + leftRoutine[currentIndex], new PVector(bearX, bearY, 0), new PVector(0.2f, 0.2f, 0));
    image.DrawImageScale("bear_skin", new PVector(bearX, bearY, 0), new PVector(0.2f, 0.2f, 0));
    image.DrawImageScale("bear_" + rightRoutine[currentIndex], new PVector(bearX, bearY, 0), new PVector(0.2f, 0.2f,0));

    tigerX -= 0.5f;
    bearX -= 0.5f;
    if (frameCount % changeInterval == 0) {
      currentIndex++;
      if (currentIndex >= leftRoutine.length) {
        currentIndex = 0;
      }
    }
    if (bearX <= width / 2) {
      // scene.ChangeScene(new S1C19_2());
    }
  }

  @Override public void OnExit() {
  }
}
