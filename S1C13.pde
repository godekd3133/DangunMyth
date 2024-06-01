public class S1C13 extends Scene {
  private final static String IMG_PREFIX = "Images/S1/C13/";
  private final static String SOUND_PREFIX = "Sounds/S1/C13/narr/";
  private String[] backgroundImages = {
    "background1", "background2", "background3", "background4", "background5", "background6", "background7" }
  ;
  private float[] intervals = {
    0.0, 0.5, 1.0, 1.3, 1.6, 1.9, 2.1
  }
  ;

  private int startMillis;

  private float narrDuration;

  @Override public void OnEnter() {
    for(String backgroundImage : backgroundImages) {
      image.LoadImage(backgroundImage, IMG_PREFIX+backgroundImage);
      startMillis=millis();
    }
  }

  @Override public void OnDraw() {
    for(int i = 1;
    i < intervals.length;
    i++) {
      if (!isTimeExceededMillis(startMillis, intervals[i]) && isTimeExceededMillis(startMillis, intervals[i - 1])) {
        image.DrawImage("background" + i, new PVector(width / 2, height / 2));
        break;
      } else {
image.DrawImage("background7", new PVector(width / 2, height / 2));

      }
    }
    if (isTimeExceededMillis(startMillis, 6.0)) {
      scene.ChangeScene(new S1C14());
    }
  }

  @Override public void OnExit() {
  }
}
