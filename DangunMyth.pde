SceneManager scene = new SceneManager();
ImageManager image = new ImageManager();
FontManager font = new FontManager();
TimelineManager timelineManager = new TimelineManager();

void setup() {
  frameRate(60);
  size(1280, 720);
  S1C5 s1c1 = new S1C5();
  scene.Setup(s1c1);

}

void draw() {
  scene.Draw();
}
