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

  async OnEnter() {
    openingImageManager.LoadImage("Opening_background", this.prefix + "background/1");
    openingImageManager.LoadImage("cloud01", this.prefix + "background/2");
    openingImageManager.LoadImage("cloud02", this.prefix + "background/3");
    openingImageManager.LoadImage("cloud03", this.prefix + "background/4");
    soundManager.PlaySound("intro");
    openingImageManager.LoadImage("btn_sequence01", this.prefix + "ui/btn_sequence_1");
    openingImageManager.LoadImage("btn_sequence02", this.prefix + "ui/btn_sequence_2");
    openingImageManager.LoadImage("btn_sequence03", this.prefix + "ui/btn_sequence_3");
    openingImageManager.LoadImage(
      "dropdown_list",
      this.prefix + "ui/btn_sequence_dropdown_list"
    );
    openingImageManager.LoadImage(
      "dropdown",
      this.prefix + "ui/btn_sequence_dropdown"
    );
    openingImageManager.LoadImage("logo", this.prefix + "ui/logo");
    openingImageManager.LoadImage("btn_start", this.prefix + "ui/startButton");

    this.logoAlpha = 0;
    this.pressedMouse = false;
    this.cloudX = 0;
    this.zoomIn = 1;
    this.enterTime = timeManager.time;
    this.dropdown = false;
    await imageManager.preloadAllImages();
  }

  OnDraw() {
    let scale = createVector(this.zoomIn, this.zoomIn, 0);
    openingImageManager.DrawImageScale(
      "Opening_background",
      createVector(width / 2, height / 2, 0),
      scale
    );
    openingImageManager.DrawImageScale(
      "cloud01",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      scale
    );
    openingImageManager.DrawImageScale(
      "cloud02",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      scale
    );
    openingImageManager.DrawImageScale(
      "cloud03",
      createVector(width / 2 + this.cloudX, height / 2, 0),
      scale
    );

    if (timeManager.time - this.enterTime > 0.25 && this.zoomIn < 1.25) {
      this.zoomIn += 0.1 * timeManager.deltaTime;
      this.cloudX += 100 * timeManager.deltaTime;
    } else if (this.zoomIn >= 1.25) {
      this.zoomIn = 1.25;
      openingImageManager.DrawImage(
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
        openingImageManager.DrawImageWithTint(
          "btn_start",
          createVector(width / 2, height / 2),0,255,220,220,220
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
        openingImageManager.DrawImage(
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
        openingImageManager.DrawImage(
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
          openingImageManager.DrawImage(
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
          openingImageManager.DrawImage(
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
          openingImageManager.DrawImage(
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
          openingImageManager.DrawImage(
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
          openingImageManager.DrawImage(
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
          openingImageManager.DrawImage(
            "btn_sequence03",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha - 90
          );
        }
      } else {
        openingImageManager.DrawImage(
          "dropdown",
          createVector(width / 2, height / 2),
          0,
          this.logoAlpha
        );
      }

			if (mouseIsPressed) {
				if (
          (mousePos.x > 540 &&
            mousePos.x < 736 &&
            mousePos.y > 527 &&
            mousePos.y < 569)
        ) {
					sceneManager.ChangeScene(new S1C1());
				} else if (
          (mousePos.x > 540 &&
            mousePos.x < 736 &&
            mousePos.y > 569 &&
            mousePos.y < 609)
        ) {
					sceneManager.ChangeScene(new S2C1());
				} else if (
          (mousePos.x > 540 &&
            mousePos.x < 736 &&
            mousePos.y > 609 &&
            mousePos.y < 649)
        ) {
					sceneManager.ChangeScene(new S3C1());
				}
			}

      if (this.logoAlpha < 255) this.logoAlpha += 255 * timeManager.deltaTime;
      this.pressedMouse = mouseIsPressed;
    }
  }

  OnExit() {
    soundManager.StopSound("intro");
  }
}
