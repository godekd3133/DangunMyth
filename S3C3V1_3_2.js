class S3C3V1_3_2 extends Scene {
  preparationTime = 1;
  fadeoutTime = 4;
  BACKGROUND_IMAGE = "Images/S3/C3/V1/_3/_2/Background";
  CHARACTER_IMAGE = "Images/S3/C3/V1/_3/_2/Characters";
  alpha = 1;
  constructor() {}
  OnEnter() {
    // println("132 enter");
    image.LoadImage("background", this.BACKGROUND_IMAGE);
    image.LoadImage("character", this.CHARACTER_IMAGE);
    this.alpha = 255; //fadeoutTime= 4f;
    //preparationTime= 3f;
  }
  OnDraw() {
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2, 0),
      new p5.Vector(1, 1, 0)
    );
    image.DrawImageScale(
      "character",
      new p5.Vector(width / 2, height / 2, 0),
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
        scene.ChangeScene(new S3C3V1_3_3());
      }
    }
  }
  OnExit() {}
}
