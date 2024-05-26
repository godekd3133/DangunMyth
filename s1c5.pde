public class S1C5 extends Scene {
  TimelineManager timeline = new TimelineManager();

  float xPos;
  float yPos;
  float size;

  public S1C5() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C5/background");
    image.LoadImage("hwanin", "Images/S1/C5/hawnin");
    image.LoadImage("hwanwoong", "Images/S1/C5/hwanwoong");
    timeline = new TimelineManager();

    timeline.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float elapsedTime) {
        xPos = curvePoint(width * 0.24f, width * 0.2f, width * 0.32f, width * 0.28f, elapsedTime / 3f);
        yPos = curvePoint(height * 0.95f, height * 0.8f, height * 0.7f, height * 0.55f, elapsedTime / 3f);

        size = lerp(0.30f, 0.25f, elapsedTime / 3f);
      }
    }, 3);

    timeline.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float elapsedTime) {
        xPos = curvePoint(width * 0.36f, width * 0.32f, width * 0.44f, width * 0.4f, elapsedTime / 3f);
        yPos = curvePoint(height * 0.85f, height * 0.7f, height * 0.6f, height * 0.45f, elapsedTime / 3f);
        size = lerp(0.25f, 0.20f, elapsedTime/3f);
      }
    }, 3f);

    timeline.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float elapsedTime) {
        xPos = curvePoint(width * 0.36f, width * 0.32f, width * 0.44f, width * 0.4f,1f);
        yPos = curvePoint(height * 0.85f, height * 0.7f, height * 0.6f, height * 0.45f, 1f);
        size = lerp(0.25f, 0.20f, 1f);
      }
    }, 3f);

    timeline.setEndCallback(new TimelineManagerEndCallback() {

      @Override public void OnEnd() {
        scene.ChangeScene(new S1C6_1());
      }
    });
  }

  @Override public void OnDraw() {
    timeline.OnDraw();
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));
    image.DrawImageScale("hwanwoong", new PVector(width * 0.64f, height * 0.35f, 0), new PVector(0.15f, 0.15f, 0));
    image.DrawImageScale("hwanin", new PVector(xPos, yPos, 0), new PVector(size, size, 0));
  }

  @Override public void OnExit() {
  }
}
