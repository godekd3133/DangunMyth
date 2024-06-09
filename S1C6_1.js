class S1C6_1 extends Scene {
  centerX = width / 2;
  centerY = height / 2;
  SCENE_DURATION = 14;
  hwaninDuration = 4;
  hwanwoongDuration = 3;
  soundStartTime = 0;
  hwaninStartTime = 4;
  hwanwoongStartTime = 9;
  narrFlag = false;
  hwaninVoiceFlag = false;
  hwanwoongVoiceFlag = false;
  hwaninCoor = new p5.Vector(centerX - 300, centerY);
  mouseTickInterval = 10 / 60;
  mouseTick = 0; //환인 위치
  hwaninfaceOffset = -40;
  hwaninX = centerX - 250;
  hwaninY = centerY - 50; //환인 얼굴 움직이는 변수
  hwaninFaceFlag = false;
  hwaninFaceCnt = 0;
  hwaninMouse = true; //환웅 위치
  hwanwoongfaceOffsetY = -80;
  hwanwoongfaceOffsetX = -25;
  hwanwoongX = centerX + 200;
  hwanwoongY = centerY + 180; //환웅 얼굴 움직이는 변수
  hwanwoongFaceFlag = false;
  hwanwoongFaceCnt = 0;
  hwanwoongMouse = true;
  constructor() {}
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
    this.hwaninCoor = new p5.Vector(this.centerX - 300, this.centerY);
    this.mouseTickInterval = 10 / 60;
    this.mouseTick = 0; //환인 위치
    this.hwaninfaceOffset = -40;
    this.hwaninX = this.centerX - 250;
    this.hwaninY = this.centerY - 50; //환인 얼굴 움직이는 변수
    this.hwaninFaceFlag = false;
    this.hwaninFaceCnt = 0;
    this.hwaninMouse = true; //환웅 위치
    this.hwanwoongfaceOffsetY = -80;
    this.hwanwoongfaceOffsetX = -25;
    this.hwanwoongX = this.centerX + 300;
    this.hwanwoongY = this.centerY + 180; //환웅 얼굴 움직이는 변수
    this.hwanwoongFaceFlag = false;
    this.hwanwoongFaceCnt = 0;
    this.hwanwoongMouse = true;
    this.hwaninFaceCnt = 0;
    this.hwanwoongFaceCnt = 0;
    this.mouseTick = 0;
    this.soundStartTime = 0;
    this.soundStartTime = 0;
    this.hwaninStartTime = 4;
    this.hwanwoongStartTime = 9; // hwaninDuration = SCENE_DURATION/2f;
    // hwanwoongDuration = SCENE_DURATION/2f;
    // int hwaninX = centerX-200;
    // int hwaninY = centerY;
    //나레이션
    image.LoadImage("text", "./Images/S1/C6-1/text");
    sound.LoadSound("narr", "Sounds/S1/C6-1/narr/narr.mp3"); //환인
    image.LoadImage("Background", "./Images/S1/C6-1/Background");
    image.LoadImage("HwaninBody", "./Images/S1/C6-1/HwaninBody");
    image.LoadImage(
      "HwaninFace_MouseClose",
      "./Images/S1/C6-1/HwaninFace_MouseClose"
    );
    image.LoadImage(
      "HwaninFace_MouseOpen",
      "./Images/S1/C6-1/HwaninFace_MouseOpen"
    );
    image.LoadImage(
      "HwaninFace_MouseClose",
      "./Images/S1/C6-1/HwaninFace_MouseClose"
    );
    sound.LoadSound("hwanin", "Sounds/S1/C6-1/narr/hwanin.mp3"); //환웅
    image.LoadImage("HwanwoongBody1", "./Images/S1/C6-1/HwanwoongBody1");
    image.LoadImage("HwanwoongBody2", "./Images/S1/C6-1/HwanwoongBody2");
    image.LoadImage("HwanwoongFace1", "./Images/S1/C6-1/HwanwoongFace1");
    image.LoadImage("HwanwoongFace2-1", "./Images/S1/C6-1/HwanwoongFace2-1");
    image.LoadImage("HwanwoongFace2-2", "./Images/S1/C6-1/HwanwoongFace2-2");
    sound.LoadSound("hwanwoong", "Sounds/S1/C6-1/narr/hwanwung.mp3");
    background("#ffffff");
    enterTime = time.time;
  }
  OnDraw() {
    if (!this.narrFlag) {
      this.narrFlag = true;
      sound.PlaySound("narr");
    }
    this.mouseTick += time.deltaTime;
    if (this.mouseTick >= this.mouseTickInterval) {
      this.mouseTick = 0;
      if (this.hwaninFaceFlag) {
        this.hwaninMouse = !this.hwaninMouse;
      } else {
        this.hwaninMouse = false;
      } //환웅
      if (this.hwanwoongFaceFlag) {
        this.hwanwoongMouse = !this.hwanwoongMouse;
      } else {
        this.hwanwoongMouse = false;
      }
    }
    if (time.time - enterTime >= this.hwaninStartTime) {
      this.hwaninFaceFlag = true;
      if (!this.hwaninVoiceFlag) {
        this.soundStartTime = time.time;
        this.hwaninVoiceFlag = true;
        sound.PlaySound("hwanin");
      }
      if (
        this.hwaninVoiceFlag &&
        time.time - this.soundStartTime > this.hwaninDuration
      ) {
        this.hwaninFaceFlag = false;
      }
    } //환웅 대사 시작지점
    if (time.time - enterTime >= this.hwanwoongStartTime) {
      this.hwanwoongFaceFlag = true;
      this.hwaninFaceFlag = false;
      if (!this.hwanwoongVoiceFlag) {
        this.soundStartTime = time.time;
        this.hwanwoongVoiceFlag = true;
        sound.PlaySound("hwanwoong");
      } // if (hwanwoongVoiceFlag && time.time - soundStartTime > hwanwoongDuration) {
      //   hwanwoongFaceFlag = false;
      // }
    } //EndPoint
    if (time.time - enterTime >= this.SCENE_DURATION) {
      scene.ChangeScene(new S1C6_2());
    }
    image.DrawImageScale("Background", this.centerX, this.centerY, 1, 0, 255);
    image.DrawImageScale("text", this.centerX, this.centerY, 1, 0, 255); //환인 Draw
    image.DrawImageScale(
      "HwaninBody",
      this.hwaninX,
      this.hwaninY,
      0.15,
      0,
      255
    );
    if (this.hwaninFaceFlag == false) {
      image.DrawImageScale(
        "HwaninFace_MouseClose",
        this.hwaninX,
        this.hwaninY + this.hwaninfaceOffset,
        0.15,
        0,
        255
      );
    } else {
      if (this.hwaninMouse) {
        image.DrawImageScale(
          "HwaninFace_MouseClose",
          this.hwaninX,
          this.hwaninY + this.hwaninfaceOffset,
          0.15,
          0,
          255
        );
      } else {
        image.DrawImageScale(
          "HwaninFace_MouseOpen",
          this.hwaninX,
          this.hwaninY + this.hwaninfaceOffset,
          0.15,
          0,
          255
        );
      }
    } //환웅 Draw
    if (this.hwanwoongFaceFlag == false) {
      image.DrawImageScale(
        "HwanwoongBody1",
        this.hwanwoongX,
        this.hwanwoongY,
        0.15,
        0,
        255
      );
      image.DrawImageScale(
        "HwanwoongFace1",
        this.hwanwoongX + -10,
        this.hwanwoongY + this.hwanwoongfaceOffsetY,
        0.15,
        0,
        255
      );
    } else {
      image.DrawImageScale(
        "HwanwoongBody2",
        this.hwanwoongX,
        this.hwanwoongY,
        0.15,
        0,
        255
      );
      if (this.hwanwoongMouse) {
        image.DrawImageScale(
          "HwanwoongFace2-1",
          this.hwanwoongX + this.hwanwoongfaceOffsetX,
          this.hwanwoongY + this.hwanwoongfaceOffsetY,
          0.15,
          0,
          255
        );
      } else {
        image.DrawImageScale(
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
