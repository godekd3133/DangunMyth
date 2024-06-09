class S1C9 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 6;
    this.MOVING_DURATION = 5;
    this.PREPARATION_DURATION = 5;
    this.cloudX = 0;
    this.handY = 0;
    this.startMillis = 0;
  }

  OnEnter() {
    imageManager.LoadImage("background", "Images/S1/C9/background");
    imageManager.LoadImage("text", "Images/S1/C9/text");
    imageManager.LoadImage("cloud01", "Images/S1/C9/cloud_01");
    imageManager.LoadImage("cloud02", "Images/S1/C9/cloud_02");
    imageManager.LoadImage("cloud03", "Images/S1/C9/cloud_03");
    imageManager.LoadImage("hand", "Images/S1/C9/hand");
    soundManager.LoadSound("hwanwoog", "Sounds/S1/C9/narr/hwanwoong.mp3");

    this.cloudX = 0;
    this.handY = 0;
    this.startMillis = millis();
  }

  OnDraw() {
    imageManager.DrawImage(
      "background",
      createVector(width / 2, height / 2, 0)
    );

    imageManager.DrawImage(
      "cloud01",
      createVector(width / 2 - 400 + this.cloudX, height / 2, 0)
    );
    imageManager.DrawImage(
      "cloud02",
      createVector(width / 2 - 400 + this.cloudX, height / 2, 0)
    );
    imageManager.DrawImage(
      "cloud03",
      createVector(width / 2 + 400 - this.cloudX, height / 2, 0)
    );

    imageManager.DrawImageScale(
      "hand",
      createVector(width / 2 + 250, height + 200 - this.handY, 0),
      createVector(0.67, 0.67, 0),
      -0.6
    );

    this.cloudX = lerp(
      0,
      400,
      min(1, (timeManager.time - this.enterTime) / this.MOVING_DURATION)
    );
    this.handY = lerp(
      0,
      300,
      min(1, (timeManager.time - this.enterTime) / this.MOVING_DURATION)
    );

    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C11());
    }
    imageManager.DrawImage("text", createVector(width / 2, height / 2, 0));

    // 씬 시작 후 1초 뒤 대사1 시작
    if (
      soundManager.hasSound("hwanwoog") &&
      this.isTimeExceededMillis(this.startMillis, 1)
    ) {
      soundManager.playSoundOnce("hwanwoog");
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }

  isTimeExceededMillis(startMillis, endSeconds) {
    let nowTotalMilliseconds = millis();
    let endMilliseconds = endSeconds * 1000;
    return nowTotalMilliseconds - startMillis >= endMilliseconds;
  }
}
