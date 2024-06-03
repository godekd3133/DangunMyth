public class S2C1 extends Scene {
  public float SCENE_DURATION = 7.5f;
  private float originalAnimalScale = 0.3f;
  private float animalScale = 0.3f;
  private int animalX = 300;
  private int animalY = 550;
  private int imageNumber = 1;
  private int imageMaxNumber = 3;
  private int imageNumberDelta = 1;
  private float WALK_INTERVAL = 0.1f;
  private float walkTick = 0f;
  private float SOUND_INTERVAL = 0.4f;
  private float soundTick = 0f;

  public S2C1() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C1/background");
    image.LoadImage("tiger1", "Images/S2/C1/tiger1");
    image.LoadImage("tiger2", "Images/S2/C1/tiger2");
    image.LoadImage("tiger3", "Images/S2/C1/tiger3");
    image.LoadImage("bear1", "Images/S2/C1/bear1");
    image.LoadImage("bear2", "Images/S2/C1/bear2");
    image.LoadImage("bear3", "Images/S2/C1/bear3");
    sound.LoadSound("step", "Sounds/S2/C1/effect/Step_Grass_01.wav");

    walkTick = 0f;
    soundTick = 0f;
    imageNumber = 1;
    animalScale = 0.3f;
    animalX = 300;
    animalY = 550;

  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));
    if (animalX < 900) {
      walkTick += time.deltaTime;
      soundTick += time.deltaTime;
      if (walkTick > WALK_INTERVAL) {
        walkTick = 0f;
        imageNumber += imageNumberDelta;

        if (imageNumber == 1 || imageNumber == imageMaxNumber) {
          imageNumberDelta *= -1;

        }
      }
      if (soundTick > SOUND_INTERVAL) {
        sound.PlaySound("step");
        soundTick = 0f;
      }
    }
    image.DrawImageScale("bear" + imageNumber, new PVector(animalX, animalY), new PVector(animalScale, animalScale));
    image.DrawImageScale("tiger" + imageNumber, new PVector(animalX + 200 * animalScale / originalAnimalScale, animalY), new PVector(animalScale, animalScale));

    //6.666초
    if (animalX < 900) {
      animalX += 120f * time.deltaTime;
      animalY -= 0.5f * time.deltaTime;
      animalScale -= 0.03f * time.deltaTime;
    }
    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S2C2());
    }
  }

  @Override public void OnExit() {
    // scene.ChangeScene(new S2C2());
  }
}
