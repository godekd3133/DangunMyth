SceneManager scene = new SceneManager();
ImageManager image = new ImageManager();
TimelineManager timelineManager = new TimelineManager();

void setup() {
  frameRate(60);
  size(1280, 720);
  TestScene testScene = new TestScene();
  scene.Setup(testScene);

  timelineManager.pushTimeline(new TimelineCallback() {

    @Override public void OnDraw() {
      print("a");
    }
  }, 5);

  timelineManager.pushTimeline(new TimelineCallback() {

    @Override public void OnDraw() {
      print("b");
    }
  }, 15);

  timelineManager.pushTimeline(new TimelineCallback() {

    @Override public void OnDraw() {
      print("c");
    }
  }, 30);

}

void draw() {
  scene.Draw();
  timelineManager.OnDraw();
}
