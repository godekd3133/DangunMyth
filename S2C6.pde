public class S2C6 extends Scene {
  private static final int DISPLAY_TIME = 99;

  private static final int TYPE_SOOK = 0x1;
  private static final int TYPE_MANUL= 0x2;
  private static final int TYPE_CLICKED = 0x4;

  private int[] m_Items = null;
  private PVector[] m_ItemsLoc = null;

  private int m_SookCnt = 0;
  private int m_ManulCnt = 0;

  private static final int TOTAL_SOOK_CNT = 5;
  private static final int TOTAL_MANUL_CNT = 20;

  private boolean m_IsTigerHand = true;

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
    image.LoadImage("transparent", "Images/S2/C6/transparent");
    sound.LoadSound("item_click", "Sounds/S2/C6/item_click.wav");
    sound.LoadSound("bgm", "Sounds/S2/C6/bgm.mp3");
    //sound.LoadSound("item_mouseOver", "Sounds/S1/C8/narr/narr.mp3");

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

    sound.PlaySound("bgm");
    font.LoadFont("lee", "LeeSeoyun.otf");
  }

  @Override public void OnDraw() {
    int displayTime = DISPLAY_TIME -(int)(time.time - enterTime);

    if (m_ManulCnt >= TOTAL_MANUL_CNT && m_SookCnt >= TOTAL_SOOK_CNT) {
      //success(성공 씬으로 이동)
      scene.ChangeScene(new S2C6V2());
      //return;
    }
    if (displayTime <= 0) {
      // failed(timeout)(실패 씬으로 이동)
      scene.ChangeScene(new S2C6V1());
      //return;
    }
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));

    // draw item
    for(int i=0;
    i<m_ItemsLoc.length;
    i++) {
      int item = m_Items[i];

      if ((item & TYPE_CLICKED) == TYPE_CLICKED) {
        continue;
      }
      if ((item & TYPE_SOOK) == TYPE_SOOK) {
        image.DrawImageScale("sook", m_ItemsLoc[i], new PVector(0.025,0.025,0));
      }
      if ((item & TYPE_MANUL) == TYPE_MANUL) {
        image.DrawImageScale("manul", m_ItemsLoc[i], new PVector(0.025,0.025,0));
      }
    }
    // 마우스 커서 근처에만 화면이 보이도록 구현
    fill(0);
    int viewX = mouseX / 20;
    int viewY = mouseY / 20;

    int areaSize = 10;
    float visibleArea = 0.7;
    /*if (displayTime <= 20) {
      visibleArea = 0.8;
    }
    */
    for (int i=0; i<64; i++) {
      for (int j=0; j<36; j++) {
        if (viewX - areaSize < i && i < viewX + areaSize) {
          if (viewY - areaSize < j && j < viewY + areaSize) {
            continue;
          }
        }
        // 마우스 근처가 아니면 검은 도형을 배치하여 안보이도록 구현
        rect(i * 20,j * 20, 20,20);
      }
    }
    // 보이는 영역이 원형으로 보이도록 구현
    image.DrawImageScale("transparent", new PVector(mouseX, mouseY), new PVector(visibleArea,visibleArea,0));
    // draw hand

    if (!m_IsTigerHand) {

      if (mousePressed) {
        image.DrawImageScale("bear_click", new PVector(mouseX, mouseY), new PVector(0.12,0.12,0));
      } else {
        image.DrawImageScale("bear_hand", new PVector(mouseX, mouseY), new PVector(0.12,0.12,0));
      }
    } else {

      if (mousePressed) {
        image.DrawImageScale("tiger_click", new PVector(mouseX, mouseY), new PVector(0.12,0.12,0));
      } else {
        image.DrawImageScale("tiger_hand", new PVector(mouseX, mouseY), new PVector(0.12,0.12,0));
      }
    }
    // draw score
    image.DrawImageScale("sook", new PVector(50, 50), new PVector(0.05,0.05,0));

    font.DrawFont("lee", ""+m_SookCnt, 255, 50, 90, 70);

    image.DrawImageScale("manul", new PVector(160, 50), new PVector(0.05,0.05,0));
    font.DrawFont("lee", ""+m_ManulCnt, 255, 50, 200, 70);

    // clock base
    image.DrawImageScale("clock", new PVector(1225, 55), new PVector(0.055,0.055,0));
    // draw time

    textSize(25);
    fill(0);
    String timeStr = "";
    if (displayTime < 10) {
      fill(255,0,0);
      timeStr = " D-" + displayTime;
    } else {
      timeStr = "D-" + displayTime;
    }
    text(timeStr, 1196, 70);

  }

  @Override public void OnExit() {
    sound.StopSound("bgm");
  }

  public void OnMousePressed() {
    for(int i=0;
    i< m_ItemsLoc.length;
    i++) {
      if (m_ItemsLoc[i].x - 25 <= mouseX && m_ItemsLoc[i].x + 25 >= mouseX) {
        if (m_ItemsLoc[i].y - 25 <= mouseY && m_ItemsLoc[i].y + 25 >= mouseY) {
          // 이미 클릭한 아이템은 갯수로 포함하지 않도록 구현
          if ((m_Items[i] & TYPE_CLICKED) == TYPE_CLICKED) {
            continue;
          }
          sound.PlaySound("item_click");
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

  public void SetTigerHand(boolean options) {
    m_IsTigerHand = options;
  }
}
