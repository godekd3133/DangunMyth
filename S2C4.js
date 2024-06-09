class S2C4 extends Scene {
  SCENE_DURATION = 11;
  SCENE_TIME;
  animalScale = 0.25;
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
  tearSpeed = 0;
  sessionIndex;
  sessionDuration = [4, 8, 12];
  sessionSound = ["narr1", "narr2", "narr3"];
  sessionText = ["text1", "text2", "text3"];
  isSessionOut;

  constructor() {}

  OnEnter() {
    image.LoadImage("background", "Images/S2/C4/background");
    image.LoadImage("bear1", "Images/S2/C4/bear1");
    image.LoadImage("bear2", "Images/S2/C4/bear2");
    image.LoadImage("tiger", "Images/S2/C4/tiger");
    image.LoadImage("garlic", "Images/S2/C4/garlic");
    image.LoadImage("ssug", "Images/S2/C4/ssug");
    image.LoadImage("basket", "Images/S2/C4/basket");
    image.LoadImage("tear", "Images/S2/C4/tear");
    image.LoadImage("text1", "Images/S2/C4/text1");
    image.LoadImage("text2", "Images/S2/C4/text2");
    image.LoadImage("text3", "Images/S2/C4/text3");
    sound.LoadSound("narr1", "Sounds/S2/C4/narr/narr1.mp3");
    sound.LoadSound("narr2", "Sounds/S2/C4/narr/narr2.mp3");
    sound.LoadSound("narr3", "Sounds/S2/C4/narr/narr3.mp3");
    isSessionOut = [false, false, false];

    animalScale = 0.25;
    utilScale = 0.035;
    tearScale = 0.025;
    bearY = height - 280;
    tigerY = height - 305;
    handX = 530;
    handY = 470;
    handRotate = 0.0;
    handAngle = 0.6;
    handDir = -24;
    tearLeftY = height - 280;
    tearRightY = height - 290;
    tearSpeed = 0;
    sessionIndex = 0;
    SCENE_TIME = 0;
  }

  OnDraw() {
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(1, 1)
    );
    if (this.sessionIndex == 1) {
      image.DrawImageScale(
        "bear" + (((millis() / 300) % 2) + 1),
        new p5.Vector(width / 2 - 200, height - 280),
        new p5.Vector(this.animalScale, this.animalScale)
      );
    } else {
      image.DrawImageScale(
        "bear2",
        new p5.Vector(width / 2 - 200, height - 280),
        new p5.Vector(this.animalScale, this.animalScale)
      );
    }
    image.DrawImageScale(
      "tiger",
      new p5.Vector(width / 2 + 50, height - 305),
      new p5.Vector(this.animalScale, this.animalScale)
    );
    image.DrawImageScale(
      "basket",
      new p5.Vector(width / 2 + 360, height - 105),
      new p5.Vector(0.2, 0.2),
      -0.27
    );
    image.DrawImageScale(
      "garlic",
      new p5.Vector(width - 130, height - 210),
      new p5.Vector(this.utilScale, this.utilScale),
      -0.3
    );
    image.DrawImageScale(
      "garlic",
      new p5.Vector(width - 180, height - 100),
      new p5.Vector(this.utilScale, this.utilScale),
      0.5
    );
    image.DrawImageScale(
      "ssug",
      new p5.Vector(width - 50, height - 170),
      new p5.Vector(this.utilScale, this.utilScale),
      0.3
    );
    image.DrawImageScale(
      "ssug",
      new p5.Vector(width - 240, height - 10),
      new p5.Vector(this.utilScale, this.utilScale),
      -0.5
    ); // tear animation
    if (this.tearLeftY + this.tearSpeed > height - 250) this.tearSpeed = 0;
    this.tearSpeed += 0.5;
    image.DrawImageScale(
      "tear",
      new p5.Vector(width - 510, this.tearLeftY + this.tearSpeed),
      new p5.Vector(this.tearScale, this.tearScale)
    );
    image.DrawImageScale(
      "tear",
      new p5.Vector(width - 440, this.tearRightY + this.tearSpeed),
      new p5.Vector(this.tearScale, this.tearScale)
    );
    this.SCENE_TIME = time.time - enterTime;
    image.DrawImageScale(
      this.sessionText[this.sessionIndex],
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(1, 1)
    );
    if (!this.isSessionOut[this.sessionIndex]) {
      sound.PlaySound(this.sessionSound[this.sessionIndex]);
      this.isSessionOut[this.sessionIndex] =
        !this.isSessionOut[this.sessionIndex];
    }
    if (this.SCENE_TIME > this.sessionDuration[this.sessionIndex]) {
      if (this.sessionDuration.length - 1 > this.sessionIndex)
        this.sessionIndex++;
    } /* textSize(128);
    text(SCENE_TIME, 12, 40);
    */
    if (this.SCENE_TIME > this.SCENE_DURATION) {
      scene.ChangeScene(new S2C5());
    }
  }
  OnExit() {
    sound.stopNowPlaying();
  }
}
