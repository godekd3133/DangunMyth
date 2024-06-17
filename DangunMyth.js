let sceneManager;
let imageManager;
let fontManager;
let timeManager;
let soundManager;
let sceneList = [];
let QAMode = false; // 이 변수를 true로 바꾸면 시간에 따른 씬 전환 안됩니다
let openingImageManager;

async function preload(){
  soundManager = new SoundManager();

  soundManager.LoadSound("Credit", "Sounds/BGM/EndingCredit.mp3");
  soundManager.LoadSound("intro", "Sounds/intro.wav");
  soundManager.LoadSound("S1/C1/narr", "Sounds/S1/C1/narr/narr1.mp3");
  soundManager.LoadSound("S1/C1/narr2", "Sounds/S1/C1/narr/narr2.mp3");
  soundManager.LoadSound("S1/C1/narr3", "Sounds/S1/C1/narr/narr3.mp3");
  soundManager.LoadSound("S1/C3/narr", "Sounds/S1/C3/narr/narr.mp3");
  soundManager.LoadSound("S1/C4/narr", "Sounds/S1/C4/narr/narr.mp3");
  soundManager.LoadSound("S1/C5/narr", "Sounds/S1/C5/narr/narr.mp3");
  soundManager.LoadSound("S1/C6-1/narr", "Sounds/S1/C6-1/narr/narr.mp3");
  soundManager.LoadSound("S1/C6-1/hwanin", "Sounds/S1/C6-1/narr/hwanin.mp3");
  soundManager.LoadSound("S1/C6-1/hwanwoong", "Sounds/S1/C6-1/narr/hwanwung.mp3");
  soundManager.LoadSound("S1/C6-2/hwanwoong", "Sounds/S1/C6-2/narr/narr.mp3");
  soundManager.LoadSound("S1/C6-2/hwanin", "Sounds/S1/C6-2/narr/hwanin.mp3");
  soundManager.LoadSound("S1/C7/hwan", "Sounds/S1/C7/narr/hwan.mp3");
  soundManager.LoadSound("NarrS1C8", "Sounds/S1/C8/narr/narr.mp3");
  soundManager.LoadSound("HawninS1C8", "Sounds/S1/C8/narr/hwanin.mp3");
  soundManager.LoadSound("S1/C9/hwanwoog", "Sounds/S1/C9/narr/hwanwoong.mp3");
  soundManager.LoadSound("S1/C11/hwanin", "Sounds/S1/C11/narr/hwanin.mp3");
  soundManager.LoadSound("S1/C11/hwanwoong", "Sounds/S1/C11/narr/hwanwoong.mp3");
  soundManager.LoadSound("Effects/WoodenDoorOpen", "Sounds/Effects/WoodenDoorOpen.mp3");
  soundManager.LoadSound("S1/C14/effect", "Sounds/S1/C14/effect/effect.wav");
  soundManager.LoadSound("Interaction1", "Sounds/S1/C15/Interaction1.wav");
  soundManager.LoadSound("crash", "Sounds/S1/C15/crash.mp3");
  soundManager.LoadSound("HWANUNG_NARR1", "Sounds/S1/C15-1/narr/narr1.mp3");
  soundManager.LoadSound("S1/C16/narr", "Sounds/S1/C16/narr/narr.mp3");
  soundManager.LoadSound("Effects/BushRustle", "Sounds/Effects/BushRustle.mp3");
  soundManager.LoadSound("S1C18_NARR", "Sounds/S1/C18/narr/narr.mp3");
  soundManager.LoadSound("S1C18_TIGER", "Sounds/S1/C18/narr/tiger.mp3");
  soundManager.LoadSound("S1C18_BEAR", "Sounds/S1/C18/narr/bear.mp3");
  soundManager.LoadSound("S1/C19-1/narr", "Sounds/S1/C19-1/narr.mp3");
  soundManager.LoadSound("S1/C19-1/Bear", "Sounds/S1/C19-1/Bear.mp3");
  soundManager.LoadSound("S1/C19-2/hwanwoong1", "Sounds/S1/C19-2/hwanwoong1.mp3");
  soundManager.LoadSound("S1/C19-3/hwanwoong1", "Sounds/S1/C19-3/hwanwoong1.mp3");
  soundManager.LoadSound("S1/C19-3/hwanwoong2", "Sounds/S1/C19-3/hwanwoong2.mp3");
  soundManager.LoadSound("S1/C19-3/Bear", "Sounds/S1/C19-3/Bear.mp3");
  soundManager.LoadSound("S2/C1/step", "Sounds/S2/C1/effect/Step_Grass_01.wav");
  soundManager.LoadSound(
    "S2_S3_FootStuckRock",
    "Sounds/Effects/FootStuckRock2.mp3"
  );
  soundManager.LoadSound("Effects/Step_Cave2", "Sounds/Effects/Step_Cave2.mp3");
  soundManager.LoadSound("Effects/Step_Cave3", "Sounds/Effects/Step_Cave3.mp3");
  soundManager.LoadSound("Effects/Step_Cave4", "Sounds/Effects/Step_Cave4.mp3");
  soundManager.LoadSound("S2C3_narr1", "Sounds/S2/C3/narr/narr1.mp3");
  soundManager.LoadSound("S2/C4/narr1", "Sounds/S2/C4/narr/narr1.mp3");
  soundManager.LoadSound("S2/C4/narr2", "Sounds/S2/C4/narr/narr2.mp3");
  soundManager.LoadSound("S2/C4/narr3", "Sounds/S2/C4/narr/narr3.mp3");
  soundManager.LoadSound("S2/C5/effect", "Sounds/S2/C5/effect/effect.wav");
  soundManager.LoadSound("S2/C6/V2/narr1", "Sounds/S2/C6/V2/narr/narr1.mp3");
  soundManager.LoadSound("S2/C6/V2/narr2", "Sounds/S2/C6/V2/narr/narr2.mp3");
  soundManager.LoadSound("S2/C6/V2/narr3", "Sounds/S2/C6/V2/narr/narr3.mp3");
  soundManager.LoadSound("item_click", "Sounds/S2/C6/item_click.wav");
  soundManager.LoadSound("S2/C6/bgm", "Sounds/S2/C6/bgm.mp3");
  soundManager.LoadSound("yum", "Sounds/Effects/YumYum.mp3");
  soundManager.LoadSound("S2/C8/narr", "Sounds/S2/C8/narr/narr.mp3");
  soundManager.LoadSound("Chicken", "Sounds/Effects/Chicken_02.mp3");
  soundManager.LoadSound("S3/C1/narr", "Sounds/S3/C1/narr/narr.mp3");
  soundManager.LoadSound("S3/C2/effect", "Sounds/S3/C2/effect/effect.wav");
  soundManager.LoadSound("evolution", "Sounds/Effects/Evolution.mp3");
  soundManager.LoadSound("harp", "Sounds/Effects/HarpSound.mp3");
  soundManager.LoadSound("S3/C3/V1/_1/Bear", "Sounds/S3/C3/V1/_1/Bear.mp3");
  soundManager.LoadSound("Effects/Step_Grass_01", "Sounds/Effects/Step_Grass_01.wav");
  soundManager.LoadSound("Effects/Step_Grass_02", "Sounds/Effects/Step_Grass_02.wav");
  soundManager.LoadSound("Effects/Step_Grass_02", "Sounds/Effects/Step_Grass_02.wav");
  soundManager.LoadSound("S3/C3/V1/_2/Tiger", "Sounds/S3/C3/V1/_2/Tiger.mp3");
  soundManager.LoadSound("Choice", "Sounds/Effects/Choice.mp3");
  soundManager.LoadSound("S3/C3/V1/_3/_3/narr", "Sounds/S3/C3/V1/_3/_3/narr.mp3");
  soundManager.LoadSound("Effects/NatureSound", "Sounds/Effects/NatureSound.wav");
  soundManager.LoadSound("Effects/Chicken_02", "Sounds/Effects/Chicken_02.mp3");
  soundManager.LoadSound("S3/C3/V1/_4/_3/narr", "Sounds/S3/C3/V1/_4/_3/narr.mp3");
  soundManager.LoadSound("S3/C3/V2/_1/_1/narr", "Sounds/S3/C3/V2/_1/_1/narr/narr.mp3");
  soundManager.LoadSound(
    "S3/C3/V2/_1/_2/woonggirl",
    "Sounds/S3/C3/V2/_1/_2/narr/woonggirl.mp3"
  );
  soundManager.LoadSound(
    "S3/C3/V2/_1/_3/woonggirl",
    "Sounds/S3/C3/V2/_1/_3/narr/woonggirl.mp3"
  );
  soundManager.LoadSound(
    "S3/C3/V2/_1/_3/hwanwoong",
    "Sounds/S3/C3/V2/_1/_3/narr/hwanwoong.mp3"
  );
  soundManager.LoadSound("Effects/Step_Rock_02", "Sounds/Effects/Step_Rock_02.mp3");
  soundManager.LoadSound("haha", "Sounds/S3/C3/V2/_2/_1/narr/haha.mp3");
  soundManager.LoadSound("S3/C3/V2/_2/_3/narr", "Sounds/S3/C3/V2/_2/_3/narr/narr.mp3");
  soundManager.LoadSound(
    "S3/C3/V2/_0/narr/woonggirl",
    "Sounds/S3/C3/V2/_0/narr/woonggirl.mp3"
  );

  imageManager = new ImageManager();
  // await imageManager.preloadAllImages()
}

function setup() {
  createCanvas(1280, 720, P2D);
  frameRate(60);
  noStroke();

  fontManager = new FontManager();
  fontManager.LoadFont("font", "LeeSeoyun.otf");
  
  openingImageManager = new ImageManager();
  timeManager = new TimeManager();
  sceneManager = new SceneManager();

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

function mousePressed() {
  if (sceneManager.currentScene instanceof S2C6) {
		sceneManager.currentScene.OnMousePressed();
  }
}