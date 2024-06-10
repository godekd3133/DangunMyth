class S1C13 extends Scene {
  constructor() {
    super();
    this.IMG_PREFIX = "Images/S1/C13/";
    this.SOUND_PREFIX = "Sounds/S1/C13/narr/";
    this.backgroundImages = [
      "background1",
      "background2",
      "background3",
      "background4",
      "background5",
      "background6",
      "background7",
    ];
    this.intervals = [0.0, 0.5, 1.0, 1.3, 1.6, 1.9, 2.1];

    this.startMillis = 0;
    this.narrDuration = 0;
  }

  OnEnter() {
    for (let backgroundImage of this.backgroundImages) {
      imageManager.LoadImage(
        backgroundImage,
        this.IMG_PREFIX + backgroundImage
      );
    }
    this.startMillis = millis();
    soundManager.LoadSound("Door", "Sounds/Effects/WoodenDoorOpen.mp3");
    soundManager.PlaySound("Door");
  }

  OnDraw() {
    for (let i = 1; i < this.intervals.length; i++) {
      if (
        !isTimeExceededMillis(this.startMillis, this.intervals[i]) &&
        isTimeExceededMillis(this.startMillis, this.intervals[i - 1])
      ) {
        imageManager.DrawImage(
          "background" + i,
          createVector(width / 2, height / 2)
        );
        break;
      } else {
        imageManager.DrawImage(
          "background7",
          createVector(width / 2, height / 2)
        );
      }
    }
    if (isTimeExceededMillis(this.startMillis, 4.0)) {
      sceneManager.ChangeScene(new S1C14());
    }
  }

  OnExit() {}

  isTimeExceededMillis(startMillis, endSeconds) {
    let nowTotalMilliseconds = millis();
    let endMilliseconds = endSeconds * 1000;
    return nowTotalMilliseconds - startMillis >= endMilliseconds;
  }
}
