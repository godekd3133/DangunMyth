public class S2C1 extends Scene {
  private float animalScale = 0.3f;
  private int animalX = 300;
  private int animalY = 550;
  private int imageIndex = 0;
  private String[] animalList = {
    "animal1", "animal2"}
  ;

  private int time = 0;

  public S2C1() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C1/background");
    image.LoadImage("animal1", "Images/S2/C1/animal1");
    image.LoadImage("animal2", "Images/S2/C1/animal2");
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));

    if (time % 20 == 0 & animalX < 900) imageIndex++;
    imageIndex %= 2;

    image.DrawImageScale(animalList[imageIndex], new PVector(animalX, animalY), new PVector(animalScale, animalScale));

    if (time % 2 == 0 & animalX < 900) {
      animalX += 3;
      animalY -= 1;
      animalScale -= 0.001f;
    }
    else // scene.ChangeScene(new S2C2());

    time++;
  }

  @Override public void OnExit() {
    // scene.ChangeScene(new S2C2());
  }
}
