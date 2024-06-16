class SceneManager {
  constructor() {
    this.currentScene = null;
    this.nextScene = null;
    this.firstScene = null;
    this.creditScene = null;
    this.backgroundAlpha = 0;
    this.fadeIn = false;
    this.fadeOut = false;
    this.fadeSpeed = 360;
    this.looping = true;
  }

  CreditScene() {
    this.ChangeScene(this.creditScene);
  }

  SetCreditScene(scene) {
    this.creditScene = scene;
  }

  Setup(initialScene) {
    this.currentScene = null;
    this.nextScene = null;

    if (initialScene != null) {
      this.fadeIn = true;
      this.fadeOut = false;
      this.backgroundAlpha = 255;
      this.firstScene = initialScene;
      initialScene.enterTime = millis() / 1000;
      initialScene.OnEnter();
    }
  }

  Draw() {
    if (this.currentScene != null) {
      this.currentScene.OnDraw();
    }

    if (
      this.firstScene != null &&
      this.currentScene == null &&
      frameCount > 50
    ) {
      this.firstScene.OnDraw();
      if (this.backgroundAlpha > 0) {
        this.backgroundAlpha -= (deltaTime / 1000) * this.fadeSpeed;
      } else {
        this.backgroundAlpha = 0;
        this.fadeIn = false;
        this.currentScene = this.firstScene;
        this.firstScene = null;
        this.nextScene = null;
      }
    }

    if (this.nextScene != null && this.currentScene != null) {
      if (this.fadeOut == true && this.fadeIn == false) {
        this.backgroundAlpha += (deltaTime / 1000) * this.fadeSpeed;
        if (this.backgroundAlpha >= 255) {
          this.fadeIn = true;
          this.backgroundAlpha = 255;
          this.fadeOut = false;
          if (this.currentScene != null) {
						soundManager.StopAllSound();
            this.currentScene.OnExit();
          }
          this.currentScene = this.nextScene;
          // imageManager.ResetImages();
          // soundManager.ResetSounds();
          this.currentScene.enterTime = millis() / 1000;
          this.currentScene.OnEnter();
        }
      }
      if (this.fadeIn == true && this.fadeOut == false) {
        if (this.backgroundAlpha > 0) {
          this.backgroundAlpha -= (deltaTime / 1000) * this.fadeSpeed;
        } else {
          this.backgroundAlpha = 0;
          this.fadeIn = false;
          this.firstScene = null;
          this.nextScene = null;
        }
      }
    }

    fill(0, this.backgroundAlpha);
    rect(0, 0, width, height);
  }

  ChangeScene(scene) {
    if (QAMode == true) {
      if (this.nextScene == null) this.looping = false;
      return;
    }
    if (this.nextScene != null || this.firstScene != null) {
      return;
    }
    this.backgroundAlpha = 0;
    this.fadeIn = false;
    this.fadeOut = true;
    this.nextScene = scene;
    this.looping = true;
  }

  ChangeSceneManually(scene) {
    if (this.nextScene != null || this.firstScene != null) return;
    this.backgroundAlpha = 0;
    this.fadeIn = false;
    this.fadeOut = true;
    this.nextScene = scene;
    this.looping = true;
  }
}
