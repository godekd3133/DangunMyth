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
  sceneList.add(new S1C15V1()); // 9
  sceneList.add(new S1C15V2()); // 10
  sceneList.add(new S1C17()); // 11
  sceneList.add(new S1C19_1()); // 12
  sceneList.add(new S1C19_3()); // 13
  sceneList.add(new S2C1()); // 14
  sceneList.add(new S2C2()); // 15
  sceneList.add(new S2C3()); // 16
  sceneList.add(new S2C4()); // 17
  sceneList.add(new S2C5()); // 18
  sceneList.add(new S2C6V1()); // 19
  sceneList.add(new S2C6V2()); // 20
  sceneList.add(new S3C1()); // 21
  sceneList.add(new S3C2());  // 22
  sceneList.add(new S3C3V1_1()); // 23
  sceneList.add(new S3C3V1_2()); // 24
  sceneList.add(new S3C3V1_1_1()); //25
  sceneList.add(new S3C3V1_1_2()); //26
  sceneList.add(new S3C3V1_2_1()); //27
  sceneList.add(new S3C3V1_2_2()); //28
  sceneList.add(new S3C3V1_3_2());//29
  sceneList.add(new S3C3V1_4_2());//30
  sceneList.add(new S3C3V1_4_3());//31
  sceneList.add(new S3C3V2());//32
  sceneList.add(new S3C3V2_1_1());
  sceneList.add(new S3C3V2_1_2());//33
  sceneList.add(new S3C3V2_1_3());//34
  sceneList.add(new S3C3V2_2_1());//35
  sceneList.add(new S3C3V2_2_2());//36

  sceneList.add(new S3C3V1_2_1());
  sceneList.add(new S3C3V1_2_2());

  sceneList.add(new S3C3V1_3_1());

  sceneList.add(new S3C3V1_4_1());
  sceneList.add(new S3C3V2_2_3());

  frameRate(60);
  noStroke();
  //size(1280, 720,FX2D);
  size(1280, 720,P2D);
  // S1C1 s1c1 = new S1C1();
  //scene.Setup(s1c1);
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
