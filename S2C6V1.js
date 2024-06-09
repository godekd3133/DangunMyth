class S2C6V1 extends Scene {
  constructor() {
    super();
    this.timelineManager = new TimelineManager();
    this.backgroundAlpha = 0;
    this.animalScale = 0.25;
    this.tearScale = 0.025;
    this.tigerTearSpeedL = 0;
    this.tigerTearSpeedR = 0;
    this.tigerTearLeftY = height - 280;
    this.tigerTearRightY = height - 290;
    this.bearTearSpeedL = 0;
    this.bearTearSpeedR = 0;
    this.bearTearLeftY = height - 270;
    this.bearTearRightY = height - 280;
    this.showButton = false;
    this.startTime = millis();
  }

  OnEnter() {
    imageManager.LoadImage("background", "Images/S2/C6/V1/background");
    imageManager.LoadImage("bear", "Images/S2/C6/V1/bear");
    imageManager.LoadImage("bear_tear", "Images/S2/C6/V1/bear_tear");
    imageManager.LoadImage("tiger", "Images/S2/C6/V1/tiger");
    imageManager.LoadImage("tiger_tear", "Images/S2/C6/V1/tiger_tear");
    imageManager.LoadImage("button_top", "Images/S2/C6/V1/button_top");
    imageManager.LoadImage("button_bottom", "Images/S2/C6/V1/button_bottom");

    this.timelineManager.pushTimeline(() => {
      this.showButton = true;
    }, 2);

    this.backgroundAlpha = 0;
    this.showButton = true;
    this.animalScale = 0.25;
    this.tearScale = 0.025;
    this.tigerTearSpeedL = 0;
    this.tigerTearSpeedR = 0;
    this.tigerTearLeftY = height - 280;
    this.tigerTearRightY = height - 290;
    this.bearTearSpeedL = 0;
    this.bearTearSpeedR = 0;
    this.bearTearLeftY = height - 270;
    this.bearTearRightY = height - 280;
    this.startTime = millis();
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );
    imageManager.DrawImageScale(
      "bear",
      createVector(width / 2 - 220, height - 255),
      createVector(this.animalScale, this.animalScale)
    );
    imageManager.DrawImageScale(
      "tiger",
      createVector(width / 2 + 220, height - 255),
      createVector(this.animalScale, this.animalScale)
    );

    if (this.tigerTearLeftY + this.tigerTearSpeedL > height - 260)
      this.tigerTearSpeedL = 0;
    if (this.tigerTearRightY + this.tigerTearSpeedR > height - 270)
      this.tigerTearSpeedR = 0;
    this.tigerTearSpeedL += random(0.3, 0.9);
    this.tigerTearSpeedR += random(0.3, 0.9);
    imageManager.DrawImageScale(
      "tiger_tear",
      createVector(width - 510, this.tigerTearLeftY + this.tigerTearSpeedL),
      createVector(this.tearScale, this.tearScale)
    );
    imageManager.DrawImageScale(
      "tiger_tear",
      createVector(width - 440, this.tigerTearRightY + this.tigerTearSpeedL),
      createVector(this.tearScale, this.tearScale)
    );

    if (this.bearTearLeftY + this.bearTearSpeedL > height - 250)
      this.bearTearSpeedL = 0;
    if (this.bearTearRightY + this.bearTearSpeedR > height - 260)
      this.bearTearSpeedR = 0;
    this.bearTearSpeedL += random(0.3, 0.9);
    this.bearTearSpeedR += random(0.3, 0.9);
    imageManager.DrawImageScale(
      "bear_tear",
      createVector(width - 810, this.bearTearLeftY + this.bearTearSpeedL),
      createVector(this.tearScale, this.tearScale)
    );
    imageManager.DrawImageScale(
      "bear_tear",
      createVector(width - 890, this.bearTearRightY + this.bearTearSpeedL),
      createVector(this.tearScale, this.tearScale)
    );

    if (millis() - this.startTime < 2000) return;

    this.timelineManager.OnDraw();
    if (this.showButton && this.backgroundAlpha <= 180)
      this.backgroundAlpha += 1.2;
    fill(0, this.backgroundAlpha);
    rect(0, 0, width, height);

    if (this.showButton) {
      if (mouseX > 480 && mouseX < 800 && mouseY > 375 && mouseY < 459) {
        imageManager.DrawImage(
          "button_top",
          createVector(width / 2, height / 2),
          0,
          255,
          220,
          220,
          220
        );
      } else {
        imageManager.DrawImageScale(
          "button_top",
          createVector(width / 2, height / 2),
          createVector(1, 1),
          0,
          this.backgroundAlpha + 80
        );
      }
      if (mouseX > 480 && mouseX < 800 && mouseY > 237 && mouseY < 324) {
        imageManager.DrawImage(
          "button_bottom",
          createVector(width / 2, height / 2),
          0,
          255,
          220,
          220,
          220
        );
      } else {
        imageManager.DrawImageScale(
          "button_bottom",
          createVector(width / 2, height / 2),
          createVector(1, 1),
          0,
          this.backgroundAlpha + 80
        );
      }
      if (mouseIsPressed && mouseButton == LEFT) {
        if (mouseX > 480 && mouseX < 800 && mouseY > 237 && mouseY < 324) {
          sceneManager.ChangeScene(new S2C6());
          this.showButton = false;
        } else if (
          mouseX > 480 &&
          mouseX < 800 &&
          mouseY > 375 &&
          mouseY < 459
        ) {
          sceneManager.Setup(sceneList.get(0));
          this.showButton = false;
        }
      }
    }
  }

  OnExit() {}
}
