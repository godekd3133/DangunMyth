@FunctionalInterface public interface TimelineCallback {
  void OnDraw(float time);
}
@FunctionalInterface public interface TimelineManagerEndCallback {
  void OnEnd();
}
public class Timeline {
  public TimelineCallback callback;
  public float endTime;

  public Timeline(TimelineCallback callback, float endTime) {
    this.callback = callback;
    this.endTime = endTime;
  }

  public void OnDraw(float time) {
    if (this.callback != null) {
      this.callback.OnDraw(time);
    }
  }
}
public class TimelineManager {
  public ArrayList<Timeline> timelines = new ArrayList<Timeline>();
  public Timeline currentTimeline;
  private TimeManager time = new TimeManager();
  private TimelineManagerEndCallback endCallback;
  private float totalTime = 0.0f;
  private float currentUseSceneTime = 0.0f;

  public TimelineManager() {
    this.initTimeline();
  }

  public void OnDraw() {
    this.time.OnDraw();
    if (this.timelines.size() > 0) {
      if (this.currentTimeline == null) {
        this.currentTimeline = this.timelines.get(0);
      }
      if (this.time.deltaTime >= this.currentTimeline.endTime) {
        this.timelines.remove(0);
        if (this.timelines.size() > 0) {
          this.currentUseSceneTime += this.currentTimeline.endTime;
          this.currentTimeline = this.timelines.get(0);
        } else {
          this.currentTimeline = null;
        }
      }
      if (this.currentTimeline != null) {
        this.currentTimeline.OnDraw(this.time.deltaTime - this.currentUseSceneTime);
      }
    } else {
      /// TO-DO : SceneManaber 연동하거나 Callback으로 다음 씬 넘어가는 등 처리
      if (this.endCallback != null) {
        this.clear();
        this.endCallback.OnEnd();
      }
    }
  }

  public void initTimeline() {
    this.timelines = new ArrayList<Timeline>();
  }

  public void pushTimeline(TimelineCallback callback, float time) {
    this.totalTime += time;
    this.timelines.add(new Timeline(callback, this.totalTime));
  }

  public void setEndCallback(TimelineManagerEndCallback callback) {
    this.endCallback = callback;
  }

  public void clear() {
    this.currentTimeline = null;
    this.timelines.clear();
  }
}
