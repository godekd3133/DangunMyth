class S2C6 extends Scene {
  constructor() {
    super();
    this.DISPLAY_TIME = 99;
    this.TYPE_SOOK = 0x1;
    this.TYPE_MANUL = 0x2;
    this.TYPE_CLICKED = 0x4;
    this.m_Items = null;
    this.m_ItemsLoc = null;
    this.m_SookCnt = 0;
    this.m_ManulCnt = 0;
    this.TOTAL_SOOK_CNT = 5;
    this.TOTAL_MANUL_CNT = 20;
    this.m_IsTigerHand = true;
  }

  OnEnter() {
    imageManager.LoadImage("background", "Images/S2/C6/background");
    imageManager.LoadImage("clock", "Images/S2/C6/clock");
    imageManager.LoadImage("manul", "Images/S2/C6/manul");
    imageManager.LoadImage("sook", "Images/S2/C6/sook");
    imageManager.LoadImage("bear_hand", "Images/S2/C6/bear_hand");
    imageManager.LoadImage("bear_click", "Images/S2/C6/bear_click");
    imageManager.LoadImage("tiger_hand", "Images/S2/C6/tiger_hand");
    imageManager.LoadImage("tiger_click", "Images/S2/C6/tiger_click");
    imageManager.LoadImage("transparent", "Images/S2/C6/transparent");
    soundManager.LoadSound("item_click", "Sounds/S2/C6/item_click.wav");
    soundManager.LoadSound("bgm", "Sounds/S2/C6/bgm.mp3");

    this.m_Items = new Array(25);
    this.m_ItemsLoc = new Array(25);

    for (let i = 0; i < this.m_ItemsLoc.length; i++) {
      if (i < 20) {
        this.m_Items[i] = this.TYPE_MANUL;
      } else {
        this.m_Items[i] = this.TYPE_SOOK;
      }
      this.m_ItemsLoc[i] = createVector(
        random(22) * 50 + 5,
        random(11) * 50 + 150,
        0
      );
    }
    this.m_SookCnt = 0;
    this.m_ManulCnt = 0;

    soundManager.PlaySound("bgm");
    fontManager.LoadFont("lee", "LeeSeoyun.otf");
  }

  OnDraw() {
    let displayTime = this.DISPLAY_TIME - (time.time - enterTime);

    if (
      this.m_ManulCnt >= this.TOTAL_MANUL_CNT &&
      this.m_SookCnt >= this.TOTAL_SOOK_CNT
    ) {
      sceneManager.ChangeScene(new S2C6V2());
    }
    if (displayTime <= 0) {
      sceneManager.ChangeScene(new S2C6V1());
    }
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );

    for (let i = 0; i < this.m_ItemsLoc.length; i++) {
      let item = this.m_Items[i];

      if ((item & this.TYPE_CLICKED) === this.TYPE_CLICKED) {
        continue;
      }
      if ((item & this.TYPE_SOOK) === this.TYPE_SOOK) {
        imageManager.DrawImageScale(
          "sook",
          this.m_ItemsLoc[i],
          createVector(0.025, 0.025, 0)
        );
      }
      if ((item & this.TYPE_MANUL) === this.TYPE_MANUL) {
        imageManager.DrawImageScale(
          "manul",
          this.m_ItemsLoc[i],
          createVector(0.025, 0.025, 0)
        );
      }
    }

    fill(0);
    let viewX = mouseX / 20;
    let viewY = mouseY / 20;
    let areaSize = 10;
    let visibleArea = 0.7;

    for (let i = 0; i < 64; i++) {
      for (let j = 0; j < 36; j++) {
        if (viewX - areaSize < i && i < viewX + areaSize) {
          if (viewY - areaSize < j && j < viewY + areaSize) {
            continue;
          }
        }
        rect(i * 20, j * 20, 20, 20);
      }
    }
    imageManager.DrawImageScale(
      "transparent",
      createVector(mouseX, mouseY),
      createVector(visibleArea, visibleArea, 0)
    );

    if (!this.m_IsTigerHand) {
      if (mouseIsPressed) {
        imageManager.DrawImageScale(
          "bear_click",
          createVector(mouseX, mouseY),
          createVector(0.12, 0.12, 0)
        );
      } else {
        imageManager.DrawImageScale(
          "bear_hand",
          createVector(mouseX, mouseY),
          createVector(0.12, 0.12, 0)
        );
      }
    } else {
      if (mouseIsPressed) {
        imageManager.DrawImageScale(
          "tiger_click",
          createVector(mouseX, mouseY),
          createVector(0.12, 0.12, 0)
        );
      } else {
        imageManager.DrawImageScale(
          "tiger_hand",
          createVector(mouseX, mouseY),
          createVector(0.12, 0.12, 0)
        );
      }
    }

    imageManager.DrawImageScale(
      "sook",
      createVector(70, 70),
      createVector(0.05, 0.05, 0)
    );
    fontManager.DrawFont(
      "lee",
      "" + (this.TOTAL_SOOK_CNT - this.m_SookCnt),
      255,
      50,
      110,
      90
    );

    imageManager.DrawImageScale(
      "manul",
      createVector(180, 70),
      createVector(0.05, 0.05, 0)
    );
    fontManager.DrawFont(
      "lee",
      "" + (this.TOTAL_MANUL_CNT - this.m_ManulCnt),
      255,
      50,
      220,
      90
    );

    imageManager.DrawImageScale(
      "clock",
      createVector(1205, 75),
      createVector(0.055, 0.055, 0)
    );

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
    soundManager.StopSound("bgm");
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
          if ((this.m_Items[i] & this.TYPE_CLICKED) === this.TYPE_CLICKED) {
            continue;
          }
          soundManager.PlaySound("item_click");
          this.m_Items[i] |= this.TYPE_CLICKED;

          if ((this.m_Items[i] & this.TYPE_MANUL) === this.TYPE_MANUL) {
            this.m_ManulCnt++;
          } else if ((this.m_Items[i] & this.TYPE_SOOK) === this.TYPE_SOOK) {
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
