class TimeManager {
  deltaTime;
  time;
  currentTime = 0;
  lastTime = 0;
  constructor() {
    this.lastTime = millis();
    this.time = 0;
  }
  OnDraw() {
    //get deltaTime on processing
    this.lastTime = this.currentTime;
    this.currentTime = millis();
    this.deltaTime = (this.currentTime - this.lastTime) / 1000;
    this.time += this.deltaTime;
  }
}
