public class S1C6_2 extends Scene {
  int centerX = width/2;
  int centerY = height/2;
  public float SCENE_DURATION = 11f;
  float hwaninFaceScale = 0.4f;

  float hwaninStartTime = 5.5f;

  boolean narrFlag = false;
  boolean hwaninVoiceFlag = false;

  boolean tick1Flag = true;
  int tick1Cnt = 0;

  int endpointTick = 0;

  //환인 위치
  int hwaninfaceOffset = -120;
  int hwaninX = centerX-250;
  int hwaninY = centerY+350;

  //환인 얼굴 움직이는 변수
  boolean hwaninFaceFlag=true;
  int hwaninFaceCnt = 0;
  boolean hwaninFace = true;

  public S1C6_2() {
  }

  @Override public void OnEnter() {
    hwaninFaceScale= 0.4f;
    // int hwaninX = centerX-200;
    // int hwaninY = centerY;

    //나레이션
    sound.LoadSound("narr", "Sounds/S1/C6-2/narr/narr.mp3");

    //환인
    image.LoadImage("Background2", "./Images/S1/C6-2/Background");
    image.LoadImage("HwaninBody", "./Images/S1/C6-2/HwaninBody");
    image.LoadImage("HwaninFace", "./Images/S1/C6-2/HwaninFace");
    image.LoadImage("text", "./Images/S1/C6-2/text");
    sound.LoadSound("hwanin", "Sounds/S1/C6-2/narr/hwanin.mp3");

    // print("Enter");
    background(#ffffff);
  }

  @Override public void OnDraw() {
    if (!narrFlag) {
      narrFlag = true;
      sound.PlaySound("narr");
    }
    if (time.time - enterTime > hwaninStartTime && !hwaninVoiceFlag) {
      hwaninVoiceFlag = true;
      sound.PlaySound("hwanin");
    }
    if (hwaninFace) hwaninFaceScale += time.deltaTime * 0.2f;
    else hwaninFaceScale -= time.deltaTime * 0.2f;

    if (hwaninFaceScale >= 0.5f || hwaninFaceScale <= 0.36f) {
      hwaninFace = !hwaninFace;
    }
    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S1C7());
    }
    image.DrawImageScale("Background2", centerX, centerY, 1f, 0f, 255f);

    //환인 Draw
    image.DrawImageScale("HwaninBody", hwaninX, hwaninY, 0.4, 0f, 255f);
    image.DrawImageScale("HwaninFace", hwaninX+15, hwaninY+hwaninfaceOffset, hwaninFaceScale, 0f, 255f);
    image.DrawImage("text", new PVector(centerX, centerY, 0));

    // print("Draw");
  }

  @Override public void OnExit() {
  }
}
