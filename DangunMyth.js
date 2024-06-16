let sceneManager;
let imageManager;
let fontManager;
let timeManager;
let soundManager;
let sceneList = [];
let QAMode = false; // 이 변수를 true로 바꾸면 시간에 따른 씬 전환 안됩니다

function preload(){
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
}

function setup() {
  createCanvas(1280, 720, P2D);
  frameRate(60);
  noStroke();

  fontManager = new FontManager();
  fontManager.LoadFont("font", "LeeSeoyun.otf");

  imageManager = new ImageManager();
  loadAllImages();
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

function loadAllImages() {
  // sequence1

  // s1c1
  imageManager.LoadImage("s1c1_background", "Images/S1/C1/background");
  imageManager.LoadImage("s1c1_cloud01", "Images/S1/C1/cloud_01");
  imageManager.LoadImage("s1c1_cloud02", "Images/S1/C1/cloud_02");
  imageManager.LoadImage("s1c1_cloud03", "Images/S1/C1/cloud_03");
  imageManager.LoadImage("s1c1_text1", "Images/S1/C1/text_01");
  imageManager.LoadImage("s1c1_text2", "Images/S1/C1/text_02");

  // s1c2
  imageManager.LoadImage("s1c2_background", "Images/S1/C2/background");
  imageManager.LoadImage("s1c2_cloud01", "Images/S1/C2/cloud");

  // s1c3
  imageManager.LoadImage("s1c3_background", "Images/S1/C3/background");
  imageManager.LoadImage("s1c3_cloud01", "Images/S1/C3/cloud");
  imageManager.LoadImage("s1c3_god", "Images/S1/C3/god");
  imageManager.LoadImage("s1c3_face", "Images/S1/C3/god_smile");
  imageManager.LoadImage("s1c3_text", "Images/S1/C3/text");
  imageManager.LoadImage("s1c3_telling0", "Images/S1/C3/god_telling1");
  imageManager.LoadImage("s1c3_telling1", "Images/S1/C3/god_telling2");

  // s1c4
  imageManager.LoadImage("s1c4_background", "Images/S1/C4/background");
  imageManager.LoadImage("s1c4_man1", "Images/S1/C4/man1");
  imageManager.LoadImage("s1c4_man2", "Images/S1/C4/man2");
  imageManager.LoadImage("s1c4_eye1", "Images/S1/C4/eye1");
  imageManager.LoadImage("s1c4_eye2", "Images/S1/C4/eye2");
  imageManager.LoadImage("s1c4_eye3", "Images/S1/C4/eye3");
  imageManager.LoadImage("s1c4_mouth", "Images/S1/C4/mouth");
  imageManager.LoadImage("s1c4_text", "Images/S1/C4/text");


  // s1c5
  imageManager.LoadImage("s1c5_background", "Images/S1/C5/background");
  imageManager.LoadImage("s1c5_hwanin", "Images/S1/C5/hawnin");
  imageManager.LoadImage("s1c5_hwanwoong", "Images/S1/C5/hwanwoong");
  imageManager.LoadImage("s1c5_text", "Images/S1/C5/text");

  // s1c6_1
  imageManager.LoadImage("s1c6_1_text", "Images/S1/C6-1/text");
  imageManager.LoadImage("s1c6_1_Background", "Images/S1/C6-1/Background");
  imageManager.LoadImage("s1c6_1_HwaninBody", "Images/S1/C6-1/HwaninBody");
  imageManager.LoadImage("s1c6_1_HwaninFace_MouseClose", "Images/S1/C6-1/HwaninFace_MouseClose");
  imageManager.LoadImage("s1c6_1_HwaninFace_MouseOpen", "Images/S1/C6-1/HwaninFace_MouseOpen");
  imageManager.LoadImage("s1c6_1_HwaninFace_MouseClose", "Images/S1/C6-1/HwaninFace_MouseClose");
  imageManager.LoadImage("s1c6_1_HwanwoongBody1", "Images/S1/C6-1/HwanwoongBody1");
  imageManager.LoadImage("s1c6_1_HwanwoongBody2", "Images/S1/C6-1/HwanwoongBody2");
  imageManager.LoadImage("s1c6_1_HwanwoongFace1", "Images/S1/C6-1/HwanwoongFace1");
  imageManager.LoadImage("s1c6_1_HwanwoongFace2-1", "Images/S1/C6-1/HwanwoongFace2-1");
  imageManager.LoadImage("s1c6_1_HwanwoongFace2-2", "Images/S1/C6-1/HwanwoongFace2-2");

  // s1c6_2
  imageManager.LoadImage("s1c6_2_Background2", "Images/S1/C6-2/Background");
  imageManager.LoadImage("s1c6_2_HwaninBody", "Images/S1/C6-2/HwaninBody");
  imageManager.LoadImage("s1c6_2_HwaninFace", "Images/S1/C6-2/HwaninFace");
  imageManager.LoadImage("s1c6_2_text", "Images/S1/C6-2/text");

  // s1c7
  imageManager.LoadImage("s1c7_background", "Images/S1/C7/background");
  imageManager.LoadImage("s1c7_text", "Images/S1/C7/text");
  imageManager.LoadImage("s1c7_hwan_body", "Images/S1/C7/hwan_body");
  imageManager.LoadImage("s1c7_hwan_expression1", "Images/S1/C7/hwan_expression1");
  imageManager.LoadImage("s1c7_hwan_expression2", "Images/S1/C7/hwan_expression2");

  // s1c8
  imageManager.LoadImage("s1c8_BackgroundS1C8", "Images/S1/C8/Background");
  imageManager.LoadImage("s1c8_HwaninBody", "Images/S1/C8/HwaninBody");
  imageManager.LoadImage("s1c8_HwaninFace", "Images/S1/C8/HwaninFace");
  imageManager.LoadImage("s1c8_HwaninHand", "Images/S1/C8/HwaninHand");
  imageManager.LoadImage("s1c8_NarrS1C8", "Images/S1/C8/narr");

  // s1c9
  imageManager.LoadImage("s1c9_background", "Images/S1/C9/background");
  imageManager.LoadImage("s1c9_text", "Images/S1/C9/text");
  imageManager.LoadImage("s1c9_cloud01", "Images/S1/C9/cloud_01");
  imageManager.LoadImage("s1c9_cloud02", "Images/S1/C9/cloud_02");
  imageManager.LoadImage("s1c9_cloud03", "Images/S1/C9/cloud_03");
  imageManager.LoadImage("s1c9_hand", "Images/S1/C9/hand");

  // s1c11
  imageManager.LoadImage("s1c11_background", "Images/S1/C11/background");
  imageManager.LoadImage("s1c11_text", "Images/S1/C11/text");
  imageManager.LoadImage("s1c11_hwanin_body", "Images/S1/C11/hwanin_body");
  imageManager.LoadImage("s1c11_hwanin_expression1", "Images/S1/C11/hwanin_expression1");
  imageManager.LoadImage("s1c11_hwanin_expression2","Images/S1/C11/hwanin_expression2");
  imageManager.LoadImage("s1c11_hwanwoong_body", "Images/S1/C11/hwanwoong_body");
  imageManager.LoadImage("s1c11_hwanwoong_expression1", "Images/S1/C11/hwanwoong_expression1");
  imageManager.LoadImage("s1c11_hwanwoong_expression2", "Images/S1/C11/hwanwoong_expression2");

  // s1c13
  imageManager.LoadImage("s1c13_background1", "Images/S1/C13/background1");
  imageManager.LoadImage("s1c13_background2", "Images/S1/C13/background2");
  imageManager.LoadImage("s1c13_background3", "Images/S1/C13/background3");
  imageManager.LoadImage("s1c13_background4", "Images/S1/C13/background4");
  imageManager.LoadImage("s1c13_background5", "Images/S1/C13/background5");
  imageManager.LoadImage("s1c13_background6", "Images/S1/C13/background6");
  imageManager.LoadImage("s1c13_background7", "Images/S1/C13/background7");

  // s1c14
  imageManager.LoadImage("s1c14_background", "Images/S1/C14/background");
  imageManager.LoadImage("s1c14_button", "Images/S1/C14/button");

  // s1c15
  imageManager.LoadImage("s1c15_background", "Images/S1/C15/background");
  imageManager.LoadImage("s1c15_ground", "Images/S1/C15/ground");

  imageManager.LoadImage("s1c15_hwanung", "Images/S1/C15/hwanung");
  imageManager.LoadImage("s1c15_hwanungFace1", "Images/S1/C15/hwanung_face_1");
  imageManager.LoadImage("s1c15_hwanungFace2", "Images/S1/C15/hwanung_face_2");

  imageManager.LoadImage("s1c15_bird", "Images/S1/C15/obstacles/bird");
  imageManager.LoadImage("s1c15_gust", "Images/S1/C15/obstacles/gust");
  imageManager.LoadImage("s1c15_plane", "Images/S1/C15/obstacles/plane");
  imageManager.LoadImage("s1c15_UFO", "Images/S1/C15/obstacles/UFO");
  imageManager.LoadImage("s1c15_cloud", "Images/S1/C15/obstacles/cloud");
  imageManager.LoadImage("s1c15_lightning", "Images/S1/C15/obstacles/lightning");

  imageManager.LoadImage("s1c15_wind", "Images/S1/C15/obstacles/wind");
  imageManager.LoadImage("s1c15_fog", "Images/S1/C15/obstacles/fog");

  imageManager.LoadImage("s1c15_altimeter", "Images/S1/C15/altimeter_1");
  imageManager.LoadImage("s1c15_altimeterHwanung", "Images/S1/C15/altimeter_2");
  imageManager.LoadImage("s1c15_arrow", "Images/S1/C15/arrow");

  // s1c15v1
  imageManager.LoadImage("s1c15v1_background", "Images/S1/C15-1/background");
  imageManager.LoadImage("s1c15v1_HWANUNG_BODY", "Images/S1/C15-1/HWANUNG_BODY");
  imageManager.LoadImage("s1c15v1_HWANUNG_FACE", "Images/S1/C15-1/HWANUNG_FACE");
  imageManager.LoadImage("s1c15v1_HWANUNG_SWEAT", "Images/S1/C15-1/HWANUNG_SWEAT");
  imageManager.LoadImage("s1c15v1_HWANUNG_TEXT", "Images/S1/C15-1/TEXT");

  imageManager.LoadImage("s1c15v1_button_top", "Images/S1/C15-1/button_top");
  imageManager.LoadImage("s1c15v1_button_bottom", "Images/S1/C15-1/button_bottom");

  // s1c15v2
  imageManager.LoadImage("s1c15v2_background", "Images/S1/C15-2/background");
  imageManager.LoadImage("s1c15v2_HWANUNG_BODY", "Images/S1/C15-2/HWANUNG_BODY");
  imageManager.LoadImage("s1c15v2_HWANUNG_FACE", "Images/S1/C15-2/HWANUNG_FACE");
  imageManager.LoadImage("s1c15v2_cloud", "Images/S1/C15-2/cloud");

  // s1c16
  imageManager.LoadImage("s1c16_background", "Images/S1/C16/background");
  imageManager.LoadImage("s1c16_extra_1", "Images/S1/C16/extra_1");
  imageManager.LoadImage("s1c16_extra_2", "Images/S1/C16/extra_2");
  imageManager.LoadImage("s1c16_extra_3", "Images/S1/C16/extra_3");
  imageManager.LoadImage("s1c16_extra_4", "Images/S1/C16/extra_4");
  imageManager.LoadImage("s1c16_hwanung_arm", "Images/S1/C16/hwanung_arm");
  imageManager.LoadImage("s1c16_hwanung_face", "Images/S1/C16/hwanung_face");
  imageManager.LoadImage("s1c16_hwanung_face1", "Images/S1/C16/hwanung_face1");
  imageManager.LoadImage("s1c16_hwanung_face2", "Images/S1/C16/hwanung_face2");
  imageManager.LoadImage("s1c16_hwanung", "Images/S1/C16/hwanung");
  imageManager.LoadImage("s1c16_hwanung1", "Images/S1/C16/hwanung1");
  imageManager.LoadImage("s1c16_hwanung2", "Images/S1/C16/hwanung2");
  imageManager.LoadImage("s1c16_text", "Images/S1/C16/text");

  // s1c17
  imageManager.LoadImage("s1c17_background", "Images/S1/C17/background");
  imageManager.LoadImage("s1c17_BUSH", "Images/S1/C17/BUSH");
  imageManager.LoadImage("s1c17_HWANUNG", "Images/S1/C17/HWANUNG");
  imageManager.LoadImage("s1c17_VASSAL", "Images/S1/C17/VASSAL");
  imageManager.LoadImage("s1c17_VASSAL1", "Images/S1/C17/VASSAL1");
  imageManager.LoadImage("s1c17_VASSAL2", "Images/S1/C17/VASSAL2");
  imageManager.LoadImage("s1c17_VASSAL3", "Images/S1/C17/VASSAL3");
  imageManager.LoadImage("s1c17_BEAR", "Images/S1/C17/BEAR");
  imageManager.LoadImage("s1c17_TIGER", "Images/S1/C17/TIGER");

  // s1c18
  imageManager.LoadImage("s1c18_background", "Images/S1/C18/background");
  imageManager.LoadImage("s1c18_narr", "Images/S1/C18/narr");
  imageManager.LoadImage("s1c18_tiger0", "Images/S1/C18/tiger0");
  imageManager.LoadImage("s1c18_tiger1", "Images/S1/C18/tiger1");
  imageManager.LoadImage("s1c18_bear0", "Images/S1/C18/bear0");
  imageManager.LoadImage("s1c18_bear1", "Images/S1/C18/bear1");

  // s1c19_1
  imageManager.LoadImage("s1c19_1_background", "Images/S1/C19/background0");
  imageManager.LoadImage("s1c19_1_hwangwoong", "Images/S1/C19/V1/hwanwoong");

  imageManager.LoadImage("s1c19_1_bear1", "Images/S1/C19/V1/bear1");
  imageManager.LoadImage("s1c19_1_bear2", "Images/S1/C19/V1/bear2");
  imageManager.LoadImage("s1c19_1_bear3", "Images/S1/C19/V1/bear3");

  imageManager.LoadImage("s1c19_1_tiger1", "Images/S1/C19/V1/tiger1");
  imageManager.LoadImage("s1c19_1_tiger2", "Images/S1/C19/V1/tiger2");
  imageManager.LoadImage("s1c19_1_tiger3", "Images/S1/C19/V1/tiger3");

  imageManager.LoadImage("s1c19_1_C19-1-Text", "Images/S1/C19/C19-1-Text");

  // s1c19_2
  imageManager.LoadImage("s1c19_2_background", "Images/S1/C19/background1");
  imageManager.LoadImage("s1c19_2_arm", "Images/S1/C19/hwanwoong_arm");
  imageManager.LoadImage("s1c19_2_mouth0", "Images/S1/C19/hwanwoong_mouth1");
  imageManager.LoadImage("s1c19_2_mouth1", "Images/S1/C19/hwanwoong_mouth0");
  imageManager.LoadImage("s1c19_2_skin", "Images/S1/C19/hwanwoong_skin");
  imageManager.LoadImage("s1c19_2_C19-2-Text", "Images/S1/C19/C19-2-Text");

  // s1c19_3
  imageManager.LoadImage("s1c19_3_background", "Images/S1/C19/background2");
  imageManager.LoadImage("s1c19_3_hands", "Images/S1/C19/hands");
  imageManager.LoadImage("s1c19_3_hwangwoong", "Images/S1/C19/hwanwoong_hand");
  imageManager.LoadImage("s1c19_3_basket", "Images/S1/C19/basket");
  imageManager.LoadImage("s1c19_3_C19-3-Text", "Images/S1/C19/C19-3-Text");

  // sequence2

  // s2c1
  imageManager.LoadImage("s2c1_background", "Images/S2/C1/background");
  imageManager.LoadImage("s2c1_tiger1", "Images/S2/C1/tiger1");
  imageManager.LoadImage("s2c1_tiger2", "Images/S2/C1/tiger2");
  imageManager.LoadImage("s2c1_tiger3", "Images/S2/C1/tiger3");
  imageManager.LoadImage("s2c1_bear1", "Images/S2/C1/bear1");
  imageManager.LoadImage("s2c1_bear2", "Images/S2/C1/bear2");
  imageManager.LoadImage("s2c1_bear3", "Images/S2/C1/bear3");

  // s2c2
  imageManager.LoadImage("s2c2_background", "Images/S2/C2/background");
  imageManager.LoadImage("s2c2_rock", "Images/S2/C2/rock");
  imageManager.LoadImage("s2c2_tiger_body", "Images/S2/C2/tiger_body");
  imageManager.LoadImage("s2c2_tiger_face", "Images/S2/C2/tiger_face");
  imageManager.LoadImage("s2c2_tiger_left", "Images/S2/C2/tiger_foot_right");
  imageManager.LoadImage("s2c2_tiger_right", "Images/S2/C2/tiger_foot_left");
  imageManager.LoadImage("s2c2_bear_body", "Images/S2/C2/bear_body");
  imageManager.LoadImage("s2c2_bear_face", "Images/S2/C2/bear_face");
  imageManager.LoadImage("s2c2_bear_left", "Images/S2/C2/bear_foot_right");
  imageManager.LoadImage("s2c2_bear_right", "Images/S2/C2/bear_foot_left");
  imageManager.LoadImage("s2c2_tiger1", "Images/S2/C2/tiger1");
  imageManager.LoadImage("s2c2_tiger2", "Images/S2/C2/tiger2");
  imageManager.LoadImage("s2c2_tiger3", "Images/S2/C2/tiger3");
  imageManager.LoadImage("s2c2_bear1", "Images/S2/C2/bear1");
  imageManager.LoadImage("s2c2_bear2", "Images/S2/C2/bear2");
  imageManager.LoadImage("s2c2_bear3", "Images/S2/C2/bear3");

  // s2c3
  imageManager.LoadImage("s2c3_background", "Images/S2/C3/background");
  imageManager.LoadImage("s2c3_bear", "Images/S2/C3/bear");
  imageManager.LoadImage("s2c3_bear_eye", "Images/S2/C3/bear_eye");
  imageManager.LoadImage("s2c3_tiger", "Images/S2/C3/tiger");
  imageManager.LoadImage("s2c3_basket", "Images/S2/C3/basket");
  imageManager.LoadImage("s2c3_garlic", "Images/S2/C3/garlic");
  imageManager.LoadImage("s2c3_ssuk", "Images/S2/C3/ssuk");
  imageManager.LoadImage("s2c3_text", "Images/S2/C3/text");

  // s2c4
  imageManager.LoadImage("s2c4_background", "Images/S2/C4/background");
  imageManager.LoadImage("s2c4_bear1", "Images/S2/C4/bear1");
  imageManager.LoadImage("s2c4_bear2", "Images/S2/C4/bear2");
  imageManager.LoadImage("s2c4_tiger", "Images/S2/C4/tiger");
  imageManager.LoadImage("s2c4_garlic", "Images/S2/C4/garlic");
  imageManager.LoadImage("s2c4_ssug", "Images/S2/C4/ssug");
  imageManager.LoadImage("s2c4_basket", "Images/S2/C4/basket");
  imageManager.LoadImage("s2c4_tear", "Images/S2/C4/tear");
  imageManager.LoadImage("s2c4_text1", "Images/S2/C4/text1");
  imageManager.LoadImage("s2c4_text2", "Images/S2/C4/text2");
  imageManager.LoadImage("s2c4_text3", "Images/S2/C4/text3");

  // s2c5
  imageManager.LoadImage("s2c5_background", "Images/S2/C5/background");
  imageManager.LoadImage("s2c5_button", "Images/S2/C5/button");

  // s2c6
  imageManager.LoadImage("s2c6_background", "Images/S2/C6/background");
  imageManager.LoadImage("s2c6_clock", "Images/S2/C6/clock");
  imageManager.LoadImage("s2c6_manul", "Images/S2/C6/manul");
  imageManager.LoadImage("s2c6_sook", "Images/S2/C6/sook");
  imageManager.LoadImage("s2c6_bear_hand", "Images/S2/C6/bear_hand");
  imageManager.LoadImage("s2c6_bear_click", "Images/S2/C6/bear_click");
  imageManager.LoadImage("s2c6_tiger_hand", "Images/S2/C6/tiger_hand");
  imageManager.LoadImage("s2c6_tiger_click", "Images/S2/C6/tiger_click");
  imageManager.LoadImage("s2c6_transparent", "Images/S2/C6/transparent");

  // s2c6v1
  imageManager.LoadImage("s2c6v1_background", "Images/S2/C6/V1/background");
  imageManager.LoadImage("s2c6v1_bear", "Images/S2/C6/V1/bear");
  imageManager.LoadImage("s2c6v1_bear_tear", "Images/S2/C6/V1/bear_tear");
  imageManager.LoadImage("s2c6v1_tiger", "Images/S2/C6/V1/tiger");
  imageManager.LoadImage("s2c6v1_tiger_tear", "Images/S2/C6/V1/tiger_tear");
  imageManager.LoadImage("s2c6v1_button_top", "Images/S2/C6/V1/button_top");
  imageManager.LoadImage("s2c6v1_button_bottom", "Images/S2/C6/V1/button_bottom");

  // s2c6v2
  imageManager.LoadImage("s2c6v2_background", "Images/S2/C6/V2/background");
  imageManager.LoadImage("s2c6v2_bear_arm", "Images/S2/C6/V2/bear_arm");
  imageManager.LoadImage("s2c6v2_tiger_arm", "Images/S2/C6/V2/tiger_arm");
  imageManager.LoadImage("s2c6v2_chars", "Images/S2/C6/V2/chars");
  imageManager.LoadImage("s2c6v2_basket", "Images/S2/C6/V2/basket");
  imageManager.LoadImage("s2c6v2_text1", "Images/S2/C6/V2/text1");
  imageManager.LoadImage("s2c6v2_text2", "Images/S2/C6/V2/text2");
  imageManager.LoadImage("s2c6v2_text3", "Images/S2/C6/V2/text3");

  // s2c7
  imageManager.LoadImage("s2c7_background", "Images/S2/C7/background");
  imageManager.LoadImage("s2c7_tiger1", "Images/S2/C7/tiger1");
  imageManager.LoadImage("s2c7_tiger2", "Images/S2/C7/tiger2");
  imageManager.LoadImage("s2c7_bear1", "Images/S2/C7/bear1");
  imageManager.LoadImage("s2c7_bear2", "Images/S2/C7/bear2");

  // s2c8
  imageManager.LoadImage("s2c8_cloud_left", "Images/S2/C8/cloud_left");
  imageManager.LoadImage("s2c8_cloud_right", "Images/S2/C8/cloud_right");
  imageManager.LoadImage("s2c8_cloud_middle", "Images/S2/C8/cloud_middle");
  imageManager.LoadImage("s2c8_lake", "Images/S2/C8/lake");
  imageManager.LoadImage("s2c8_mountains", "Images/S2/C8/mountains");
  imageManager.LoadImage("s2c8_sky", "Images/S2/C8/sky");
  imageManager.LoadImage("s2c8_sun", "Images/S2/C8/sun");
  imageManager.LoadImage("s2c8_text", "Images/S2/C8/text");
}