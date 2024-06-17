class S1C16 extends Scene {
  constructor() {
    super();
    this.handX = 360;
    this.handRotate = 0.0;
    this.handAngle = 0.01;
    this.handDir = -0.4;
    this.SCENE_DURATION = 7;
    this.isNarrOut = false;
  }

  OnEnter() {
    this.isNarrOut = false;
  }

  OnDraw() {
    if (!this.isNarrOut) {
      soundManager.PlaySound("S1/C16/narr");
      this.isNarrOut = true;
    }

    imageManager.DrawImageScale(
      "s1c16_background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );

    imageManager.DrawImageScale(
      "s1c16_extra_1",
      createVector(width / 2 - 550, height / 2 - 200),
      createVector(0.1, 0.1)
    );
    imageManager.DrawImageScale(
      "s1c16_extra_2",
      createVector(width / 2 - 150, height / 2 - 200),
      createVector(0.1, 0.1)
    );
    imageManager.DrawImageScale(
      "s1c16_extra_3",
      createVector(width / 2 - 350, height / 2 - 20),
      createVector(0.1, 0.1)
    );
    imageManager.DrawImageScale(
      "s1c16_extra_4",
      createVector(width / 2 - 50, height / 2 - 30),
      createVector(0.1, 0.1)
    );

    this.handX += this.handDir;

    if (this.handX < 360) {
      this.handDir = 0.4;
    } else if (this.handX > 380) {
      this.handDir = -0.4;
    }

    this.handRotate += this.handAngle;
    if (this.handRotate > 0.1) {
      this.handAngle = -0.01;
    } else if (this.handRotate < -0.1) {
      this.handAngle = 0.01;
    }

    // imageManager.DrawImageScale("hwanung_arm", createVector(width / 2 + this.handX, height / 2 - 80), createVector(0.3, 0.3), this.handRotate);

    if (Math.floor(millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "s1c16_hwanung1",
        createVector(width / 2 + 500, height / 2),
        createVector(0.3, 0.3)
      );
    } else {
      imageManager.DrawImageScale(
        "s1c16_hwanung2",
        createVector(width / 2 + 500, height / 2),
        createVector(0.3, 0.3)
      );
    }
    imageManager.DrawImageScale(
      "s1c16_hwanung_face",
      createVector(width / 2 + 480, height / 2 - 165),
      createVector(0.3, 0.3)
    );

    imageManager.DrawImageScale(
      "s1c16_text",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );

    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C17());
    }
  }

  OnExit() {
    // Add any cleanup code here if needed
  }
}
