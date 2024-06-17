class S3C3V2_2_3 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 5;
  }

  OnEnter() {
    soundManager.PlaySound("S3/C3/V2/_2/_3/narr");
  }

  OnDraw() {
    imageManager.DrawImage(
      "s3c3v2_2_3_background",
      createVector(width / 2, height / 2, 0)
    );
    imageManager.DrawImageScale(
      "s3c3v2_2_3_dangun",
      createVector(width / 2, height / 2 + 60, 0),
      createVector(0.22, 0.22, 0)
    );
    imageManager.DrawImage("s3c3v2_2_3_text", createVector(width / 2, height / 2, 0));

    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.CreditScene();
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}
