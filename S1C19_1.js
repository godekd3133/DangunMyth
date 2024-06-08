class S1C19_1 extends Scene {
  SCENE_DURATION = 8.5;
  tigerX = width - 200;
  tigerY = height - 150;
  bearX = width - 450;
  bearY = height - 150;
  narrFlag = false;
  narrDuration = 4.5;
  animalVoiceFlag = false;
  tigerRountine = ["tiger1", "tiger2", "tiger3", "tiger2", "tiger1"];
  bearRountine = ["bear1", "bear2", "bear3", "bear2", "bear1"];
  constructor() {}
  OnEnter() {
    this.tigerX = width - 200;
    this.tigerY = height - 350;
    this.bearX = width - 400;
    this.bearY = height - 350;
    this.animalVoiceFlag = false;
    this.narrFlag = false;
    image.LoadImage("background", "Images/S1/C19/background0");
    image.LoadImage("hwangwoong", "Images/S1/C19/V1/hwanwoong");
    image.LoadImage("bear1", "Images/S1/C19/V1/bear1");
    image.LoadImage("bear2", "Images/S1/C19/V1/bear2");
    image.LoadImage("bear3", "Images/S1/C19/V1/bear3");
    image.LoadImage("tiger1", "Images/S1/C19/V1/tiger1");
    image.LoadImage("tiger2", "Images/S1/C19/V1/tiger2");
    image.LoadImage("tiger3", "Images/S1/C19/V1/tiger3");
    image.LoadImage("C19-1-Text", "Images/S1/C19/C19-1-Text");
    sound.LoadSound("narr", "Sounds/S1/C19-1/narr.mp3");
    sound.LoadSound("Bear", "Sounds/S1/C19-1/Bear.mp3");
  }
  OnDraw() {
    image.DrawImage("background", new p5.Vector(width / 2, height / 2, 0));
    image.DrawImage("C19-1-Text", new p5.Vector(width / 2, height / 2, 0));
    image.DrawImageScale(
      "hwangwoong",
      new p5.Vector(320, height - 280, 0),
      new p5.Vector(0.25, 0.25, 0)
    );
    if (this.bearX > width / 2) {
      this.tigerX -= 40 * time.deltaTime;
      this.bearX -= 40 * time.deltaTime;
      image.DrawImageScale(
        this.tigerRountine[(millis() / 100) % 5],
        new p5.Vector(this.tigerX, this.tigerY, 0),
        new p5.Vector(0.15, 0.15, 0)
      );
      image.DrawImageScale(
        this.bearRountine[(millis() / 100) % 5],
        new p5.Vector(this.bearX, this.bearY, 0),
        new p5.Vector(0.15, 0.15, 0)
      );
    } else {
      image.DrawImageScale(
        this.tigerRountine[0],
        new p5.Vector(this.tigerX, this.tigerY, 0),
        new p5.Vector(0.15, 0.15, 0)
      );
      image.DrawImageScale(
        this.bearRountine[1],
        new p5.Vector(this.bearX, this.bearY, 0),
        new p5.Vector(0.15, 0.15, 0)
      );
    }
    if (!this.narrFlag) {
      this.narrFlag = true;
      sound.PlaySound("narr");
    }
    if (time.time - this.enterTime >= this.narrDuration) {
      if (!this.animalVoiceFlag) {
        this.animalVoiceFlag = true;
        sound.PlaySound("Bear");
      }
    }
    if (time.time - this.enterTime >= this.SCENE_DURATION) {
      scene.ChangeScene(new S1C19_2());
    }
  }
  OnExit() {}
}
