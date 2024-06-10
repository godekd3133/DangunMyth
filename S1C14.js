class S1C14 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 15;
    this.isEffectOut = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "Images/S1/C14/background");
    imageManager.LoadImage("button", "Images/S1/C14/button");
    this.enterTime = timeManager.time;
    this.isEffectOut = false;
  }

  OnDraw() {
    imageManager.DrawImage(
      "background",
      createVector(width / 2, height / 2, 0)
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
          soundManager.PlaySound("S1/C14/effect");
          this.isEffectOut = !this.isEffectOut;
        }
        // 미니 게임 씬 이동
        sceneManager.ChangeScene(new S1C15());
      }
    } else {
      imageManager.DrawImageScale(
        "button",
        createVector(width / 2, height / 2),
        createVector(1, 1)
      );
    }

    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C15());
    }
  }

  OnExit() {}
}
