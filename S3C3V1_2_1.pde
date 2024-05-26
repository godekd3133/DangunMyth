public class S3C3V1_2_1 extends Scene {
  private final static String PREFIX = "Images/S3/C3/V1/_2/";

  private final static float 범녀_X = 300;
  private final static float 범녀_Y = 100;

  public final static float 범녀_X_End = 375;
  public final static float 범녀_Y_End = 350;

  private final static float 웅녀_X = 500;
  private final static float 웅녀_Y = 100;

  public final static float 웅녀_X_End = 588;
  public final static float 웅녀_Y_End = 350;

  private final static float moveMillis = 5000;

  private final static float 환웅_X = 1150;
  private final static float 환웅_Y = 500;
  private float tongueY = 0;

  private final static int SCENE_SCONDS = 7;
  private int startMinute;
  private int startSecond;
  private int startMillis;

  private int 범녀숫자 = 1;

  @Override public void OnEnter() {
    // 이미지 로드
    image.LoadImage("background", PREFIX+"background");
    image.LoadImage("범녀1", PREFIX+"범녀1");
    image.LoadImage("범녀2", PREFIX+"범녀2");
    image.LoadImage("범녀3", PREFIX+"범녀3");
    image.LoadImage("웅녀", PREFIX+"웅녀");
    image.LoadImage("환웅", PREFIX+"환웅");

    startMinute=minute();
    startSecond=second();
    startMillis=millis();
  }

  @Override public void OnDraw() {
    tongueY+=0.5;
    // println("s3c3v1_2_1");

    if (tongueY>13) {
      tongueY *=-1;
    }

    int elapsedMills = millis() - startMillis;
    image.DrawImage("background", new PVector(width / 2, height / 2));


    String 범녀Name = "범녀" + ((elapsedMills / 300) % 3 + 1);
    if (elapsedMills > moveMillis)
      범녀Name = "범녀1";
    image.DrawImageScale(범녀Name, new PVector(
      lerp(범녀_X, 범녀_X_End, min(1, elapsedMills / moveMillis)),
      lerp(범녀_Y, 범녀_Y_End, min(1, elapsedMills / moveMillis))
      ),
      new PVector(0.2f, 0.2f));
        image.DrawImageScale("웅녀", new PVector(
      lerp(웅녀_X, 웅녀_X_End, min(1, elapsedMills / moveMillis)),
      lerp(웅녀_Y, 웅녀_Y_End, min(1, elapsedMills / moveMillis))
      ),
      new PVector(0.2f, 0.2f));
    image.DrawImageScale("환웅", new PVector(환웅_X, 환웅_Y), new PVector(0.3, 0.3));

    // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    if (isTimeExceeded(startMinute, startSecond, SCENE_SCONDS)) {
      scene.ChangeScene(new S3C3V1_2_2());
    }
  }

  @Override public void OnExit() {
  }
}
