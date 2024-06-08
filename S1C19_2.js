class S1C19_2 extends Scene {
  SCENE_DURATION = 10;
  armInterval;
  mouthInterval;
  mouthChangeTick;
  armChangeTick;
  mouthIndex;
  armIndex;
  firstDuration = 3.5;
  secondDuration = 4.0;
  thridDuration = 5.5;
  firstFlag = false;
  secondFlag = false;
  thridFlag = false;
  animalVoiceFlag = false;
  constructor() {}
  OnEnter() {
    this.armInterval = 0.25;
    this.mouthInterval = 0.2;
    this.armChangeTick = 0;
    this.mouthChangeTick = 0;
    this.mouthIndex = 0;
    this.armIndex = 0;
    this.firstDuration = 2.5;
    this.secondDuration = 2.5;
    this.thridDuration = 5.5;
    this.firstFlag = false;
    this.secondFlag = false;
    this.thridFlag = false;
    image.LoadImage("background", "Images/S1/C19/background1");
    image.LoadImage("arm", "Images/S1/C19/hwanwoong_arm");
    image.LoadImage("mouth0", "Images/S1/C19/hwanwoong_mouth1");
    image.LoadImage("mouth1", "Images/S1/C19/hwanwoong_mouth0");
    image.LoadImage("skin", "Images/S1/C19/hwanwoong_skin");
    image.LoadImage("C19-2-Text", "Images/S1/C19/C19-2-Text");
    sound.LoadSound("hwanwoong1", "Sounds/S1/C19-2/hwanwoong1.mp3");
    this.enterTime = time.time;
  }
  OnDraw() {
    this.mouthChangeTick += time.deltaTime;
    this.armChangeTick += time.deltaTime;
    image.DrawImage("background", new p5.Vector(width / 2, height / 2, 0));
    if (this.armIndex == 0) {
      image.DrawImageScale(
        "arm",
        new p5.Vector(650, height - 350),
        new p5.Vector(0.25, 0.25, 0)
      );
    } else {
      image.DrawImageScale(
        "arm",
        new p5.Vector(630, height - 330),
        new p5.Vector(0.25, 0.25),
        0.3
      );
    }
    image.DrawImageScale(
      "skin",
      new p5.Vector(600, height - 250, 0),
      new p5.Vector(0.25, 0.25, 0)
    );
    image.DrawImageScale(
      "mouth" + this.mouthIndex,
      new p5.Vector(600, height - 250, 0),
      new p5.Vector(0.25, 0.25, 0)
    );
    image.DrawImage("C19-2-Text", new p5.Vector(width / 2, height / 2, 0)); //그렇구나 너희의 소원을 들어주마
    if (time.time - this.enterTime > 1.5 && !this.firstFlag) {
      this.firstFlag = true;
      sound.PlaySound("hwanwoong1");
    } //입 flag
    if (this.mouthChangeTick >= this.mouthInterval) {
      this.mouthIndex ^= 1;
      this.mouthChangeTick = 0;
    } //손 Flag
    if (this.armChangeTick >= this.armInterval) {
      this.armIndex ^= 1;
      this.armChangeTick = 0;
    }
    if (time.time - this.enterTime >= 5.5) {
      scene.ChangeScene(new S1C19_3());
    }
  }
  OnExit() {}
}
