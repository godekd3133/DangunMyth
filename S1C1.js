class S1C1 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 17;
    this.cloudX = 0;
    this.zoomIn = 1;
    this.sessionIndex = 0;
    this.sessionDuration = [4, 9.5, 15];
    this.sessionSound = ["S1/C1/narr", "S1/C1/narr2", "S1/C1/narr3"];
    this.sessionText = ["s1c1_text1", "s1c1_text1", "s1c1_text2"];
    this.isSessionOut = [false, false, false];
  }

  OnEnter() {
    soundManager.PlaySound("intro");
    this.cloudX = 0;
    this.zoomIn = 1;
    this.enterTime = timeManager.time;
    this.sessionIndex = 0;
    this.isSessionOut = [false, false, false];
  }

  OnDraw() {
    let scale = createVector(this.zoomIn, this.zoomIn, 0);
    imageManager.DrawImageScale(
      "s1c1_background",
      createVector(width / 2, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "s1c1_cloud01",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "s1c1_cloud02",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "s1c1_cloud03",
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
