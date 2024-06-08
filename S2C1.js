class S2C1 extends Scene {
  SCENE_DURATION = 7.5;
  originalAnimalScale = 0.3;
  animalScale = 0.3;
  animalX = 300;
  animalY = 550;
  imageNumber = 1;
  imageMaxNumber = 3;
  imageNumberDelta = 1;
  WALK_INTERVAL = 0.1;
  walkTick = 0;
  SOUND_INTERVAL = 0.4;
  soundTick = 0;
  constructor() {}
  OnEnter() {
    image.LoadImage("background", "Images/S2/C1/background");
    image.LoadImage("tiger1", "Images/S2/C1/tiger1");
    image.LoadImage("tiger2", "Images/S2/C1/tiger2");
    image.LoadImage("tiger3", "Images/S2/C1/tiger3");
    image.LoadImage("bear1", "Images/S2/C1/bear1");
    image.LoadImage("bear2", "Images/S2/C1/bear2");
    image.LoadImage("bear3", "Images/S2/C1/bear3");
    sound.LoadSound("step", "Sounds/S2/C1/effect/Step_Grass_01.wav");
    this.walkTick = 0;
    this.soundTick = 0;
    this.imageNumber = 1;
    this.animalScale = 0.3;
    this.animalX = 300;
    this.animalY = 550;
  }
  OnDraw() {
    image.DrawImageScale(
      "background",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(1, 1)
    );
    if (this.animalX < 900) {
      this.walkTick += time.deltaTime;
      this.soundTick += time.deltaTime;
      if (this.walkTick > this.WALK_INTERVAL) {
        this.walkTick = 0;
        this.imageNumber += this.imageNumberDelta;
        if (this.imageNumber == 1 || this.imageNumber == this.imageMaxNumber) {
          this.imageNumberDelta *= -1;
        }
      }
      if (this.soundTick > this.SOUND_INTERVAL) {
        sound.PlaySound("step");
        this.soundTick = 0;
      }
    }
    image.DrawImageScale(
      "bear" + this.imageNumber,
      new p5.Vector(this.animalX, this.animalY),
      new p5.Vector(this.animalScale, this.animalScale)
    );
    image.DrawImageScale(
      "tiger" + this.imageNumber,
      new p5.Vector(
        this.animalX + (200 * this.animalScale) / this.originalAnimalScale,
        this.animalY
      ),
      new p5.Vector(this.animalScale, this.animalScale)
    ); //6.666초
    if (this.animalX < 900) {
      this.animalX += 120 * time.deltaTime;
      this.animalY -= 0.5 * time.deltaTime;
      this.animalScale -= 0.03 * time.deltaTime;
    }
    if (time.time - this.enterTime > this.SCENE_DURATION) {
      scene.ChangeScene(new S2C2());
    }
  }
  OnExit() {
    // scene.ChangeScene(new S2C2());
  }
}
