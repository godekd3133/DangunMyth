public class S1C6_1 extends Scene {
  int centerX = width/2;
  int centerY = height/2;
  public float SCENE_DURATION = 14f;

  float hwaninDuration = 4f;
  float hwanwoongDuration = 3f;

  float soundStartTime = 0f;
  float hwaninStartTime = 4f;
  float hwanwoongStartTime = 9f;

  boolean narrFlag = false;
  boolean hwaninVoiceFlag = false;
  boolean hwanwoongVoiceFlag = false;

  PVector hwaninCoor = new PVector((float)centerX-300,(float)centerY);

  float mouseTickInterval = 10f/60f;
  float mouseTick = 0f;

  //환인 위치
  int hwaninfaceOffset = -40;
  int hwaninX = centerX-250;
  int hwaninY = centerY-50;

  //환인 얼굴 움직이는 변수
  boolean hwaninFaceFlag=false;
  int hwaninFaceCnt = 0;
  boolean hwaninMouse = true;

  //환웅 위치
  int hwanwoongfaceOffsetY = -80;
  int hwanwoongfaceOffsetX = -25;
  int hwanwoongX = centerX+300;
  int hwanwoongY = centerY+180;
  //환웅 얼굴 움직이는 변수
  boolean hwanwoongFaceFlag=false;
  int hwanwoongFaceCnt = 0;
  boolean hwanwoongMouse = true;

  public S1C6_1() {
  }

  @Override public void OnEnter() {
    hwaninFaceCnt=0;
    hwanwoongFaceCnt=0;
    mouseTick = 0f;
    soundStartTime = 0f;

    soundStartTime = 0f;
    hwaninStartTime = 4f;
    hwanwoongStartTime = 9f;

    // hwaninDuration = SCENE_DURATION/2f;
    // hwanwoongDuration = SCENE_DURATION/2f;

    // int hwaninX = centerX-200;
    // int hwaninY = centerY;

    //나레이션
    sound.LoadSound("narr", "Sounds/S1/C6-1/narr/narr.mp3");

    //환인
    image.LoadImage("Background", "./Images/S1/C6-1/Background");
    image.LoadImage("HwaninBody", "./Images/S1/C6-1/HwaninBody");
    image.LoadImage("HwaninFace_MouseClose", "./Images/S1/C6-1/HwaninFace_MouseClose");
    image.LoadImage("HwaninFace_MouseOpen", "./Images/S1/C6-1/HwaninFace_MouseOpen");
    image.LoadImage("HwaninFace_MouseClose", "./Images/S1/C6-1/HwaninFace_MouseClose");
    sound.LoadSound("hwanin", "Sounds/S1/C6-1/narr/hwanin.mp3");

    //환웅
    image.LoadImage("HwanwoongBody1", "./Images/S1/C6-1/HwanwoongBody1");
    image.LoadImage("HwanwoongBody2", "./Images/S1/C6-1/HwanwoongBody2");
    image.LoadImage("HwanwoongFace1", "./Images/S1/C6-1/HwanwoongFace1");
    image.LoadImage("HwanwoongFace2-1", "./Images/S1/C6-1/HwanwoongFace2-1");
    image.LoadImage("HwanwoongFace2-2", "./Images/S1/C6-1/HwanwoongFace2-2");
    sound.LoadSound("hwanwoong", "Sounds/S1/C6-1/narr/hwanwung.mp3");

    background(#ffffff);
    enterTime = time.time;
  }

  @Override public void OnDraw() {
    if (!narrFlag) {
      narrFlag = true;
      sound.PlaySound("narr");
    }
    mouseTick += time.deltaTime;
    if (mouseTick >= mouseTickInterval) {
      mouseTick = 0f;

      if (hwaninFaceFlag) {
        hwaninMouse = !hwaninMouse;
      } else {
        hwaninMouse = false;
      }
      //환웅

      if (hwanwoongFaceFlag) {
        hwanwoongMouse = !hwanwoongMouse;
      } else {
        hwanwoongMouse = false;
      }
    }
    if (time.time - enterTime >= hwaninStartTime) {
      hwaninFaceFlag = true;
      if (!hwaninVoiceFlag) {
        soundStartTime = time.time;
        hwaninVoiceFlag = true;
        sound.PlaySound("hwanin");
      }
      if (hwaninVoiceFlag && time.time - soundStartTime > hwaninDuration) {
        hwaninFaceFlag = false;
      }
    }
    //환웅 대사 시작지점
    if (time.time - enterTime >= hwanwoongStartTime) {
      hwanwoongFaceFlag=true;
      hwaninFaceFlag=false;
      if (!hwanwoongVoiceFlag) {
        soundStartTime = time.time;
        hwanwoongVoiceFlag = true;
        sound.PlaySound("hwanwoong");
      }
      if (hwanwoongVoiceFlag && time.time - soundStartTime > hwanwoongDuration) {
        hwanwoongFaceFlag = false;
      }
    }
    //EndPoint
    if (time.time - enterTime >= SCENE_DURATION) {
      scene.ChangeScene(new S1C6_2());
    }
    image.DrawImageScale("Background", centerX, centerY, 1f, 0f, 255f);

    //환인 Draw
    image.DrawImageScale("HwaninBody", hwaninX, hwaninY, 0.15, 0f, 255f);
    if (hwaninFaceFlag == false) {
      image.DrawImageScale("HwaninFace_MouseClose", hwaninX, hwaninY+hwaninfaceOffset, 0.15, 0f, 255f);
    } else {

      if (hwaninMouse) {
        image.DrawImageScale("HwaninFace_MouseClose", hwaninX, hwaninY+hwaninfaceOffset, 0.15, 0f, 255f);
      } else {
        image.DrawImageScale("HwaninFace_MouseOpen", hwaninX, hwaninY+hwaninfaceOffset, 0.15, 0f, 255f);
      }
    }
    //환웅 Draw
    if (hwanwoongFaceFlag==false) {
      image.DrawImageScale("HwanwoongBody1", hwanwoongX, hwanwoongY, 0.15, 0f, 255f);
      image.DrawImageScale("HwanwoongFace1", hwanwoongX+(-10), hwanwoongY+hwanwoongfaceOffsetY, 0.15, 0f, 255f);
    } else {
      image.DrawImageScale("HwanwoongBody2", hwanwoongX, hwanwoongY, 0.15, 0f, 255f);

      if (hwanwoongMouse) {
        image.DrawImageScale("HwanwoongFace2-1", hwanwoongX+hwanwoongfaceOffsetX, hwanwoongY+hwanwoongfaceOffsetY, 0.15, 0f, 255f);
      } else {
        image.DrawImageScale("HwanwoongFace2-2", hwanwoongX+hwanwoongfaceOffsetX, hwanwoongY+hwanwoongfaceOffsetY, 0.15, 0f, 255f);
      }
    }
  }

  @Override public void OnExit() {
  }
}
