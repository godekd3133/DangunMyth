class S3C3V2_2_3 extends Scene {
  constructor() {
    super();
    this.PREFIX = "Images/S3/C3/V2/_2/_3/";
    this.SOUND_PREFIX = "Sounds/S3/C3/V2/_2/_3/narr/";
    this.SCENE_DURATION = 5;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("text", this.PREFIX + "text");
    imageManager.LoadImage("dangun", this.PREFIX + "dangun");
    soundManager.LoadSound("narr", this.SOUND_PREFIX + "narr.mp3");
    soundManager.PlaySound("narr");
    timeManager.enterTime = timeManager.time;
  }

  OnDraw() {
    imageManager.DrawImage(
      "background",
      createVector(width / 2, height / 2, 0)
    );
    imageManager.DrawImageScale(
      "dangun",
      createVector(width / 2, height / 2 + 60, 0),
      createVector(0.22, 0.22, 0)
    );
    imageManager.DrawImage("text", createVector(width / 2, height / 2, 0));

    if (timeManager.time - timeManager.enterTime > this.SCENE_DURATION) {
      sceneManager.CreditScene();
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}
