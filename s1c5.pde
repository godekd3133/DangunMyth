public class S1C5 extends Scene {
  private float backgroundAlpha;
  TimelineManager timelineManager = new TimelineManager();

  public S1C5() {
    backgroundAlpha = 255.0f;
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C5/background");
    image.LoadImage("hwanin", "Images/S1/C5/hawnin");

    timelineManager.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float time) {
        noStroke();
        backgroundAlpha = lerp(255f, 0f, time / 10f);
        fill(0, backgroundAlpha);
        rect(0, 0, width, height);
      }
    }, 10);

    timelineManager.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float time) {
        noStroke();
        backgroundAlpha = lerp(0f, 255f, time / 5f);
        fill(0, backgroundAlpha);
        rect(0, 0, width, height);
      }
    }, 5);

    timelineManager.setEndCallback(new TimelineManagerEndCallback() {

      @Override public void OnEnd() {
        S1C1 s1c1 = new S1C1();
        scene.Setup(s1c1);
      }
    });
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));
    image.DrawImageScale("hwanin", new PVector(width / 2, height / 2, 0), new PVector(0.25f, 0.25f, 0));
    timelineManager.OnDraw();
  }

  @Override public void OnExit() {
  }
}
