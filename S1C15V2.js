class S1C15V2 extends Scene {
  constructor() {
    super();
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
    this.startTime = millis();
  }

  OnDraw() {
    imageManager.DrawImage("s1c15v2_background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "s1c15v2_HWANUNG_BODY",
      createVector(this.HWANUNG_BODY_X, this.HWANUNG_BODY_Y - this.cloudY),
      createVector(this.HWANUNG_BODY_SCALE, this.HWANUNG_BODY_SCALE)
    );
    imageManager.DrawImageScale(
      "s1c15v2_HWANUNG_FACE",
      createVector(this.HWANUNG_FACE_X, this.HWANUNG_FACE_Y - this.cloudY),
      createVector(this.HWANUNG_FACE_SCALE, this.HWANUNG_FACE_SCALE)
    );
    imageManager.DrawImage(
      "s1c15v2_cloud",
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
