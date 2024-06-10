class Opening extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 22; // narr. 2 + 4 + 7 sec
    this.cloudX = 0;
    this.zoomIn = 1;
    this.logoAlpha = 0;
    this.dropdown = false;
    this.pressedMouse = false;
    this.selectedSequence = 0;
    this.prefix = "Images/Opening/";
  }

  OnEnter() {
    imageManager.LoadImage("Opening_background", this.prefix + "background/1");
    imageManager.LoadImage("cloud01", this.prefix + "background/2");
    imageManager.LoadImage("cloud02", this.prefix + "background/3");
    imageManager.LoadImage("cloud03", this.prefix + "background/4");
    soundManager.LoadSound("intro", "Sounds/intro.wav");
    soundManager.PlaySound("intro");
    imageManager.LoadImage("btn_sequence01", this.prefix + "ui/btn_sequence_1");
    imageManager.LoadImage("btn_sequence02", this.prefix + "ui/btn_sequence_2");
    imageManager.LoadImage("btn_sequence03", this.prefix + "ui/btn_sequence_3");
    imageManager.LoadImage(
      "dropdown_list",
      this.prefix + "ui/btn_sequence_dropdown_list"
    );
    imageManager.LoadImage(
      "dropdown",
      this.prefix + "ui/btn_sequence_dropdown"
    );
    imageManager.LoadImage("logo", this.prefix + "ui/logo");
    imageManager.LoadImage("btn_start", this.prefix + "ui/startButton");

    this.logoAlpha = 0;
    this.pressedMouse = false;
    this.cloudX = 0;
    this.zoomIn = 1;
    this.enterTime = timeManager.time;
    this.dropdown = false;
  }

  OnDraw() {
    let scale = createVector(this.zoomIn, this.zoomIn, 0);
    imageManager.DrawImageScale(
      "Opening_background",
      createVector(width / 2, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "cloud01",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "cloud02",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "cloud03",
      createVector(width / 2 + this.cloudX, height / 2, 0),
      scale
    );

    if (timeManager.time - this.enterTime > 0.25 && this.zoomIn < 1.25) {
      this.zoomIn += 0.1 * timeManager.deltaTime;
      this.cloudX += 100 * timeManager.deltaTime;
    } else if (this.zoomIn >= 1.25) {
      this.zoomIn = 1.25;
      imageManager.DrawImage(
        "logo",
        createVector(width / 2, height / 2),
        0,
        this.logoAlpha
      );

      let mousePos = createVector(mouseX, mouseY);

      if (
        mousePos.x > 540 &&
        mousePos.x < 736 &&
        mousePos.y > 381 &&
        mousePos.y < 456
      ) {
        imageManager.DrawImage(
          "btn_start",
          createVector(width / 2, height / 2),
          0,
          255,
          220,
          220,
          220
        );
        if (mouseIsPressed && !this.pressedMouse) {
          if (this.selectedSequence == 0) {
            sceneManager.ChangeScene(new S1C1());
          } else if (this.selectedSequence == 1) {
            sceneManager.ChangeScene(new S2C1());
          } else if (this.selectedSequence == 2) {
            sceneManager.ChangeScene(new S3C1());
          }
        }
      } else {
        imageManager.DrawImage(
          "btn_start",
          createVector(width / 2, height / 2),
          0,
          this.logoAlpha
        );
      }

      if (
        mouseIsPressed &&
        mousePos.x > 540 &&
        mousePos.x < 736 &&
        mousePos.y > 486 &&
        mousePos.y < 536
      ) {
        if (!this.pressedMouse) {
          this.dropdown = !this.dropdown;
          this.pressedMouse = true;
        }
      }

      if (this.dropdown) {
        imageManager.DrawImage(
          "dropdown_list",
          createVector(width / 2, height / 2),
          0,
          this.logoAlpha
        );
        if (
          (mousePos.x > 540 &&
            mousePos.x < 736 &&
            mousePos.y > 527 &&
            mousePos.y < 569) ||
          this.selectedSequence == 0
        ) {
          imageManager.DrawImage(
            "btn_sequence01",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha
          );
          if (mouseIsPressed && !this.pressedMouse) {
            this.selectedSequence = 0;
            this.dropdown = false;
          }
        } else {
          imageManager.DrawImage(
            "btn_sequence01",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha - 90
          );
        }
        if (
          (mousePos.x > 540 &&
            mousePos.x < 736 &&
            mousePos.y > 569 &&
            mousePos.y < 609) ||
          this.selectedSequence == 1
        ) {
          imageManager.DrawImage(
            "btn_sequence02",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha
          );
          if (mouseIsPressed && !this.pressedMouse) {
            this.selectedSequence = 1;
            this.dropdown = false;
          }
        } else {
          imageManager.DrawImage(
            "btn_sequence02",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha - 90
          );
        }
        if (
          (mousePos.x > 540 &&
            mousePos.x < 736 &&
            mousePos.y > 609 &&
            mousePos.y < 649) ||
          this.selectedSequence == 2
        ) {
          imageManager.DrawImage(
            "btn_sequence03",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha
          );
          if (mouseIsPressed && !this.pressedMouse) {
            this.selectedSequence = 2;
            this.dropdown = false;
          }
        } else {
          imageManager.DrawImage(
            "btn_sequence03",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha - 90
          );
        }
      } else {
        imageManager.DrawImage(
          "dropdown",
          createVector(width / 2, height / 2),
          0,
          this.logoAlpha
        );
      }

      if (this.logoAlpha < 255) this.logoAlpha += 255 * timeManager.deltaTime;
      this.pressedMouse = mouseIsPressed;
    }
  }

  OnExit() {
    soundManager.StopSound("intro");
  }
}
