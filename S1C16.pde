public class S1C16 extends Scene {
  private float handX = 280f;
  private float handRotate = 0.0f;
  private float handAngle = 0.01f;
  private float handDir = -0.4f;

  public S1C16() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C16/background");
    image.LoadImage("extra_1", "Images/S1/C16/extra_1");
    image.LoadImage("extra_2", "Images/S1/C16/extra_2");
    image.LoadImage("extra_3", "Images/S1/C16/extra_3");
    image.LoadImage("extra_4", "Images/S1/C16/extra_4");
    image.LoadImage("hwanung_arm", "Images/S1/C16/hwanung_arm");
    image.LoadImage("hwanung_face1", "Images/S1/C16/hwanung_face1");
    image.LoadImage("hwanung_face2", "Images/S1/C16/hwanung_face2");
    image.LoadImage("hwanung", "Images/S1/C16/hwanung");

  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1f, 1f));

    image.DrawImageScale("extra_1", new PVector(width / 2 - 550, height / 2 + 200), new PVector(0.1f, 0.1f));
    image.DrawImageScale("extra_2", new PVector(width / 2 - 150, height / 2 + 200), new PVector(0.1f, 0.1f));
    image.DrawImageScale("extra_3", new PVector(width / 2 - 350, height / 2 - 20), new PVector(0.1f, 0.1f));
    image.DrawImageScale("extra_4", new PVector(width / 2 - 50, height / 2 - 30), new PVector(0.1f, 0.1f));

    image.DrawImageScale("hwanung", new PVector(width / 2 + 500, height / 2), new PVector(0.3f, 0.3f));
    if ((millis()/500)%2==0) {
      image.DrawImageScale("hwanung_face1", new PVector(width / 2 + 480, height / 2 - 165), new PVector(0.3f, 0.3f));
    } else {
      image.DrawImageScale("hwanung_face2", new PVector(width / 2 + 480, height / 2 - 165), new PVector(0.3f, 0.3f));
    }
    handX += handDir;
    if (handX < 280f) {
      handDir = 0.4f;
    }
    else if (handX > 300) {
      handDir = -0.4f;
    }
    handRotate += handAngle;
    if (handRotate > 0.1f) {
      handAngle = -0.01f;
    }
    else if (handRotate < -0.1f) {
      handAngle = 0.01f;
    }
    image.DrawImageScale("hwanung_arm", new PVector(width / 2 + handX, height / 2 - 60), new PVector(0.3f, 0.3f), handRotate);

  }

  @Override public void OnExit() {
  }
}
