class S2C6V2 extends Scene {
  constructor() {
    super();
    this.showButton = false;
    this.SCENE_DURATION = 10;
    this.SCENE_TIME = 0;

    this.bearArmX = width / 2 + 200;
    this.bearArmRotate = 0.0;
    this.bearArmAngle = 0.01;
    this.bearArmDir = -0.4;

    this.tigerArmX = width / 2 - 200;
    this.tigerArmRotate = 0.0;
    this.tigerArmAngle = 0.01;
    this.tigerArmDir = 0.4;
    this.bearArmY = height / 2 + 200;
    this.tigerArmY = height / 2 + 200;
    this.basketY = height / 2 + 190;

    this.sessionIndex = 0;
    this.sessionDuration = [3, 6];
    this.sessionSound = ["S2/C6/V2/narr1", "S2/C6/V2/narr2", "S2/C6/V2/narr3"];
    this.sessionText = ["text1", "text2", "text3"];
    this.isSessionOut = [false, false];
  }

  OnEnter() {
    imageManager.LoadImage("background", "Images/S2/C6/V2/background");
    imageManager.LoadImage("bear_arm", "Images/S2/C6/V2/bear_arm");
    imageManager.LoadImage("tiger_arm", "Images/S2/C6/V2/tiger_arm");
    imageManager.LoadImage("chars", "Images/S2/C6/V2/chars");
    imageManager.LoadImage("basket", "Images/S2/C6/V2/basket");
    imageManager.LoadImage("text1", "Images/S2/C6/V2/text1");
    imageManager.LoadImage("text2", "Images/S2/C6/V2/text2");
    imageManager.LoadImage("text3", "Images/S2/C6/V2/text3");
    this.isSessionOut = [false, false];
    this.SCENE_TIME = 0;
  }

  OnDraw() {
    this.bearArmY = height / 2 + 220 + sin(millis() / 1000.0) * 20;
    this.tigerArmY = height / 2 + 220 + sin(millis() / 1000.0) * 20;
    this.basketY = height / 2 + 210 + sin(millis() / 1000.0) * 20;

    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "chars",
      createVector(width / 2, height / 2 + 150),
      createVector(0.4, 0.4)
    );
    imageManager.DrawImageScale(
      "basket",
      createVector(width / 2, this.basketY),
      createVector(0.4, 0.4)
    );
    imageManager.DrawImageScale(
      "bear_arm",
      createVector(this.bearArmX, this.bearArmY),
      createVector(0.4, 0.4),
      this.bearArmRotate
    );
    imageManager.DrawImageScale(
      "tiger_arm",
      createVector(this.tigerArmX, this.tigerArmY),
      createVector(0.4, 0.4),
      this.tigerArmRotate
    );

    this.SCENE_TIME = timeManager.time - timeManager.enterTime;
    if (this.sessionIndex == 0) {
      imageManager.DrawImageScale(
        this.sessionText[this.sessionIndex],
        createVector(width / 2, height / 2 - 60),
        createVector(1, 1)
      );
    } else {
      imageManager.DrawImageScale(
        this.sessionText[this.sessionIndex],
        createVector(width / 2, height / 2),
        createVector(1, 1)
      );
    }
    if (!this.isSessionOut[this.sessionIndex]) {
      soundManager.PlaySound(this.sessionSound[this.sessionIndex]);
      this.isSessionOut[this.sessionIndex] = true;
    }
    if (this.SCENE_TIME > this.sessionDuration[this.sessionIndex]) {
      if (this.sessionDuration.length - 1 > this.sessionIndex)
        this.sessionIndex++;
    }
    if (this.SCENE_TIME > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S2C7());
    }
  }

  OnExit() {}
}
