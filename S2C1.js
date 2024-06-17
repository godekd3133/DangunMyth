class S2C1 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 6.5;
    this.originalAnimalScale = 0.3;
    this.animalScale = 0.3;
    this.animalX = 300;
    this.animalY = 550;
    this.imageNumber = 1;
    this.imageMaxNumber = 3;
    this.imageNumberDelta = 1;
    this.WALK_INTERVAL = 0.1;
    this.walkTick = 0;
    this.SOUND_INTERVAL = 0.4;
    this.soundTick = 0;
  }

  OnEnter() {

    this.walkTick = 0;
    this.soundTick = 0;
    this.imageNumber = 1;
    this.animalScale = 0.3;
    this.animalX = 300;
    this.animalY = 550;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "s2c1_background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );

    if (this.animalX < 900) {
      this.walkTick += timeManager.deltaTime;
      this.soundTick += timeManager.deltaTime;

      if (this.walkTick > this.WALK_INTERVAL) {
        this.walkTick = 0;
        this.imageNumber += this.imageNumberDelta;

        if (
          this.imageNumber === 1 ||
          this.imageNumber === this.imageMaxNumber
        ) {
          this.imageNumberDelta *= -1;
        }
      }

      if (this.soundTick > this.SOUND_INTERVAL) {
        soundManager.PlaySound("S2/C1/step");
        this.soundTick = 0;
      }
    }

    imageManager.DrawImageScale(
      "s2c1_bear" + this.imageNumber,
      createVector(this.animalX, this.animalY),
      createVector(this.animalScale, this.animalScale)
    );
    imageManager.DrawImageScale(
      "s2c1_tiger" + this.imageNumber,
      createVector(
        this.animalX + (200 * this.animalScale) / this.originalAnimalScale,
        this.animalY
      ),
      createVector(this.animalScale, this.animalScale)
    );

    if (this.animalX < 900) {
      this.animalX += 120 * timeManager.deltaTime;
      this.animalY -= 60 * timeManager.deltaTime;
      this.animalScale -= 0.03 * timeManager.deltaTime;
    }

    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S2C2());
    }
  }

  OnExit() {
    // sceneManager.ChangeScene(new S2C2());
  }
}
