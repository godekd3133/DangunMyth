class TimeManager {
  constructor() {
    this.deltaTime = 0;
    this.time = 0;
    this.currentTime = millis();
    this.lastTime = millis();
  }

  OnDraw() {
    this.lastTime = this.currentTime;
    this.currentTime = millis();
    this.deltaTime = (this.currentTime - this.lastTime) / 1000;
    this.time += this.deltaTime;
  }
}
