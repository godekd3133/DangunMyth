class S1C6_2 extends Scene {
  constructor() {
    super();
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.SCENE_DURATION = 8.5;
    this.hwaninFaceScale = 0.4;

    this.hwaninStartTime = 4.0;

    this.narrFlag = false;
    this.hwaninVoiceFlag = false;

    this.tick1Flag = true;
    this.tick1Cnt = 0;

    this.endpointTick = 0;

    //환인 위치
    this.hwaninfaceOffset = -130;
    this.hwaninX = this.centerX - 310;
    this.hwaninY = this.centerY + 350;

    //환인 얼굴 움직이는 변수
    this.hwaninFaceFlag = true;
    this.hwaninFaceCnt = 0;
    this.hwaninFace = true;
  }

  OnEnter() {
    this.hwaninFaceScale = 0.4;
    // int hwaninX = centerX-200;
    // int hwaninY = centerY;

    //나레이션

    //환인
    imageManager.LoadImage("Background2", "Images/S1/C6-2/Background");
    imageManager.LoadImage("HwaninBody", "Images/S1/C6-2/HwaninBody");
    imageManager.LoadImage("HwaninFace", "Images/S1/C6-2/HwaninFace");
    imageManager.LoadImage("text", "Images/S1/C6-2/text");
  }

  OnDraw() {
    if (!this.narrFlag) {
      this.narrFlag = true;
      soundManager.PlaySound("S1/C6-2/hwanwoong");
    }
    if (
      timeManager.time - this.enterTime > this.hwaninStartTime &&
      !this.hwaninVoiceFlag
    ) {
      this.hwaninVoiceFlag = true;
      soundManager.PlaySound("S1/C6-2/hwanin");
    }
    if (this.hwaninFace) this.hwaninFaceScale += timeManager.deltaTime * 0.2;
    else this.hwaninFaceScale -= timeManager.deltaTime * 0.2;

    if (this.hwaninFaceScale >= 0.5 || this.hwaninFaceScale <= 0.36) {
      this.hwaninFace = !this.hwaninFace;
    }
    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C7());
    }
    imageManager.DrawImageScale(
      "Background2",
      createVector(this.centerX, this.centerY),
      createVector(1, 1)
    );

    //환인 Draw
    imageManager.DrawImageScale(
      "HwaninBody",
      createVector(this.hwaninX, this.hwaninY),
      createVector(0.47, 0.47)
    );
    imageManager.DrawImageScale(
      "HwaninFace",
      createVector(this.hwaninX, this.hwaninY + this.hwaninfaceOffset),
      createVector(0.47, 0.47)
    );
    imageManager.DrawImage("text", createVector(this.centerX, this.centerY, 0));
  }

  OnExit() {}
}
