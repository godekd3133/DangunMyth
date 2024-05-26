public class S2C8 extends Scene {
  public float SCENE_DURATION = 10f;

  private float cloudX;
  private float zoomIn;

  public S2C8() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C8/background");
    image.LoadImage("sun", "Images/S2/C8/sun");
    image.LoadImage("river", "Images/S2/C8/river");
    image.LoadImage("mountain", "Images/S2/C8/mountain");
    image.LoadImage("cloud1", "Images/S2/C8/cloud1");
    image.LoadImage("cloud2", "Images/S2/C8/cloud2");
    image.LoadImage("cloud3", "Images/S2/C8/cloud3");
    //sound.LoadSound("bgm", "Sounds/엔딩크레딧.wav");
    //sound.PlaySound("bgm");

    cloudX = 0f;
    zoomIn = 1f;
    enterTime = time.time;
  }

  @Override public void OnDraw() {
    PVector scale = new PVector(zoomIn, zoomIn, 0);
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), scale);
    image.DrawImageScale("cloud1", new PVector(width / 2 - cloudX, height / 2, 0), scale);
    image.DrawImageScale("cloud2", new PVector(width / 2 - cloudX, height / 2, 0), scale);
    image.DrawImageScale("cloud3", new PVector(width / 2 + cloudX, height / 2, 0), scale);

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
  }
}
