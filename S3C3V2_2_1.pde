public class S3C3V2_2_1 extends Scene {
  private float SCENE_DURATION = 5f; // 5초 동안 씬 진행
  private final static String PREFIX = "Images/S3/C3/V2/_2/_1/";
  private final static String SOUND_PREFIX = "Sounds/S3/C3/V2/_2/_1/narr/";

  private final static float EXTRA_Y = 580;
  private final static float COUPLE_Y = 500;

  private PVector extraScale = new PVector(0.2, 0.2, 0);
  private PVector coupleScale = new PVector(0.33, 0.33, 0);

  private int startMillis;
  private float narrDuration;

  @Override public void OnEnter() {
    image.LoadImage("background", PREFIX+"background");
    image.LoadImage("couple", PREFIX+"couple");
    image.LoadImage("extra_left", PREFIX+"extra_left");
    image.LoadImage("extra_right", PREFIX+"extra_right");
    sound.LoadSound("haha", SOUND_PREFIX+"haha.mp3");

    startMillis = millis();// 씬 시작 millis
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));

    image.DrawImageScale("extra_left", new PVector(150, EXTRA_Y), extraScale);
    image.DrawImageScale("extra_right", new PVector(1150, EXTRA_Y), extraScale);

    image.DrawImageScale("couple", new PVector(width / 2, COUPLE_Y), coupleScale);

    // 씬 시작 후 1초 뒤 대사1 시작
    if (sound.hasSound("haha")&&isTimeExceededMillis(startMillis, 1)) {
      narrDuration=sound.soundDuration("haha");
      sound.playSoundOnce("haha");
      startMillis = millis(); // 대사 1 시작 millis
    }
    // 대사 1 종료 후 1초 뒤 다음 장면으로 이동
    if (!sound.hasSound("haha")&&!sound.hasSound("thank")&&isTimeExceededMillis(startMillis, narrDuration+1.0)) {
      scene.ChangeScene(new S3C3V2_2_2());
    }
  }

  @Override public void OnExit() {
    sound.stopNowPlaying();
  }
}
