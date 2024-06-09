class S1C6_1 extends Scene {
  constructor() {
    super();
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.SCENE_DURATION = 14;

    this.hwaninDuration = 4;
    this.hwanwoongDuration = 3;

    this.soundStartTime = 0;
    this.hwaninStartTime = 4;
    this.hwanwoongStartTime = 9;

    this.narrFlag = false;
    this.hwaninVoiceFlag = false;
    this.hwanwoongVoiceFlag = false;

    this.hwaninCoor = createVector(this.centerX - 300, this.centerY);

    this.mouseTickInterval = 10 / 60;
    this.mouseTick = 0;

    // Hwanin position
    this.hwaninfaceOffset = -40;
    this.hwaninX = this.centerX - 250;
    this.hwaninY = this.centerY - 50;

    // Hwanin face movement variables
    this.hwaninFaceFlag = false;
    this.hwaninFaceCnt = 0;
    this.hwaninMouse = true;

    // Hwanwoong position
    this.hwanwoongfaceOffsetY = -80;
    this.hwanwoongfaceOffsetX = -25;
    this.hwanwoongX = this.centerX + 200;
    this.hwanwoongY = this.centerY + 180;

    // Hwanwoong face movement variables
    this.hwanwoongFaceFlag = false;
    this.hwanwoongFaceCnt = 0;
    this.hwanwoongMouse = true;
  }

  OnEnter() {
    this.centerX = width / 2;
    this.centerY = height / 2;

    this.hwaninDuration = 4;
    this.hwanwoongDuration = 3;

    this.soundStartTime = 0;
    this.hwaninStartTime = 4;
    this.hwanwoongStartTime = 9;

    this.narrFlag = false;
    this.hwaninVoiceFlag = false;
    this.hwanwoongVoiceFlag = false;

    this.hwaninCoor = createVector(this.centerX - 300, this.centerY);

    this.mouseTickInterval = 10 / 60;
    this.mouseTick = 0;

    this.hwaninfaceOffset = -40;
    this.hwaninX = this.centerX - 250;
    this.hwaninY = this.centerY - 50;

    this.hwaninFaceFlag = false;
    this.hwaninFaceCnt = 0;
    this.hwaninMouse = true;

    this.hwanwoongfaceOffsetY = -80;
    this.hwanwoongfaceOffsetX = -25;
    this.hwanwoongX = this.centerX + 300;
    this.hwanwoongY = this.centerY + 180;

    this.hwanwoongFaceFlag = false;
    this.hwanwoongFaceCnt = 0;
    this.hwanwoongMouse = true;

    this.hwaninFaceCnt = 0;
    this.hwanwoongFaceCnt = 0;
    this.mouseTick = 0;
    this.soundStartTime = 0;

    this.soundStartTime = 0;
    this.hwaninStartTime = 4;
    this.hwanwoongStartTime = 9;

    // Load images and sounds
    imageManager.LoadImage("text", "Images/S1/C6-1/text.png");
    soundManager.LoadSound("narr", "Sounds/S1/C6-1/narr/narr.mp3");

    imageManager.LoadImage("Background", "Images/S1/C6-1/Background.png");
    imageManager.LoadImage("HwaninBody", "Images/S1/C6-1/HwaninBody.png");
    imageManager.LoadImage(
      "HwaninFace_MouseClose",
      "Images/S1/C6-1/HwaninFace_MouseClose.png"
    );
    imageManager.LoadImage(
      "HwaninFace_MouseOpen",
      "Images/S1/C6-1/HwaninFace_MouseOpen.png"
    );
    soundManager.LoadSound("hwanin", "Sounds/S1/C6-1/narr/hwanin.mp3");

    imageManager.LoadImage(
      "HwanwoongBody1",
      "Images/S1/C6-1/HwanwoongBody1.png"
    );
    imageManager.LoadImage(
      "HwanwoongBody2",
      "Images/S1/C6-1/HwanwoongBody2.png"
    );
    imageManager.LoadImage(
      "HwanwoongFace1",
      "Images/S1/C6-1/HwanwoongFace1.png"
    );
    imageManager.LoadImage(
      "HwanwoongFace2-1",
      "Images/S1/C6-1/HwanwoongFace2-1.png"
    );
    imageManager.LoadImage(
      "HwanwoongFace2-2",
      "Images/S1/C6-1/HwanwoongFace2-2.png"
    );
    soundManager.LoadSound("hwanwoong", "Sounds/S1/C6-1/narr/hwanwoong.mp3");

    background(255);
    this.enterTime = timeManager.time;
  }

  OnDraw() {
    if (!this.narrFlag) {
      this.narrFlag = true;
      soundManager.PlaySound("narr");
    }

    this.mouseTick += timeManager.deltaTime;
    if (this.mouseTick >= this.mouseTickInterval) {
      this.mouseTick = 0;

      if (this.hwaninFaceFlag) {
        this.hwaninMouse = !this.hwaninMouse;
      } else {
        this.hwaninMouse = false;
      }

      if (this.hwanwoongFaceFlag) {
        this.hwanwoongMouse = !this.hwanwoongMouse;
      } else {
        this.hwanwoongMouse = false;
      }
    }

    if (timeManager.time - this.enterTime >= this.hwaninStartTime) {
      this.hwaninFaceFlag = true;
      if (!this.hwaninVoiceFlag) {
        this.soundStartTime = timeManager.time;
        this.hwaninVoiceFlag = true;
        soundManager.PlaySound("hwanin");
      }
      if (
        this.hwaninVoiceFlag &&
        timeManager.time - this.soundStartTime > this.hwaninDuration
      ) {
        this.hwaninFaceFlag = false;
      }
    }

    if (timeManager.time - this.enterTime >= this.hwanwoongStartTime) {
      this.hwanwoongFaceFlag = true;
      this.hwaninFaceFlag = false;
      if (!this.hwanwoongVoiceFlag) {
        this.soundStartTime = timeManager.time;
        this.hwanwoongVoiceFlag = true;
        soundManager.PlaySound("hwanwoong");
      }
    }

    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C6_2());
    }

    imageManager.DrawImageScale(
      "Background",
      this.centerX,
      this.centerY,
      1,
      0,
      255
    );
    imageManager.DrawImageScale("text", this.centerX, this.centerY, 1, 0, 255);

    imageManager.DrawImageScale(
      "HwaninBody",
      this.hwaninX,
      this.hwaninY,
      0.15,
      0,
      255
    );
    if (!this.hwaninFaceFlag) {
      imageManager.DrawImageScale(
        "HwaninFace_MouseClose",
        this.hwaninX,
        this.hwaninY + this.hwaninfaceOffset,
        0.15,
        0,
        255
      );
    } else {
      if (this.hwaninMouse) {
        imageManager.DrawImageScale(
          "HwaninFace_MouseClose",
          this.hwaninX,
          this.hwaninY + this.hwaninfaceOffset,
          0.15,
          0,
          255
        );
      } else {
        imageManager.DrawImageScale(
          "HwaninFace_MouseOpen",
          this.hwaninX,
          this.hwaninY + this.hwaninfaceOffset,
          0.15,
          0,
          255
        );
      }
    }

    if (!this.hwanwoongFaceFlag) {
      imageManager.DrawImageScale(
        "HwanwoongBody1",
        this.hwanwoongX,
        this.hwanwoongY,
        0.15,
        0,
        255
      );
      imageManager.DrawImageScale(
        "HwanwoongFace1",
        this.hwanwoongX + -10,
        this.hwanwoongY + this.hwanwoongfaceOffsetY,
        0.15,
        0,
        255
      );
    } else {
      imageManager.DrawImageScale(
        "HwanwoongBody2",
        this.hwanwoongX,
        this.hwanwoongY,
        0.15,
        0,
        255
      );
      if (this.hwanwoongMouse) {
        imageManager.DrawImageScale(
          "HwanwoongFace2-1",
          this.hwanwoongX + this.hwanwoongfaceOffsetX,
          this.hwanwoongY + this.hwanwoongfaceOffsetY,
          0.15,
          0,
          255
        );
      } else {
        imageManager.DrawImageScale(
          "HwanwoongFace2-2",
          this.hwanwoongX + this.hwanwoongfaceOffsetX,
          this.hwanwoongY + this.hwanwoongfaceOffsetY,
          0.15,
          0,
          255
        );
      }
    }
  }

  OnExit() {}
}
