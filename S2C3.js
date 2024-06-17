class S2C3 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 2;
    this.text = "s2c3_text";

    this.playedSoundMap = {};
    this.narr1 = "S2C3_narr1";
    this.narr2 = "S2C3_narr2";

    this.backgroundPosition = createVector(width / 2, height / 2);
    this.backgroundScale = createVector(1, 1);

    this.animalScale = createVector(0.25, 0.25);
    this.tigerPosition = createVector(510, 500);
    this.tigerScale = createVector(0.2, 0.2);

    this.basketPosition = createVector(800, 570);

    this.startTime = millis();
  }

  OnEnter() {
    fontManager.LoadFont("lee", "LeeSeoyun.otf");

    this.playedSoundMap[this.narr1] = 0;

    this.basketPosition = createVector(800, 570);
    this.animalScale = createVector(0.25, 0.25);
    this.tigerPosition = createVector(510, 500);
    this.tigerScale = createVector(0.2, 0.2);

    this.startTime = millis();
  }

  OnDraw() {
    let currentTime = (millis() - this.startTime) / 1000;

    this.PlaySoundOnce(this.narr1);
    imageManager.DrawImageScale(
      "s2c3_background",
      this.backgroundPosition,
      this.backgroundScale
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
    imageManager.DrawImageScale(
      "s2c3_tiger",
      this.tigerPosition,
      this.tigerScale
    );

    imageManager.DrawImageScale(
      "s2c3_bear_eye",
      createVector(257, 400 - 65),
      this.animalScale
    );
    imageManager.DrawImageScale(
      "s2c3_bear",
      createVector(260, 400),
      this.animalScale
    );

    let timeMovingBasket = 1.5;
    let basketPositionPercent =
      (currentTime > timeMovingBasket ? timeMovingBasket : currentTime) /
      timeMovingBasket;

    let garlicX1 = lerp(700, 820, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      "s2c3_garlic",
      createVector(garlicX1, 540),
      createVector(0.03, 0.03),
      this.getAngleByDegree(-20)
    );
    let garlicX2 = lerp(720, 840, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      "s2c3_garlic",
      createVector(garlicX2, 570),
      createVector(0.035, 0.035),
      this.getAngleByDegree(160)
    );
    let garlicX3 = lerp(730, 940, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      "s2c3_garlic",
      createVector(garlicX3, 570),
      createVector(0.04, 0.04),
      this.getAngleByDegree(-20)
    );
    let garlicX4 = lerp(740, 1000, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      "s2c3_garlic",
      createVector(garlicX4, 550),
      createVector(0.033, 0.033),
      this.getAngleByDegree(30)
    );

    let ssukX1 = lerp(720, 780, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      "s2c3_ssuk",
      createVector(ssukX1, 520),
      createVector(0.02, 0.02),
      this.getAngleByDegree(10)
    );
    let ssukX2 = lerp(740, 860, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      "s2c3_ssuk",
      createVector(ssukX2, 590),
      createVector(0.03, 0.03),
      this.getAngleByDegree(100)
    );
    let ssukX3 = lerp(730, 900, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      "s2c3_ssuk",
      createVector(ssukX3, 530),
      createVector(0.04, 0.04),
      this.getAngleByDegree(30)
    );
    let ssukX4 = lerp(740, 1020, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      "s2c3_ssuk",
      createVector(ssukX4, 590),
      createVector(0.03, 0.03),
      this.getAngleByDegree(-30)
    );

    this.basketPosition.x = lerp(
      700,
      800,
      Ease.EaseOutCubic(basketPositionPercent)
    );
    imageManager.DrawImageScale(
      "s2c3_basket",
      this.basketPosition,
      createVector(0.25, 0.25),
      this.getAngleByDegree(30)
    );

    if (currentTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S2C4());
    }
    this.PrintText();
  }

  PlaySoundOnce(soundName) {
    if (this.playedSoundMap[soundName] === 1) {
      return;
    }
    soundManager.PlaySound(soundName);
    this.playedSoundMap[soundName] = 1;
  }

  PrintText() {
    let currentTime = (millis() - this.startTime) / 1000;

    if (currentTime > 1) {
      imageManager.DrawImageScale(
        "s2c3_text",
        createVector(660, 280),
        createVector(1, 1)
      );
    } else {
      imageManager.DrawImageScale(
        "s2c3_text",
        createVector(960, 480),
        createVector(1, 1)
      );
    }
  }

  getAngleByDegree(degree) {
    return (PI * degree) / 180;
  }

  OnExit() {}
}
