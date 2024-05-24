SceneManager scene = new SceneManager();
ImageManager image = new ImageManager();
FontManager font = new FontManager();
TimelineManager timelineManager = new TimelineManager();

void setup() {
  frameRate(60);
  size(1280, 720);
  Scene s1c1 = new S3C3V1_4_3();
  scene.Setup(s1c1);

}

void draw() {
  scene.Draw();
}
