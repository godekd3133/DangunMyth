SceneManager scene = new SceneManager();
ImageManager image = new ImageManager();

void setup() {
    frameRate(60);
    size(1280, 720);
    TestScene testScene = new TestScene();
    scene.Setup(testScene);
}
void draw() {
    scene.Draw();
}






