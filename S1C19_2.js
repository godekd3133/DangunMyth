class S1C19_2 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 10;

    this.armInterval = 0.25;
    this.mouthInterval = 0.2;
    this.mouthChangeTick = 0;
    this.armChangeTick = 0;
    this.mouthIndex = 0;
    this.armIndex = 0;

    this.firstDuration = 2.5;
    this.secondDuration = 2.5;
    this.thirdDuration = 5.5;

    this.firstFlag = false;
    this.secondFlag = false;
    this.thirdFlag = false;

    this.animalVoiceFlag = false;
  }

  OnEnter() {
    this.armInterval = 0.25;
    this.mouthInterval = 0.2;
    this.armChangeTick = 0;
    this.mouthChangeTick = 0;
    this.mouthIndex = 0;
    this.armIndex = 0;

    this.firstDuration = 2.5;
    this.secondDuration = 2.5;
    this.thirdDuration = 5.5;

    this.firstFlag = false;
    this.secondFlag = false;
    this.thirdFlag = false;

    imageManager.LoadImage("background", "Images/S1/C19/background1.png");
    imageManager.LoadImage("arm", "Images/S1/C19/hwanwoong_arm.png");
    imageManager.LoadImage("mouth0", "Images/S1/C19/hwanwoong_mouth1.png");
    imageManager.LoadImage("mouth1", "Images/S1/C19/hwanwoong_mouth0.png");
    imageManager.LoadImage("skin", "Images/S1/C19/hwanwoong_skin.png");
    imageManager.LoadImage("C19-2-Text", "Images/S1/C19/C19-2-Text.png");

    soundManager.LoadSound("hwanwoong1", "Sounds/S1/C19-2/hwanwoong1.mp3");
    this.enterTime = timeManager.time;
  }

  OnDraw() {
    this.mouthChangeTick += timeManager.deltaTime;
    this.armChangeTick += timeManager.deltaTime;

    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    if (this.armIndex === 0) {
      imageManager.DrawImageScale(
        "arm",
        createVector(650, height - 350),
        createVector(0.25, 0.25)
      );
    } else {
      imageManager.DrawImageScale(
        "arm",
        createVector(630, height - 330),
        createVector(0.25, 0.25),
        0.3
      );
    }
    imageManager.DrawImageScale(
      "skin",
      createVector(600, height - 250),
      createVector(0.25, 0.25)
    );
    imageManager.DrawImageScale(
      "mouth" + this.mouthIndex,
      createVector(600, height - 250),
      createVector(0.25, 0.25)
    );

    imageManager.DrawImage("C19-2-Text", createVector(width / 2, height / 2));

    // "그렇구나 너희의 소원을 들어주마"
    if (timeManager.time - this.enterTime > 1.5 && !this.firstFlag) {
      this.firstFlag = true;
      soundManager.PlaySound("hwanwoong1");
    }

    // Toggle mouth index
    if (this.mouthChangeTick >= this.mouthInterval) {
      this.mouthIndex ^= 1;
      this.mouthChangeTick = 0;
    }

    // Toggle arm index
    if (this.armChangeTick >= this.armInterval) {
      this.armIndex ^= 1;
      this.armChangeTick = 0;
    }

    // Change scene after the specified duration
    if (timeManager.time - this.enterTime >= 5.5) {
      sceneManager.ChangeScene(new S1C19_3());
    }
  }

  OnExit() {}
}
