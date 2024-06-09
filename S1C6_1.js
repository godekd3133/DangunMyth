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

    //환인 위치
    this.hwaninfaceOffset = -40;
    this.hwaninX = this.centerX - 250;
    this.hwaninY = this.centerY - 50;

    //환인 얼굴 움직이는 변수
    this.hwaninFaceFlag = false;
    this.hwaninFaceCnt = 0;
    this.hwaninMouse = true;

    //환웅 위치
    this.hwanwoongfaceOffsetY = -80;
    this.hwanwoongfaceOffsetX = -25;
    this.hwanwoongX = this.centerX + 300;
    this.hwanwoongY = this.centerY + 180;
    //환웅 얼굴 움직이는 변수
    this.hwanwoongFaceFlag = false;
    this.hwanwoongFaceCnt = 0;
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

    //환인 위치
    this.hwaninfaceOffset = -40;
    this.hwaninX = this.centerX - 250;
    this.hwaninY = this.centerY - 50;

    //환인 얼굴 움직이는 변수
    this.hwaninFaceFlag = false;
    this.hwaninFaceCnt = 0;
    this.hwaninMouse = true;

    //환웅 위치
    this.hwanwoongfaceOffsetY = -80;
    this.hwanwoongfaceOffsetX = -25;
    this.hwanwoongX = this.centerX + 300;
    this.hwanwoongY = this.centerY + 180;
    //환웅 얼굴 움직이는 변수
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

    // hwaninDuration = SCENE_DURATION/2f;
    // hwanwoongDuration = SCENE_DURATION/2f;

    // int hwaninX = centerX-200;
    // int hwaninY = centerY;

    //나레이션
    imageManager.LoadImage("text", "Images/S1/C6-1/text");
    soundManager.LoadSound("narr", "Sounds/S1/C6-1/narr/narr.mp3");

    //환인
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
    soundManager.LoadSound("hwanin", "Sounds/S1/C6-1/narr/hwanin.mp3");

    //환웅
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
    soundManager.LoadSound("hwanwoong", "Sounds/S1/C6-1/narr/hwanwung.mp3");

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
      //환웅

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
    //환웅 대사 시작지점
    if (timeManager.time - this.enterTime >= this.hwanwoongStartTime) {
      this.hwanwoongFaceFlag = true;
      this.hwaninFaceFlag = false;
      if (!this.hwanwoongVoiceFlag) {
        this.soundStartTime = timeManager.time;
        this.hwanwoongVoiceFlag = true;
        soundManager.PlaySound("hwanwoong");
      }
    }
    //EndPoint
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

    //환인 Draw
    imageManager.DrawImageScale(
      "HwaninBody",
      this.hwaninX,
      this.hwaninY,
      0.15,
      0,
      255
    );
    if (this.hwaninFaceFlag == false) {
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
    //환웅 Draw
    if (this.hwanwoongFaceFlag == false) {
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
