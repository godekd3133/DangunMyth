class S2C7 extends Scene {
  SCENE_DURATION = 5;
  animalScale = 0.2;
  utilScale = 0.035;
  tearScale = 0.025;
  bearY = height - 280;
  tigerY = height - 305;
  handX = 530;
  handY = 470;
  handRotate = 0.0;
  handAngle = 0.01;
  handDir = -0.4;
  tearLeftY = height - 280;
  tearRightY = height - 290;
  tearSpeedL = 0;
  tearSpeedR = 0;
  startTime = 0;
  playingYum = false;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", "Images/S2/C7/background"); // image.LoadImage("bear", "Images/S2/C7/bear");
    // image.LoadImage("bear_eyes", "Images/S2/C7/bear_eyes");
    // image.LoadImage("bear_mouth", "Images/S2/C7/bear_mouth");
    // image.LoadImage("tiger_body", "Images/S2/C7/tiger_body");
    // image.LoadImage("tiger_eyes", "Images/S2/C7/tiger_eyes");
    // image.LoadImage("tiger_head", "Images/S2/C7/tiger_head");
    // image.LoadImage("tiger_mouth", "Images/S2/C7/tiger_mouth");
    image.LoadImage("tiger1", "Images/S2/C7/tiger1");
    image.LoadImage("tiger2", "Images/S2/C7/tiger2");
    image.LoadImage("bear1", "Images/S2/C7/bear1");
    image.LoadImage("bear2", "Images/S2/C7/bear2");
    sound.LoadSound("yum", "Sounds/Effects/YumYum.mp3");
    this.startTime = Date.now();
  }
  OnDraw() {
    let currentProcessingTime = (Date.now() - this.startTime) / 500;
    let isEating = currentProcessingTime % 2 == 1;
    let positionToMoveHead = isEating ? 10 : 0;
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(1, 1)
    ); //Legacy
    // image.DrawImageScale("bear_eyes", new PVector(435, 390), new PVector(animalScale, animalScale));
    // image.DrawImageScale("bear", new PVector(440, 440), new PVector(animalScale, animalScale));
    // image.DrawImageScale("bear_mouth", new PVector(445, 450 + positionToMoveHead), new PVector(animalScale, animalScale));
    // image.DrawImageScale("tiger_eyes", new PVector(690, 380 + positionToMoveHead), new PVector(animalScale, animalScale));
    // image.DrawImageScale("tiger_body", new PVector(730, 500), new PVector(animalScale, animalScale));
    // image.DrawImageScale("tiger_mouth", new PVector(695, 470 + positionToMoveHead), new PVector(animalScale, animalScale));
    // image.DrawImageScale("tiger_head", new PVector(720, 370 + positionToMoveHead), new PVector(animalScale, animalScale));
    //240603 수정
    if (isEating) {
      image.DrawImageScale(
        "bear1",
        new p5.Vector(520, 440),
        new p5.Vector(this.animalScale, this.animalScale)
      );
      image.DrawImageScale(
        "tiger1",
        new p5.Vector(660, 405),
        new p5.Vector(this.animalScale, this.animalScale)
      );
    } else {
      image.DrawImageScale(
        "bear2",
        new p5.Vector(520, 440),
        new p5.Vector(this.animalScale, this.animalScale)
      );
      image.DrawImageScale(
        "tiger2",
        new p5.Vector(660, 405),
        new p5.Vector(this.animalScale, this.animalScale)
      );
    }
    if (time.time - this.enterTime > 1 && !this.playingYum) {
      sound.PlaySound("yum");
      this.playingYum = true;
    }
    if (time.time - this.enterTime > this.SCENE_DURATION) {
      scene.ChangeScene(new S2C8());
    }
  }
  OnExit() {}
}
