class S1C15V1 extends Scene {
  constructor() {
    super();
    this.backgroundAlpha = 0;

    this.SCENE_DURATION = 20;
    this.narrDuration = 2.7;
    this.HWANUNG_BODY_X = width / 2;
    this.HWANUNG_BODY_Y = height / 2 + 50;
    this.HWANUNG_BODY_SCALE = 0.25;
    this.HWANUNG_FACE_X = width / 2;
    this.HWANUNG_FACE_Y = height / 2 - 120;
    this.HWANUNG_FACE_SCALE = 0.3;
    this.HWANUNG_SWEAT_X = width / 2 + 10;
    this.HWANUNG_SWEAT_Y = height / 2;
    this.HWANUNG_SWEAT_SCALE = 0.4;
    this.flowY = 0;
    this.faceX = 0;
    this.showButton = false;

    this.playedSoundMap = new Map();
    this.startTime = 0;
  }

  OnEnter() {

    this.playedSoundMap = new Map();
    this.playedSoundMap.set("HWANUNG_NARR1", 0);
    // this.playedSoundMap.set("HWANUNG_NARR2", 0);
    this.showButton = false;

    this.flowY = 0;
    this.faceX = 0;
    this.startTime = millis();
    this.backgroundAlpha = 0;
  }

  OnDraw() {
    imageManager.DrawImage("s1c15v1_background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "s1c15v1_HWANUNG_BODY",
      createVector(this.HWANUNG_BODY_X, this.HWANUNG_BODY_Y),
      createVector(this.HWANUNG_BODY_SCALE, this.HWANUNG_BODY_SCALE)
    );
    // this.faceX = sin(float(millis()) * 0.004) * 4; //240604 QA수정(얼굴 흔들림 삭제)
    imageManager.DrawImageScale(
      "s1c15v1_HWANUNG_FACE",
      createVector(this.HWANUNG_FACE_X + this.faceX + 2, this.HWANUNG_FACE_Y),
      createVector(this.HWANUNG_FACE_SCALE, this.HWANUNG_FACE_SCALE)
    );
    //240603 수정 : Drop 속도 Down 및 반복 삭제
    if (this.flowY <= 1.5) {
      this.flowY += 0.005;
    } else {
      // this.flowY = 0;
    }
    this.HWANUNG_SWEAT_Y = height / 2 + this.flowY * 40 - 150;
    imageManager.DrawImageScale(
      "s1c15v1_HWANUNG_SWEAT",
      createVector(this.HWANUNG_SWEAT_X + 4, this.HWANUNG_SWEAT_Y),
      createVector(this.HWANUNG_SWEAT_SCALE, this.HWANUNG_SWEAT_SCALE)
    );

    let currentTime = (millis() - this.startTime) / 1000;
    this.PlaySoundOnce("HWANUNG_NARR1");
    if (currentTime > 1.0) {
      // this.PlaySoundOnce("HWANUNG_NARR2");
    }
    //240603 텍스트 수정
    imageManager.DrawImage(
      "s1c15v1_HWANUNG_TEXT",
      createVector(width / 2, height / 2 + 50)
    );

    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      // sceneManager.ChangeScene(new S1C15V2());
    }
    //240606 QA 나레이션 종료된 다음에 배경에 어두운거 나오기
    if (timeManager.time - this.enterTime > this.narrDuration) {
      this.showButton = true;
      // sceneManager.ChangeScene(new S1C15V2());
    }
    //240605 QA 배경에 어두운거 추가
    // println(this.backgroundAlpha);
    if (this.showButton && this.backgroundAlpha <= 180)
      this.backgroundAlpha += 1.2;

    fill(0, this.backgroundAlpha);
    rect(0, 0, width, height);

    //240605 QA 버튼 추가

    if (this.showButton) {
      // imageManager.DrawImageScale("button_top", createVector(width / 2, height / 2), createVector(1, 1));
      // imageManager.DrawImageScale("button_bottom", createVector(width / 2, height / 2), createVector(1, 1));

      //Mouse Hover
      if (mouseX > 480 && mouseX < 800 && mouseY > 375 && mouseY < 459) {
        imageManager.DrawImage(
          "s1c15v1_button_top",
          createVector(width / 2, height / 2),
          0,
          180,
          220,
          220,
          220
        );
      } else {
        // imageManager.DrawImageScale("button_top", createVector(width / 2, height / 2), createVector(1, 1));
        imageManager.DrawImage(
          "s1c15v1_button_top",
          createVector(width / 2, height / 2),
          0,
          this.backgroundAlpha + 80,
          220,
          220,
          220
        );
      }
      //Mouse Hover
      if (mouseX > 480 && mouseX < 800 && mouseY > 237 && mouseY < 324) {
        imageManager.DrawImage(
          "s1c15v1_button_bottom",
          createVector(width / 2, height / 2),
          0,
          180,
          220,
          220,
          220
        );
      } else {
        // imageManager.DrawImageScale("button_bottom", createVector(width / 2, height / 2), createVector(1, 1));
        imageManager.DrawImage(
          "s1c15v1_button_bottom",
          createVector(width / 2, height / 2),
          0,
          this.backgroundAlpha + 80,
          220,
          220,
          220
        );
      }
      if (mouseIsPressed) {
        /// x 480 ~ 800 y 237 ~ 324
        if (mouseX > 480 && mouseX < 800 && mouseY > 237 && mouseY < 324) {
          // go back
          sceneManager.ChangeScene(new S1C15());
          this.showButton = false;
        }
        /// x 480 ~ 800 y 375 ~ 459
        else if (mouseX > 480 && mouseX < 800 && mouseY > 375 && mouseY < 459) {
          //Home 버튼 눌렀을 때 어떻게 해야하는지 안정해져있음
          sceneManager.ChangeScene(new Opening());
          this.showButton = false;
        }
      }
    }
  }

  PlaySoundOnce(soundName) {
    if (this.playedSoundMap.get(soundName) === 1) {
      return;
    }
    soundManager.PlaySound(soundName);
    this.playedSoundMap.set(soundName, 1);
  }

  OnExit() {}
}
