import processing.sound.*;
//import processing.javafx.*;
SceneManager scene = new SceneManager();
ImageManager image = new ImageManager();
FontManager font = new FontManager();
TimeManager time = new TimeManager();
SoundManager sound = new SoundManager();
TimelineManager timeline = new TimelineManager();
//Scene List
ArrayList<Scene> sceneList = new ArrayList<Scene>();

void setup() {
  //씬들 순서대로 추가
  sceneList.add(new S1C1());
  //sceneList.add(new S1C2()); // S1C3에 합쳐져있어서 나올필요 없음.
  sceneList.add(new S1C3());
  sceneList.add(new S1C4());
  sceneList.add(new S1C5());
  sceneList.add(new S1C6_1());
  sceneList.add(new S1C6_2());
  sceneList.add(new S1C7());
  sceneList.add(new S1C8());
  sceneList.add(new S1C9());
  sceneList.add(new S1C11());

  frameRate(60);
  noStroke();
  //size(1280, 720,FX2D);
  size(1280, 720,P2D);
  S1C1 s1c1 = new S1C1();
  //scene.Setup(s1c1);
  scene.Setup(sceneList.get(3));

}

void draw() {
  background(255);
  fill(0);
  //print(1f/time.deltaTime + "\n");
  time.OnDraw();
  timeline.OnDraw();
  scene.Draw();

  //오른쪽 키 누르면 현재씬의 다음씬으로, 왼쪽키 누르면 현재씬의 이전씬으로

}

void keyPressed() {
  if (scene.firstScene == null) {
    int index = sceneList.indexOf(scene.currentScene);
    if (keyCode == RIGHT) {
      //findIndex
      if (index < sceneList.size() - 1) {
        scene.ChangeScene(sceneList.get(index + 1));
      }
    }
    else if (keyCode == LEFT) {
      if (index > 0) {
        scene.ChangeScene(sceneList.get(index - 1));
      }
    }
  }
}
