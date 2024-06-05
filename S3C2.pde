public class S3C2 extends Scene {
  private float thinkScale = 0.3f;
  private int thinkY = 230;
  private int thinkLeftX = 225;
  private int thinkRightX = width - 225;
  private int selectOption = 0; // 0 : None / 1 : Left / 2 : Right
  private boolean isEffectOut;

  public S3C2() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S3/C2/background");
    image.LoadImage("body", "Images/S3/C2/body");
    image.LoadImage("eye_black", "Images/S3/C2/eye_black");
    image.LoadImage("eye_white", "Images/S3/C2/eye_white");
    image.LoadImage("left", "Images/S3/C2/left");
    image.LoadImage("right", "Images/S3/C2/right");
    sound.LoadSound("effect", "Sounds/S3/C2/effect/effect.wav");
    image.LoadImage("Button1", "Images/S3/C2/Button1");
    image.LoadImage("Button2", "Images/S3/C2/Button2");
    isEffectOut = false;

  }

  @Override public void OnDraw() {
    // init select option
    selectOption = 0;

    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));
    image.DrawImageScale("eye_white", new PVector(width / 2 - 10, height - 240), new PVector(0.2f, 0.2f));
    image.DrawImageScale("body", new PVector(width / 2, height - 200), new PVector(0.23f, 0.23f));

    // Mouse animation
    if (mouseX <= width / 2 - 200 && mouseY <= height / 2) {
      selectOption = 1;
      image.DrawImageScale("left", new PVector(thinkLeftX + 60, thinkY + 50), new PVector(thinkScale + 0.1f, thinkScale + 0.1f));
      image.DrawImageScale("eye_black", new PVector(width / 2 - 15, height - 255), new PVector(0.23f, 0.23f));
      image.DrawImageScale("Button1", new PVector(width / 2, height / 2), new PVector(1, 1));

      if (mousePressed) {
        scene.ChangeScene(new S3C3V1_1());
        if (!isEffectOut) {
          sound.PlaySound("effect");
          isEffectOut = !isEffectOut;
        }
      }
    } else {
      image.DrawImageScale("left", new PVector(thinkLeftX, thinkY), new PVector(thinkScale, thinkScale));
    }
    if (mouseX >= width / 2 + 200 && mouseY <= height / 2) {
      selectOption = 2;
      image.DrawImageScale("right", new PVector(thinkRightX - 60, thinkY + 50), new PVector(thinkScale + 0.1f, thinkScale + 0.1f));
      image.DrawImageScale("eye_black", new PVector(width / 2 - 9, height - 255), new PVector(0.23f, 0.23f));
      image.DrawImageScale("Button2", new PVector(width / 2, height / 2), new PVector(1, 1));

      if (mousePressed) {
        scene.ChangeScene(new S3C3V2());
        if (!isEffectOut) {
          sound.PlaySound("effect");
          isEffectOut = !isEffectOut;
        }
      }
    } else {
      image.DrawImageScale("right", new PVector(thinkRightX, thinkY), new PVector(thinkScale, thinkScale));
    }
    if (selectOption == 0) image.DrawImageScale("eye_black", new PVector(width / 2 - 12, height - 245), new PVector(0.23f, 0.23f));
  }

  @Override public void OnExit() {
  }
}
