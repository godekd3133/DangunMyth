class S2C6V2 extends Scene {
  showButton = false;
  SCENE_DURATION = 10.0;
  SCENE_TIME;

  bearArmX = width / 2 + 200;
  bearArmRotate = 0.0;
  bearArmAngle = 0.01;
  bearArmDir = -0.4;

  tigerArmX = width / 2 - 200;
  tigerArmRotate = 0.0;
  tigerArmAngle = 0.01;
  tigerArmDir = 0.4;
  bearArmY = height / 2 + 200;
  tigerArmY = height / 2 + 200;
  basketY = height / 2 + 190;

  sessionIndex;
  sessionDuration = [3.0, 6.0, 10.0];
  sessionSound = ["narr1", "narr2", "narr3"];
  sessionText = ["text1", "text2", "text3"];
  isSessionOut;

  constructor() {}

  OnEnter() {
    image.LoadImage("background", "Images/S2/C6/V2/background");
    image.LoadImage("bear_arm", "Images/S2/C6/V2/bear_arm");
    image.LoadImage("tiger_arm", "Images/S2/C6/V2/tiger_arm");
    image.LoadImage("chars", "Images/S2/C6/V2/chars");
    image.LoadImage("basket", "Images/S2/C6/V2/basket");
    image.LoadImage("text1", "Images/S2/C6/V2/text1");
    image.LoadImage("text2", "Images/S2/C6/V2/text2");
    image.LoadImage("text3", "Images/S2/C6/V2/text3");
    sound.LoadSound("narr1", "Sounds/S2/C6/V2/narr/narr1.mp3");
    sound.LoadSound("narr2", "Sounds/S2/C6/V2/narr/narr2.mp3");
    sound.LoadSound("narr3", "Sounds/S2/C6/V2/narr/narr3.mp3");
    this.isSessionOut = [false, false, false];
    SCENE_TIME = 0.0;
  }

  OnDraw() {
    // 시간에 따라 y 좌표를 업데이트합니다.
    this.bearArmY = height / 2 + 220 + sin(millis() / 1000.0) * 20;
    this.tigerArmY = height / 2 + 220 + sin(millis() / 1000.0) * 20;
    this.basketY = height / 2 + 210 + sin(millis() / 1000.0) * 20;
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(1, 1)
    );
    image.DrawImageScale(
      "chars",
      new p5.Vector(width / 2, height / 2 + 150),
      new p5.Vector(0.4, 0.4)
    );
    image.DrawImageScale(
      "basket",
      new p5.Vector(width / 2, this.basketY),
      new p5.Vector(0.4, 0.4)
    );
    image.DrawImageScale(
      "bear_arm",
      new p5.Vector(this.bearArmX, this.bearArmY),
      new p5.Vector(0.4, 0.4),
      this.bearArmRotate
    );
    image.DrawImageScale(
      "tiger_arm",
      new p5.Vector(this.tigerArmX, this.tigerArmY),
      new p5.Vector(0.4, 0.4),
      this.tigerArmRotate
    );
    this.SCENE_TIME = time.time - enterTime;
    if (this.sessionIndex == 0)
      image.DrawImageScale(
        this.sessionText[this.sessionIndex],
        new p5.Vector(width / 2, height / 2 - 60),
        new p5.Vector(1, 1)
      );
    else
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
    }
    if (this.SCENE_TIME > this.SCENE_DURATION) {
      scene.ChangeScene(new S2C7());
    }
  }
  OnExit() {}
}
