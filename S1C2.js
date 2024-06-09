class S1C2 extends Scene {
  static BACKGROUND_IMAGE = "Images/S1/C2/background";
  static CLOUD_IMAGE = "Images/S1/C2/cloud";
  static MAX_TIMER = 25;
  backgroundAlpha;
  cloudX;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", S1C2.BACKGROUND_IMAGE);
    image.LoadImage("cloud01", S1C2.CLOUD_IMAGE);
    this.backgroundAlpha = 255;
    this.cloudX = 0;
  }
  OnDraw() {
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2, 0),
      new p5.Vector(0.67, 0.67, 0)
    );
    image.DrawImageScale(
      "cloud01",
      new p5.Vector(width / 2 - this.cloudX, height / 2, 0),
      new p5.Vector(0.67, 0.67, 0)
    );
    fill(0, this.backgroundAlpha);
    rect(0, 0, width, height);
    if (this.backgroundAlpha > 0) {
      this.backgroundAlpha -= 70 - time.deltaTime;
    }
    if (this.cloudX > width / 2 + 200) {
      // scene.ChangeScene(new S1C3());
    }
  }
  OnExit() {}
}
