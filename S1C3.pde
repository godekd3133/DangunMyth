public class S1C3 extends Scene {
  public static final String GOD_IMAGE = "Images/S1/C3/god.png";
  private static final String BACKGROUND_IMAGE = "Images/S1/C2/background.png";
  private static final String CLOUD_IMAGE = "Images/S1/C2/cloud.png";

  private float GOD_WIDTH = width / 2.1;
  private float GOD_HEIGHT = GOD_WIDTH * 1.18;
  public String DEFAULT_FACE = "Images/S1/C3/god_smile.png";
  public String[] TELLING_FACES = {
    "Images/S1/C3/god_telling1.png", "Images/S1/C3/god_telling2.png"}
  ;
  private PImage m_bkImg = null;
  private PImage m_cldImg = null;
  private PImage m_godImage = null;
  private PImage m_faceImage = null;
  private PImage[] m_tellingImages = null;
  private int currentImageIndex = 0;
  private int changeInterval = 10;
  private int animationStartTime = 100;
  private int topCount = 150;

  public S1C3() {
  }

  @Override public void OnEnter() {
    m_bkImg = loadImage(BACKGROUND_IMAGE);
    m_cldImg = loadImage(CLOUD_IMAGE);
    m_godImage = loadImage(GOD_IMAGE);
    m_faceImage = loadImage(DEFAULT_FACE);
    m_tellingImages = new PImage[TELLING_FACES.length];
    int imageCount = TELLING_FACES.length;
    for (int i=0; i<imageCount; i++) {
      m_tellingImages[i] = loadImage(TELLING_FACES[i]);
    }
    image(m_bkImg, 0, 0, width, height);
    image(m_godImage, width / 2 - GOD_WIDTH / 2, -50, GOD_WIDTH, GOD_HEIGHT);
    image(m_faceImage, width / 2 - GOD_WIDTH / 2, -50, GOD_WIDTH, GOD_HEIGHT);

    image(m_cldImg, 0, 0,width,height);

  }

  @Override public void OnDraw() {
    int top =(frameCount < topCount ? frameCount : topCount) / 2;
    image(m_bkImg, 0, 0, width, height);
    image(m_godImage, width / 2 - GOD_WIDTH / 2,top -50, GOD_WIDTH, GOD_HEIGHT);
    image(m_faceImage, width / 2 - GOD_WIDTH / 2,top -50, GOD_WIDTH, GOD_HEIGHT);
    image(m_cldImg, 0,top,width,height);

    if (frameCount > animationStartTime && frameCount % changeInterval == 0) {
      currentImageIndex =(currentImageIndex + 1) % m_tellingImages.length;
      m_faceImage = m_tellingImages[currentImageIndex];
    }
  }

  @Override public void OnExit() {
  }
}
