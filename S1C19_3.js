class S1C19_3 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 9;
    this.handX = 0;
    this.animalX = 0;
    this.animalY = 0;
    this.basketX = 0;
    this.basketY = 0;
    this.firstDuration = 4.5;
    this.secondDuration = 4.0;
    this.thridDuration = 5.5;
    this.firstFlag = false;
    this.secondFlag = false;
    this.thridFlag = false;
  }

  OnEnter() {
    this.handX = 150;
    this.animalX = width - 250;
    this.animalY = height - 200;
    this.basketX = this.handX + 450;
    this.basketY = 250;

    this.firstDuration = 5.5;
    this.secondDuration = 2.5;
    this.thridDuration = 5.5;

    this.firstFlag = false;
    this.secondFlag = false;
    this.thridFlag = false;

    imageManager.LoadImage("background", "Images/S1/C19/background2");
    imageManager.LoadImage("hands", "Images/S1/C19/hands");
    imageManager.LoadImage("hwangwoong", "Images/S1/C19/hwanwoong_hand");
    imageManager.LoadImage("basket", "Images/S1/C19/basket");
    imageManager.LoadImage("C19-3-Text", "Images/S1/C19/C19-3-Text");
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));

    imageManager.DrawImageScale(
      "hands",
      createVector(this.animalX, this.animalY),
      createVector(0.3, 0.3, 0)
    );
    imageManager.DrawImageScale(
      "hwangwoong",
      createVector(this.handX, 150),
      createVector(0.7, 0.7, 0),
      90
    );
    imageManager.DrawImageScale(
      "basket",
      createVector(this.basketX, this.basketY),
      createVector(0.45, 0.45, 0)
    );

    imageManager.DrawImage("C19-3-Text", createVector(width / 2, height / 2));

    if (!this.firstFlag) {
      this.firstFlag = true;
      soundManager.PlaySound("S1/C19-3/hwanwoong1");
    }
    if (timeManager.time - timeManager.enterTime >= 7) {
      if (!this.thridFlag) {
        this.thridFlag = true;
        soundManager.PlaySound("S1/C19-3/Bear");
      }
    }
    if (this.handX <= 230) {
      this.handX += 30 * timeManager.deltaTime;
      this.basketX += 30 * timeManager.deltaTime;
      this.animalX -= 15 * timeManager.deltaTime;
      this.animalY -= 15 * timeManager.deltaTime;
    }
    if (timeManager.time - timeManager.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S2C1());
    }
  }

  OnExit() {}
}
