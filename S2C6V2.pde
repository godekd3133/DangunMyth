public class S2C6V2 extends Scene {
  private boolean showButton = false;

  private float bearArmX = width / 2 + 200;
  private float bearArmRotate = 0.0f;
  private float bearArmAngle = 0.01f;
  private float bearArmDir = -0.4f;

  private float tigerArmX = width / 2 - 200;
  private float tigerArmRotate = 0.0f;
  private float tigerArmAngle = 0.01f;
  private float tigerArmDir = 0.4f;
  private float bearArmY = height / 2 + 200;
  private float tigerArmY = height / 2 + 200;
  private float basketY = height / 2 + 190;

  public S2C6V2() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C6/V2/background");
    image.LoadImage("bear_arm", "Images/S2/C6/V2/bear_arm");
    image.LoadImage("tiger_arm", "Images/S2/C6/V2/tiger_arm");
    image.LoadImage("chars", "Images/S2/C6/V2/chars");
    image.LoadImage("basket", "Images/S2/C6/V2/basket");

  }

  @Override public void OnDraw() {
    // 시간에 따라 y 좌표를 업데이트합니다.
    bearArmY = height / 2 + 220 + sin(millis() / 1000.0f) * 20;
    tigerArmY = height / 2 + 220 + sin(millis() / 1000.0f) * 20;
    basketY = height / 2 + 210 + sin(millis() / 1000.0f) * 20;

    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));

    image.DrawImageScale("chars", new PVector(width / 2, height / 2 + 150), new PVector(0.4f, 0.4f));
    image.DrawImageScale("basket", new PVector(width / 2, basketY), new PVector(0.4f, 0.4f));

    image.DrawImageScale("bear_arm", new PVector(bearArmX, bearArmY), new PVector(0.4f, 0.4f), bearArmRotate);
    image.DrawImageScale("tiger_arm", new PVector(tigerArmX, tigerArmY), new PVector(0.4f, 0.4f), tigerArmRotate);
  }

  @Override public void OnExit() {
  }
}
