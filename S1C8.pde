public class S1C8 extends Scene {
  public float SCENE_DURATION = 6f;

  int centerX = width/2;
  int centerY = height/2;

  boolean tick1Flag = true;
  int tick1Cnt = 0;

  int endpointTick = 0;

  //환인 위치
  int hwaninfaceOffset = -300;
  int hwaninX = centerX-250;
  int hwaninY = centerY+380;

  //환인 얼굴 움직이는 변수
  boolean hwaninFaceFlag=true;
  int hwaninFaceCnt = 0;
  boolean hwaninFace = true;

  HashMap<String, Integer> playedSoundMap = new HashMap<String, Integer>();
  private float startTime;

  public S1C8() {
  }

  @Override public void OnEnter() {
    // int hwaninX = centerX-200;
    // int hwaninY = centerY;

    //환인
    image.LoadImage("BackgroundS1C8", "./Images/S1/C8/Background");
    image.LoadImage("HwaninBody", "./Images/S1/C8/HwaninBody");
    // image.LoadImage("HwaninFace_MouseClose", "./Images/S1/C8/HwaninFace_MouseClose");
    // image.LoadImage("HwaninFace_MouseOpen", "./Images/S1/C8/HwaninFace_MouseOpen");
    image.LoadImage("HwaninFace", "./Images/S1/C8/HwaninFace");

    image.LoadImage("HwaninHand", "./Images/S1/C8/HwaninHand");
    image.LoadImage("NarrS1C8", "./Images/S1/C8/narr");

    sound.LoadSound("NarrS1C8", "Sounds/S1/C8/narr/narr.mp3");
    sound.LoadSound("HawninS1C8", "Sounds/S1/C8/narr/hwanin.mp3");
    playedSoundMap = new HashMap<String, Integer>();
    playedSoundMap.put("NarrS1C8", 0);
    playedSoundMap.put("HawninS1C8", 0);

    startTime = millis();

    // print("Enter");
    background(#ffffff);
  }

  @Override public void OnDraw() {
    // int mouseMove =(int)random(0,15);

    // if (hwaninFace) tick1Cnt++;
    // else tick1Cnt--;

    // if (tick1Cnt >= 20 || tick1Cnt <= 0) {
      //   hwaninFace = !hwaninFace;
      // }
    // endpointTick++;
    // println(endpointTick);
    // if (endpointTick >= 200) {
      //     scene.ChangeScene(new S1C6_1());
      // }

    image.DrawImageScale("BackgroundS1C8", centerX, centerY, 1f, 0f, 255f);

    //환인 Draw
    image.DrawImageScale("HwaninBody", hwaninX, hwaninY, 0.49, 0f, 255f);
    // if (mouseMove < 10) image.DrawImageScale("HwaninFace_MouseClose", hwaninX+15, hwaninY+hwaninfaceOffset+tick1Cnt, 0.4, 0f, 255f);
    // else image.DrawImageScale("HwaninFace_MouseOpen", hwaninX+15, hwaninY+hwaninfaceOffset+tick1Cnt, 0.4, 0f, 255f);

    image.DrawImageScale("HwaninFace", hwaninX+15, hwaninY+hwaninfaceOffset+tick1Cnt-80, 0.49, 0f, 255f);
    image.DrawImageScale("HwaninHand", hwaninX+(-35-40), hwaninY+(-140-20), 0.4, 0.7, 255f);

    float currentTime =(millis() - startTime) / 1000;

    PlaySoundOnce("NarrS1C8");
    if (currentTime > 3.0f) {
      PlaySoundOnce("HawninS1C8");
      image.DrawImageScale("NarrS1C8", new PVector(centerX, centerY), new PVector(1.0f, 1.0f));
    }
    // print("Draw");

    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S1C9());
    }
  }

  void PlaySoundOnce(String soundName) {
    if (playedSoundMap.get(soundName) == 1) {
      return;
    }
    sound.PlaySound(soundName);
    playedSoundMap.put(soundName, 1);
  }

  @Override public void OnExit() {
  }
}
