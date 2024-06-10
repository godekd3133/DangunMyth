class S1C4 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 7.5;
    this.openDelay = 0.33;
    this.closeMin = 1;
    this.closeMax = 2;
    this.eyeIndex = 0;
    this.nextCloseDuration = 0;
    this.closeTime = 0;
    this.openTime = 0;
    this.isNarrOut = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "Images/S1/C4/background");
    imageManager.LoadImage("man1", "Images/S1/C4/man1");
    imageManager.LoadImage("man2", "Images/S1/C4/man2");
    imageManager.LoadImage("eye1", "Images/S1/C4/eye1");
    imageManager.LoadImage("eye2", "Images/S1/C4/eye2");
    imageManager.LoadImage("eye3", "Images/S1/C4/eye3");
    imageManager.LoadImage("mouth", "Images/S1/C4/mouth");
    imageManager.LoadImage("text", "Images/S1/C4/text");

    this.closeTime = timeManager.time;
    this.openTime = timeManager.time;
    this.nextCloseDuration =
      random(this.closeMin * 100, this.closeMax * 100) / 100;
    this.isNarrOut = false;
  }

  OnDraw() {
    if (!this.isNarrOut) {
      this.isNarrOut = !this.isNarrOut;
      soundManager.PlaySound("S1/C4/narr");
    }
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "text",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "man1",
      createVector(width / 2 + 130, height - 165),
      createVector(0.35, 0.35)
    );
    imageManager.DrawImageScale(
      "eye3",
      createVector(width / 2 + 130, height - 165),
      createVector(0.35, 0.35)
    );
    imageManager.DrawImageScale(
      "mouth",
      createVector(width / 2 + 130, height - 165),
      createVector(0.35, 0.35)
    );
    imageManager.DrawImageScale(
      "man2",
      createVector(width / 2 + 400, height - 165),
      createVector(0.43, 0.43)
    );

    if (this.eyeIndex == 0) {
      imageManager.DrawImageScale(
        "eye1",
        createVector(width / 2 + 370, height - 390),
        createVector(0.38, 0.38)
      );
    } else {
      imageManager.DrawImageScale(
        "eye2",
        createVector(width / 2 + 370, height - 390),
        createVector(0.38, 0.38)
      );
    }

    if (
      this.eyeIndex == 0 &&
      timeManager.time - this.openTime >= this.nextCloseDuration
    ) {
      this.eyeIndex = 1;
      this.nextCloseDuration =
        random(this.closeMin * 100, this.closeMax * 100) / 100;
      this.closeTime = timeManager.time;
    } else if (
      this.eyeIndex == 1 &&
      timeManager.time - this.closeTime >= this.openDelay
    ) {
      this.eyeIndex = 0;
      this.openTime = timeManager.time;
    }

    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C5());
    }
  }

  OnExit() {}
}
