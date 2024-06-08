class S3C3V2_2_3 extends Scene {
  static PREFIX = "Images/S3/C3/V2/_2/_3/";
  static SOUND_PREFIX = "Sounds/S3/C3/V2/_2/_3/narr/";
  SCENE_DURATION = 5;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", S3C3V2_2_3.PREFIX + "background");
    image.LoadImage("text", S3C3V2_2_3.PREFIX + "text");
    image.LoadImage("dangun", S3C3V2_2_3.PREFIX + "dangun");
    sound.LoadSound("narr", S3C3V2_2_3.SOUND_PREFIX + "narr.mp3");
    sound.PlaySound("narr");
    this.enterTime = time.time;
  }
  OnDraw() {
    image.DrawImage("background", new p5.Vector(width / 2, height / 2, 0));
    image.DrawImageScale(
      "dangun",
      new p5.Vector(width / 2, height / 2 + 60, 0),
      new p5.Vector(0.22, 0.22, 0)
    );
    image.DrawImage("text", new p5.Vector(width / 2, height / 2, 0));
    if (time.time - this.enterTime > this.SCENE_DURATION) {
      scene.CreditScene();
    }
  }
  OnExit() {
    sound.stopNowPlaying();
  }
}
