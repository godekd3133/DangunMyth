public class S2C4 extends Scene {
  public float SCENE_DURATION =3f;

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

  public S2C4() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C4/background");
    image.LoadImage("bear", "Images/S2/C4/bear");
    image.LoadImage("hand", "Images/S2/C4/hand");
    image.LoadImage("tiger", "Images/S2/C4/tiger");
    image.LoadImage("garlic", "Images/S2/C4/garlic");
    image.LoadImage("ssug", "Images/S2/C4/ssug");
    image.LoadImage("basket", "Images/S2/C4/basket");
    image.LoadImage("tear", "Images/S2/C4/tear");

    animalScale = 0.25f;
    utilScale = 0.035f;
    tearScale = 0.025f;
    bearY = height - 280;
    tigerY = height - 305;
    handX = 530f;
    handY = 470;
    handRotate = 0.0f;
    handAngle = 0.6f;
    handDir = -24f;
    tearLeftY = height - 280f;
    tearRightY = height - 290f;
    tearSpeedL = 0f;
    tearSpeedR = 0f;
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));

    // bear hand animation
    image.DrawImageScale("hand", new PVector(handX, handY), new PVector(animalScale, animalScale), handRotate);
    handRotate += handAngle * time.deltaTime;
    handX += handDir * time.deltaTime;
    if (handX < 510 | handX > 530) {
      handAngle *= -1;
      handDir *= -1;
    }
    image.DrawImageScale("bear", new PVector(width / 2 - 200, height - 280), new PVector(animalScale, animalScale));
    image.DrawImageScale("tiger", new PVector(width / 2 + 50, height - 305), new PVector(animalScale, animalScale));
    image.DrawImageScale("basket", new PVector(width / 2 + 360, height - 105), new PVector(0.2f, 0.2f), -0.27f);
    image.DrawImageScale("garlic", new PVector(width - 130, height - 210), new PVector(utilScale, utilScale), -0.3f);
    image.DrawImageScale("garlic", new PVector(width - 180, height - 100), new PVector(utilScale, utilScale), 0.5f);
    image.DrawImageScale("ssug", new PVector(width - 50, height - 170), new PVector(utilScale, utilScale), 0.3f);
    image.DrawImageScale("ssug", new PVector(width - 240, height - 10), new PVector(utilScale, utilScale), -0.5f);

    // tear animation
    if (tearLeftY + tearSpeedL > height - 260) tearSpeedL = 0;
    if (tearRightY + tearSpeedR > height - 270) tearSpeedR = 0;
    tearSpeedL += random(0.3f, 0.9f);
    tearSpeedR += random(0.3f, 0.9f);
    image.DrawImageScale("tear", new PVector(width - 510, tearLeftY + tearSpeedL), new PVector(tearScale, tearScale));
    image.DrawImageScale("tear", new PVector(width - 440, tearRightY + tearSpeedR), new PVector(tearScale, tearScale));

    if (time.time -enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S2C5());
    }
  }

  @Override public void OnExit() {
  }
}
