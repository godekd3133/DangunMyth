public class S1C3 extends Scene {
  public static final String GOD_IMAGE = "Images/S1/C3/god";
  private static final String BACKGROUND_IMAGE = "Images/S1/C3/background";
  private static final String CLOUD_IMAGE = "Images/S1/C3/cloud";

  private float GOD_WIDTH = width / 2.1;
  private float GOD_HEIGHT = GOD_WIDTH * 1.18;
  public String DEFAULT_FACE = "Images/S1/C3/god_smile";
  public String[] TELLING_FACES = {
    "Images/S1/C3/god_telling1", "Images/S1/C3/god_telling2"}
  ;
  private int backgroundAlpha;
  private float cloudY;
  private float godY;
  private int currentImageIndex = 0;
  private int changeInterval = 5;
  private final static int SCENE_SCONDS = 20;
  private int startMinute;
  private int startSecond;

  public S1C3() {
    cloudY = -50.0f;
    cloudY = 0;
  }

  @Override public void OnEnter() {
    startMinute=minute();
    startSecond=second();

    image.LoadImage("background", BACKGROUND_IMAGE);
    image.LoadImage("cloud01", CLOUD_IMAGE);

    image.LoadImage("god", GOD_IMAGE);
    image.LoadImage("face", DEFAULT_FACE);
    int imageCount = TELLING_FACES.length;
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
    godY += 0.5;
    cloudY += 0.5;

    if (frameCount % changeInterval == 0) {
      currentImageIndex =(currentImageIndex + 1) % TELLING_FACES.length;
    }
    if (cloudY >= 100 || isTimeExceeded(startMinute, startSecond, SCENE_SCONDS)) {
      scene.ChangeScene(new S1C4());
    }
  }

  @Override public void OnExit() {
  }
}
