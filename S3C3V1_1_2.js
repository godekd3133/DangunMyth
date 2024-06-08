class S3C3V1_1_2 extends Scene {
  _time = 0;
  SCENE_DURATION = 5; // 5초 동안 씬 진행
  tiger_x = 800;
  tiger_y = 400;
  bear_x = 500;
  bear_y = 400;
  bear_star_size = 0.2;
  tiger_star_size = 0.1;
  bear_star_a = 0.03;
  tiger_star_a = -0.03;
  constructor() {
    //backgroundAlpha = 255;
  }
  OnEnter() {
    image.LoadImage("background", "Images/S3/C3/V1/_1/_2/background");
    image.LoadImage("bear", "Images/S3/C3/V1/_1/_2/bear");
    image.LoadImage("bear_star", "Images/S3/C3/V1/_1/_2/bear_star");
    image.LoadImage("tiger", "Images/S3/C3/V1/_1/_2/tiger");
    image.LoadImage("tiger_star", "Images/S3/C3/V1/_1/_2/tiger_star");
    sound.LoadSound("harp", "Sounds/Effects/HarpSound.mp3");
    sound.PlaySound("harp");
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
    if (time.time - this.enterTime > this.SCENE_DURATION) {
      scene.ChangeScene(new S3C3V1_2_1());
    }
    this._time++;
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2, 0),
      new p5.Vector(1, 1, 0)
    );
    image.DrawImageScale(
      "bear",
      new p5.Vector(this.bear_x, this.bear_y, 0),
      new p5.Vector(0.2, 0.2, 0)
    );
    image.DrawImageScale(
      "tiger",
      new p5.Vector(this.tiger_x, this.tiger_y, 0),
      new p5.Vector(0.2, 0.2, 0)
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
    image.DrawImageScale(
      "bear_star",
      new p5.Vector(300, 200, 0),
      new p5.Vector(this.bear_star_size, this.bear_star_size, 0)
    );
    image.DrawImageScale(
      "tiger_star",
      new p5.Vector(1000, 200, 0),
      new p5.Vector(this.tiger_star_size, this.tiger_star_size, 0)
    );
  }
  OnExit() {}
}
