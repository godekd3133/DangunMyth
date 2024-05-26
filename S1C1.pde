public class S1C1 extends Scene {
  public float SCENE_DURATION = 10f;

  private float cloudX;
  private float zoomIn;

  public S1C1() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C1/background");
    image.LoadImage("cloud01", "Images/S1/C1/cloud_01");
    image.LoadImage("cloud02", "Images/S1/C1/cloud_02");
    image.LoadImage("cloud03", "Images/S1/C1/cloud_03");
    sound.LoadSound("intro", "Sounds/intro.wav");
    sound.PlaySound("intro");

    cloudX = 0f;
    zoomIn = 1f;
    enterTime = time.time;
  }

  @Override public void OnDraw() {
    PVector scale = new PVector(zoomIn, zoomIn, 0);
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), scale);
    image.DrawImageScale("cloud01", new PVector(width / 2 - cloudX, height / 2, 0), scale);
    image.DrawImageScale("cloud02", new PVector(width / 2 - cloudX, height / 2, 0), scale);
    image.DrawImageScale("cloud03", new PVector(width / 2 + cloudX, height / 2, 0), scale);

    if (time.time- enterTime > 0.25f) {
      cloudX += 100f * time.deltaTime;
    }
    if (time.time- enterTime > 0.25f &&zoomIn <2f) {
      zoomIn += 0.1f * time.deltaTime;
    }
    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S1C3());
    }
  }

  @Override public void OnExit() {
    sound.StopSound("intro");
  }
}
