class S1C15V2 extends Scene {
  constructor() {
    super();
    this.PREFIX = "Images/S1/C15-2/";
    this.SCENE_DURATION = 5;
    this.HWANUNG_BODY_X = width / 2;
    this.HWANUNG_BODY_Y = height / 2 + 20;
    this.HWANUNG_BODY_SCALE = 0.215;
    this.HWANUNG_FACE_X = width / 2 + 4;
    this.HWANUNG_FACE_Y = height / 2 - 125;
    this.HWANUNG_FACE_SCALE = 0.25;
    this.cloudY = 50;
  }

  OnEnter() {
    this.cloudY = 50;
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("HWANUNG_BODY", this.PREFIX + "HWANUNG_BODY");
    imageManager.LoadImage("HWANUNG_FACE", this.PREFIX + "HWANUNG_FACE");
    imageManager.LoadImage("cloud", this.PREFIX + "cloud");
    this.startTime = millis();
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "HWANUNG_BODY",
      createVector(this.HWANUNG_BODY_X, this.HWANUNG_BODY_Y - this.cloudY),
      createVector(this.HWANUNG_BODY_SCALE, this.HWANUNG_BODY_SCALE)
    );
    imageManager.DrawImageScale(
      "HWANUNG_FACE",
      createVector(this.HWANUNG_FACE_X, this.HWANUNG_FACE_Y - this.cloudY),
      createVector(this.HWANUNG_FACE_SCALE, this.HWANUNG_FACE_SCALE)
    );
    imageManager.DrawImage(
      "cloud",
      createVector(width / 2, height / 2 - this.cloudY)
    );
    this.cloudY -= 0.13;
    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C16());
    }
  }

  OnExit() {
    // Add any cleanup code here if needed
  }
}
