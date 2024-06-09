class S3C3V2 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 5;
    this.tiger_SCALE = 0.2;
    this.bear_SCALE = 0.25;
    this.bear_X = 300;
    this.bear_Y = 450;
    this.tiger_X = 800;
    this.tiger_Y = 250;
    this.bear_EYE_X = 295;
    this.bear_EYE_Y = 400;
    this.bear_MOU_X = 305;
    this.bear_MOU_Y = 460;
    this.startTime = 0;
    this.imageIndex = 0;
    this.tigerList = ["tiger1", "tiger2", "tiger3"];
    this.WALK_INTERVAL = 0.075;
    this.walkTick = 0;
  }

  OnEnter() {
    imageManager.LoadImage("text", "Images/S3/C3/V2/_0/text");
    imageManager.LoadImage("background", "Images/S3/C3/V2/_0/background");
    imageManager.LoadImage("bear1", "Images/S3/C3/V2/_0/bear1");
    imageManager.LoadImage("bear2", "Images/S3/C3/V2/_0/bear2");

    for (let i = 0; i < this.tigerList.length; i++) {
      imageManager.LoadImage(
        `tiger${i + 1}`,
        "Images/S3/C3/V2/_0/tiger" + `${i + 1}`
      );
    }

    soundManager.LoadSound(
      "woonggirl",
      "Sounds/S3/C3/V2/_0/narr/woonggirl.mp3"
    );
    soundManager.PlaySound("woonggirl");

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
    this.startTime = millis();
  }

  OnDraw() {
    let currentProcessingTime = (millis() - this.startTime) / 1000;
    let isEating = currentProcessingTime % 2 === 1;

    imageManager.DrawImage("background", createVector(width / 2, height / 2));

    if (Math.floor(millis() / 300) % 2 === 0) {
      imageManager.DrawImageScale(
        "bear1",
        createVector(this.bear_EYE_X, this.bear_EYE_Y),
        createVector(this.bear_SCALE, this.bear_SCALE, 0)
      );
    } else {
      imageManager.DrawImageScale(
        "bear2",
        createVector(this.bear_EYE_X, this.bear_EYE_Y),
        createVector(this.bear_SCALE, this.bear_SCALE, 0)
      );
    }

    if (this.tiger_X < 900) {
      this.walkTick += timeManager.deltaTime;
      if (this.walkTick > this.WALK_INTERVAL) {
        this.walkTick = 0;
        this.imageIndex++;
      }
    }
    imageManager.DrawImageScale(
      this.tigerList[this.imageIndex % 3],
      createVector(this.tiger_X, this.tiger_Y),
      createVector(this.tiger_SCALE, this.tiger_SCALE, 0)
    );
    imageManager.DrawImage("text", createVector(width / 2, height / 2));

    if (this.tiger_X < 900) {
      this.tiger_X += 26 * timeManager.deltaTime;
      this.tiger_Y -= 0.5 * timeManager.deltaTime;
      this.tiger_SCALE -= 0.03 * timeManager.deltaTime;
    }
    if (timeManager.time - timeManager.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C3V2_1_1());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}
