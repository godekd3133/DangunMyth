public class S1C18 extends Scene {
  public float SCENE_DURATION = 10f;
  private float bearX = width / 2 - 100;
  private float animalY = height / 2 + 50;
  private float tigerX = width / 2 + 200;

  private float changeInterval;
  private float changeTick;
  private int currentIndex;

  public S1C18() {
  }

  @Override public void OnEnter() {
    changeInterval = 0.5f;
    changeTick = 0f;
    currentIndex = 0;

    image.LoadImage("background", "Images/S1/C18/background");
    image.LoadImage("bear_body", "Images/S1/C18/bear_body");
    image.LoadImage("bear_eyes0", "Images/S1/C18/bear_eyes0");
    image.LoadImage("bear_eyes1", "Images/S1/C18/bear_eyes1");
    image.LoadImage("bear_head0", "Images/S1/C18/bear_head0");
    image.LoadImage("bear_head1", "Images/S1/C18/bear_head1");
    image.LoadImage("tiger_body", "Images/S1/C18/tiger_body");
    image.LoadImage("tiger_head0", "Images/S1/C18/tiger_head0");
    image.LoadImage("tiger_head1", "Images/S1/C18/tiger_head1");
    image.LoadImage("tiger_eyes0", "Images/S1/C18/tiger_eyes0");
    image.LoadImage("tiger_eyes1", "Images/S1/C18/tiger_eyes1");

  }

  @Override public void OnDraw() {
    changeTick += time.deltaTime;

    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    image.DrawImageScale("bear_body", new PVector(bearX, animalY, 0), new PVector(0.25, 0.25, 0));
    image.DrawImageScale("bear_eyes" + currentIndex, new PVector(bearX, animalY, 0), new PVector(0.25, 0.25, 0));
    image.DrawImageScale("bear_head" + currentIndex, new PVector(bearX, animalY, 0), new PVector(0.25, 0.25, 0));
    image.DrawImageScale("tiger_body", new PVector(tigerX, animalY, 0), new PVector(0.25, 0.25, 0));
    image.DrawImageScale("tiger_eyes" + currentIndex, new PVector(tigerX, animalY, 0), new PVector(0.25, 0.25, 0));
    image.DrawImageScale("tiger_head" + currentIndex, new PVector(tigerX, animalY, 0), new PVector(0.25, 0.25, 0));

    if (changeTick >= changeInterval) {
      currentIndex ^= 1;
      changeTick = 0;
    }
    if (time.time - enterTime >= SCENE_DURATION) {
      scene.ChangeScene(new S1C19_1());
    }
  }

  @Override public void OnExit() {
  }
}
