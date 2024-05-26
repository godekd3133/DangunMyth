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
  private TimelineManagerEndCallback endCallback;
  private float totalTime = 0.0f;
  private float currentUseSceneTime = 0.0f;
  private float currentTime;

  public TimelineManager() {
    this.initTimeline();
    currentTime= time.time;
  }

  public void OnDraw() {
    if (this.timelines.size() > 0) {
      if (this.currentTimeline == null) {
        this.currentTimeline = this.timelines.get(0);
        currentTime = time.time;
      } else {
        float elapsedTime = time.time - currentTime;

        if (time.time -currentTime >= this.currentTimeline.endTime) {
          this.timelines.remove(0);
          if (this.timelines.size() > 0) {
            this.currentUseSceneTime = this.currentTimeline.endTime;
            this.currentTimeline = this.timelines.get(0);
            currentTime = time.time;
          } else {
            this.currentTimeline = null;
          }
        }
      }
      if (this.currentTimeline != null) {
        this.currentTimeline.OnDraw(time.time -currentTime);
      }
    } else {
      if (this.endCallback != null) {
        this.endCallback.OnEnd();
        this.clear();
      }
    }
  }

  public void initTimeline() {
    this.timelines = new ArrayList<Timeline>();
  }

  public void pushTimeline(TimelineCallback callback, float time) {
    this.totalTime += time;
    this.timelines.add(new Timeline(callback, time));
  }

  public void setEndCallback(TimelineManagerEndCallback callback) {
    this.endCallback = callback;
  }

  public void clear() {
    this.currentTimeline = null;
    this.timelines.clear();
    this.endCallback=null;
  }
}
