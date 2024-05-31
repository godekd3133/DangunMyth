public class S2C6 extends Scene {
  private float SCENE_DURATION = 100f;
  private static final int DISPLAY_TIME = 99;

  private static final int TYPE_SOOK = 0x1;
  private static final int TYPE_MANUL= 0x2;
  private static final int TYPE_CLICKED = 0x4;

  private int[] m_Items = null;
  private PVector[] m_ItemsLoc = null;

  private int m_SookCnt = 0;
  private int m_ManulCnt = 0;

  public S2C6() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C6/background");
    image.LoadImage("clock", "Images/S2/C6/clock");
    image.LoadImage("manul", "Images/S2/C6/manul");
    image.LoadImage("sook", "Images/S2/C6/sook");
    image.LoadImage("bear_hand", "Images/S2/C6/bear_hand");
    image.LoadImage("bear_click", "Images/S2/C6/bear_click");
    image.LoadImage("tiger_hand", "Images/S2/C6/tiger_hand");
    image.LoadImage("tiger_click", "Images/S2/C6/tiger_click");

    // set random item location
    m_Items = new int[25];
    m_ItemsLoc = new PVector[25];

    for(int i=0;
    i< m_ItemsLoc.length;
    i++) {
      if (i < 20) {
        m_Items[i] = TYPE_MANUL;
      } else {
        m_Items[i] = TYPE_SOOK;
      }
      m_ItemsLoc[i] = new PVector(random(22) * 50 + 5, random(12) * 50 + 100,0); // dead zone
    }
    m_SookCnt = 0;
    m_ManulCnt = 0;
  }

  @Override public void OnDraw() {
    int displayTime = DISPLAY_TIME -(int)time.time;

    if (time.time- enterTime > SCENE_DURATION) {
      //scene.ChangeScene(new S2C6());
    }
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));

    // clock base
    image.DrawImageScale("clock", new PVector(1200, 75), new PVector(0.08,0.08,0));
    // draw time
    textSize(50);
    text(displayTime, 1175, 100);

    // draw score
    fill(255);
    image.DrawImageScale("sook", new PVector(20, 50), new PVector(0.05,0.05,0));
    text(m_SookCnt, 60, 70);

    image.DrawImageScale("manul", new PVector(130, 50), new PVector(0.05,0.05,0));
    text(m_ManulCnt, 170, 70);

    // draw item
    for(int i=0;
    i<m_ItemsLoc.length;
    i++) {
      int item = m_Items[i];

      if ((item & TYPE_CLICKED) == TYPE_CLICKED) {
        continue;
      }
      if ((item & TYPE_SOOK) == TYPE_SOOK) {
        image.DrawImageScale("sook", m_ItemsLoc[i], new PVector(0.015,0.015,0));
      }
      if ((item & TYPE_MANUL) == TYPE_MANUL) {
        image.DrawImageScale("manul", m_ItemsLoc[i], new PVector(0.015,0.015,0));
      }
    }
  }

  @Override public void OnExit() {
  }

  public void OnMousePressed() {
    for(int i=0;
    i< m_ItemsLoc.length;
    i++) {
      if (m_ItemsLoc[i].x - 10 <= mouseX && m_ItemsLoc[i].x + 10 >= mouseX) {
        if (m_ItemsLoc[i].y - 10 <= mouseY && m_ItemsLoc[i].y + 10 >= mouseY) {
          m_Items[i] |= TYPE_CLICKED;

          if ((m_Items[i] & TYPE_MANUL) == TYPE_MANUL) {
            m_ManulCnt++;
          }
          else if ((m_Items[i] & TYPE_SOOK) == TYPE_SOOK) {
            m_SookCnt++;
          }
          break;
        }
      }
    }
  }
}
