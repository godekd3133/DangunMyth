public class SceneManager {

  public SceneManager() {
  }
  public Scene currentScene;
  public Scene nextScene;

  public void Setup(Scene firstScene) {
    if (firstScene != null) {
      currentScene = firstScene;
      currentScene.OnEnter();
    }
  }

  public void Draw() {
    if (currentScene!= null) currentScene.OnDraw();
    if (nextScene != null) {
      currentScene.OnExit();
      currentScene = nextScene;
      currentScene.OnEnter();
      image.ResetImages();
      nextScene = null;
    }
  }

  public void ChangeScene(Scene scene) {
    nextScene = scene;
  }
}
