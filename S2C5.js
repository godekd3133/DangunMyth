class S2C5 extends Scene {
  isEffectOut;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", "Images/S2/C5/background");
    image.LoadImage("button", "Images/S2/C5/button");
    sound.LoadSound("effect", "Sounds/S2/C5/effect/effect.wav");
    this.isEffectOut = false;
  }
  OnDraw() {
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(1, 1)
    );
    if (
      mouseX >= 550 &&
      mouseX <= width - 592 &&
      mouseY >= 585 &&
      mouseY <= height - 85
    ) {
      image.DrawImage(
        "button",
        new p5.Vector(width / 2, height / 2),
        0,
        255,
        220,
        220,
        220
      );
      if (mousePressed) {
        if (!this.isEffectOut) {
          sound.PlaySound("effect");
          this.isEffectOut = !this.isEffectOut;
        } // 미니 게임 씬 이동
        scene.ChangeScene(new S2C6());
      }
    } else {
      image.DrawImageScale(
        "button",
        new p5.Vector(width / 2, height / 2),
        new p5.Vector(1, 1)
      );
    }
  }
  OnExit() {}
}
