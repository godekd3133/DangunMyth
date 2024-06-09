class S1C1 extends Scene {
  SCENE_DURATION = 17; // narr. 2 + 4 + 7 sec
  SCENE_DURATION = 17; // narr. 2 + 4 + 7 sec

  cloudX;
  zoomIn;

  sessionIndex;
  sessionDuration = [4, 9.5, 15];
  sessionSound = ["narr1", "narr2", "narr3"];
  sessionText = ["text1", "text1", "text2"];
  isSessionOut;

  enterTime;

  images = {};
  sounds = {};

  preload() {
    images.background = loadImage("Images/S1/C1/background.png");
    images.cloud01 = loadImage("Images/S1/C1/cloud_01.png");
    images.cloud02 = loadImage("Images/S1/C1/cloud_02.png");
    images.cloud03 = loadImage("Images/S1/C1/cloud_03.png");
    images.text1 = loadImage("Images/S1/C1/text_01.png");
    images.text2 = loadImage("Images/S1/C1/text_02.png");

    sounds.intro = loadSound("Sounds/S1/C1/narr/narr1.mp3");
    sounds.narr1 = loadSound("Sounds/S1/C1/narr/narr1.mp3");
    sounds.narr2 = loadSound("Sounds/S1/C1/narr/narr2.mp3");
    sounds.narr3 = loadSound("Sounds/S1/C1/narr/narr3.mp3");
  }

  setup() {
    createCanvas(windowWidth, windowHeight);
    OnEnter();
  }

  draw() {
    OnDraw();
  }

  OnEnter() {
    cloudX = 0;
    zoomIn = 1;
    enterTime = millis() / 1000;
    sessionIndex = 0;
    isSessionOut = [false, false, false];

    sounds.intro.play();
  }

  OnDraw() {
    currentTime = millis() / 1000;
    deltaTime = deltaTime / 1000;

    scale = zoomIn;

    imageMode(CENTER);
    drawImageScale(images.background, width / 2, height / 2, scale);
    drawImageScale(images.cloud01, width / 2 - cloudX, height / 2, scale);
    drawImageScale(images.cloud02, width / 2 - cloudX, height / 2, scale);
    drawImageScale(images.cloud03, width / 2 + cloudX, height / 2, scale);

    if (currentTime - enterTime > 0.25) {
      cloudX += 100 * deltaTime;
    }

    if (currentTime - enterTime > 0.25 && zoomIn < 1.8) {
      zoomIn += 0.02 * deltaTime;
    }

    drawImageScale(
      images[sessionText[sessionIndex]],
      width / 2,
      height / 2,
      scale
    );

    if (!isSessionOut[sessionIndex]) {
      sounds[sessionSound[sessionIndex]].play();
      isSessionOut[sessionIndex] = true;
    }

    if (currentTime - enterTime > sessionDuration[sessionIndex]) {
      if (sessionIndex < sessionDuration.length - 1) {
        sessionIndex++;
      }
    }

    if (currentTime - enterTime > SCENE_DURATION) {
      // ChangeScene(new S1C3()); // Implement scene change logic
    }
  }

  drawImageScale(img, x, y, scale) {
    push();
    translate(x, y);
    scale(scale);
    image(img, 0, 0);
    pop();
  }

  windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
