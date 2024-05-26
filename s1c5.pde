public class S1C5 extends Scene {
  TimelineManager timelineManager = new TimelineManager();

  public S1C5() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C5/background");
    image.LoadImage("hwanin", "Images/S1/C5/hawnin");
    image.LoadImage("hwanwoong", "Images/S1/C5/hwanwoong");

    // timelineManager.pushTimeline(new TimelineCallback() {

      //   @Override public void OnDraw(float time) {
        //     image.DrawImageScale("hwanin", new PVector(width * 0.2f, height * 0.8f, 0), new PVector(0.30f, 0.30f, 0));

        //     noStroke();
        //     backgroundAlpha = lerp(255f, 0f, time / 5f);
        //     fill(0, backgroundAlpha);
        //     rect(0, 0, width, height);
        //   }
      // }, 5);

    timelineManager.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float time) {
        float xPos = curvePoint(width * 0.22f, width * 0.2f, width * 0.26f, width * 0.23f, time / 2f);
        float yPos = curvePoint(height * 1.1f, height * 1f, height * 0.95f, height * 1.1f, time / 2f);
        float size = lerp(0.30f, 0.275f, time / 2f);
        image.DrawImageScale("hwanin", new PVector(xPos, yPos, 0), new PVector(size, size, 0));

      }
    }, 2);

    timelineManager.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float time) {
        float xPos = curvePoint(width * 0.28f, width * 0.26f, width * 0.32f, width * 0.30f, time / 2f);
        float yPos = curvePoint(height * 1.1f, height * 0.95f, height * 0.9f, height * 1.1f, time / 2f);
        float size = lerp(0.275f, 0.25f, time / 2f);
        image.DrawImageScale("hwanin", new PVector(xPos, yPos, 0), new PVector(size, size, 0));
      }
    }, 2);

    timelineManager.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float time) {
        float xPos = curvePoint(width * 0.34f, width * 0.32f, width * 0.38f, width * 0.36f, time / 2f);
        float yPos = curvePoint(height * 1.1f, height * 0.9f, height * 0.85f, height * 1.1f, time / 2f);
        float size = lerp(0.25f, 0.225f, time / 2f);
        image.DrawImageScale("hwanin", new PVector(xPos, yPos, 0), new PVector(size, size, 0));
      }
    }, 2);

    timelineManager.setEndCallback(new TimelineManagerEndCallback() {

      @Override public void OnEnd() {
      }
    });
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));
    image.DrawImageScale("hwanwoong", new PVector(width * 0.64f, height * 0.35f, 0), new PVector(0.15f, 0.15f, 0));

    timelineManager.OnDraw();
  }

  @Override public void OnExit() {
  }
}
