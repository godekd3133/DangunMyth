class S1C17 extends Scene {
  constructor() {
    super();
    this.HWANUNG_X = width / 2 - 100;
    this.HWANUNG_Y = height / 2 - 50;
    this.HWANUNG_SCALE = 0.09;
    this.VASSAL_X = width / 2;
    this.VASSAL_Y = height / 2 - 150;
    this.VASSAL_SCALE = 0.095;
    this.VASSAL1_X = width / 2 - 480;
    this.VASSAL1_Y = height / 2 - 270;
    this.VASSAL1_SCALE = 0.07;
    this.VASSAL2_X = width / 2 - 170;
    this.VASSAL2_Y = height / 2 - 220;
    this.VASSAL2_SCALE = 0.09;
    this.VASSAL3_X = width / 2 - 350;
    this.VASSAL3_Y = height / 2 - 80;
    this.VASSAL3_SCALE = 0.1;
    this.VASSAL_JUMP = 0;
    this.VASSAL1_JUMP = 0;
    this.VASSAL2_JUMP = 0;
    this.VASSAL3_JUMP = 0;
    this.BEAR_X = width / 2;
    this.BEAR_Y = height / 2 + 800;
    this.BEAR_SCALE = 0.4;
    this.TIGER_X = width / 2 + 400;
    this.TIGER_Y = height / 2 + 900;
    this.TIGER_SCALE = 0.4;
    this.BEAR_POP = 0;
    this.TIGER_POP = 0;
    this.BUSH_OFFSET = 0;
    this.SCENE_SCONDS = 6.5; // 6.5초 동안 씬 진행
    this.playingBushRustle = false;
  }

  OnEnter() {
    this.BEAR_POP = 0;
    this.TIGER_POP = 0;
    this.BUSH_OFFSET = 0;
    this.VASSAL_JUMP = 0;
    this.VASSAL1_JUMP = 0;
    this.VASSAL2_JUMP = 0;
    this.VASSAL3_JUMP = 0;
  }

  OnDraw() {
    this.VASSAL_JUMP = abs(sin(millis() / 100)) * 10;
    this.VASSAL1_JUMP =
      max(abs(sin(millis() / 135 + 0.146)) * 1.4 - 0.4, 0) * 10;
    this.VASSAL2_JUMP = max(abs(sin(millis() / 170 + 0.5)) * 2 - 1, 0) * 10;
    this.VASSAL3_JUMP =
      max(abs(sin(millis() / 120 + 0.674)) * 1.6 - 0.6, 0) * 10;

    if (timeManager.time - this.enterTime > 1.5 && !this.playingBushRustle) {
      soundManager.PlaySound("Effects/BushRustle");
      this.playingBushRustle = true;
    }
    if (this.BEAR_POP <= 450) {
      this.BEAR_POP += 2;
    }
    if (this.TIGER_POP <= 600) {
      this.TIGER_POP += 3;
    }
    if (this.BUSH_OFFSET <= 200) {
      this.BUSH_OFFSET += 1;
    }

    imageManager.DrawImage("s1c17_background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "s1c17_VASSAL2",
      createVector(this.VASSAL2_X, this.VASSAL2_Y - this.VASSAL2_JUMP),
      createVector(this.VASSAL2_SCALE, this.VASSAL2_SCALE)
    );
    imageManager.DrawImageScale(
      "s1c17_VASSAL1",
      createVector(this.VASSAL1_X, this.VASSAL1_Y - this.VASSAL1_JUMP),
      createVector(this.VASSAL1_SCALE, this.VASSAL1_SCALE)
    );
    imageManager.DrawImageScale(
      "s1c17_VASSAL3",
      createVector(this.VASSAL3_X, this.VASSAL3_Y - this.VASSAL3_JUMP),
      createVector(this.VASSAL3_SCALE, this.VASSAL3_SCALE)
    );
    imageManager.DrawImageScale(
      "s1c17_VASSAL",
      createVector(this.VASSAL_X, this.VASSAL_Y - this.VASSAL_JUMP),
      createVector(this.VASSAL_SCALE, this.VASSAL_SCALE)
    );
    imageManager.DrawImageScale(
      "s1c17_HWANUNG",
      createVector(this.HWANUNG_X, this.HWANUNG_Y),
      createVector(this.HWANUNG_SCALE, this.HWANUNG_SCALE)
    );
    imageManager.DrawImage(
      "s1c17_BUSH",
      createVector(width / 2, height / 2 + 200 - this.BUSH_OFFSET)
    );
    imageManager.DrawImageScale(
      "s1c17_TIGER",
      createVector(this.TIGER_X, this.TIGER_Y - this.TIGER_POP),
      createVector(this.TIGER_SCALE, this.TIGER_SCALE)
    );
    imageManager.DrawImageScale(
      "s1c17_BEAR",
      createVector(this.BEAR_X, this.BEAR_Y - this.BEAR_POP),
      createVector(this.BEAR_SCALE, this.BEAR_SCALE)
    );

    if (timeManager.time - this.enterTime > this.SCENE_SCONDS) {
      sceneManager.ChangeScene(new S1C18());
    }
  }

  OnExit() {
    // Add any cleanup code here if needed
  }
}
