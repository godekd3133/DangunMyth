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
      "s1c4_background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "s1c4_text",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "s1c4_man1",
      createVector(width / 2 + 130, height - 165),
      createVector(0.35, 0.35)
    );
    imageManager.DrawImageScale(
      "s1c4_eye3",
      createVector(width / 2 + 130, height - 165),
      createVector(0.35, 0.35)
    );
    imageManager.DrawImageScale(
      "s1c4_mouth",
      createVector(width / 2 + 130, height - 165),
      createVector(0.35, 0.35)
    );
    imageManager.DrawImageScale(
      "s1c4_man2",
      createVector(width / 2 + 400, height - 165),
      createVector(0.43, 0.43)
    );

    if (this.eyeIndex == 0) {
      imageManager.DrawImageScale(
        "s1c4_eye1",
        createVector(width / 2 + 370, height - 390),
        createVector(0.38, 0.38)
      );
    } else {
      imageManager.DrawImageScale(
        "s1c4_eye2",
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
