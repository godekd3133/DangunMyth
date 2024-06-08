class S3C2 extends Scene {
  // private float thinkScale = 0.3f;
  thinkScale = 0.3;
  thinkY = 200;
  thinkLeftX = 200;
  thinkRightX = width - 200;
  selectOption = 0; // 0 : None / 1 : Left / 2 : Right
  isEffectOut;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", "Images/S3/C2/background");
    image.LoadImage("body", "Images/S3/C2/body");
    image.LoadImage("eye_black", "Images/S3/C2/eye_black");
    image.LoadImage("eye_white", "Images/S3/C2/eye_white");
    image.LoadImage("left", "Images/S3/C2/left");
    image.LoadImage("right", "Images/S3/C2/right");
    sound.LoadSound("effect", "Sounds/S3/C2/effect/effect.wav");
    image.LoadImage("Button1", "Images/S3/C2/Button1");
    image.LoadImage("Button2", "Images/S3/C2/Button2");
    this.isEffectOut = false;
  }
  OnDraw() {
    // init select option
    this.selectOption = 0;
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(1, 1)
    );
    image.DrawImageScale(
      "eye_white",
      new p5.Vector(width / 2 - 10, height - 240),
      new p5.Vector(0.2, 0.2)
    );
    image.DrawImageScale(
      "body",
      new p5.Vector(width / 2, height - 200),
      new p5.Vector(0.23, 0.23)
    ); // Mouse animation
    if (mouseX <= width / 2 - 200 && mouseY <= height / 2) {
      this.selectOption = 1;
      image.DrawImageScale(
        "left",
        new p5.Vector(this.thinkLeftX + 60, this.thinkY + 50),
        new p5.Vector(this.thinkScale + 0.04, this.thinkScale + 0.04)
      );
      image.DrawImageScale(
        "eye_black",
        new p5.Vector(width / 2 - 15, height - 255),
        new p5.Vector(0.23, 0.23)
      );
      if (mousePressed) {
        scene.ChangeScene(new S3C3V1_1());
        if (!this.isEffectOut) {
          sound.PlaySound("effect");
          this.isEffectOut = !this.isEffectOut;
        }
      }
    } else {
      image.DrawImageScale(
        "left",
        new p5.Vector(this.thinkLeftX, this.thinkY),
        new p5.Vector(this.thinkScale, this.thinkScale)
      );
    }
    if (mouseX >= width / 2 + 200 && mouseY <= height / 2) {
      this.selectOption = 2;
      image.DrawImageScale(
        "right",
        new p5.Vector(this.thinkRightX - 60, this.thinkY + 50),
        new p5.Vector(this.thinkScale + 0.04, this.thinkScale + 0.04)
      );
      image.DrawImageScale(
        "eye_black",
        new p5.Vector(width / 2 - 9, height - 255),
        new p5.Vector(0.23, 0.23)
      );
      if (mousePressed) {
        scene.ChangeScene(new S3C3V2());
        if (!this.isEffectOut) {
          sound.PlaySound("effect");
          this.isEffectOut = !this.isEffectOut;
        }
      }
    } else {
      image.DrawImageScale(
        "right",
        new p5.Vector(this.thinkRightX, this.thinkY),
        new p5.Vector(this.thinkScale, this.thinkScale)
      );
    } //Button
    if (mouseX <= width / 2 - 200 && mouseY <= height / 2) {
      image.DrawImageScale(
        "Button1",
        new p5.Vector(width / 2, height / 2),
        new p5.Vector(0.7, 0.7)
      );
    } else if (mouseX >= width / 2 + 200 && mouseY <= height / 2) {
      image.DrawImageScale(
        "Button2",
        new p5.Vector(width / 2, height / 2),
        new p5.Vector(0.7, 0.7)
      );
    }
    if (this.selectOption == 0)
      image.DrawImageScale(
        "eye_black",
        new p5.Vector(width / 2 - 12, height - 245),
        new p5.Vector(0.23, 0.23)
      );
  }
  OnExit() {}
}
