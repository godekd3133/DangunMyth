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

    this.playedSoundMap = new Map();
    this.playedSoundMap.set("S1C18_NARR", 0);
    this.playedSoundMap.set("S1C18_TIGER", 0);
    this.playedSoundMap.set("S1C18_BEAR", 0);

    this.startTime = millis();
  }

  OnDraw() {
    this.changeTick += timeManager.deltaTime;

    imageManager.DrawImage("s1c18_background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      `s1c18_bear${this.currentIndex}`,
      createVector(this.bearX, this.animalY),
      createVector(0.25, 0.25)
    );
    imageManager.DrawImageScale(
      `s1c18_tiger${this.currentIndex}`,
      createVector(this.tigerX, this.animalY),
      createVector(0.25, 0.25)
    );

    imageManager.DrawImageScale(
      "s1c18_narr",
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
