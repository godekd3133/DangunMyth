class S3C3V1_4_2 extends Scene {
  SCENE_SCONDS = 5; // 5초 동안 씬 진행
  PREFIX = "Images/S3/C3/V1/_4/_2/";
  preparationTime = 1;
  alpha = 1;
  fadeoutTime = 4;
  OnEnter() {
    image.LoadImage("background", this.PREFIX + "background");
    image.LoadImage("family", this.PREFIX + "family");
    this.alpha = 255;
    this.fadeoutTime = 4;
    this.preparationTime = 3;
  }
  OnDraw() {
    image.DrawImage("background", new p5.Vector(width / 2, height / 2));
    image.DrawImageScale(
      "family",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(0.25, 0.25, 0),
      0,
      this.alpha
    );
    if (time.time - this.enterTime >= 1) {
      this.alpha -= (255 / this.fadeoutTime) * time.deltaTime;
    }
    if (this.alpha <= 0) {
      this.preparationTime -= time.deltaTime;
      if (this.preparationTime <= 0) {
        scene.ChangeScene(new S3C3V1_4_3());
      }
    }
  }
  OnExit() {}
}
