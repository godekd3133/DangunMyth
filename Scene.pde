class Scene {

  constructor() {
    if (new.target === Scene) {
      throw new TypeError("Cannot construct Scene instances directly");
    }
    this.enterTime = 0;
  }

  OnEnter() {
    throw new Error("OnEnter method must be implemented");
  }

  OnDraw() {
    throw new Error("OnDraw method must be implemented");
  }

  OnExit() {
    throw new Error("OnExit method must be implemented");
  }
}
