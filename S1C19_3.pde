public class S1C19_3 extends Scene {
  public float SCENE_DURATION = 10f;
  private float handX;
  private float animalX;
  private float animalY;

  public S1C19_3() {
  }

  @Override public void OnEnter() {
    handX = 0;
    animalX = 0;
    animalY = 0;
    image.LoadImage("background", "Images/S1/C19/background2");
    image.LoadImage("hands", "Images/S1/C19/hands");
    image.LoadImage("hwangwoong", "Images/S1/C19/hwanwoong_hand");
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    image.DrawImageScale("hands", new PVector(width - 250 - animalX, height - 200 - animalY, 0), new PVector(0.3, 0.3, 0));
    image.DrawImageScale("hwangwoong", new PVector(150 + handX, 150, 0), new PVector(0.8, 0.8, 0), 90);
    if (handX <= 230) {
      handX += 30f * time.deltaTime;
      animalX += 15f * time.deltaTime;
      animalY += 15f * time.deltaTime;
    }
    if (time.time - enterTime >= SCENE_DURATION) {
      scene.ChangeScene(new S2C1());
    }
  }

  @Override public void OnExit() {
  }
}
