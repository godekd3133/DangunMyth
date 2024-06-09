class S2C3 extends Scene {
  SCENE_DURATION = 2.0;
  static background = "S2C3_background";
  static bear = "S2S3_bear";
  static bearEye = "S2S3_bear_eye";
  static tiger = "S2S3_tiger";
  static basket = "S2S3_basket";
  static garlic = "S2S3_garlic";
  static ssuk = "S2S3_ssuk";
  static text = "S2S3_text";

  playedSoundMap = {};
  static narr1 = "S2C3_narr1";
  static narr2 = "S2C3_narr2";

  backgroundPosition = new p5.Vector(width / 2, height / 2);
  backgroundSacle = new p5.Vector(1, 1);

  animalScale = new p5.Vector(0.25, 0.25);
  tigerPosition = new p5.Vector(510, 500);
  tigerScale = new p5.Vector(0.2, 0.2);

  basketPosition = new p5.Vector(800, 570);

  startTime;

  constructor() {}

  OnEnter() {
    // timeline.clear();
    font.LoadFont("LeeSeoyun.otf", "LeeSeoyun.otf");
    image.LoadImage(background, "Images/S2/C3/background");
    image.LoadImage(bear, "Images/S2/C3/bear");
    image.LoadImage(bearEye, "Images/S2/C3/bear_eye");
    image.LoadImage(tiger, "Images/S2/C3/tiger");
    image.LoadImage(basket, "Images/S2/C3/basket");
    image.LoadImage(garlic, "Images/S2/C3/garlic");
    image.LoadImage(ssuk, "Images/S2/C3/ssuk");
    image.LoadImage(text, "Images/S2/C3/text");

    sound.LoadSound(narr1, "Sounds/S2/C3/narr/narr1.mp3");
    this.playedSoundMap = {};
    this.playedSoundMap[narr1] = 0;

    this.basketPosition = new p5.Vector(800, 570);
    this.animalScale = new p5.Vector(0.25, 0.25);
    this.tigerPosition = new p5.Vector(510, 500);
    this.tigerScale = new p5.Vector(0.2, 0.2);

    this.startTime = millis();
  }

  OnDraw() {
    let currentTime = (millis() - this.startTime) / 1000;

    this.PlaySoundOnce(S2C3.narr1);
    image.DrawImageScale(
      S2C3.background,
      this.backgroundPosition,
      this.backgroundSacle
    );

    let timeMovingTiger = 1.1;
    let tigerPositionPercent =
      (currentTime > timeMovingTiger ? timeMovingTiger : currentTime) /
      timeMovingTiger;
    this.tigerPosition.x = lerp(
      480,
      570,
      Ease.EaseOutCubic(tigerPositionPercent)
    );
    image.DrawImageScale(tiger, tigerPosition, tigerScale);

    image.DrawImageScale(
      bearEye,
      new p5.Vector(257, 400 - 65),
      this.animalScale
    );
    image.DrawImageScale(bear, new p5.Vector(260, 400), this.animalScale);

    let timeMovingBasket = 1.5;
    let basketPositionPercent =
      (currentTime > timeMovingBasket ? timeMovingBasket : currentTime) /
      timeMovingBasket;

    //240603 마늘 사이즈 수정
    let garlicX1 = lerp(700, 820, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(
      S2C3.garlic,
      new p5.Vector(garlicX1, 540),
      new p5.Vector(0.03, 0.03),
      this.getAngleByDegree(-20)
    );
    let garlicX2 = lerp(720, 840, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(
      S2C3.garlic,
      new p5.Vector(garlicX2, 570),
      new p5.Vector(0.035, 0.035),
      this.getAngleByDegree(160)
    );
    let garlicX3 = lerp(730, 940, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(
      S2C3.garlic,
      new p5.Vector(garlicX3, 570),
      new p5.Vector(0.04, 0.04),
      this.getAngleByDegree(-20)
    );
    let garlicX4 = lerp(740, 1000, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(
      S2C3.garlic,
      new p5.Vector(garlicX4, 550),
      new p5.Vector(0.033, 0.033),
      this.getAngleByDegree(30)
    );

    let ssukX1 = lerp(720, 780, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(
      S2C3.ssuk,
      new p5.Vector(ssukX1, 520),
      new p5.Vector(0.02, 0.02),
      this.getAngleByDegree(10)
    );
    let ssukX2 = lerp(740, 860, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(
      S2C3.ssuk,
      new p5.Vector(ssukX2, 590),
      new p5.Vector(0.03, 0.03),
      this.getAngleByDegree(100)
    );
    let ssukX3 = lerp(730, 900, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(
      S2C3.ssuk,
      new p5.Vector(ssukX3, 530),
      new p5.Vector(0.04, 0.04),
      this.getAngleByDegree(30)
    );
    let ssukX4 = lerp(740, 1020, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(
      S2C3.ssuk,
      new p5.Vector(ssukX4, 590),
      new p5.Vector(0.03, 0.03),
      this.getAngleByDegree(-30)
    );

    basketPosition.x = lerp(700, 800, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(
      S2C3.basket,
      basketPosition,
      new p5.Vector(0.25, 0.25),
      this.getAngleByDegree(30)
    );

    if (currentTime > this.SCENE_DURATION) {
      scene.ChangeScene(new S2C4());
    }
    this.PrintText();
  }

  PlaySoundOnce(soundName) {
    if (this.playedSoundMap[soundName] == 1) {
      return;
    }
    sound.PlaySound(soundName);
    this.playedSoundMap[soundName] = 1;
  }

  PrintText() {
    let currentTime = (millis() - this.startTime) / 1000;

    if (currentTime > 1) {
      image.DrawImageScale(
        S2C3.text,
        new p5.Vector(660, 280),
        new p5.Vector(1, 1)
      );
    } else {
      image.DrawImageScale(
        S2C3.text,
        new p5.Vector(960, 480),
        new p5.Vector(1, 1)
      );
    }
  }

  getAngleByDegree(degree) {
    return (PI * degree) / 180;
  }

  OnExit() {}
}
