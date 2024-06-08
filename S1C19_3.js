class S1C19_3 extends Scene {
  SCENE_DURATION = 9;
  handX;
  animalX;
  animalY;
  basketX;
  basketY;
  firstDuration = 4.5;
  secondDuration = 4.0;
  thridDuration = 5.5;
  firstFlag = false;
  secondFlag = false;
  thridFlag = false;
  constructor() {}
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
    image.LoadImage("background", "Images/S1/C19/background2");
    image.LoadImage("hands", "Images/S1/C19/hands");
    image.LoadImage("hwangwoong", "Images/S1/C19/hwanwoong_hand");
    image.LoadImage("basket", "Images/S1/C19/basket");
    image.LoadImage("C19-3-Text", "Images/S1/C19/C19-3-Text");
    sound.LoadSound("hwanwoong1", "Sounds/S1/C19-3/hwanwoong1.mp3");
    sound.LoadSound("hwanwoong2", "Sounds/S1/C19-3/hwanwoong2.mp3");
    sound.LoadSound("Bear", "Sounds/S1/C19-3/Bear.mp3");
  }
  OnDraw() {
    image.DrawImage("background", new p5.Vector(width / 2, height / 2, 0));
    image.DrawImageScale(
      "hands",
      new p5.Vector(this.animalX, this.animalY, 0),
      new p5.Vector(0.3, 0.3, 0)
    );
    image.DrawImageScale(
      "hwangwoong",
      new p5.Vector(this.handX, 150, 0),
      new p5.Vector(0.7, 0.7, 0),
      90
    );
    image.DrawImageScale(
      "basket",
      new p5.Vector(this.basketX, this.basketY, 0),
      new p5.Vector(0.45, 0.45, 0)
    );
    image.DrawImage("C19-3-Text", new p5.Vector(width / 2, height / 2, 0)); //단, 동굴에서 마늘과 쑥을 먹으며..자, 여기 가져가거라.
    if (!this.firstFlag) {
      this.firstFlag = true;
      sound.PlaySound("hwanwoong1");
    } //감사합니다
    if (time.time - enterTime >= 7) {
      if (!this.thridFlag) {
        this.thridFlag = true;
        sound.PlaySound("Bear");
      }
    }
    if (this.handX <= 230) {
      this.handX += 30 * time.deltaTime;
      this.basketX += 30 * time.deltaTime;
      this.animalX -= 15 * time.deltaTime;
      this.animalY -= 15 * time.deltaTime;
    }
    if (time.time - this.enterTime >= this.SCENE_DURATION) {
      scene.ChangeScene(new S2C1());
    }
  }
  OnExit() {}
}
