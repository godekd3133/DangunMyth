SceneManager scene = new SceneManager();
ImageManager image = new ImageManager();
FontManager font = new FontManager();
TimeManager time = new TimeManager();
TimelineManager timelineManager = new TimelineManager();

void setup() {
  frameRate(60);
  size(1280, 720);
  S3C3V1_3_2 s1c1 = new S3C3V1_3_2();
  scene.Setup(s1c1);

}

void draw() {
  time.OnDraw();
  scene.Draw();
}
