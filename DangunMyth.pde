import processing.sound.*;
//import processing.javafx.*;
SceneManager scene = new SceneManager();
ImageManager image = new ImageManager();
FontManager font = new FontManager();
TimeManager time = new TimeManager();
SoundManager sound = new SoundManager();
//Scene List
ArrayList<Scene> sceneList = new ArrayList<Scene>();

void setup() {
  //씬들 순서대로 추가
  //미리 50개 공간할당

  sceneList.add(new S1C1());
  sceneList.add(new S1C3());
  sceneList.add(new S1C4());
  sceneList.add(new S1C5());
  sceneList.add(new S1C6_1());
  sceneList.add(new S1C6_2());
  sceneList.add(new S1C7());
  sceneList.add(new S1C8());
  sceneList.add(new S1C9());
  sceneList.add(new S1C14()); 
  sceneList.add(new S1C15V1()); // 10 
  sceneList.add(new S1C15V2()); 
  sceneList.add(new S1C17()); 
  sceneList.add(new S1C19_1()); 
  sceneList.add(new S1C19_3());
  sceneList.add(new S2C1()); 
  sceneList.add(new S2C2()); 
  sceneList.add(new S2C3()); 
  sceneList.add(new S2C4());
  sceneList.add(new S2C5());
  sceneList.add(new S2C6V1());

  frameRate(60);
  noStroke();
  //size(1280, 720,FX2D);
  size(1280, 720,P2D);
  scene.Setup(sceneList.get(0));

}

void draw() {
  background(255);
  fill(0);
  //print(1f/time.deltaTime + "\n");
  time.OnDraw();
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
