class S3C3V1_1_1 extends Scene {
  constructor() {
    super();
    this._time = 0;
    this.SCENE_DURATION = 5.33; // 5 seconds for scene duration
    this.tiger_x = 820;
    this.tiger_y = 440;
    this.bear_x = 500;
    this.bear_y = 440;
    this.character_scale = createVector(0.22, 0.22, 0);
    this.effectTime = 0;
    this.effectPlaying = false;
  }

  OnEnter() {
    this._time = 0;
  }

  OnDraw() {
    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C3V1_1_2());
    }
    this._time += 2;
    imageManager.DrawImageScale(
      "s3c3v1_1_1_background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );

    if (this._time < 100) {
      imageManager.DrawImageScale(
        "s3c3v1_1_1_bear_before",
        createVector(this.bear_x, this.bear_y, 0),
        this.character_scale,
        0
      );
      imageManager.DrawImageScale(
        "s3c3v1_1_1_tiger_before",
        createVector(this.tiger_x, this.tiger_y, 0),
        this.character_scale,
        0
      );
    } else {
      imageManager.DrawImageScale(
        "s3c3v1_1_1_bear_before",
        createVector(this.bear_x, this.bear_y, 0),
        this.character_scale,
        0,
        255
      );
      imageManager.DrawImageScale(
        "s3c3v1_1_1_bear_after",
        createVector(this.bear_x, this.bear_y, 0),
        this.character_scale,
        0,
        this._time
      );

      imageManager.DrawImageScale(
        "s3c3v1_1_1_tiger_before",
        createVector(this.tiger_x, this.tiger_y, 0),
        this.character_scale,
        0,
        255
      );
      imageManager.DrawImageScale(
        "s3c3v1_1_1_tiger_after",
        createVector(this.tiger_x, this.tiger_y, 0),
        this.character_scale,
        0,
        this._time
      );
    }
    if (!this.effectPlaying && this.effectTime > 1.0) {
      soundManager.PlaySound("evolution");
      this.effectPlaying = true;
    } else if (!this.effectPlaying) {
      this.effectTime += timeManager.deltaTime;
    }
  }

  OnExit() {}
}
