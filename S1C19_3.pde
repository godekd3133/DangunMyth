public class S1C19_3 extends Scene {
  public float SCENE_DURATION = 10f;
  private float handX;
  private float animalX;
  private float animalY;
  private float basketX;
  private float basketY;

  private float firstDuration = 4.5f;
  private float secondDuration = 4.0f;
  private float thridDuration = 5.5f;

  private boolean firstFlag = false;
  private boolean secondFlag = false;
  private boolean thridFlag = false;

  public S1C19_3() {
  }

  @Override public void OnEnter() {
    handX = 150;
    animalX = width - 250;
    animalY = height - 200;
    basketX = handX + 450;
    basketY = 250;

    firstDuration = 5.5f;
    secondDuration = 2.5f;
    thridDuration = 5.5f;

    firstFlag = false;
    secondFlag = false;
    thridFlag = false;

    image.LoadImage("background", "Images/S1/C19/background2");
    image.LoadImage("hands", "Images/S1/C19/hands");
    image.LoadImage("hwangwoong", "Images/S1/C19/hwanwoong_hand");
    image.LoadImage("basket", "Images/S1/C19/basket");

    image.LoadImage("C19-3-Text", "Images/S1/C19/C19-3-Text");

    // image.LoadImage("mugwort", "Images/S1/C19/mugwort");
    // image.LoadImage("garlic", "Images/S1/C19/garlic");

    sound.LoadSound("hwanwoong1", "Sounds/S1/C19-3/hwanwoong1.mp3");
    sound.LoadSound("hwanwoong2", "Sounds/S1/C19-3/hwanwoong2.mp3");
    sound.LoadSound("Tiger", "Sounds/S1/C19-3/Tiger.mp3");
    sound.LoadSound("Bear", "Sounds/S1/C19-3/Bear.mp3");

  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));

    image.DrawImageScale("hands", new PVector(animalX, animalY, 0), new PVector(0.3, 0.3, 0));
    image.DrawImageScale("hwangwoong", new PVector(handX, 150, 0), new PVector(0.7, 0.7, 0), 90);
    image.DrawImageScale("basket", new PVector(basketX, basketY, 0), new PVector(0.45, 0.45, 0));
    // image.DrawImageScale("garlic", new PVector(handX, 150, 0), new PVector(0.25, 0.25, 0));
    // image.DrawImageScale("mugwort", new PVector(handX, 150, 0), new PVector(0.25, 0.25, 0));

    image.DrawImage("C19-3-Text", new PVector(width / 2, height / 2, 0));

    //단, 동굴에서 마늘과 쑥을 먹으며...
    if (!firstFlag) {
      firstFlag = true;
      sound.PlaySound("hwanwoong1");
    }
    //자, 여기 가져가거라
    if (time.time - enterTime >= firstDuration) {
      if (!secondFlag) {
        secondFlag = true;
        sound.PlaySound("hwanwoong2");
      }
    }
    //너희의 소원을 들어주마
    if (time.time - enterTime >= firstDuration+secondDuration) {
      if (!thridFlag) {
        thridFlag = true;
        sound.PlaySound("Tiger");
        sound.PlaySound("Bear");
      }
    }
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
