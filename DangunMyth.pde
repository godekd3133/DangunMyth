import processing.sound.*;
//import processing.javafx.*;
SceneManager scene = new SceneManager();
ImageManager image = new ImageManager();
FontManager font = new FontManager();
TimeManager time = new TimeManager();
SoundManager sound = new SoundManager();
//Scene List
ArrayList<Scene> sceneList = new ArrayList<Scene>();
int currentSceneIndex = 0;
boolean QAMode = false; //이 변수를 true로 바꾸면 시간에따른 신전환 안됩니다

void preload() {
  sound.LoadSound("intro", "Sounds/intro.wav");
}

void setup() {
  
  font.LoadFont("font", "NanumGothic.ttf");

  // S1(0 ~ 21)
  sceneList.add(new Opening());
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
  sceneList.add(new S1C13());
  sceneList.add(new S1C14());
  sceneList.add(new S1C15()); // 미니게임
  sceneList.add(new S1C15V1());
  sceneList.add(new S1C15V2());
  sceneList.add(new S1C16());
  sceneList.add(new S1C17());
  sceneList.add(new S1C18());
  sceneList.add(new S1C19_1());
  sceneList.add(new S1C19_2());
  sceneList.add(new S1C19_3());

  // S2(22 ~ 31)
  sceneList.add(new S2C1());
  sceneList.add(new S2C2());
  sceneList.add(new S2C3());
  sceneList.add(new S2C4());
  sceneList.add(new S2C5());
  sceneList.add(new S2C6()); // 미니게임
  sceneList.add(new S2C6V1());
  sceneList.add(new S2C6V2());
  sceneList.add(new S2C7());
  sceneList.add(new S2C8());

  // S3(32 ~ 53)
  sceneList.add(new S3C1());
  sceneList.add(new S3C2());

  // S3 - V1(34 ~ 46)
  sceneList.add(new S3C3V1_1());
  sceneList.add(new S3C3V1_2());
  sceneList.add(new S3C3V1_3());
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
  // S3 - V2(47 ~ 53)
  sceneList.add(new S3C3V2());
  sceneList.add(new S3C3V2_1_1());
  sceneList.add(new S3C3V2_1_2());
  sceneList.add(new S3C3V2_1_3());
  sceneList.add(new S3C3V2_2_1());
  sceneList.add(new S3C3V2_2_2());
  sceneList.add(new S3C3V2_2_3());
  scene.SetCreditScene(new EndingCredit());

  frameRate(60);
  noStroke();
  //size(1280, 720,FX2D);
  size(1280, 720,P2D);
  scene.Setup(new S3C3V1_2());

}

void draw() {
  time.OnDraw();
  if (scene.looping == false) return;

  background(255);
  fill(0);

  scene.Draw();

  //오른쪽 키 누르면 현재씬의 다음씬으로, 왼쪽키 누르면 현재씬의 이전씬으로
}

void keyPressed() {
  if (scene.firstScene == null) {
    int index =0;
    for(int i = 0;
    i< sceneList.size();
    i++) {
      if (sceneList.get(i).getClass() == scene.currentScene.getClass()) {
        index = i;
        break;
      }
    }
    if (index == -1) return;
    if (keyCode == RIGHT) {
      //findIndex
      if (index < sceneList.size() - 1) {
        scene.looping = true;
        scene.ChangeSceneManually(sceneList.get(index + 1));
      }
    }
    else if (keyCode == LEFT) {
      if (index > 0) {
        scene.looping = true;
        scene.ChangeSceneManually(sceneList.get(index - 1));
      }
    }
  }
}
