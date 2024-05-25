public class S3C3V2 extends Scene {
  private float tiger_SCALE = 0.2;
  private static final float bear_SCALE = 0.25;

  private static final float bear_X = 300;
  private static final float bear_Y = 450;
  private float tiger_X = 800;
  private float tiger_Y = 250;

  private static final float bear_EYE_X = 295;
  private static final float bear_EYE_Y = 400;
  private static final float bear_MOU_X = 305;
  private static final float bear_MOU_Y = 460;

  private int imageIndex = 0;
  private String[] tigerList = {
    "tigerMove", "tigerStop" }
  ;
  private int time = 0;

  // private int 변수는이렇게선언해주세요;

  public S3C3V2() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S3/C3/V2/_1/_0/background");
    image.LoadImage("bear", "Images/S3/C3/V2/_1/_0/bear");
    image.LoadImage("bearE", "Images/S3/C3/V2/_1/_0/bearE");
    image.LoadImage("bearM", "Images/S3/C3/V2/_1/_0/bearM");
    image.LoadImage("tiger", "Images/S3/C3/V2/_1/_0/tiger");
    image.LoadImage("tigerMove", "Images/S3/C3/V2/_1/_0/tigerMove");
    image.LoadImage("tigerStop", "Images/S3/C3/V2/_1/_0/tigerStop");
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImageScale("bearE", new PVector(bear_EYE_X, bear_EYE_Y), new PVector(bear_SCALE, bear_SCALE, 0));
    image.DrawImageScale("bear", new PVector(bear_X, bear_Y), new PVector(bear_SCALE, bear_SCALE, 0));
    image.DrawImageScale("bearM", new PVector(bear_MOU_X, bear_MOU_Y), new PVector(bear_SCALE, bear_SCALE, 0));

    if (time % 20 == 0 && tiger_X < 950) {
      imageIndex++;
    }
    imageIndex %= 2;

    image.DrawImageScale(tigerList[imageIndex], new PVector(tiger_X, tiger_Y), new PVector(tiger_SCALE, tiger_SCALE, 0));

    if (time % 2 == 0 && tiger_X < 950) {
      tiger_X += 3;
      tiger_Y -= 1;
      tiger_SCALE -= 0.002;
    } else {
      time++;
    }
  }

  @Override public void OnExit() {
  }
}
