import { Scene } from "./Scene.js"; // Assuming Scene.js contains the base Scene class

export class S1C6_2 extends Scene {
  constructor() {
    super();
    this.centerX = windowWidth / 2;
    this.centerY = windowHeight / 2;
    this.SCENE_DURATION = 8.5;
    this.hwaninFaceScale = 0.4;

    this.hwaninStartTime = 4.0;

    this.narrFlag = false;
    this.hwaninVoiceFlag = false;

    this.tick1Flag = true;
    this.tick1Cnt = 0;

    this.endpointTick = 0;

    // 환인 위치
    this.hwaninfaceOffset = -130;
    this.hwaninX = this.centerX - 310;
    this.hwaninY = this.centerY + 350;

    // 환인 얼굴 움직이는 변수
    this.hwaninFaceFlag = true;
    this.hwaninFaceCnt = 0;
    this.hwaninFace = true;
  }

  preload() {
    this.images = {
      background2: loadImage("Images/S1/C6-2/Background.png"),
      hwaninBody: loadImage("Images/S1/C6-2/HwaninBody.png"),
      hwaninFace: loadImage("Images/S1/C6-2/HwaninFace.png"),
      text: loadImage("Images/S1/C6-2/text.png"),
    };
    this.sounds = {
      narr: loadSound("Sounds/S1/C6-2/narr/narr.mp3"),
      hwanin: loadSound("Sounds/S1/C6-2/narr/hwanin.mp3"),
    };
  }

  OnEnter() {
    this.hwaninFaceScale = 0.4;
    this.narrFlag = false;
    this.hwaninVoiceFlag = false;

    this.hwaninFaceFlag = true;
    this.hwaninFaceCnt = 0;
    this.hwaninFace = true;

    background(255); // #ffffff
  }

  OnDraw() {
    if (!this.narrFlag) {
      this.narrFlag = true;
      this.sounds.narr.play();
    }

    let currentTime = millis() / 1000;

    if (
      currentTime - this.enterTime > this.hwaninStartTime &&
      !this.hwaninVoiceFlag
    ) {
      this.hwaninVoiceFlag = true;
      this.sounds.hwanin.play();
    }

    if (this.hwaninFace) {
      this.hwaninFaceScale += deltaTime * 0.0002;
    } else {
      this.hwaninFaceScale -= deltaTime * 0.0002;
    }

    if (this.hwaninFaceScale >= 0.5 || this.hwaninFaceScale <= 0.36) {
      this.hwaninFace = !this.hwaninFace;
    }

    if (currentTime - this.enterTime > this.SCENE_DURATION) {
      // Implement scene change logic
      // scene.ChangeScene(new S1C7());
    }

    this.drawImageScale(this.images.background2, this.centerX, this.centerY, 1);

    // 환인 Draw
    this.drawImageScale(
      this.images.hwaninBody,
      this.hwaninX,
      this.hwaninY,
      0.47
    );
    this.drawImageScale(
      this.images.hwaninFace,
      this.hwaninX,
      this.hwaninY + this.hwaninfaceOffset,

      this.hwaninFaceScale
    );
    this.drawImage(this.images.text, this.centerX, this.centerY);
  }

  drawImageScale(img, x, y, scale) {
    push();
    translate(x, y);
    scale(scale);
    image(img, 0, 0);
    pop();
  }

  drawImage(img, x, y) {
    imageMode(CENTER);
    image(img, x, y);
  }

  OnExit() {
    // Implement any necessary cleanup logic
  }
}
