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
    imageManager.LoadImage("background", "Images/S1/C16/background");
    imageManager.LoadImage("extra_1", "Images/S1/C16/extra_1");
    imageManager.LoadImage("extra_2", "Images/S1/C16/extra_2");
    imageManager.LoadImage("extra_3", "Images/S1/C16/extra_3");
    imageManager.LoadImage("extra_4", "Images/S1/C16/extra_4");
    imageManager.LoadImage("hwanung_arm", "Images/S1/C16/hwanung_arm");
    imageManager.LoadImage("hwanung_face", "Images/S1/C16/hwanung_face");
    imageManager.LoadImage("hwanung_face1", "Images/S1/C16/hwanung_face1");
    imageManager.LoadImage("hwanung_face2", "Images/S1/C16/hwanung_face2");
    imageManager.LoadImage("hwanung", "Images/S1/C16/hwanung");
    imageManager.LoadImage("hwanung1", "Images/S1/C16/hwanung1");
    imageManager.LoadImage("hwanung2", "Images/S1/C16/hwanung2");
    imageManager.LoadImage("text", "Images/S1/C16/text");
    this.isNarrOut = false;
    this.enterTime = timeManager.time;
  }

  OnDraw() {
    if (!this.isNarrOut) {
      soundManager.PlaySound("S1/C16/narr");
      this.isNarrOut = true;
    }

    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );

    imageManager.DrawImageScale(
      "extra_1",
      createVector(width / 2 - 550, height / 2 - 200),
      createVector(0.1, 0.1)
    );
    imageManager.DrawImageScale(
      "extra_2",
      createVector(width / 2 - 150, height / 2 - 200),
      createVector(0.1, 0.1)
    );
    imageManager.DrawImageScale(
      "extra_3",
      createVector(width / 2 - 350, height / 2 - 20),
      createVector(0.1, 0.1)
    );
    imageManager.DrawImageScale(
      "extra_4",
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

    if ((millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "hwanung1",
        createVector(width / 2 + 500, height / 2),
        createVector(0.3, 0.3)
      );
    } else {
      imageManager.DrawImageScale(
        "hwanung2",
        createVector(width / 2 + 500, height / 2),
        createVector(0.3, 0.3)
      );
    }
    imageManager.DrawImageScale(
      "hwanung_face",
      createVector(width / 2 + 480, height / 2 - 165),
      createVector(0.3, 0.3)
    );

    imageManager.DrawImageScale(
      "text",
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
