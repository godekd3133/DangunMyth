public class S1C1 extends Scene {
  private float backgroundAlpha;
  private float cloudX;
  private float zoomIn;

  public S1C1() {
    backgroundAlpha = 255;
    cloudX = 0;
    zoomIn = 1f;
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C1/background");
    image.LoadImage("cloud01", "Images/S1/C1/cloud_01");
    image.LoadImage("cloud02", "Images/S1/C1/cloud_02");
    image.LoadImage("cloud03", "Images/S1/C1/cloud_03");
    sound.LoadSound("bgm", "Sounds/엔딩크레딧.wav");
    sound.PlaySound("bgm");

    backgroundAlpha =255;
    cloudX = 0;
    zoomIn = 1f;
  }

  @Override public void OnDraw() {
    
    PVector scale = new PVector(zoomIn, zoomIn, 0);
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), scale);
    image.DrawImageScale("cloud01", new PVector(width / 2 - cloudX, height / 2, 0),  scale);
    image.DrawImageScale("cloud02", new PVector(width / 2 - cloudX, height / 2, 0),  scale);
    image.DrawImageScale("cloud03", new PVector(width / 2 + cloudX, height / 2, 0),  scale);

    fill(0, backgroundAlpha);
    rect(0, 0, width, height);

    if (backgroundAlpha > 0) {
      backgroundAlpha -= 70 * time.deltaTime;
    }
    if (backgroundAlpha < 180) {
      cloudX += 100 * time.deltaTime;
    }

  if(backgroundAlpha < 100 &&zoomIn <2f){

      zoomIn += 0.1f * time.deltaTime;
  }
    if (cloudX > width / 2 + 200) {
      // Scene.ChangeScene(new S1C2());
    }
  }

  @Override public void OnExit() {
  }
}
