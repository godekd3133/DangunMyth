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
      "s1c6_1_Background",
      createVector(this.centerX, this.centerY),
      createVector(1, 1),
      0,
      255
    );
    imageManager.DrawImageScale(
      "s1c6_1_text",
      createVector(this.centerX, this.centerY),
      createVector(1, 1),
      0,
      255
    );

    imageManager.DrawImageScale(
      "s1c6_1_HwaninBody",
      createVector(this.hwaninX, this.hwaninY),
      createVector(0.15, 0.15),
      0,
      255
    );
    if (!this.hwaninFaceFlag) {
      imageManager.DrawImageScale(
        "s1c6_1_HwaninFace_MouseClose",
        createVector(this.hwaninX, this.hwaninY + this.hwaninfaceOffset),
        createVector(0.15, 0.15),
        0,
        255
      );
    } else {
      if (this.hwaninMouse) {
        imageManager.DrawImageScale(
          "s1c6_1_HwaninFace_MouseClose",
          createVector(this.hwaninX, this.hwaninY + this.hwaninfaceOffset),
          createVector(0.15, 0.15),
          0,
          255
        );
      } else {
        imageManager.DrawImageScale(
          "s1c6_1_HwaninFace_MouseOpen",
          createVector(this.hwaninX, this.hwaninY + this.hwaninfaceOffset),
          createVector(0.15, 0.15),
          0,
          255
        );
      }
    }

    if (!this.hwanwoongFaceFlag) {
      imageManager.DrawImageScale(
        "s1c6_1_HwanwoongBody1",
        createVector(this.hwanwoongX, this.hwanwoongY),
        createVector(0.15, 0.15),
        0,
        255
      );
      imageManager.DrawImageScale(
        "s1c6_1_HwanwoongFace1",
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
        "s1c6_1_HwanwoongBody2",
        createVector(this.hwanwoongX, this.hwanwoongY),
        createVector(0.15, 0.15),
        0,
        255
      );
      if (this.hwanwoongMouse) {
        imageManager.DrawImageScale(
          "s1c6_1_HwanwoongFace2-1",
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
          "s1c6_1_HwanwoongFace2-2",
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
