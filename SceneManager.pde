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
      image.ResetImages(); //근데 Image Map을 초기화함 그래서 이미지 로드가 안됌
      currentScene.OnEnter(); //여기에 LoadImage가 있음
      nextScene = null;
    }
  }

  public void ChangeScene(Scene scene) {
    nextScene = scene;
  }
}
