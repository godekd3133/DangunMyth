public class S2C4 extends Scene {
  public float SCENE_DURATION = 14.7f;
  private float SCENE_TIME;
  private float animalScale = 0.25f;
  private float utilScale = 0.035f;
  private float tearScale = 0.025f;
  private int bearY = height - 280;
  private int tigerY = height - 305;
  private float handX = 530f;
  private int handY = 470;
  private float handRotate = 0.0f;
  private float handAngle = 0.01f;
  private float handDir = -0.4f;
  private float tearLeftY = height - 280f;
  private float tearRightY = height - 290f;
  private float tearSpeed = 0f;
  private int sessionIndex;
  private float[] sessionDuration = {5f, 10f, 15f};
  private String[] sessionSound = {"narr1", "narr2", "narr3"};
  private String[] sessionText = {"text1", "text2", "text3"};
  private boolean[] isSessionOut;

  public S2C4() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C4/background");
    image.LoadImage("bear1", "Images/S2/C4/bear1");
    image.LoadImage("bear2", "Images/S2/C4/bear2");
    image.LoadImage("tiger", "Images/S2/C4/tiger");
    image.LoadImage("garlic", "Images/S2/C4/garlic");
    image.LoadImage("ssug", "Images/S2/C4/ssug");
    image.LoadImage("basket", "Images/S2/C4/basket");
    image.LoadImage("tear", "Images/S2/C4/tear");
    image.LoadImage("text1", "Images/S2/C4/text1");
    image.LoadImage("text2", "Images/S2/C4/text2");
    image.LoadImage("text3", "Images/S2/C4/text3");
    sound.LoadSound("narr1", "Sounds/S2/C4/narr/narr1.mp3");
    sound.LoadSound("narr2", "Sounds/S2/C4/narr/narr2.mp3");
    sound.LoadSound("narr3", "Sounds/S2/C4/narr/narr3.mp3");
        isSessionOut = new boolean[] {false, false, false};


    animalScale = 0.25f;
    utilScale = 0.035f;
    tearScale = 0.025f;
    bearY = height - 280;
    tigerY = height - 305;
    handX = 530f;
    handY = 470;
    handRotate = 0.0f;
    handAngle = 0.6f;
    handDir = -24f;
    tearLeftY = height - 280f;
    tearRightY = height - 290f;
    tearSpeed = 0f;
    sessionIndex = 0;
    SCENE_TIME = 0f;
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));
    if (sessionIndex==1) {
      image.DrawImageScale("bear"+((millis()/300)%2+1), new PVector(width / 2 - 200, height - 280), new PVector(animalScale, animalScale));
    } else {
      image.DrawImageScale("bear2", new PVector(width / 2 - 200, height - 280), new PVector(animalScale, animalScale));

    }
    image.DrawImageScale("tiger", new PVector(width / 2 + 50, height - 305), new PVector(animalScale, animalScale));
    image.DrawImageScale("basket", new PVector(width / 2 + 360, height - 105), new PVector(0.2f, 0.2f), -0.27f);
    image.DrawImageScale("garlic", new PVector(width - 130, height - 210), new PVector(utilScale, utilScale), -0.3f);
    image.DrawImageScale("garlic", new PVector(width - 180, height - 100), new PVector(utilScale, utilScale), 0.5f);
    image.DrawImageScale("ssug", new PVector(width - 50, height - 170), new PVector(utilScale, utilScale), 0.3f);
    image.DrawImageScale("ssug", new PVector(width - 240, height - 10), new PVector(utilScale, utilScale), -0.5f);

    // tear animation
    if (tearLeftY + tearSpeed > height - 250) tearSpeed = 0;
    tearSpeed += 0.5f;
    image.DrawImageScale("tear", new PVector(width - 510, tearLeftY + tearSpeed), new PVector(tearScale, tearScale));
    image.DrawImageScale("tear", new PVector(width - 440, tearRightY + tearSpeed), new PVector(tearScale, tearScale));

    SCENE_TIME = time.time - enterTime - 3;
    image.DrawImageScale(sessionText[sessionIndex], new PVector(width / 2, height / 2), new PVector(1, 1));
    if (!isSessionOut[sessionIndex]) {
      sound.PlaySound(sessionSound[sessionIndex]);
      isSessionOut[sessionIndex] = !isSessionOut[sessionIndex];
    }
    if (SCENE_TIME > sessionDuration[sessionIndex]) {
      if (sessionDuration.length - 1 > sessionIndex) sessionIndex++;
    }
    /* textSize(128);
    text(SCENE_TIME, 12, 40);
    */
    if (SCENE_TIME > SCENE_DURATION) {
      scene.ChangeScene(new S2C5());
    }
  }

  @Override public void OnExit() {
    sound.stopNowPlaying();
  }
}
