class S3C3V1_1_2 extends Scene {
  constructor() {
    super();
    this._time = 0;
    this.SCENE_DURATION = 5; // 5 seconds for scene duration
    this.tiger_x = 800;
    this.tiger_y = 400;
    this.bear_x = 500;
    this.bear_y = 400;
    this.bear_star_size = 0.2;
    this.tiger_star_size = 0.1;
    this.bear_star_a = 0.03;
    this.tiger_star_a = -0.03;
  }

  OnEnter() {
    imageManager.LoadImage("background", "Images/S3/C3/V1/_1/_2/background");
    imageManager.LoadImage("bear", "Images/S3/C3/V1/_1/_2/bear");
    imageManager.LoadImage("bear_star", "Images/S3/C3/V1/_1/_2/bear_star");
    imageManager.LoadImage("tiger", "Images/S3/C3/V1/_1/_2/tiger");
    imageManager.LoadImage("tiger_star", "Images/S3/C3/V1/_1/_2/tiger_star");
    soundManager.PlaySound("harp");

    this._time = 0;
    this.tiger_x = 800;
    this.tiger_y = 400;
    this.bear_x = 500;
    this.bear_y = 400;
    this.bear_star_size = 0.2;
    this.tiger_star_size = 0.1;
    this.bear_star_a = 0.03;
    this.tiger_star_a = -0.03;
  }

  OnDraw() {
    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C3V1_2_1());
    }
    this._time++;
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );

    imageManager.DrawImageScale(
      "bear",
      createVector(this.bear_x, this.bear_y, 0),
      createVector(0.2, 0.2, 0)
    );
    imageManager.DrawImageScale(
      "tiger",
      createVector(this.tiger_x, this.tiger_y, 0),
      createVector(0.2, 0.2, 0)
    );

    if (this._time % 3 == 0) {
      this.bear_star_size -= this.bear_star_a;
      this.tiger_star_size -= this.tiger_star_a;

      if (this.bear_star_size > 0.2 || this.bear_star_size < 0.1) {
        this.bear_star_a *= -1;
      }
      if (this.tiger_star_size > 0.2 || this.tiger_star_size < 0.1) {
        this.tiger_star_a *= -1;
      }
    }
    imageManager.DrawImageScale(
      "bear_star",
      createVector(300, 200, 0),
      createVector(this.bear_star_size, this.bear_star_size, 0)
    );
    imageManager.DrawImageScale(
      "tiger_star",
      createVector(1000, 200, 0),
      createVector(this.tiger_star_size, this.tiger_star_size, 0)
    );
  }

  OnExit() {}
}
