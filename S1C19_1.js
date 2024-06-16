class S1C19_1 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 8.5;
    this.tigerX = width - 200;
    this.tigerY = height - 150;
    this.bearX = width - 450;
    this.bearY = height - 150;
    this.narrFlag = false;
    this.narrDuration = 4.5;
    this.animalVoiceFlag = false;
    this.tigerRoutine = ["tiger1", "tiger2", "tiger3", "tiger2", "tiger1"];
    this.bearRoutine = ["bear1", "bear2", "bear3", "bear2", "bear1"];
  }

  OnEnter() {
    this.tigerX = width - 200;
    this.tigerY = height - 350;
    this.bearX = width - 400;
    this.bearY = height - 350;

    this.animalVoiceFlag = false;
    this.narrFlag = false;

    imageManager.LoadImage("background", "Images/S1/C19/background0");
    imageManager.LoadImage("hwangwoong", "Images/S1/C19/V1/hwanwoong");

    imageManager.LoadImage("bear1", "Images/S1/C19/V1/bear1");
    imageManager.LoadImage("bear2", "Images/S1/C19/V1/bear2");
    imageManager.LoadImage("bear3", "Images/S1/C19/V1/bear3");

    imageManager.LoadImage("tiger1", "Images/S1/C19/V1/tiger1");
    imageManager.LoadImage("tiger2", "Images/S1/C19/V1/tiger2");
    imageManager.LoadImage("tiger3", "Images/S1/C19/V1/tiger3");

    imageManager.LoadImage("C19-1-Text", "Images/S1/C19/C19-1-Text");

  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImage("C19-1-Text", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "hwangwoong",
      createVector(320, height - 280),
      createVector(0.25, 0.25)
    );

    if (this.bearX > width / 2) {
      this.tigerX -= 40 * timeManager.deltaTime;
      this.bearX -= 40 * timeManager.deltaTime;
      imageManager.DrawImageScale(
        this.tigerRoutine[Math.floor((millis() / 100) % 5)],
        createVector(this.tigerX, this.tigerY),
        createVector(0.15, 0.15)
      );
      imageManager.DrawImageScale(
        this.bearRoutine[Math.floor((millis() / 100) % 5)],
        createVector(this.bearX, this.bearY),
        createVector(0.15, 0.15)
      );
    } else {
      imageManager.DrawImageScale(
        this.tigerRoutine[0],
        createVector(this.tigerX, this.tigerY),
        createVector(0.15, 0.15)
      );
      imageManager.DrawImageScale(
        this.bearRoutine[1],
        createVector(this.bearX, this.bearY),
        createVector(0.15, 0.15)
      );
    }

    if (!this.narrFlag) {
      this.narrFlag = true;
      soundManager.PlaySound("S1/C19-1/narr");
    }
    if (timeManager.time - this.enterTime >= this.narrDuration) {
      if (!this.animalVoiceFlag) {
        this.animalVoiceFlag = true;
        soundManager.PlaySound("S1/C19-1/Bear");
      }
    }
    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C19_2());
    }
  }

  OnExit() {
    // Add any cleanup code here if needed
  }
}
