class S2C6 extends Scene {
  static DISPLAY_TIME = 99;
  static TYPE_SOOK = 0x1;
  static TYPE_MANUL = 0x2;
  static TYPE_CLICKED = 0x4;
  m_Items = null;
  m_ItemsLoc = null;
  m_SookCnt = 0;
  m_ManulCnt = 0;
  static TOTAL_SOOK_CNT = 5;
  static TOTAL_MANUL_CNT = 20;
  m_IsTigerHand = true;
  constructor() {}
  OnEnter() {
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
    sound.LoadSound("bgm", "Sounds/S2/C6/bgm.mp3"); //sound.LoadSound("item_mouseOver", "Sounds/S1/C8/narr/narr.mp3");
    // set random item location
    this.m_Items = new Array(25);
    this.m_ItemsLoc = new Array(25);
    for (let i = 0; i < this.m_ItemsLoc.length; i++) {
      if (i < 20) {
        this.m_Items[i] = S2C6.TYPE_MANUL;
      } else {
        this.m_Items[i] = S2C6.TYPE_SOOK;
      }
      this.m_ItemsLoc[i] = new p5.Vector(
        random(22) * 50 + 5,
        random(11) * 50 + 150,
        0
      ); // dead zone
    }
    this.m_SookCnt = 0;
    this.m_ManulCnt = 0;
    sound.PlaySound("bgm");
    font.LoadFont("lee", "LeeSeoyun.otf");
  }
  OnDraw() {
    let displayTime = S2C6.DISPLAY_TIME - (time.time - this.enterTime);
    if (
      this.m_ManulCnt >= S2C6.TOTAL_MANUL_CNT &&
      this.m_SookCnt >= S2C6.TOTAL_SOOK_CNT
    ) {
      //success(성공 씬으로 이동)
      scene.ChangeScene(new S2C6V2()); //return;
    }
    if (displayTime <= 0) {
      // failed(timeout)(실패 씬으로 이동)
      scene.ChangeScene(new S2C6V1()); //return;
    }
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2, 0),
      new p5.Vector(1, 1, 0)
    ); // draw item
    for (let i = 0; i < this.m_ItemsLoc.length; i++) {
      let item = this.m_Items[i];
      if ((item & S2C6.TYPE_CLICKED) == S2C6.TYPE_CLICKED) {
        continue;
      }
      if ((item & S2C6.TYPE_SOOK) == S2C6.TYPE_SOOK) {
        image.DrawImageScale(
          "sook",
          this.m_ItemsLoc[i],
          new p5.Vector(0.025, 0.025, 0)
        );
      }
      if ((item & S2C6.TYPE_MANUL) == S2C6.TYPE_MANUL) {
        image.DrawImageScale(
          "manul",
          this.m_ItemsLoc[i],
          new p5.Vector(0.025, 0.025, 0)
        );
      }
    } // 마우스 커서 근처에만 화면이 보이도록 구현
    fill(0);
    let viewX = mouseX / 20;
    let viewY = mouseY / 20;
    let areaSize = 10;
    let visibleArea = 0.7; /*if (displayTime <= 20) {
      visibleArea = 0.8;
    }
    */
    for (let i = 0; i < 64; i++) {
      for (let j = 0; j < 36; j++) {
        if (viewX - areaSize < i && i < viewX + areaSize) {
          if (viewY - areaSize < j && j < viewY + areaSize) {
            continue;
          }
        } // 마우스 근처가 아니면 검은 도형을 배치하여 안보이도록 구현
        rect(i * 20, j * 20, 20, 20);
      }
    } // 보이는 영역이 원형으로 보이도록 구현
    image.DrawImageScale(
      "transparent",
      new p5.Vector(mouseX, mouseY),
      new p5.Vector(visibleArea, visibleArea, 0)
    ); // draw hand
    if (!this.m_IsTigerHand) {
      if (mousePressed) {
        image.DrawImageScale(
          "bear_click",
          new p5.Vector(mouseX, mouseY),
          new p5.Vector(0.12, 0.12, 0)
        );
      } else {
        image.DrawImageScale(
          "bear_hand",
          new p5.Vector(mouseX, mouseY),
          new p5.Vector(0.12, 0.12, 0)
        );
      }
    } else {
      if (mousePressed) {
        image.DrawImageScale(
          "tiger_click",
          new p5.Vector(mouseX, mouseY),
          new p5.Vector(0.12, 0.12, 0)
        );
      } else {
        image.DrawImageScale(
          "tiger_hand",
          new p5.Vector(mouseX, mouseY),
          new p5.Vector(0.12, 0.12, 0)
        );
      }
    } // draw score
    image.DrawImageScale(
      "sook",
      new p5.Vector(70, 70),
      new p5.Vector(0.05, 0.05, 0)
    );
    font.DrawFont(
      "lee",
      "" + (S2C6.TOTAL_SOOK_CNT - this.m_SookCnt),
      255,
      50,
      110,
      90
    );
    image.DrawImageScale(
      "manul",
      new p5.Vector(180, 70),
      new p5.Vector(0.05, 0.05, 0)
    );
    font.DrawFont(
      "lee",
      "" + (S2C6.TOTAL_MANUL_CNT - this.m_ManulCnt),
      255,
      50,
      220,
      90
    ); // clock base
    image.DrawImageScale(
      "clock",
      new p5.Vector(1205, 75),
      new p5.Vector(0.055, 0.055, 0)
    ); // draw time
    textSize(25);
    fill(0);
    let timeStr = "";
    if (displayTime < 10) {
      fill(255, 0, 0);
      timeStr = " D-" + displayTime;
    } else {
      timeStr = "D-" + displayTime;
    }
    text(timeStr, 1176, 90);
  }
  OnExit() {
    sound.StopSound("bgm");
  }
  OnMousePressed() {
    for (let i = 0; i < this.m_ItemsLoc.length; i++) {
      if (
        this.m_ItemsLoc[i].x - 25 <= mouseX &&
        this.m_ItemsLoc[i].x + 25 >= mouseX
      ) {
        if (
          this.m_ItemsLoc[i].y - 25 <= mouseY &&
          this.m_ItemsLoc[i].y + 25 >= mouseY
        ) {
          // 이미 클릭한 아이템은 갯수로 포함하지 않도록 구현
          if ((this.m_Items[i] & S2C6.TYPE_CLICKED) == S2C6.TYPE_CLICKED) {
            continue;
          }
          sound.PlaySound("item_click");
          this.m_Items[i] |= S2C6.TYPE_CLICKED;
          if ((this.m_Items[i] & S2C6.TYPE_MANUL) == S2C6.TYPE_MANUL) {
            this.m_ManulCnt++;
          } else if ((this.m_Items[i] & S2C6.TYPE_SOOK) == S2C6.TYPE_SOOK) {
            this.m_SookCnt++;
          }
          break;
        }
      }
    }
  }
  SetTigerHand(options) {
    this.m_IsTigerHand = options;
  }
}
