public class S2C1 extends Scene {
  public float SCENE_DURATION = 10f;
  private float animalScale = 0.3f;
  private int animalX = 300;
  private int animalY = 550;
  private int imageIndex = 0;
  private String[] animalList = {
    "animal1", "animal2"}
  ;

  private float WALK_INTERVAL = 0.075f;
  private float walkTick = 0f;

  public S2C1() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C1/background");
    image.LoadImage("animal1", "Images/S2/C1/animal1");
    image.LoadImage("animal2", "Images/S2/C1/animal2");
    walkTick = 0f;
    imageIndex = 0;
    animalScale = 0.3f;
    animalX = 300;
    animalY = 550;

  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));
    if (animalX < 900) {
      walkTick += time.deltaTime;
      if (walkTick > WALK_INTERVAL) {
        walkTick = 0f;
        imageIndex++;
      }
    }
    image.DrawImageScale(animalList[imageIndex % 2], new PVector(animalX, animalY), new PVector(animalScale, animalScale));

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
