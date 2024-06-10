class S2C5 extends Scene {
  constructor() {
    super();
    this.isEffectOut = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "Images/S2/C5/background");
    imageManager.LoadImage("button", "Images/S2/C5/button");
    soundManager.LoadSound("effect", "Sounds/S2/C5/effect/effect.wav");
    this.isEffectOut = false;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );

    if (
      mouseX >= 550 &&
      mouseX <= width - 592 &&
      mouseY >= 585 &&
      mouseY <= height - 85
    ) {
      imageManager.DrawImage(
        "button",
        createVector(width / 2, height / 2),
        0,
        255,
        220,
        220,
        220
      );

      if (mouseIsPressed) {
        if (!this.isEffectOut) {
          soundManager.PlaySound("effect");
          this.isEffectOut = !this.isEffectOut;
        }
        // Navigate to the mini-game scene
        sceneManager.ChangeScene(new S2C6());
      }
    } else {
      imageManager.DrawImageScale(
        "button",
        createVector(width / 2, height / 2),
        createVector(1, 1)
      );
    }
  }

  OnExit() {}
}
