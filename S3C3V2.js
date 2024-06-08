class S3C3V2 extends Scene {
  SCENE_DURATION = 5; // 5초 동안 씬 진행
  tiger_SCALE = 0.2;
  bear_SCALE = 0.25;
  bear_X = 300;
  bear_Y = 450;
  tiger_X = 800;
  tiger_Y = 250;
  bear_EYE_X = 295;
  bear_EYE_Y = 400;
  bear_MOU_X = 305;
  bear_MOU_Y = 460;
  startTime = 0;
  imageIndex = 0;
  tigerList = ["tiger1", "tiger2", "tiger3"];
  WALK_INTERVAL = 0.075;
  walkTick = 0;
  constructor() {}
  OnEnter() {
    image.LoadImage("text", "Images/S3/C3/V2/_0/text");
    image.LoadImage("background", "Images/S3/C3/V2/_0/background");
    image.LoadImage("bear1", "Images/S3/C3/V2/_0/bear1");
    image.LoadImage("bear2", "Images/S3/C3/V2/_0/bear2");
    for (let i = 0; i < this.tigerList.length; i++) {
      image.LoadImage("tiger" + (i + 1), "Images/S3/C3/V2/_0/tiger" + (i + 1));
    }
    sound.LoadSound("woonggirl", "Sounds/S3/C3/V2/_0/narr/woonggirl.mp3");
    sound.PlaySound("woonggirl");
    this.tiger_X = 800;
    this.tiger_Y = 250;
    this.bear_SCALE = 0.25;
    this.bear_X = 300;
    this.bear_Y = 450;
    this.tiger_SCALE = 0.2;
    this.bear_EYE_X = 295;
    this.bear_EYE_Y = 400;
    this.bear_MOU_X = 305;
    this.bear_MOU_Y = 460;
    this.imageIndex = 0;
    this.walkTick = 0;
  }
  OnDraw() {
    let currentProcessingTime = (Date.now() - this.startTime) / 1000;
    let isEating = currentProcessingTime % 2 == 1;
    image.DrawImage("background", new p5.Vector(width / 2, height / 2));
    if ((Date.now() / 300) % 2 == 0) {
      image.DrawImageScale(
        "bear1",
        new p5.Vector(this.bear_EYE_X, this.bear_EYE_Y),
        new p5.Vector(this.bear_SCALE, this.bear_SCALE, 0)
      );
    } else {
      image.DrawImageScale(
        "bear2",
        new p5.Vector(this.bear_EYE_X, this.bear_EYE_Y),
        new p5.Vector(this.bear_SCALE, this.bear_SCALE, 0)
      );
    }
    if (this.tiger_X < 900) {
      this.walkTick += time.deltaTime;
      if (this.walkTick > this.WALK_INTERVAL) {
        this.walkTick = 0;
        this.imageIndex++;
      }
    }
    image.DrawImageScale(
      this.tigerList[this.imageIndex % 3],
      new p5.Vector(this.tiger_X, this.tiger_Y),
      new p5.Vector(this.tiger_SCALE, this.tiger_SCALE, 0)
    );
    image.DrawImage("text", new p5.Vector(width / 2, height / 2));
    if (this.tiger_X < 900) {
      this.tiger_X += 26 * time.deltaTime;
      this.tiger_Y -= 0.5 * time.deltaTime;
      this.tiger_SCALE -= 0.03 * time.deltaTime;
    }
    if (time.time - this.enterTime > this.SCENE_DURATION) {
      scene.ChangeScene(new S3C3V2_1_1());
    }
  }
  OnExit() {
    sound.stopNowPlaying();
  }
}
