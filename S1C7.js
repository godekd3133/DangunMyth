import { Scene } from "./Scene.js"; // Assuming Scene.js contains the base Scene class

class S1C7 extends Scene {
  constructor() {
    super();
    this.PREFIX = "S1/C7/";
    this.IMG_PREFIX = "Images/" + this.PREFIX;
    this.SOUND_PREFIX = "Sounds/" + this.PREFIX + "narr/";
    this.SCENE_DURATION = 6;

    this.HWAN_BODY_X = 980;
    this.HWAN_BODY_Y = 590;
    this.HWAN_EYE_Y = 310;
    this.HWAN_SCALE = 0.4;

    this.startMillis = 0;
    this.narrDuration = 0;
  }

  OnEnter() {
    this.backgroundImg = loadImage(this.IMG_PREFIX + "background.png");
    this.textImg = loadImage(this.IMG_PREFIX + "text.png");
    this.hwanBodyImg = loadImage(this.IMG_PREFIX + "hwan_body.png");
    this.hwanExpression1Img = loadImage(
      this.IMG_PREFIX + "hwan_expression1.png"
    );
    this.hwanExpression2Img = loadImage(
      this.IMG_PREFIX + "hwan_expression2.png"
    );
    this.hwanSound = loadSound(this.SOUND_PREFIX + "hwan.mp3");

    this.startMillis = millis(); // 씬 시작 millis
  }

  OnDraw() {
    background(0);

    image(this.backgroundImg, width / 2, height / 2, width, height);
    image(this.textImg, width / 2, height / 2, width, height);

    push();
    translate(this.HWAN_BODY_X, this.HWAN_BODY_Y);
    scale(this.HWAN_SCALE);
    image(this.hwanBodyImg, 0, 0);
    pop();

    push();
    translate(this.HWAN_BODY_X, this.HWAN_EYE_Y);
    scale(this.HWAN_SCALE);
    if ((millis() / 500) % 2 === 0) {
      image(this.hwanExpression1Img, 0, 0);
    } else {
      image(this.hwanExpression2Img, 0, 0);
    }
    pop();

    // 씬 시작 후 1.5초 뒤 대사1 시작
    if (
      this.hwanSound.isLoaded() &&
      this.isTimeExceededMillis(this.startMillis, 1.0)
    ) {
      this.narrDuration = this.hwanSound.duration();
      this.hwanSound.play();
      this.startMillis = millis();
    }

    // 다음 장면으로 이동
    if ((millis() - this.startMillis) / 1000 >= this.SCENE_DURATION) {
      this.changeScene(new S1C8()); // S1C8은 다음 씬을 구현해야 합니다.
    }
  }

  OnExit() {
    if (this.hwanSound.isPlaying()) {
      this.hwanSound.stop();
    }
  }

  isTimeExceededMillis(startTime, duration) {
    return millis() - startTime > duration * 1000;
  }

  changeScene(newScene) {
    // 새로운 씬으로 변경하는 로직을 구현해야 합니다.
    console.log("Change scene to", newScene);
  }
}
