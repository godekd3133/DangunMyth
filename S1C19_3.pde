public class S1C19_3 extends Scene {
  public float SCENE_DURATION = 10f;
  private float handX;
  private float animalX;
  private float animalY;
  private float basketX;
  private float basketY;

  public S1C19_3() {
  }

  @Override public void OnEnter() {
    handX = 150;
    animalX = width - 250;
    animalY = height - 200;
    basketX = handX + 450;
    basketY = 250;
    image.LoadImage("background", "Images/S1/C19/background2");
    image.LoadImage("hands", "Images/S1/C19/hands");
    image.LoadImage("hwangwoong", "Images/S1/C19/hwanwoong_hand");
    image.LoadImage("basket", "Images/S1/C19/basket");
    // image.LoadImage("mugwort", "Images/S1/C19/mugwort");
    // image.LoadImage("garlic", "Images/S1/C19/garlic");
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    image.DrawImageScale("hands", new PVector(animalX, animalY, 0), new PVector(0.3, 0.3, 0));
    image.DrawImageScale("hwangwoong", new PVector(handX, 150, 0), new PVector(0.7, 0.7, 0), 90);
    image.DrawImageScale("basket", new PVector(basketX, basketY, 0), new PVector(0.45, 0.45, 0));
    // image.DrawImageScale("garlic", new PVector(handX, 150, 0), new PVector(0.25, 0.25, 0));
    // image.DrawImageScale("mugwort", new PVector(handX, 150, 0), new PVector(0.25, 0.25, 0));

    if (handX <= 230) {
      handX += 30f * time.deltaTime;
      basketX += 30f * time.deltaTime;
      animalX -= 15f * time.deltaTime;
      animalY -= 15f * time.deltaTime;
    }
    if (time.time - enterTime >= SCENE_DURATION) {
      scene.ChangeScene(new S2C1());
    }
  }

  @Override public void OnExit() {
  }
}
