class S1C2 extends Scene {
  constructor() {
    super();
    this.MAX_TIMER = 25;
    this.backgroundAlpha = 255;
    this.cloudX = 0;
  }

  OnEnter() {
    this.backgroundAlpha = 255;
    this.cloudX = 0;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "s1c2_background",
      createVector(width / 2, height / 2, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImageScale(
      "s1c2_cloud01",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      createVector(0.67, 0.67, 0)
    );

    fill(0, this.backgroundAlpha);
    rect(0, 0, width, height);

    if (this.backgroundAlpha > 0) {
      this.backgroundAlpha -= 70 - timeManager.deltaTime;
    }
    if (this.cloudX > width / 2 + 200) {
      // sceneManager.ChangeScene(new S1C3());
    }
  }

  OnExit() {}
}
