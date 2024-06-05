public class S1C19_1 extends Scene {
  public float SCENE_DURATION = 10f;
  private float tigerX = width - 200;
  private float tigerY = height - 150;
  private float bearX = width - 450;
  private float bearY = height - 150;

  private boolean narrFlag = false;
  private float narrDuration = 4.5f;

  private boolean animalVoiceFlag = false;

  private String[] tigerRountine = {
    "tiger1", "tiger2", "tiger3", "tiger2", "tiger1" }
  ;
  private String[] bearRountine = {
    "bear1", "bear2", "bear3", "bear2", "bear1" }
  ;

  public S1C19_1() {
  }

  @Override public void OnEnter() {
    tigerX = width - 200;
    tigerY = height - 350;
    bearX = width - 400;
    bearY = height - 350;

    animalVoiceFlag = false;
    narrFlag = false;

    image.LoadImage("background", "Images/S1/C19/background0");
    image.LoadImage("hwangwoong", "Images/S1/C19/V1/hwanwoong");

    image.LoadImage("bear1", "Images/S1/C19/V1/bear1");
    image.LoadImage("bear2", "Images/S1/C19/V1/bear2");
    image.LoadImage("bear3", "Images/S1/C19/V1/bear3");

    image.LoadImage("tiger1", "Images/S1/C19/V1/tiger1");
    image.LoadImage("tiger2", "Images/S1/C19/V1/tiger2");
    image.LoadImage("tiger3", "Images/S1/C19/V1/tiger3");

    image.LoadImage("C19-1-Text", "Images/S1/C19/C19-1-Text");

    sound.LoadSound("narr", "Sounds/S1/C19-1/narr.mp3");
    sound.LoadSound("Tiger", "Sounds/S1/C19-1/Tiger.mp3");
    sound.LoadSound("Bear", "Sounds/S1/C19-1/Bear.mp3");

  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    image.DrawImage("C19-1-Text", new PVector(width / 2, height / 2, 0));
    image.DrawImageScale("hwangwoong", new PVector(320, height - 280, 0), new PVector(0.25f, 0.25f, 0));

    if (bearX > width / 2) {
      tigerX -= 40f*time.deltaTime;
      bearX -= 40f*time.deltaTime;
      image.DrawImageScale(tigerRountine[((millis()/100)%5)], new PVector(tigerX, tigerY, 0), new PVector(0.15f, 0.15f, 0));
      image.DrawImageScale(bearRountine[((millis()/100)%5)], new PVector(bearX, bearY, 0), new PVector(0.15f, 0.15f, 0));
    } else {
      image.DrawImageScale(tigerRountine[0], new PVector(tigerX, tigerY, 0), new PVector(0.15f, 0.15f, 0));
      image.DrawImageScale(bearRountine[1], new PVector(bearX, bearY, 0), new PVector(0.15f, 0.15f, 0));
    }
    if (!narrFlag) {
      narrFlag = true;
      sound.PlaySound("narr");
    }
    if (time.time - enterTime >= narrDuration) {
      if (!animalVoiceFlag) {
        animalVoiceFlag = true;
        sound.PlaySound("Tiger");
        sound.PlaySound("Bear");

      }
    }
    // if (time.time - enterTime >= SCENE_DURATION) {
      //   scene.ChangeScene(new S1C19_2());
      // }
  }

  @Override public void OnExit() {
  }
}
