public class S1C4 extends Scene {
  public float SCENE_DURATION = 10f;
  public float openDelay = 0.33f;
  public float closeMin = 1f;
  public float closeMax = 2f;

  public int eyeIndex = 0;

  public float nextCloseDuration = 0f;

  public float closeTime = 0f;
  public float openTime = 0f;

  public S1C4() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C4/background");
    image.LoadImage("man1", "Images/S1/C4/man1");
    image.LoadImage("man2", "Images/S1/C4/man2");
    image.LoadImage("eye1", "Images/S1/C4/eye1");
    image.LoadImage("eye2", "Images/S1/C4/eye2");
    image.LoadImage("eye3", "Images/S1/C4/eye3");
    closeTime =enterTime;
    openTime = enterTime;
    nextCloseDuration = random(closeMin *100, closeMax * 100)/100f;
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));
    image.DrawImageScale("man1", new PVector(width / 2 + 130, height - 165), new PVector(0.35f, 0.35f));
    image.DrawImageScale("eye3", new PVector(width / 2 + 80, height - 185), new PVector(0.35f, 0.35f));
    image.DrawImageScale("man2", new PVector(width / 2 + 400, height - 165), new PVector(0.43f, 0.43f));

    if (eyeIndex == 0) image.DrawImageScale("eye1", new PVector(width / 2 + 360, height - 400), new PVector(0.43f, 0.43f));
    else image.DrawImageScale("eye2", new PVector(width / 2 + 360, height - 400), new PVector(0.43f, 0.43f));

    if (eyeIndex == 0 && time.time - openTime >= nextCloseDuration) {
      eyeIndex = 1;
      nextCloseDuration = random(closeMin *100, closeMax * 100)/100f;
      closeTime = time.time;
    }
    else if (eyeIndex ==1 && time.time - closeTime >= openDelay) {
      eyeIndex = 0;
      openTime = time.time;
    }
    if (time.time - enterTime >= SCENE_DURATION) {
      scene.ChangeScene(new S1C5());
    }
  }

  @Override public void OnExit() {
    // scene.ChangeScene(new S1C5());
  }
}
