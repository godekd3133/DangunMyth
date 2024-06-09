class Scene {
  enterTime;
  constructor() {
    if (new.target == Scene) {
      throw new TypeError("Cannot construct Scene instances directly");
    }
    this.enterTime = 0;
  }
  OnEnter() { }
  OnDraw() { }
  OnExit() { }
}
