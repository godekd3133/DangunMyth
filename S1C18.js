class S1C18 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 15;
    this.tigerSoundTime = 7;
    this.bearSoundTime = 10;
    this.bearX = width / 2 - 100;
    this.animalY = height / 2 + 50;
    this.tigerX = width / 2 + 200;
    this.changeInterval = 0.5;
    this.changeTick = 0;
    this.currentIndex = 0;
    this.playedSoundMap = new Map();
  }

  OnEnter() {
    this.changeInterval = 0.5;
    this.changeTick = 0;
    this.currentIndex = 0;

    imageManager.LoadImage("background", "Images/S1/C18/background");
    imageManager.LoadImage("narr", "Images/S1/C18/narr");
    imageManager.LoadImage("tiger0", "Images/S1/C18/tiger0");
    imageManager.LoadImage("tiger1", "Images/S1/C18/tiger1");
    imageManager.LoadImage("bear0", "Images/S1/C18/bear0");
    imageManager.LoadImage("bear1", "Images/S1/C18/bear1");

    this.playedSoundMap = new Map();
    soundManager.LoadSound("S1C18_NARR", "Sounds/S1/C18/narr/narr.mp3");
    soundManager.LoadSound("S1C18_TIGER", "Sounds/S1/C18/narr/tiger.mp3");
    soundManager.LoadSound("S1C18_BEAR", "Sounds/S1/C18/narr/bear.mp3");
    this.playedSoundMap.set("S1C18_NARR", 0);
    this.playedSoundMap.set("S1C18_TIGER", 0);
    this.playedSoundMap.set("S1C18_BEAR", 0);

    this.startTime = millis();
  }

  OnDraw() {
    this.changeTick += timeManager.deltaTime;

    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      `bear${this.currentIndex}`,
      createVector(this.bearX, this.animalY),
      createVector(0.25, 0.25)
    );
    imageManager.DrawImageScale(
      `tiger${this.currentIndex}`,
      createVector(this.tigerX, this.animalY),
      createVector(0.25, 0.25)
    );

    imageManager.DrawImageScale(
      "narr",
      createVector(width / 2, height / 2),
      createVector(1.0, 1.0)
    );

    let currentTime = (millis() - this.startTime) / 1000;
    this.PlaySoundOnce("S1C18_NARR");
    if (currentTime >= this.tigerSoundTime) {
      this.PlaySoundOnce("S1C18_TIGER");
    }
    if (currentTime >= this.bearSoundTime) {
      this.PlaySoundOnce("S1C18_BEAR");
    }
    if (this.changeTick >= this.changeInterval) {
      this.currentIndex ^= 1;
      this.changeTick = 0;
    }
    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C19_1());
    }
  }

  PlaySoundOnce(soundName) {
    if (this.playedSoundMap.get(soundName) === 1) {
      return;
    }
    soundManager.PlaySound(soundName);
    this.playedSoundMap.set(soundName, 1);
  }

  OnExit() {
    // Add any cleanup code here if needed
  }
}
