public class S1C2 extends Scene {
  private static final String BACKGROUND_IMAGE = "Images/S1/C2/background.png";
  private static final String CLOUD_IMAGE = "Images/S1/C2/cloud.png";
  private static final String BLACK_IMAGE = "Images/S1/C2/black.png";
  private static final int MAX_TIMER = 25;

  private PImage m_bkImg = null;
  private PImage m_cldImg = null;
  private PImage m_blackImg = null;

  private int m_bkTimer = 0;

  public S1C2() {
  }

  @Override public void OnEnter() {
    // ?????
    /*image.LoadImage(BACKGROUND_IMAGE,BACKGROUND_IMAGE);
    image.DrawImage(BACKGROUND_IMAGE, new PVector(0,0));*/

    m_bkImg = loadImage(BACKGROUND_IMAGE);
    m_cldImg = loadImage(CLOUD_IMAGE);
    m_blackImg = loadImage(BLACK_IMAGE);
    background(255);
  }

  @Override public void OnDraw() {
    if (m_bkTimer < MAX_TIMER) {
      DrawBK(255 -(m_bkTimer * 10));
      m_bkTimer +=1;
    } else {
      DrawBK(0);
    }
  }

  @Override public void OnExit() {
  }

  private void DrawBK(int op) {
    image(m_bkImg, 0, 0, width, height);
    image(m_cldImg, 0, 0,width,height);

    if (op > 0) {
      tint(255, op);
      image(m_blackImg, 0, 0,width,height);
    }
  }
}
