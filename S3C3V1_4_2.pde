public class S3C3V1_4_2 extends Scene {
  private final static int SCENE_SCONDS = 5; // 5초 동안 씬 진행
  private final static String PREFIX = "Images/S3/C3/V1/_4/_2/";
  private int backgroundAlpha = 0;
  private int startMinute;
  private int startSecond;

  @Override public void OnEnter() {
    image.LoadImage("background", PREFIX+"background");
    image.LoadImage("family", PREFIX+"family");
    startMinute=minute();
    startSecond=second();

  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImageScale("family", new PVector(width / 2, height / 2), new PVector(0.3, 0.3, 0));
    fill(0, backgroundAlpha);
    rect(0, 0, width, height);
    // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    if (isTimeExceeded(startMinute, startSecond, SCENE_SCONDS)) {
      if (backgroundAlpha <= 255) {
        backgroundAlpha += 4;
      } else {
        // scene.ChangeScene(new S3C3V1_4_3());
      }
    }
  }

  @Override public void OnExit() {
  }
}
