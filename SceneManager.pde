public class SceneManager {

  public SceneManager() {
  }
  public Scene currentScene;
  public Scene nextScene;
  public Scene firstScene;
  private float backgroundAlpha;

  private boolean fadeIn = false;
  private boolean fadeOut = false;

  float fadeSpeed = 360f;
  public boolean looping = true;

  public void Setup(Scene initialScene) {
    currentScene = null;
    nextScene = null;

    if (initialScene != null) {
      fadeIn = true;
      fadeOut = false;
      backgroundAlpha = 255f;
      firstScene = initialScene;
      initialScene.enterTime = time.time;
      initialScene.OnEnter();
    }
  }

  public void Draw() {
    if (currentScene!= null) currentScene.OnDraw();
    if (firstScene != null && currentScene == null && frameCount > 50) {
      firstScene.OnDraw();
      if (backgroundAlpha > 0) {
        backgroundAlpha -= time.deltaTime * fadeSpeed;
      } else {
        backgroundAlpha = 0;
        fadeIn = false;
        currentScene = firstScene;
        firstScene = null;
        nextScene = null;
      }
    }
    if (nextScene != null && currentScene != null) {
      if (fadeOut == true && fadeIn == false) {
        backgroundAlpha += time.deltaTime * fadeSpeed;

        if (backgroundAlpha >= 255f) {
          fadeIn= true;
          backgroundAlpha = 255f;
          fadeOut = false;
          if (currentScene != null) {
            currentScene.OnExit();
          }
          currentScene = nextScene;
          image.ResetImages();
          currentScene.enterTime = time.time;
          currentScene.OnEnter();

        }
      }
      if (fadeIn == true && fadeOut == false) {
        if (backgroundAlpha > 0f) {
          backgroundAlpha -= time.deltaTime * fadeSpeed;
        } else {
          backgroundAlpha = 0f;
          fadeIn = false;
          firstScene = null;
          nextScene = null;
        }
      }
    }
    fill(0, backgroundAlpha);
    rect(0, 0, width, height);

  }

  public void ChangeScene(Scene scene) {
    if (QAMode == true) {
      if (nextScene == null) looping= false;
      return;
    }
    if (nextScene != null || firstScene != null) {
      return;
    }
    backgroundAlpha = 0f;
    fadeIn = false;
    fadeOut = true;
    nextScene = scene;
    looping = true;
  }

  public void ChangeSceneManually(Scene scene) {
    if (nextScene != null || firstScene != null) return;
    backgroundAlpha = 0f;
    fadeIn = false;
    fadeOut = true;
    nextScene = scene;
    looping = true;
  }
}
