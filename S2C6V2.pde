public class S2C6V2 extends Scene {
  private boolean showButton = false;
  public float SCENE_DURATION = 11.3f;
  private float SCENE_TIME;

  private float bearArmX = width / 2 + 200;
  private float bearArmRotate = 0.0f;
  private float bearArmAngle = 0.01f;
  private float bearArmDir = -0.4f;

  private float tigerArmX = width / 2 - 200;
  private float tigerArmRotate = 0.0f;
  private float tigerArmAngle = 0.01f;
  private float tigerArmDir = 0.4f;
  private float bearArmY = height / 2 + 200;
  private float tigerArmY = height / 2 + 200;
  private float basketY = height / 2 + 190;

  private int sessionIndex;
  private float[] sessionDuration = {3f, 7f, 11.3f};
  private String[] sessionSound = {"narr1", "narr2", "narr3"};
  private String[] sessionText = {"text1", "text2", "text3"};
  private boolean[] isSessionOut;

  public S2C6V2() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C6/V2/background");
    image.LoadImage("bear_arm", "Images/S2/C6/V2/bear_arm");
    image.LoadImage("tiger_arm", "Images/S2/C6/V2/tiger_arm");
    image.LoadImage("chars", "Images/S2/C6/V2/chars");
    image.LoadImage("basket", "Images/S2/C6/V2/basket");
    image.LoadImage("text1", "Images/S2/C6/V2/text1");
    image.LoadImage("text2", "Images/S2/C6/V2/text2");
    image.LoadImage("text3", "Images/S2/C6/V2/text3");
    sound.LoadSound("narr1", "Sounds/S2/C6/V2/narr/narr1.mp3");
    sound.LoadSound("narr2", "Sounds/S2/C6/V2/narr/narr2.mp3");
    sound.LoadSound("narr3", "Sounds/S2/C6/V2/narr/narr3.mp3");
    isSessionOut = new boolean[] {false, false, false};
    SCENE_TIME = 0f;

  }

  @Override public void OnDraw() {
    // 시간에 따라 y 좌표를 업데이트합니다.
    bearArmY = height / 2 + 220 + sin(millis() / 1000.0f) * 20;
    tigerArmY = height / 2 + 220 + sin(millis() / 1000.0f) * 20;
    basketY = height / 2 + 210 + sin(millis() / 1000.0f) * 20;

    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));

    image.DrawImageScale("chars", new PVector(width / 2, height / 2 + 150), new PVector(0.4f, 0.4f));
    image.DrawImageScale("basket", new PVector(width / 2, basketY), new PVector(0.4f, 0.4f));

    image.DrawImageScale("bear_arm", new PVector(bearArmX, bearArmY), new PVector(0.4f, 0.4f), bearArmRotate);
    image.DrawImageScale("tiger_arm", new PVector(tigerArmX, tigerArmY), new PVector(0.4f, 0.4f), tigerArmRotate);

    SCENE_TIME = time.time - enterTime - 3;
    if (sessionIndex == 0) image.DrawImageScale(sessionText[sessionIndex], new PVector(width / 2, height / 2 - 60), new PVector(1, 1));
    else image.DrawImageScale(sessionText[sessionIndex], new PVector(width / 2, height / 2), new PVector(1, 1));
    if (!isSessionOut[sessionIndex]) {
      sound.PlaySound(sessionSound[sessionIndex]);
      isSessionOut[sessionIndex] = !isSessionOut[sessionIndex];
    }
    if (SCENE_TIME > sessionDuration[sessionIndex]) {
      if (sessionDuration.length - 1 > sessionIndex) sessionIndex++;
    }

    if (SCENE_TIME > SCENE_DURATION) {
      scene.ChangeScene(new S2C7());
    }
  }

  @Override public void OnExit() {
  }
}
