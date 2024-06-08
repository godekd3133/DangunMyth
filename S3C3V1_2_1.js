class S3C3V1_2_1 extends Scene {
  static PREFIX = "Images/S3/C3/V1/_2/_1/";
  SCENE_SCONDS = 7;
  범녀_X = 300;
  범녀_Y = 100;
  범녀Name = "범녀1";
  범녀_X_End = 375;
  범녀_Y_End = 350;
  animationCompleted = false;
  웅녀_X = 500;
  웅녀_Y = 100;
  웅녀_X_End = 588;
  웅녀_Y_End = 350;
  moveMillis = 5000;
  환웅_X = 1150;
  환웅_Y = 500;
  tongueY = 0;
  startMinute;
  startSecond;
  startMillis;
  범녀숫자 = 1;
  stepDuration = 0;
  stepSoundInterval = 0.5;
  stepSeconds = 0;
  stepID = 0;
  OnEnter() {
    this.animationCompleted = false; // 이미지 로드
    image.LoadImage("background", S3C3V1_2_1.PREFIX + "background");
    image.LoadImage("범녀1", S3C3V1_2_1.PREFIX + "범녀1");
    image.LoadImage("범녀2", S3C3V1_2_1.PREFIX + "범녀2");
    image.LoadImage("범녀3", S3C3V1_2_1.PREFIX + "범녀3");
    image.LoadImage("웅녀", S3C3V1_2_1.PREFIX + "웅녀");
    image.LoadImage("환웅", S3C3V1_2_1.PREFIX + "환웅");
    sound.LoadSound("step1", "Sounds/Effects/Step_Grass_01.wav");
    sound.LoadSound("step2", "Sounds/Effects/Step_Grass_02.wav");
    sound.LoadSound("step3", "Sounds/Effects/Step_Grass_02.wav");
    this.startMinute = new Date().getMinutes();
    this.startSecond = new Date().getSeconds();
    this.startMillis = Date.now();
    this.tongueY = 0;
  }
  OnDraw() {
    this.tongueY += 30 * time.deltaTime;
    if (this.tongueY > 13) {
      this.tongueY *= -1;
    }
    let elapsedMills = Date.now() - this.startMillis;
    image.DrawImage("background", new p5.Vector(width / 2, height / 2));
    let prevName = this.범녀Name;
    this.범녀Name = "범녀" + (((elapsedMills / 300) % 3) + 1);
    if (prevName === "범녀3" && this.범녀Name === "범녀1")
      this.animationCompleted = true;
    if (this.animationCompleted) this.범녀Name = "범녀1";
    image.DrawImageScale(
      this.범녀Name,
      new p5.Vector(
        lerp(
          this.범녀_X,
          this.범녀_X_End,
          Math.min(1, elapsedMills / this.moveMillis)
        ),
        lerp(
          this.범녀_Y,
          this.범녀_Y_End,
          Math.min(1, elapsedMills / this.moveMillis)
        )
      ),
      new p5.Vector(0.2, 0.2)
    );
    image.DrawImageScale(
      "웅녀",
      new p5.Vector(
        lerp(
          this.웅녀_X,
          this.웅녀_X_End,
          min(1, elapsedMills / this.moveMillis)
        ),
        lerp(
          this.웅녀_Y,
          this.웅녀_Y_End,
          min(1, elapsedMills / this.moveMillis)
        )
      ),
      new p5.Vector(0.2, 0.2)
    );
    image.DrawImageScale(
      "환웅",
      new p5.Vector(this.환웅_X, this.환웅_Y),
      new p5.Vector(0.3, 0.3)
    ); // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    if (isTimeExceeded(this.startMinute, this.startSecond, this.SCENE_SCONDS)) {
      scene.ChangeScene(new S3C3V1_2_2());
    } //발소리
    if (this.stepSeconds >= this.stepSoundInterval && this.stepDuration < 5) {
      this.stepID = int(random(2));
      if (this.stepID == 0) {
        sound.PlaySound("step1");
      } else if (this.stepID == 1) {
        sound.PlaySound("step2");
      } else if (this.stepID == 2) {
        sound.PlaySound("step3");
      }
      this.stepSeconds = 0;
    } else {
      this.stepDuration += time.deltaTime;
      this.stepSeconds += time.deltaTime;
    }
  }
  OnExit() {}
}
