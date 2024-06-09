class Timeline {
  constructor(callback, endTime) {
    this.callback = callback;
    this.endTime = endTime;
  }

  OnDraw(time) {
    if (this.callback) {
      this.callback(time);
    }
  }
}
class TimelineManager {
  constructor() {
    this.timelines = [];
    this.currentTimeline = null;
    this.endCallback = null;
    this.totalTime = 0.0;
    this.currentUseSceneTime = 0.0;
    this.currentTime = millis() / 1000;
  }

  OnDraw() {
    if (this.timelines.length > 0) {
      if (this.currentTimeline === null) {
        this.currentTimeline = this.timelines[0];
        this.currentTime = millis() / 1000;
      } else {
        let elapsedTime = millis() / 1000 - this.currentTime;

        if (
          millis() / 1000 - this.currentTime >=
          this.currentTimeline.endTime
        ) {
          this.timelines.shift(); // Remove the first timeline
          if (this.timelines.length > 0) {
            this.currentUseSceneTime = this.currentTimeline.endTime;
            this.currentTimeline = this.timelines[0];
            this.currentTime = millis() / 1000;
          } else {
            this.currentTimeline = null;
          }
        }
      }
      if (this.currentTimeline !== null) {
        this.currentTimeline.OnDraw(millis() / 1000 - this.currentTime);
      }
    } else {
      if (this.endCallback) {
        this.endCallback();
        this.clear();
      }
    }
  }

  initTimeline() {
    this.timelines = [];
  }

  pushTimeline(callback, time) {
    this.totalTime += time;
    this.timelines.push(new Timeline(callback, time));
  }

  setEndCallback(callback) {
    this.endCallback = callback;
  }

  clear() {
    this.currentTimeline = null;
    this.timelines = [];
    this.endCallback = null;
  }
}
