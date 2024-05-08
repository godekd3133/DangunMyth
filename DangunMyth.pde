SceneManager scene = new SceneManager();
ImageManager image = new ImageManager();
TimeManager time = new TimeManager();

void setup() {
  frameRate(60);
  size(1280, 720);
  TestScene testScene = new TestScene();
  scene.Setup(testScene);

}

void draw() {
  time.OnDraw();
  scene.Draw();
}
