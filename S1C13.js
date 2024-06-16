class S1C13 extends Scene {
  constructor() {
    super();
    this.SOUND_PREFIX = "Sounds/S1/C13/narr/";
    this.intervals = [0.0, 0.5, 1.0, 1.3, 1.6, 1.9, 2.1];

    this.startMillis = 0;
    this.narrDuration = 0;
  }

  OnEnter() {
    this.startMillis = millis();
    soundManager.PlaySound("Effects/WoodenDoorOpen");
  }

  OnDraw() {
    for (let i = 1; i < this.intervals.length; i++) {
      if (
        !isTimeExceededMillis(this.startMillis, this.intervals[i]) &&
        isTimeExceededMillis(this.startMillis, this.intervals[i - 1])
      ) {
        imageManager.DrawImage(
          "s1c13_background" + i,
          createVector(width / 2, height / 2)
        );
        break;
      } else {
        imageManager.DrawImage(
          "s1c13_background7",
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
