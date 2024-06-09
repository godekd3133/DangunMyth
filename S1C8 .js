class S1C8 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 6;

    this.centerX = width / 2;
    this.centerY = height / 2;

    this.tick1Flag = true;
    this.tick1Cnt = 0;

    this.endpointTick = 0;

    // 환인 위치
    this.hwaninfaceOffset = -300;
    this.hwaninX = this.centerX - 250;
    this.hwaninY = this.centerY + 380;

    // 환인 얼굴 움직이는 변수
    this.hwaninFaceFlag = true;
    this.hwaninFaceCnt = 0;
    this.hwaninFace = true;

    this.playedSoundMap = new Map();
    this.startTime = 0;
  }

  OnEnter() {
    this.hwaninX = this.centerX - 310;
    this.hwaninY = this.centerY + 350;

    // 환인
    imageManager.LoadImage("BackgroundS1C8", "Images/S1/C8/Background");
    imageManager.LoadImage("HwaninBody", "Images/S1/C8/HwaninBody");
    // imageManager.LoadImage("HwaninFace_MouseClose", "Images/S1/C8/HwaninFace_MouseClose");
    // imageManager.LoadImage("HwaninFace_MouseOpen", "Images/S1/C8/HwaninFace_MouseOpen");
    imageManager.LoadImage("HwaninFace", "Images/S1/C8/HwaninFace");

    imageManager.LoadImage("HwaninHand", "Images/S1/C8/HwaninHand");
    imageManager.LoadImage("NarrS1C8", "Images/S1/C8/narr");

    soundManager.LoadSound("NarrS1C8", "Sounds/S1/C8/narr/narr.mp3");
    soundManager.LoadSound("HawninS1C8", "Sounds/S1/C8/narr/hwanin.mp3");
    this.playedSoundMap.set("NarrS1C8", 0);
    this.playedSoundMap.set("HawninS1C8", 0);

    this.startTime = millis();

    // print("Enter");
    background(255);
  }

  OnDraw() {
    // int mouseMove =(int)random(0,15);

    // if (hwaninFace) tick1Cnt++;
    // else tick1Cnt--;

    // if (tick1Cnt >= 20 || tick1Cnt <= 0) {
    //   hwaninFace = !hwaninFace;
    // }
    // endpointTick++;
    // println(endpointTick);
    // if (endpointTick >= 200) {
    //     scene.ChangeScene(new S1C6_1());
    // }

    imageManager.DrawImageScale(
      "BackgroundS1C8",
      this.centerX,
      this.centerY,
      1.0,
      0.0,
      255
    );

    // 환인 Draw
    imageManager.DrawImageScale(
      "HwaninBody",
      this.hwaninX,
      this.hwaninY,
      0.49,
      0.0,
      255
    );
    // if (mouseMove < 10) imageManager.DrawImageScale("HwaninFace_MouseClose", this.hwaninX + 15, this.hwaninY + this.hwaninfaceOffset + this.tick1Cnt, 0.4, 0.0, 255);
    // else imageManager.DrawImageScale("HwaninFace_MouseOpen", this.hwaninX + 15, this.hwaninY + this.hwaninfaceOffset + this.tick1Cnt, 0.4, 0.0, 255);

    imageManager.DrawImageScale(
      "HwaninFace",
      this.hwaninX + 15,
      this.hwaninY + this.hwaninfaceOffset + this.tick1Cnt - 80,
      0.49,
      0.0,
      255
    );
    imageManager.DrawImageScale(
      "HwaninHand",
      this.hwaninX - 75,
      this.hwaninY - 160,
      0.4,
      0.7,
      255
    );

    imageManager.DrawImageScale(
      "NarrS1C8",
      createVector(this.centerX, this.centerY),
      createVector(1.0, 1.0)
    );

    let currentTime = (millis() - this.startTime) / 1000;

    this.PlaySoundOnce("NarrS1C8");
    if (currentTime > 3.0) {
      this.PlaySoundOnce("HawninS1C8");
    }
    // print("Draw");

    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C9());
    }
  }

  PlaySoundOnce(soundName) {
    if (this.playedSoundMap.get(soundName) === 1) {
      return;
    }
    soundManager.PlaySound(soundName);
    this.playedSoundMap.set(soundName, 1);
  }

  OnExit() {}
}
