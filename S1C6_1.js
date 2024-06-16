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

    this.hwaninfaceOffset = -40;
    this.hwaninX = this.centerX - 250;
    this.hwaninY = this.centerY - 50;
    this.hwaninFaceFlag = false;
    this.hwaninMouse = true;

    this.hwanwoongfaceOffsetY = -80;
    this.hwanwoongfaceOffsetX = -25;
    this.hwanwoongX = this.centerX + 300;
    this.hwanwoongY = this.centerY + 180;
    this.hwanwoongFaceFlag = false;
    this.hwanwoongMouse = true;
  }

  OnEnter() {
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

    this.hwaninfaceOffset = -40;
    this.hwaninX = this.centerX - 250;
    this.hwaninY = this.centerY - 50;
    this.hwaninFaceFlag = false;
    this.hwaninMouse = true;

    this.hwanwoongfaceOffsetY = -80;
    this.hwanwoongfaceOffsetX = -25;
    this.hwanwoongX = this.centerX + 300;
    this.hwanwoongY = this.centerY + 180;
    this.hwanwoongFaceFlag = false;
    this.hwanwoongMouse = true;

    this.hwaninFaceCnt = 0;
    this.hwanwoongFaceCnt = 0;
    this.mouseTick = 0;
    this.soundStartTime = 0;

    this.soundStartTime = 0;
    this.hwaninStartTime = 4;
    this.hwanwoongStartTime = 9;

    imageManager.LoadImage("text", "Images/S1/C6-1/text");

    imageManager.LoadImage("Background", "Images/S1/C6-1/Background");
    imageManager.LoadImage("HwaninBody", "Images/S1/C6-1/HwaninBody");
    imageManager.LoadImage(
      "HwaninFace_MouseClose",
      "Images/S1/C6-1/HwaninFace_MouseClose"
    );
    imageManager.LoadImage(
      "HwaninFace_MouseOpen",
      "Images/S1/C6-1/HwaninFace_MouseOpen"
    );
    imageManager.LoadImage(
      "HwaninFace_MouseClose",
      "Images/S1/C6-1/HwaninFace_MouseClose"
    );

    imageManager.LoadImage("HwanwoongBody1", "Images/S1/C6-1/HwanwoongBody1");
    imageManager.LoadImage("HwanwoongBody2", "Images/S1/C6-1/HwanwoongBody2");
    imageManager.LoadImage("HwanwoongFace1", "Images/S1/C6-1/HwanwoongFace1");
    imageManager.LoadImage(
      "HwanwoongFace2-1",
      "Images/S1/C6-1/HwanwoongFace2-1"
    );
    imageManager.LoadImage(
      "HwanwoongFace2-2",
      "Images/S1/C6-1/HwanwoongFace2-2"
    );

    background(255);
  }

  OnDraw() {
    if (!this.narrFlag) {
      this.narrFlag = true;
      soundManager.PlaySound("S1/C6-1/narr");
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
        soundManager.PlaySound("S1/C6-1/hwanin");
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
        soundManager.PlaySound("S1/C6-1/hwanwoong");
      }
    }
    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C6_2());
    }
    imageManager.DrawImageScale(
      "Background",
      createVector(this.centerX, this.centerY),
      createVector(1, 1),
      0,
      255
    );
    imageManager.DrawImageScale(
      "text",
      createVector(this.centerX, this.centerY),
      createVector(1, 1),
      0,
      255
    );

    imageManager.DrawImageScale(
      "HwaninBody",
      createVector(this.hwaninX, this.hwaninY),
      createVector(0.15, 0.15),
      0,
      255
    );
    if (!this.hwaninFaceFlag) {
      imageManager.DrawImageScale(
        "HwaninFace_MouseClose",
        createVector(this.hwaninX, this.hwaninY + this.hwaninfaceOffset),
        createVector(0.15, 0.15),
        0,
        255
      );
    } else {
      if (this.hwaninMouse) {
        imageManager.DrawImageScale(
          "HwaninFace_MouseClose",
          createVector(this.hwaninX, this.hwaninY + this.hwaninfaceOffset),
          createVector(0.15, 0.15),
          0,
          255
        );
      } else {
        imageManager.DrawImageScale(
          "HwaninFace_MouseOpen",
          createVector(this.hwaninX, this.hwaninY + this.hwaninfaceOffset),
          createVector(0.15, 0.15),
          0,
          255
        );
      }
    }

    if (!this.hwanwoongFaceFlag) {
      imageManager.DrawImageScale(
        "HwanwoongBody1",
        createVector(this.hwanwoongX, this.hwanwoongY),
        createVector(0.15, 0.15),
        0,
        255
      );
      imageManager.DrawImageScale(
        "HwanwoongFace1",
        createVector(
          this.hwanwoongX - 10,
          this.hwanwoongY + this.hwanwoongfaceOffsetY
        ),
        createVector(0.15, 0.15),
        0,
        255
      );
    } else {
      imageManager.DrawImageScale(
        "HwanwoongBody2",
        createVector(this.hwanwoongX, this.hwanwoongY),
        createVector(0.15, 0.15),
        0,
        255
      );
      if (this.hwanwoongMouse) {
        imageManager.DrawImageScale(
          "HwanwoongFace2-1",
          createVector(
            this.hwanwoongX + this.hwanwoongfaceOffsetX,
            this.hwanwoongY + this.hwanwoongfaceOffsetY
          ),
          createVector(0.15, 0.15),
          0,
          255
        );
      } else {
        imageManager.DrawImageScale(
          "HwanwoongFace2-2",
          createVector(
            this.hwanwoongX + this.hwanwoongfaceOffsetX,
            this.hwanwoongY + this.hwanwoongfaceOffsetY
          ),
          createVector(0.15, 0.15),
          0,
          255
        );
      }
    }
  }

  OnExit() {}
}
