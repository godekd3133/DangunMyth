SceneManager scene = new SceneManager();
ImageManager image = new ImageManager();
FontManager font = new FontManager();
TimelineManager timelineManager = new TimelineManager();

void setup() {
  frameRate(60);
  size(1280, 720);
  Scene s1c1 = new S1C8();
  scene.Setup(s1c1);

}

void draw() {
  scene.Draw();
}
