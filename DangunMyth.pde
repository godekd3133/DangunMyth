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

  // S1 (0 ~ 19)
  sceneList.add(new S1C1());
  sceneList.add(new S1C3());
  sceneList.add(new S1C4());
  sceneList.add(new S1C5());
  sceneList.add(new S1C6_1());
  sceneList.add(new S1C6_2());
  sceneList.add(new S1C7());
  sceneList.add(new S1C8());
  sceneList.add(new S1C9());
  sceneList.add(new S1C11());
  sceneList.add(new S1C14());
  // sceneList.add(new S1C15()); // 미니게임
  sceneList.add(new S1C15V1());
  sceneList.add(new S1C15V2());
  sceneList.add(new S1C16());
  sceneList.add(new S1C17());
  sceneList.add(new S1C18());
  sceneList.add(new S1C19_1());
  sceneList.add(new S1C19_2());
  sceneList.add(new S1C19_3()); 

  // S2 (20 ~ 29)
  sceneList.add(new S2C1()); 
  sceneList.add(new S2C2());
  sceneList.add(new S2C3()); 
  sceneList.add(new S2C4()); 
  sceneList.add(new S2C5());
  // sceneList.add(new S2C6()); // 미니게임
  sceneList.add(new S2C6V1());
  sceneList.add(new S2C6V2());
  sceneList.add(new S2C7());
  sceneList.add(new S2C8());

  // S3 (30 ~50)
  sceneList.add(new S3C1());
  sceneList.add(new S3C2());
  // S3 - V1 (32 ~ 43)
  sceneList.add(new S3C3V1_1());
  sceneList.add(new S3C3V1_2());
  sceneList.add(new S3C3V1_1_1());
  sceneList.add(new S3C3V1_1_2());
  sceneList.add(new S3C3V1_2_1());
  sceneList.add(new S3C3V1_2_2());
  sceneList.add(new S3C3V1_3_1());
  sceneList.add(new S3C3V1_3_2());
  sceneList.add(new S3C3V1_3_3());
  sceneList.add(new S3C3V1_4_1());
  sceneList.add(new S3C3V1_4_2());
  sceneList.add(new S3C3V1_4_3());
  // S3 - V2 (44 ~ 50)
  sceneList.add(new S3C3V2());
  sceneList.add(new S3C3V2_1_1());
  sceneList.add(new S3C3V2_1_2());
  sceneList.add(new S3C3V2_1_3());
  sceneList.add(new S3C3V2_2_1());
  sceneList.add(new S3C3V2_2_2());
  sceneList.add(new S3C3V2_2_3());

  frameRate(60);
  noStroke();
  //size(1280, 720,FX2D);
  size(1280, 720,P2D);
  scene.Setup(sceneList.get(0));

}

void draw() {
  background(255);
  fill(0);

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
