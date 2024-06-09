class S1C4 extends Scene {
  SCENE_DURATION = 7.5;
  openDelay = 0.33;
  closeMin = 1;
  closeMax = 2;
  eyeIndex = 0;
  nextCloseDuration = 0;
  closeTime = 0;
  openTime = 0;
  isNarrOut = false;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", "Images/S1/C4/background");
    image.LoadImage("man1", "Images/S1/C4/man1");
    image.LoadImage("man2", "Images/S1/C4/man2");
    image.LoadImage("eye1", "Images/S1/C4/eye1");
    image.LoadImage("eye2", "Images/S1/C4/eye2");
    image.LoadImage("eye3", "Images/S1/C4/eye3");
    image.LoadImage("mouth", "Images/S1/C4/mouth");
    image.LoadImage("text", "Images/S1/C4/text");
    sound.LoadSound("narr", "Sounds/S1/C4/narr/narr.mp3");
    this.closeTime = enterTime;
    this.openTime = enterTime;
    this.nextCloseDuration =
      random(this.closeMin * 100, this.closeMax * 100) / 100;
    this.isNarrOut = false;
  }
  OnDraw() {
    if (!this.isNarrOut) {
      this.isNarrOut = !this.isNarrOut;
      sound.PlaySound("narr");
    }
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(1, 1)
    );
    image.DrawImageScale(
      "text",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(1, 1)
    );
    image.DrawImageScale(
      "man1",
      new p5.Vector(width / 2 + 130, height - 165),
      new p5.Vector(0.35, 0.35)
    );
    image.DrawImageScale(
      "eye3",
      new p5.Vector(width / 2 + 130, height - 165),
      new p5.Vector(0.35, 0.35)
    );
    image.DrawImageScale(
      "mouth",
      new p5.Vector(width / 2 + 130, height - 165),
      new p5.Vector(0.35, 0.35)
    );
    image.DrawImageScale(
      "man2",
      new p5.Vector(width / 2 + 400, height - 165),
      new p5.Vector(0.43, 0.43)
    );
    if (this.eyeIndex == 0)
      image.DrawImageScale(
        "eye1",
        new p5.Vector(width / 2 + 370, height - 390),
        new p5.Vector(0.38, 0.38)
      );
    else
      image.DrawImageScale(
        "eye2",
        new p5.Vector(width / 2 + 370, height - 390),
        new p5.Vector(0.38, 0.38)
      );
    if (
      this.eyeIndex == 0 &&
      time.time - this.openTime >= this.nextCloseDuration
    ) {
      this.eyeIndex = 1;
      this.nextCloseDuration =
        random(this.closeMin * 100, this.closeMax * 100) / 100;
      this.closeTime = time.time;
    } else if (
      this.eyeIndex == 1 &&
      time.time - this.closeTime >= this.openDelay
    ) {
      this.eyeIndex = 0;
      this.openTime = time.time;
    }
    if (time.time - enterTime >= this.SCENE_DURATION) {
      scene.ChangeScene(new S1C5());
    }
  }
  OnExit() {}
}
