class S3C3V1_1_1 extends Scene {
  _time = 0;
  SCENE_DURATION = 5.33; // 5초 동안 씬 진행
  tiger_x = 820;
  tiger_y = 440;
  bear_x = 500;
  bear_y = 440;
  character_scale = new p5.Vector(0.22, 0.22, 0);
  effectTime = 0;
  effectPlaying = false;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", "Images/S3/C3/V1/_1/_1/background");
    image.LoadImage("bear_before", "Images/S3/C3/V1/_1/_1/bear_before");
    image.LoadImage("bear_after", "Images/S3/C3/V1/_1/_1/bear_after");
    image.LoadImage("tiger_before", "Images/S3/C3/V1/_1/_1/tiger_before");
    image.LoadImage("tiger_after", "Images/S3/C3/V1/_1/_1/tiger_after");
    sound.LoadSound("evolution", "Sounds/Effects/Evolution.mp3");
    this._time = 0;
  }
  OnDraw() {
    if (time.time - this.enterTime > this.SCENE_DURATION) {
      scene.ChangeScene(new S3C3V1_1_2());
    }
    this._time += 2;
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2, 0),
      new p5.Vector(1, 1, 0)
    );
    if (this._time < 100) {
      image.DrawImageScale(
        "bear_before",
        new p5.Vector(this.bear_x, this.bear_y, 0),
        this.character_scale,
        0
      );
      image.DrawImageScale(
        "tiger_before",
        new p5.Vector(this.tiger_x, this.tiger_y, 0),
        this.character_scale,
        0
      );
    } else {
      image.DrawImageScale(
        "bear_before",
        new p5.Vector(this.bear_x, this.bear_y, 0),
        this.character_scale,
        0,
        255
      );
      image.DrawImageScale(
        "bear_after",
        new p5.Vector(this.bear_x, this.bear_y, 0),
        this.character_scale,
        0,
        this._time
      );
      image.DrawImageScale(
        "tiger_before",
        new p5.Vector(this.tiger_x, this.tiger_y, 0),
        this.character_scale,
        0,
        255
      );
      image.DrawImageScale(
        "tiger_after",
        new p5.Vector(this.tiger_x, this.tiger_y, 0),
        this.character_scale,
        0,
        this._time
      );
    }
    if (!this.effectPlaying && this.effectTime > 1.0) {
      sound.PlaySound("evolution");
      this.effectPlaying = true;
    } else if (!this.effectPlaying) {
      this.effectTime += time.deltaTime;
    }
  }
  OnExit() {}
}
