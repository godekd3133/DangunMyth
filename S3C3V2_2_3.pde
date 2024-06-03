public class S3C3V2_2_3 extends Scene {
  private final static String PREFIX = "Images/S3/C3/V2/_2/_3/";
  private final static String SOUND_PREFIX = "Sounds/S3/C3/V2/_2/_3/narr/";

  private float SCENE_DURATION = 7f;

  public S3C3V2_2_3() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", PREFIX + "background");
    image.LoadImage("text", PREFIX + "text");
    image.LoadImage("dangun", PREFIX + "dangun");
    sound.LoadSound("narr", SOUND_PREFIX+"narr.mp3");
    sound.PlaySound("narr");
    enterTime = time.time;
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    image.DrawImageScale("dangun", new PVector(width / 2, height / 2 + 60, 0), new PVector(0.22, 0.22, 0));
    image.DrawImage("text", new PVector(width / 2, height / 2, 0));

    if (time.time - enterTime > SCENE_DURATION) {
      scene.CreditScene();
    }
  }

  @Override public void OnExit() {
    sound.stopNowPlaying();
  }
}
