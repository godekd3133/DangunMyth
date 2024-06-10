let sceneManager;
let imageManager;
let fontManager;
let timeManager;
let soundManager;
let sceneList = [];
let QAMode = false; // 이 변수를 true로 바꾸면 시간에 따른 씬 전환 안됩니다

function setup() {
  createCanvas(1280, 720, P2D);
  frameRate(60);
  noStroke();

  fontManager = new FontManager();
  fontManager.LoadFont("font", "NanumGothic.ttf");

  imageManager = new ImageManager();
  timeManager = new TimeManager();
  sceneManager = new SceneManager();
  soundManager = new SoundManager();

  // S1(0 ~ 21)
  sceneList.push(new Opening());
  sceneList.push(new S1C1());
  sceneList.push(new S1C3());
  sceneList.push(new S1C4());
  sceneList.push(new S1C5());
  sceneList.push(new S1C6_1());
  sceneList.push(new S1C6_2());
  sceneList.push(new S1C7());
  sceneList.push(new S1C8());
  sceneList.push(new S1C9());
  sceneList.push(new S1C11());
  sceneList.push(new S1C13());
  sceneList.push(new S1C14());
  sceneList.push(new S1C15()); // 미니게임
  sceneList.push(new S1C15V1());
  sceneList.push(new S1C15V2());
  sceneList.push(new S1C16());
  sceneList.push(new S1C17());
  sceneList.push(new S1C18());
  sceneList.push(new S1C19_1());
  sceneList.push(new S1C19_2());
  sceneList.push(new S1C19_3());

  // S2(22 ~ 31)
  sceneList.push(new S2C1());
  sceneList.push(new S2C2());
  sceneList.push(new S2C3());
  sceneList.push(new S2C4());
  sceneList.push(new S2C5());
  sceneList.push(new S2C6()); // 미니게임
  sceneList.push(new S2C6V1());
  sceneList.push(new S2C6V2());
  sceneList.push(new S2C7());
  sceneList.push(new S2C8());

  // S3(32 ~ 53)
  sceneList.push(new S3C1());
  sceneList.push(new S3C2());

  // S3 - V1(34 ~ 46)
  sceneList.push(new S3C3V1_1());
  sceneList.push(new S3C3V1_2());
  sceneList.push(new S3C3V1_3());
  sceneList.push(new S3C3V1_1_1());
  sceneList.push(new S3C3V1_1_2());
  sceneList.push(new S3C3V1_2_1());
  sceneList.push(new S3C3V1_2_2());
  sceneList.push(new S3C3V1_3_1());
  sceneList.push(new S3C3V1_3_2());
  sceneList.push(new S3C3V1_3_3());
  sceneList.push(new S3C3V1_4_1());
  sceneList.push(new S3C3V1_4_2());
  sceneList.push(new S3C3V1_4_3());
  // S3 - V2(47 ~ 53)
  sceneList.push(new S3C3V2());
  sceneList.push(new S3C3V2_1_1());
  sceneList.push(new S3C3V2_1_2());
  sceneList.push(new S3C3V2_1_3());
  sceneList.push(new S3C3V2_2_1());
  sceneList.push(new S3C3V2_2_2());
  sceneList.push(new S3C3V2_2_3());

  sceneManager.SetCreditScene(new EndingCredit());
  sceneManager.Setup(sceneList[0]);
}

function draw() {
  timeManager.OnDraw();
  if (!sceneManager.looping) return;

  background(255);
  fill(0);

  sceneManager.Draw();
}

function keyPressed() {
  if (!sceneManager.firstScene) {
    let index = sceneList.findIndex(
      (scene) =>
        scene.constructor.name === sceneManager.currentScene.constructor.name
    );
    if (index === -1) return;
    if (keyCode === RIGHT_ARROW) {
      if (index < sceneList.length - 1) {
        sceneManager.looping = true;
        sceneManager.ChangeSceneManually(sceneList[index + 1]);
      }
    } else if (keyCode === LEFT_ARROW) {
      if (index > 0) {
        sceneManager.looping = true;
        sceneManager.ChangeSceneManually(sceneList[index - 1]);
      }
    }
  }
}
