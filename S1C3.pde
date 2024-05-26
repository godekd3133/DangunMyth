public class S1C3 extends Scene {
  public float SCENE_SCONDS = 20;

  public String GOD_IMAGE = "Images/S1/C3/god";
  public String BACKGROUND_IMAGE = "Images/S1/C3/background";
  public String CLOUD_IMAGE = "Images/S1/C3/cloud";
  public String DEFAULT_FACE = "Images/S1/C3/god_smile";
  public String[] TELLING_FACES = {
    "Images/S1/C3/god_telling1", "Images/S1/C3/god_telling2"}
  ;
  public float GOD_WIDTH = width / 2.1;
  public float GOD_HEIGHT = GOD_WIDTH * 1.18;

  private float cloudY;
  private float godY;
  private int currentImageIndex = 0;
  private int changeInterval = 30;

  public S1C3() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", BACKGROUND_IMAGE);
    image.LoadImage("cloud01", CLOUD_IMAGE);

    image.LoadImage("god", GOD_IMAGE);
    image.LoadImage("face", DEFAULT_FACE);
    int imageCount = TELLING_FACES.length;
    currentImageIndex =0;
    godY = 0f;
    cloudY = 0f;

    for (int i=0; i<imageCount; i++) {
      image.LoadImage("telling" + i, TELLING_FACES[i]);
    }
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(0.67f, 0.67f, 0));
    image.DrawImageScale("god",new PVector(width / 2, height / 2 + godY, 0), new PVector(0.25f, 0.25f, 0));
    image.DrawImageScale("face",new PVector(width / 2, height / 2 + godY, 0), new PVector(0.25f, 0.25f, 0));
    image.DrawImageScale("cloud01", new PVector(width / 2, height / 2 + cloudY, 0), new PVector(0.67f, 0.67f, 0));
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(0.67f, 0.67f, 0));
    image.DrawImageScale("god",new PVector(width / 2, height / 2 + godY, 0), new PVector(0.25f, 0.25f, 0));
    image.DrawImageScale("telling" + currentImageIndex,new PVector(width / 2, height / 2 + godY, 0), new PVector(0.25f, 0.25f, 0));
    image.DrawImageScale("cloud01", new PVector(width / 2, height / 2 + cloudY, 0), new PVector(0.67f, 0.67f, 0));
    godY += 100 * time.deltaTime / SCENE_SCONDS;
    cloudY += 100 * time.deltaTime / SCENE_SCONDS;

    if (frameCount % changeInterval == 0) {
      currentImageIndex =(currentImageIndex + 1) % TELLING_FACES.length;
    }
    if (cloudY >= 100 || time.time - enterTime >= SCENE_SCONDS) {
      scene.ChangeScene(new S1C4());
    }
  }

  @Override public void OnExit() {
  }
}
