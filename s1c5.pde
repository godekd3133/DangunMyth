public class S1C5 extends Scene {
  private float backgroundAlpha;
  TimelineManager timelineManager = new TimelineManager();

  public S1C5() {
    backgroundAlpha = 255.0f;
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C5/background");
    image.LoadImage("hwanin", "Images/S1/C5/hawnin");
    image.LoadImage("hwanwoong", "Images/S1/C5/hwanwoong");

    timelineManager.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float time) {
        image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));
        image.DrawImageScale("hwanin", new PVector(width * 0.2f, height * 0.8f, 0), new PVector(0.30f, 0.30f, 0));
        image.DrawImageScale("hwanwoong", new PVector(width * 0.64f, height * 0.35f, 0), new PVector(0.15f, 0.15f, 0));

        noStroke();
        backgroundAlpha = lerp(255f, 0f, time / 5f);
        fill(0, backgroundAlpha);
        rect(0, 0, width, height);
      }
    }, 5);

    timelineManager.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float time) {
        image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));
        image.DrawImageScale("hwanwoong", new PVector(width * 0.64f, height * 0.35f, 0), new PVector(0.15f, 0.15f, 0));

        float xPos = curvePoint(width * 0.24f, width * 0.2f, width * 0.32f, width * 0.28f, time / 3f);
        float yPos = curvePoint(height * 0.95f, height * 0.8f, height * 0.7f, height * 0.55f, time / 3f);
        float size = lerp(0.30f, 0.25f, time / 3f);
        image.DrawImageScale("hwanin", new PVector(xPos, yPos, 0), new PVector(size, size, 0));

      }
    }, 3);

    timelineManager.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float time) {
        image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));
        image.DrawImageScale("hwanwoong", new PVector(width * 0.64f, height * 0.35f, 0), new PVector(0.15f, 0.15f, 0));

        float xPos = curvePoint(width * 0.36f, width * 0.32f, width * 0.44f, width * 0.4f, time / 3f);
        float yPos = curvePoint(height * 0.85f, height * 0.7f, height * 0.6f, height * 0.45f, time / 3f);
        float size = lerp(0.25f, 0.20f, time / 3f);
        image.DrawImageScale("hwanin", new PVector(xPos, yPos, 0), new PVector(size, size, 0));
      }
    }, 3);

    timelineManager.setEndCallback(new TimelineManagerEndCallback() {

      @Override public void OnEnd() {
        // S1C1 s1c1 = new S1C1();
        // scene.Setup(s1c1);
      }
    });
  }

  @Override public void OnDraw() {
    timelineManager.OnDraw();
  }

  @Override public void OnExit() {
  }
}
