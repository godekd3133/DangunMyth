public class S3C3V2_2_1 extends Scene {
  private float SCENE_DURATION = 5f; // 5초 동안 씬 진행
  private final static String PREFIX = "Images/S3/C3/V2/_2/_1/";
  private final static float EXTRA_Y = 580;
  private final static float COUPLE_Y = 500;

  private PVector extraScale = new PVector(0.2, 0.2, 0);
  private PVector coupleScale = new PVector(0.33, 0.33, 0);
  private int startMinute;
  private int startSecond;

  @Override public void OnEnter() {
    image.LoadImage("background", PREFIX+"background");
    image.LoadImage("couple", PREFIX+"couple");
    image.LoadImage("extra_left", PREFIX+"extra_left");
    image.LoadImage("extra_right", PREFIX+"extra_right");

    startMinute=minute();
    startSecond=second();
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));

    image.DrawImageScale("extra_left", new PVector(150, EXTRA_Y), extraScale);
    image.DrawImageScale("extra_right", new PVector(1150, EXTRA_Y), extraScale);

    image.DrawImageScale("couple", new PVector(width / 2, COUPLE_Y), coupleScale);

    // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    if (time.time - enterTime >= SCENE_DURATION) {
      scene.ChangeScene(new S3C3V2_2_2());
    }
  }

  @Override public void OnExit() {
  }
}
