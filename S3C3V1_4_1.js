/** * 범녀 선택했을 때의 하트 출력 */
class S3C3V1_4_1 extends Scene {
  static PREFIX = "Images/S3/C3/V1/_4/_1/";
  범녀_X = 588;
  범녀_Y = 350;
  환웅_X = 1150;
  환웅_Y = 500;
  SCENE_SECONDS = 6;
  startMinute;
  startSecond;
  startMillis;
  heartSize = 0;
  diameter;
  minimumSize;
  angle = 0;
  OnEnter() {
    this.범녀_X = 588;
    this.범녀_Y = 350;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.heartSize = 0;
    this.SCENE_SECONDS = 4;
    this.diameter = height - 400; //최대크기
    this.minimumSize = this.diameter - 350;
    this.angle = 0; // 이미지 로드
    image.LoadImage("background", S3C3V1_4_1.PREFIX + "background");
    image.LoadImage("범녀1", S3C3V1_4_1.PREFIX + "범녀1");
    image.LoadImage("환웅", S3C3V1_4_1.PREFIX + "환웅");
    image.LoadImage("heart", S3C3V1_4_1.PREFIX + "heart");
    sound.LoadSound("Choice", "Sounds/Effects/Choice.mp3");
    sound.PlaySound("Choice");
    this.startMinute = minute();
    this.startSecond = second();
    this.startMillis = millis();
  }
  OnDraw() {
    //           최소크기                    최대크기
    let d1 =
      this.minimumSize +
      (Math.sin(this.angle) * this.diameter) / 2 +
      this.diameter / 2; // heartSize += 0.005;
    // println("d1 : " + d1);
    image.DrawImage("background", new p5.Vector(width / 2, height / 2)); //웅녀 선택 씬
    image.DrawImageScale(
      "범녀1",
      new p5.Vector(this.범녀_X, this.범녀_Y),
      new p5.Vector(0.2, 0.2)
    );
    image.DrawImageScale(
      "환웅",
      new p5.Vector(this.환웅_X, this.환웅_Y),
      new p5.Vector(0.3, 0.3)
    );
    image.DrawImageScale(
      "heart",
      new p5.Vector(width / 2, height / 2),
      new p5.Vector(d1 / 2000, d1 / 2000)
    ); // 씬 시작 후 SCENE_SECONDS초 경과시 다음 장면으로 이동
    if (
      isTimeExceeded(this.startMinute, this.startSecond, this.SCENE_SECONDS)
    ) {
      scene.ChangeScene(new S3C3V1_4_2());
    }
    this.angle += 0.1; //크기 증가 속도
    this.diameter += 7.0; //최대크기 증가
    this.minimumSize += 15; //최소크기 증가
  }
  OnExit() {}
}
