class S1C5 extends Scene {
  constructor() {
    super();
    this.timeline = new TimelineManager();

    this.isNarrOut = false;

    this.xPos = 0;
    this.yPos = 0;
    this.size = 0;
  }

  OnEnter() {
    imageManager.LoadImage("background", "Images/S1/C5/background");
    imageManager.LoadImage("hwanin", "Images/S1/C5/hawnin");
    imageManager.LoadImage("hwanwoong", "Images/S1/C5/hwanwoong");
    imageManager.LoadImage("text", "Images/S1/C5/text");
    soundManager.LoadSound("narr", "Sounds/S1/C5/narr/narr.mp3");

    this.timeline = new TimelineManager();

    this.timeline.pushTimeline((elapsedTime) => {
      this.xPos = curvePoint(
        width * 0.24,
        width * 0.2,
        width * 0.32,
        width * 0.28,
        elapsedTime / 3
      );
      this.yPos = curvePoint(
        height * 0.95,
        height * 0.8,
        height * 0.7,
        height * 0.55,
        elapsedTime / 3
      );

      this.size = lerp(0.3, 0.25, elapsedTime / 3);
    }, 3);

    this.timeline.pushTimeline((elapsedTime) => {
      this.xPos = curvePoint(
        width * 0.36,
        width * 0.32,
        width * 0.44,
        width * 0.4,
        elapsedTime / 3
      );
      this.yPos = curvePoint(
        height * 0.85,
        height * 0.7,
        height * 0.6,
        height * 0.45,
        elapsedTime / 3
      );
      this.size = lerp(0.25, 0.2, elapsedTime / 3);
    }, 3);

    this.timeline.pushTimeline((elapsedTime) => {
      this.xPos = curvePoint(
        width * 0.36,
        width * 0.32,
        width * 0.44,
        width * 0.4,
        1
      );
      this.yPos = curvePoint(
        height * 0.85,
        height * 0.7,
        height * 0.6,
        height * 0.45,
        1
      );
      this.size = lerp(0.25, 0.2, 1);
    }, 3);

    this.timeline.setEndCallback(() => {
      sceneManager.ChangeScene(new S1C6_1());
    });
  }

  OnDraw() {
    if (!this.isNarrOut) {
      this.isNarrOut = !this.isNarrOut;
      soundManager.PlaySound("narr");
    }
    this.timeline.OnDraw();
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );
    imageManager.DrawImageScale(
      "hwanwoong",
      createVector(width * 0.64, height * 0.35, 0),
      createVector(0.15, 0.15, 0)
    );
    imageManager.DrawImageScale(
      "hwanin",
      createVector(this.xPos, this.yPos, 0),
      createVector(this.size, this.size, 0)
    );
    imageManager.DrawImage("text", createVector(width / 2, height / 2));
  }

  OnExit() {}
}
