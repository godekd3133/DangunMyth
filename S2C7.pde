public class S2C7 extends Scene {
  private float animalScale = 0.25f;
  private float utilScale = 0.035f;
  private float tearScale = 0.025f;
  private int bearY = height - 280;
  private int tigerY = height - 305;
  private float handX = 530f;
  private int handY = 470;
  private float handRotate = 0.0f;
  private float handAngle = 0.01f;
  private float handDir = -0.4f;
  private float tearLeftY = height - 280f;
  private float tearRightY = height - 290f;
  private float tearSpeedL = 0f;
  private float tearSpeedR = 0f;

  public S2C7() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C7/background");
    image.LoadImage("bear", "Images/S2/C7/bear");
    image.LoadImage("hand", "Images/S2/C7/bear_eyes");
    image.LoadImage("ssug", "Images/S2/C7/bear_mouth");
    image.LoadImage("tiger", "Images/S2/C7/tiger_body");
    image.LoadImage("garlic", "Images/S2/C7/tiger_eyes");
    image.LoadImage("basket", "Images/S2/C7/tiger_head");
    image.LoadImage("tear", "Images/S2/C7/tiger_mouth");
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));
    image.DrawImageScale("bear_eyes", new PVector(width / 2 - 200, height - 280), new PVector(animalScale, animalScale));
    image.DrawImageScale("bear", new PVector(width / 2 - 200, height - 280), new PVector(animalScale, animalScale));
    image.DrawImageScale("bear_mouth", new PVector(width / 2 - 200, height - 280), new PVector(animalScale, animalScale));
    image.DrawImageScale("tiger_eyes", new PVector(width / 2 + 50, height - 305), new PVector(animalScale, animalScale));
    image.DrawImageScale("tiger_head", new PVector(width - 130, height - 210), new PVector(utilScale, utilScale), -0.3f);
    image.DrawImageScale("tiger_eyes", new PVector(width - 180, height - 100), new PVector(utilScale, utilScale), 0.5f);
    image.DrawImageScale("tiger_mouth", new PVector(width - 50, height - 170), new PVector(utilScale, utilScale), 0.3f);
  }

  @Override public void OnExit() {
    // scene.ChangeScene(new S2C7());
  }
}
