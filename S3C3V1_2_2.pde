public class S3C3V1_2_2 extends Scene {
  private String PREFIX = "Images/S3/C3/V1/_2/"; // 1번과 같은경로를 사용함

  private float moveMillis = 5000;

  private float 환웅_X = 1150;
  private float 환웅_Y = 500;
  private float tongueY = 0;

  private int startMinute;
  private int startSecond;
  private int startMillis;
  private int darkenMillis = 1500;
  private boolean selected = false;

  S3C3V1_2_1 lastScene;

  @Override public void OnEnter() {
    // 이미지 로드
    lastScene = new S3C3V1_2_1();
    image.LoadImage("background", PREFIX+"background");
    image.LoadImage("범녀", PREFIX+"범녀1");
    image.LoadImage("웅녀", PREFIX+"웅녀");
    image.LoadImage("환웅", PREFIX+"환웅");
    image.LoadImage("button_left", PREFIX+"button_left");
    image.LoadImage("button_right", PREFIX+"button_right");

    startMinute=minute();
    startSecond=second();
    startMillis=millis();
    tongueY = 0;

  }

  @Override public void OnDraw() {
    tongueY+= 30 * time.deltaTime;

    if (tongueY>13) {
      tongueY *=-1;
    }
    int elapsedMills = millis() - startMillis;
    image.DrawImage("background", new PVector(width / 2, height / 2));

    // 검은색 반투명
    fill(0, min(128, lerp(255, 128,(float)darkenMillis / elapsedMills)));
    rect(0, 0, width, height);

    image.DrawImageScale("범녀", new PVector(lastScene .범녀_X_End, lastScene .범녀_Y_End), new PVector(0.2, 0.2));
    image.DrawImageScale("웅녀", new PVector(lastScene .웅녀_X_End, lastScene .웅녀_Y_End), new PVector(0.2, 0.2));
    image.DrawImageScale("환웅", new PVector(환웅_X, 환웅_Y), new PVector(0.3, 0.3));

    image.DrawImage("button_left", new PVector(width / 2, height / 2));
    image.DrawImage("button_right", new PVector(width / 2, height / 2));

    checkClick();
  }

  private void checkClick() {
    if (mousePressed && selected == false) {
      if (mouseX > 310 && mouseX < 310 + 150 && mouseY > 70 && mouseY < 70 + 80) {
        println("범녀 선택");
        scene.ChangeScene(new S3C3V1_4_1());
        selected = true;
      }
      if (mouseX > 520 && mouseX < 520 + 150 && mouseY > 70 && mouseY < 70 + 80) {
        println("웅녀 선택");
        scene.ChangeScene(new S3C3V1_3_1());
        selected = true;
      }
    }
  }

  @Override public void OnExit() {
  }
}
