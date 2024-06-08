class S2C2 extends Scene {
  SCENE_DURATION = 6;
  ROTATE_INTERVAL = 0.167;
  rotateTick = 0;
  WALK_INTERVAL = 0.09;
  walkTick = 0;
  imageNumber = 1;
  imageMaxNumber = 3;
  imageNumberDelta = 1;
  rock_x = 1000;
  rock_y = 450;
  rock_width = 200;
  rock_height = 200;
  _rock_size = 0.5;
  _rock_rotate = 0.01;
  tiger_x = 20;
  tiger_y = 400;
  bear_x = -200;
  bear_y = 400;
  animation = 1;
  stepDuration = 0;
  stepSoundInterval = 0.3;
  stepSeconds = 0;
  stepID = 0;
  isPlayedEffect = false;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", "Images/S2/C2/background");
    image.LoadImage("rock", "Images/S2/C2/rock");
    image.LoadImage("tiger_body", "Images/S2/C2/tiger_body");
    image.LoadImage("tiger_face", "Images/S2/C2/tiger_face");
    image.LoadImage("tiger_left", "Images/S2/C2/tiger_foot_right");
    image.LoadImage("tiger_right", "Images/S2/C2/tiger_foot_left");
    image.LoadImage("bear_body", "Images/S2/C2/bear_body");
    image.LoadImage("bear_face", "Images/S2/C2/bear_face");
    image.LoadImage("bear_left", "Images/S2/C2/bear_foot_right");
    image.LoadImage("bear_right", "Images/S2/C2/bear_foot_left");
    sound.LoadSound("S2_S3_FootStuckRock", "Sounds/Effects/FootStuckRock2.mp3");
    sound.LoadSound("step1", "Sounds/Effects/Step_Cave2.mp3");
    sound.LoadSound("step2", "Sounds/Effects/Step_Cave3.mp3");
    sound.LoadSound("step3", "Sounds/Effects/Step_Cave4.mp3");
    image.LoadImage("tiger1", "Images/S2/C2/tiger1");
    image.LoadImage("tiger2", "Images/S2/C2/tiger2");
    image.LoadImage("tiger3", "Images/S2/C2/tiger3");
    image.LoadImage("bear1", "Images/S2/C2/bear1");
    image.LoadImage("bear2", "Images/S2/C2/bear2");
    image.LoadImage("bear3", "Images/S2/C2/bear3");
    this._rock_size = 0.5;
    this._rock_rotate = 0.01;
    this.tiger_x = 20;
    this.tiger_y = 400;
    this.bear_x = -200;
    this.bear_y = 400;
    this.animation = 1;
    this.rotateTick = 0;
    this.walkTick = 0;
    this.isPlayedEffect = false;
  }
  OnDraw() {
    if (time.time - this.enterTime > this.SCENE_DURATION) {
      scene.ChangeScene(new S2C3());
    }
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2, 0),
      new p5.Vector(1, 1, 0)
    ); // image.DrawImageScale("tiger_face", new PVector(tiger_x + 30, tiger_y - 50, 0), new PVector(0.2,0.2,0));
    // image.DrawImageScale("tiger_left", new PVector(tiger_x - 30, tiger_y + 140, 0), new PVector(0.2,0.2,0), animation * -0.15);
    // image.DrawImageScale("tiger_right", new PVector(tiger_x + 30, tiger_y + 140, 0), new PVector(0.2,0.2,0), animation * 0.15);
    // image.DrawImageScale("tiger_body", new PVector(tiger_x, tiger_y, 0), new PVector(0.2,0.2,0));
    // image.DrawImageScale("bear_face", new PVector(bear_x + 20, bear_y - 30, 0), new PVector(0.2,0.2,0));
    // image.DrawImageScale("bear_left", new PVector(bear_x - 30, bear_y + 140, 0), new PVector(0.2,0.2,0), animation * -0.15);
    // image.DrawImageScale("bear_right", new PVector(bear_x + 30, bear_y + 140, 0), new PVector(0.2,0.2,0), animation * 0.15);
    // image.DrawImageScale("bear_body", new PVector(bear_x, bear_y, 0), new PVector(0.2,0.2,0));
    image.DrawImageScale(
      "tiger" + this.imageNumber,
      new p5.Vector(this.tiger_x, this.tiger_y + 30, 0),
      new p5.Vector(0.2, 0.2, 0)
    );
    image.DrawImageScale(
      "bear" + this.imageNumber,
      new p5.Vector(this.bear_x, this.bear_y + 30, 0),
      new p5.Vector(0.2, 0.2, 0)
    ); // move tiger, bear
    if (time.time - this.enterTime > 4.167) {
      this.rotateTick += time.deltaTime;
      if (this.rotateTick > this.ROTATE_INTERVAL) {
        this.rotateTick = 0;
        this._rock_rotate *= -1;
      }
      image.DrawImageScale(
        "rock",
        new p5.Vector(this.rock_x, this.rock_y, 0),
        new p5.Vector(this._rock_size, this._rock_size, 0),
        this._rock_rotate
      );
      if (this._rock_size >= 0.4) {
        this._rock_size -= 0.6 * time.deltaTime;
      }
    } else {
      this.walkTick += time.deltaTime; //발소리
      if (
        this.stepSeconds >= this.stepSoundInterval &&
        this.stepDuration < 4.167
      ) {
        this.stepID = int(random(2));
        if (this.stepID == 0) {
          sound.PlaySound("step1");
        } else if (this.stepID == 1) {
          sound.PlaySound("step2");
        } else if (this.stepID == 2) {
          sound.PlaySound("step3");
        }
        this.stepSeconds = 0;
      } else {
        this.stepDuration += time.deltaTime;
        this.stepSeconds += time.deltaTime;
      }
      if (this.walkTick > this.WALK_INTERVAL) {
        this.walkTick = 0;
        this.animation *= -1;
        this.imageNumber += this.imageNumberDelta; // if (imageNumber == 1 || imageNumber == imageMaxNumber) {
        //   imageNumberDelta *= -1;
        // }
        if (this.imageNumber == this.imageMaxNumber) {
          this.imageNumber = 1;
        }
      }
      this.tiger_x += 180 * time.deltaTime;
      this.bear_x += 180 * time.deltaTime;
    }
    if (time.time - this.enterTime > this.SCENE_DURATION) {
      scene.ChangeScene(new S2C3());
    }
    if (!this.isPlayedEffect && time.time - this.enterTime > 4.367) {
      sound.PlaySound("S2_S3_FootStuckRock");
      this.isPlayedEffect = true;
    }
  }
  OnExit() {}
}
