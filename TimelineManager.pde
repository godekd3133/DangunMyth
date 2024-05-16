@FunctionalInterface public interface TimelineCallback {
  void OnDraw();
}
public class Timeline {
  public TimelineCallback callback;
  public float endTime;

  public Timeline(TimelineCallback callback, float endTime) {
    this.callback = callback;
    this.endTime = endTime;
  }

  public void OnDraw() {
    if (this.callback != null) {
      this.callback.OnDraw();
    }
  }
}
public class TimelineManager {
  public ArrayList<Timeline> timelines = new ArrayList<Timeline>();
  public Timeline currentTimeline;
  private TimeManager time = new TimeManager();

  public TimelineManager() {
    this.initTimeline();
  }

  public void OnDraw() {
    this.time.OnDraw();
    if (this.timelines.size() > 0) {
      print(this.time.deltaTime + "\n");
      if (this.currentTimeline == null) {
        this.currentTimeline = this.timelines.get(0);
      }
      if (this.time.deltaTime >= this.currentTimeline.endTime) {
        this.timelines.remove(0);
        if (this.timelines.size() > 0) {
          this.currentTimeline = this.timelines.get(0);
        } else {
          this.currentTimeline = null;
        }
      }
      if (this.currentTimeline != null) {
        this.currentTimeline.OnDraw();
      }
    } else {
      print("TimeLine End\n");
      /// TO-DO : SceneManaber 연동하거나 Callback으로 다음 씬 넘어가는 등 처리
    }
  }

  public void initTimeline() {
    this.timelines = new ArrayList<Timeline>();
  }

  public void pushTimeline(TimelineCallback callback, float time) {
    this.timelines.add(new Timeline(callback, time));
  }

  public void clear() {
    this.currentTimeline = null;
    this.timelines.clear();
  }
}
