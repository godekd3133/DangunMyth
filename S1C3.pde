public class S1C3 extends Scene {
  public float SCENE_DURATION = 8f; // narr. 7sec

  public String GOD_IMAGE = "Images/S1/C3/god";
  public String BACKGROUND_IMAGE = "Images/S1/C3/background";
  public String CLOUD_IMAGE = "Images/S1/C3/cloud";
  public String DEFAULT_FACE = "Images/S1/C3/god_smile";
  public String[] TELLING_FACES = {
    "Images/S1/C3/god_telling1", "Images/S1/C3/god_telling2"}
  ;
  public float GOD_WIDTH = width / 2.1;
  public float GOD_HEIGHT = GOD_WIDTH * 1.18;
  private boolean isNarrOut = false;

  private float cloudY;
  private float godY;
  private int currentImageIndex = 0;
  private int changeInterval = 30;

  public S1C3() {
  }

  @Override public void OnEnter() {
    isNarrOut = false;

    image.LoadImage("background", BACKGROUND_IMAGE);
    image.LoadImage("cloud01", CLOUD_IMAGE);

    image.LoadImage("god", GOD_IMAGE);
    image.LoadImage("face", DEFAULT_FACE);
    image.LoadImage("text", "Images/S1/C3/text");
    sound.LoadSound("narr", "Sounds/S1/C3/narr/narr.mp3");

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
    image.DrawImage("text", new PVector(width / 2, height / 2));
  }

  @Override public void OnDraw() {
    if (!isNarrOut) {
      isNarrOut = !isNarrOut;
      sound.PlaySound("narr");
    }
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(0.67f, 0.67f, 0));
    image.DrawImageScale("god",new PVector(width / 2, height / 2 + godY, 0), new PVector(0.25f, 0.25f, 0));
    image.DrawImageScale("telling" + currentImageIndex,new PVector(width / 2, height / 2 + godY, 0), new PVector(0.25f, 0.25f, 0));
    image.DrawImageScale("cloud01", new PVector(width / 2, height / 2 + cloudY, 0), new PVector(0.67f, 0.67f, 0));
    image.DrawImage("text", new PVector(width / 2, height / 2));
    godY += 100 * time.deltaTime / SCENE_DURATION;
    cloudY += 100 * time.deltaTime / SCENE_DURATION;

    if (frameCount % changeInterval == 0) {
      currentImageIndex =(currentImageIndex + 1) % TELLING_FACES.length;
    }
    if (cloudY >= 100 || time.time - enterTime >= SCENE_DURATION) {
      scene.ChangeScene(new S1C4());
    }
  }

  @Override public void OnExit() {
  }
}
