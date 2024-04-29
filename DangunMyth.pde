SceneManager sceneManager = new SceneManager();

void draw() {
    sceneManager.Draw();
}

void setup() {
    //frameRate(1);
    TestScene testScene = new TestScene();
    sceneManager.Setup(testScene);
}
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


public abstract class Scene {
    public Scene() {}
    public abstract void OnEnter();
    public abstract void OnDraw();
    public abstract void OnExit();
} 





public static class Utilities {
    static void DrawImage(PImage img, int x, int y) {
    }
    static void DrawFont(PFont font, String text, int x, int y) {
    }
    
    static void DrawTest() {
        print("das");
    }   
}
