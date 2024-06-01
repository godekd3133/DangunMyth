public class S1C1 extends Scene {
  public float SCENE_DURATION = 22f; // narr. 2 + 4 + 7 sec

  private float cloudX;
  private float zoomIn;

  private int sessionIndex;
  private float[] sessionDuration = {
    8f, 15f, 21f, }
  ;
  private String[] sessionSound = {
    "narr1", "narr2", "narr3"}
  ;
  private String[] sessionText = {
    "text1", "text1", "text2"}
  ;
  private boolean[] isSessionOut;

  public S1C1() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C1/background");
    image.LoadImage("cloud01", "Images/S1/C1/cloud_01");
    image.LoadImage("cloud02", "Images/S1/C1/cloud_02");
    image.LoadImage("cloud03", "Images/S1/C1/cloud_03");
    sound.LoadSound("intro", "Sounds/intro.wav");
    sound.PlaySound("intro");
    image.LoadImage("text1", "Images/S1/C1/text_01");
    image.LoadImage("text2", "Images/S1/C1/text_02");
    sound.LoadSound("narr1", "Sounds/S1/C1/narr/narr1.mp3");
    sound.LoadSound("narr2", "Sounds/S1/C1/narr/narr2.mp3");
    sound.LoadSound("narr3", "Sounds/S1/C1/narr/narr3.mp3");
    isSessionOut = new boolean[] {
      false, false, false,}
    ;

    cloudX = 0f;
    zoomIn = 1f;
    enterTime = time.time;
    sessionIndex = 0;
  }

  @Override public void OnDraw() {
    PVector scale = new PVector(zoomIn, zoomIn, 0);
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), scale);
    image.DrawImageScale("cloud01", new PVector(width / 2 - cloudX, height / 2, 0), scale);
    image.DrawImageScale("cloud02", new PVector(width / 2 - cloudX, height / 2, 0), scale);
    image.DrawImageScale("cloud03", new PVector(width / 2 + cloudX, height / 2, 0), scale);

    if (time.time- enterTime > 0.25f) {
      cloudX += 100f * time.deltaTime;
    }
    if (time.time- enterTime > 0.25f &&zoomIn <2f) {
      zoomIn += 0.1f * time.deltaTime;
    }
    image.DrawImage(sessionText[sessionIndex], new PVector(width / 2, height / 2));
    if (!isSessionOut[sessionIndex]) {
      sound.PlaySound(sessionSound[sessionIndex]);
      isSessionOut[sessionIndex] = !isSessionOut[sessionIndex];
    }
    if (time.time - enterTime > sessionDuration[sessionIndex]) {
      if (sessionDuration.length - 1 > sessionIndex) sessionIndex++;
    }
    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S1C3());
    }
  }

  @Override public void OnExit() {
    sound.StopSound("intro");
  }
}
