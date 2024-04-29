SceneManager sceneManager = new SceneManager();

public  class SceneManager  {
    
    public SceneManager() { 
    }
    
    public Scene currentScene;
    public Scene  nextScene;
    
    public void Setup(Scene firstScene) {
    }
    
    public void Draw() {
        if (currentScene!= null)
            currentScene.OnDraw();
        if (nextScene != null) {
            currentScene = nextScene;
            currentScene.OnExit();
            currentScene.OnEnter();
            nextScene = null;
        }
    }
    
    public void ChangeScene(Scene scene) {
        nextScene = scene;
    }
}
void setup() {
    //frameRate(1);
    size(800, 600);
    TestScene testScene = new TestScene();
    sceneManager.Setup(testScene);
}
void draw() {
    sceneManager.Draw();
}






