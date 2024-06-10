class S2C4 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 11;
    this.SCENE_TIME;
    this.animalScale = 0.25;
    this.utilScale = 0.035;
    this.tearScale = 0.025;
    this.bearY = height - 280;
    this.tigerY = height - 305;
    this.handX = 530;
    this.handY = 470;
    this.handRotate = 0.0;
    this.handAngle = 0.6;
    this.handDir = -24;
    this.tearLeftY = height - 280;
    this.tearRightY = height - 290;
    this.tearSpeed = 0;
    this.sessionIndex;
    this.sessionDuration = [4, 8];
    this.sessionSound = ["S2/C4/narr1", "S2/C4/narr2", "S2/C4/narr3"];
    this.sessionText = ["text1", "text2", "text3"];
    this.isSessionOut = [];
  }

  OnEnter() {
    imageManager.LoadImage("background", "Images/S2/C4/background");
    imageManager.LoadImage("bear1", "Images/S2/C4/bear1");
    imageManager.LoadImage("bear2", "Images/S2/C4/bear2");
    imageManager.LoadImage("tiger", "Images/S2/C4/tiger");
    imageManager.LoadImage("garlic", "Images/S2/C4/garlic");
    imageManager.LoadImage("ssug", "Images/S2/C4/ssug");
    imageManager.LoadImage("basket", "Images/S2/C4/basket");
    imageManager.LoadImage("tear", "Images/S2/C4/tear");
    imageManager.LoadImage("text1", "Images/S2/C4/text1");
    imageManager.LoadImage("text2", "Images/S2/C4/text2");
    imageManager.LoadImage("text3", "Images/S2/C4/text3");
    this.isSessionOut = [false, false];
    this.animalScale = 0.25;
    this.utilScale = 0.035;
    this.tearScale = 0.025;
    this.bearY = height - 280;
    this.tigerY = height - 305;
    this.handX = 530;
    this.handY = 470;
    this.handRotate = 0.0;
    this.handAngle = 0.6;
    this.handDir = -24;
    this.tearLeftY = height - 280;
    this.tearRightY = height - 290;
    this.tearSpeed = 0;
    this.sessionIndex = 0;
    this.SCENE_TIME = 0;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    if (this.sessionIndex == 1) {
      imageManager.DrawImageScale(
        "bear" + ((floor(millis() / 300) % 2) + 1),
        createVector(width / 2 - 200, height - 280),
        createVector(this.animalScale, this.animalScale)
      );
    } else {
      imageManager.DrawImageScale(
        "bear2",
        createVector(width / 2 - 200, height - 280),
        createVector(this.animalScale, this.animalScale)
      );
    }
    imageManager.DrawImageScale(
      "tiger",
      createVector(width / 2 + 50, height - 305),
      createVector(this.animalScale, this.animalScale)
    );
    imageManager.DrawImageScale(
      "basket",
      createVector(width / 2 + 360, height - 105),
      createVector(0.2, 0.2),
      -0.27
    );
    imageManager.DrawImageScale(
      "garlic",
      createVector(width - 130, height - 210),
      createVector(this.utilScale, this.utilScale),
      -0.3
    );
    imageManager.DrawImageScale(
      "garlic",
      createVector(width - 180, height - 100),
      createVector(this.utilScale, this.utilScale),
      0.5
    );
    imageManager.DrawImageScale(
      "ssug",
      createVector(width - 50, height - 170),
      createVector(this.utilScale, this.utilScale),
      0.3
    );
    imageManager.DrawImageScale(
      "ssug",
      createVector(width - 240, height - 10),
      createVector(this.utilScale, this.utilScale),
      -0.5
    );

    // tear animation
    if (this.tearLeftY + this.tearSpeed > height - 250) this.tearSpeed = 0;
    this.tearSpeed += 0.5;
    imageManager.DrawImageScale(
      "tear",
      createVector(width - 510, this.tearLeftY + this.tearSpeed),
      createVector(this.tearScale, this.tearScale)
    );
    imageManager.DrawImageScale(
      "tear",
      createVector(width - 440, this.tearRightY + this.tearSpeed),
      createVector(this.tearScale, this.tearScale)
    );

    this.SCENE_TIME = timeManager.time - timeManager.enterTime;
    imageManager.DrawImageScale(
      this.sessionText[this.sessionIndex],
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    if (!this.isSessionOut[this.sessionIndex]) {
      soundManager.PlaySound(this.sessionSound[this.sessionIndex]);
      this.isSessionOut[this.sessionIndex] =
        !this.isSessionOut[this.sessionIndex];
    }
    if (this.SCENE_TIME > this.sessionDuration[this.sessionIndex]) {
      if (this.sessionDuration.length - 1 > this.sessionIndex)
        this.sessionIndex++;
    }
    if (this.SCENE_TIME > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S2C5());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}
