class S3C3V1_2_1 extends Scene {
  constructor() {
    super();
    this.SCENE_SECONDS = 7;
    this.animationCompleted = false;
    this.범녀_X = 300;
    this.범녀_Y = 100;
    this.범녀Name = "범녀1";
    this.범녀_X_End = 375;
    this.범녀_Y_End = 350;
    this.moveMillis = 5000;
    this.웅녀_X = 500;
    this.웅녀_Y = 100;
    this.웅녀_X_End = 588;
    this.웅녀_Y_End = 350;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.tongueY = 0;
    this.startMinute = 0;
    this.startSecond = 0;
    this.startMillis = 0;
    this.stepDuration = 0;
    this.stepSoundInterval = 0.5;
    this.stepSeconds = 0;
    this.stepID = 0;
  }

  OnEnter() {
    this.animationCompleted = false;

    this.startMinute = minute();
    this.startSecond = second();
    this.startMillis = millis();
    this.tongueY = 0;
  }

  OnDraw() {
    this.tongueY += 30 * timeManager.deltaTime;

    if (this.tongueY > 13) {
      this.tongueY *= -1;
    }
    let elapsedMillis = millis() - this.startMillis;
    imageManager.DrawImage("s3c3v1_2_1_background", createVector(width / 2, height / 2));
    let prevName = this.범녀Name;
    this.범녀Name = "범녀" + Math.floor(((elapsedMillis / 300) % 3) + 1);
    if (prevName === "범녀3" && this.범녀Name === "범녀1")
      this.animationCompleted = true;
    if (this.animationCompleted) this.범녀Name = "범녀1";
    imageManager.DrawImageScale(
      "s3c3v1_2_1_"+this.범녀Name,
      createVector(
        lerp(
          this.범녀_X,
          this.범녀_X_End,
          min(1, elapsedMillis / this.moveMillis)
        ),
        lerp(
          this.범녀_Y,
          this.범녀_Y_End,
          min(1, elapsedMillis / this.moveMillis)
        )
      ),
      createVector(0.2, 0.2)
    );
    imageManager.DrawImageScale(
      "s3c3v1_2_1_웅녀",
      createVector(
        lerp(
          this.웅녀_X,
          this.웅녀_X_End,
          min(1, elapsedMillis / this.moveMillis)
        ),
        lerp(
          this.웅녀_Y,
          this.웅녀_Y_End,
          min(1, elapsedMillis / this.moveMillis)
        )
      ),
      createVector(0.2, 0.2)
    );
    imageManager.DrawImageScale(
      "s3c3v1_2_1_환웅",
      createVector(this.환웅_X, this.환웅_Y),
      createVector(0.3, 0.3)
    );

    // 씬 시작 후 SCENE_SECONDS 초 경과시 다음 장면으로 이동
    if (
      isTimeExceeded(this.startMinute, this.startSecond, this.SCENE_SECONDS)
    ) {
      sceneManager.ChangeScene(new S3C3V1_2_2());
    }
    //발소리
    if (this.stepSeconds >= this.stepSoundInterval && this.stepDuration < 5) {
      this.stepID = int(random(2));
      if (this.stepID === 0) {
        soundManager.PlaySound("Effects/Step_Grass_01");
      } else if (this.stepID === 1) {
        soundManager.PlaySound("Effects/Step_Grass_02");
      } else if (this.stepID === 2) {
        soundManager.PlaySound("Effects/Step_Grass_02");
      }
      this.stepSeconds = 0;
    } else {
      this.stepDuration += timeManager.deltaTime;
      this.stepSeconds += timeManager.deltaTime;
    }
  }

  OnExit() {}
}
