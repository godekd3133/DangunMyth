class S1C1 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 17;
    this.cloudX = 0;
    this.zoomIn = 1;
    this.sessionIndex = 0;
    this.sessionDuration = [4, 9.5, 15];
    this.sessionSound = ["narr1", "narr2", "narr3"];
    this.sessionText = ["text1", "text1", "text2"];
    this.isSessionOut = [false, false, false];
  }

  OnEnter() {
    imageManager.LoadImage("background", "Images/S1/C1/background");
    imageManager.LoadImage("cloud01", "Images/S1/C1/cloud_01");
    imageManager.LoadImage("cloud02", "Images/S1/C1/cloud_02");
    imageManager.LoadImage("cloud03", "Images/S1/C1/cloud_03");
    soundManager.LoadSound("intro", "Sounds/intro.wav");
    soundManager.PlaySound("intro");
    imageManager.LoadImage("text1", "Images/S1/C1/text_01");
    imageManager.LoadImage("text2", "Images/S1/C1/text_02");
    soundManager.LoadSound("narr1", "Sounds/S1/C1/narr/narr1.mp3");
    soundManager.LoadSound("narr2", "Sounds/S1/C1/narr/narr2.mp3");
    soundManager.LoadSound("narr3", "Sounds/S1/C1/narr/narr3.mp3");
    this.cloudX = 0;
    this.zoomIn = 1;
    this.enterTime = timeManager.time;
    this.sessionIndex = 0;
    this.isSessionOut = [false, false, false];
  }

  OnDraw() {
    let scale = createVector(this.zoomIn, this.zoomIn, 0);
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "cloud01",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "cloud02",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "cloud03",
      createVector(width / 2 + this.cloudX, height / 2, 0),
      scale
    );

    if (timeManager.time - this.enterTime > 0.25) {
      this.cloudX += 100 * timeManager.deltaTime;
    }
    if (timeManager.time - this.enterTime > 0.25 && this.zoomIn < 1.8) {
      this.zoomIn += 0.02 * timeManager.deltaTime;
    }
    imageManager.DrawImage(
      this.sessionText[this.sessionIndex],
      createVector(width / 2, height / 2)
    );
    if (!this.isSessionOut[this.sessionIndex]) {
      soundManager.PlaySound(this.sessionSound[this.sessionIndex]);
      this.isSessionOut[this.sessionIndex] = true;
    }
    if (
      timeManager.time - this.enterTime >
      this.sessionDuration[this.sessionIndex]
    ) {
      if (this.sessionDuration.length - 1 > this.sessionIndex)
        this.sessionIndex++;
    }
    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C3());
    }
  }

  OnExit() {
    soundManager.StopSound("intro");
  }
}
