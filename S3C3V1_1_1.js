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
    imageManager.LoadImage("background", "Images/S3/C3/V1/_1/_1/background");
    imageManager.LoadImage("bear_before", "Images/S3/C3/V1/_1/_1/bear_before");
    imageManager.LoadImage("bear_after", "Images/S3/C3/V1/_1/_1/bear_after");
    imageManager.LoadImage(
      "tiger_before",
      "Images/S3/C3/V1/_1/_1/tiger_before"
    );
    imageManager.LoadImage("tiger_after", "Images/S3/C3/V1/_1/_1/tiger_after");
    this._time = 0;
  }

  OnDraw() {
    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C3V1_1_2());
    }
    this._time += 2;
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );

    if (this._time < 100) {
      imageManager.DrawImageScale(
        "bear_before",
        createVector(this.bear_x, this.bear_y, 0),
        this.character_scale,
        0
      );
      imageManager.DrawImageScale(
        "tiger_before",
        createVector(this.tiger_x, this.tiger_y, 0),
        this.character_scale,
        0
      );
    } else {
      imageManager.DrawImageScale(
        "bear_before",
        createVector(this.bear_x, this.bear_y, 0),
        this.character_scale,
        0,
        255
      );
      imageManager.DrawImageScale(
        "bear_after",
        createVector(this.bear_x, this.bear_y, 0),
        this.character_scale,
        0,
        this._time
      );

      imageManager.DrawImageScale(
        "tiger_before",
        createVector(this.tiger_x, this.tiger_y, 0),
        this.character_scale,
        0,
        255
      );
      imageManager.DrawImageScale(
        "tiger_after",
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
