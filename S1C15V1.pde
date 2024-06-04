public class S1C15V1 extends Scene {
  private final static String PREFIX = "Images/S1/C15-1/";
  public float SCENE_DURATION = 10f;
  private float HWANUNG_BODY_X = width / 2;
  private float HWANUNG_BODY_Y = height / 2 + 50;
  private float HWANUNG_BODY_SCALE = 0.25;
  private float HWANUNG_FACE_X = width / 2;
  private float HWANUNG_FACE_Y = height / 2 - 120;
  private float HWANUNG_FACE_SCALE = 0.3;
  private float HWANUNG_SWEAT_X = width / 2 + 10;
  private float HWANUNG_SWEAT_Y = height / 2;
  private float HWANUNG_SWEAT_SCALE = 0.4;
  private float flowY = 0;
  private float faceX = 0;
  private boolean showButton = false;

  HashMap<String, Integer> playedSoundMap = new HashMap<String, Integer>();
  private float startTime;

  @Override public void OnEnter() {
    image.LoadImage("background", PREFIX + "background");
    image.LoadImage("HWANUNG_BODY", PREFIX + "HWANUNG_BODY");
    image.LoadImage("HWANUNG_FACE", PREFIX + "HWANUNG_FACE");
    image.LoadImage("HWANUNG_SWEAT", PREFIX + "HWANUNG_SWEAT");
    image.LoadImage("HWANUNG_TEXT", PREFIX + "TEXT");

    image.LoadImage("button_top", "Images/S1/C15-1/button_top");
    image.LoadImage("button_bottom", "Images/S1/C15-1/button_bottom");

    sound.LoadSound("HWANUNG_NARR1", "Sounds/S1/C15-1/narr/narr1.mp3");
    sound.LoadSound("HWANUNG_NARR2", "Sounds/S1/C15-1/narr/narr2.mp3");
    playedSoundMap = new HashMap<String, Integer>();
    playedSoundMap.put("HWANUNG_NARR1", 0);
    playedSoundMap.put("HWANUNG_NARR2", 0);
    showButton = true;

    flowY = 0;
    faceX = 0;
    startTime = millis();
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImageScale("HWANUNG_BODY", new PVector(HWANUNG_BODY_X, HWANUNG_BODY_Y), new PVector(HWANUNG_BODY_SCALE, HWANUNG_BODY_SCALE));
    // faceX = sin(float(millis()) * 0.004) * 4; //240604 QA수정(얼굴 흔들림 삭제)
    image.DrawImageScale("HWANUNG_FACE", new PVector(HWANUNG_FACE_X + faceX + 2, HWANUNG_FACE_Y), new PVector(HWANUNG_FACE_SCALE, HWANUNG_FACE_SCALE));
    //240603 수정 : Drop 속도 Down 및 반복 삭제
    if (flowY <= 1.5) {
      flowY += 0.005;
    } else {
      // flowY = 0;
    }
    HWANUNG_SWEAT_Y = height / 2 +(flowY * 40) - 150;
    image.DrawImageScale("HWANUNG_SWEAT", new PVector(HWANUNG_SWEAT_X + 4, HWANUNG_SWEAT_Y), new PVector(HWANUNG_SWEAT_SCALE, HWANUNG_SWEAT_SCALE));

    float currentTime =(millis() - startTime) / 1000;
    PlaySoundOnce("HWANUNG_NARR1");
    if (currentTime > 1.0f) {
      PlaySoundOnce("HWANUNG_NARR2");
    }
    //240603 텍스트 수정
    image.DrawImage("HWANUNG_TEXT", new PVector(width / 2, height / 2+50));

    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S1C15V2());
    }

    if (showButton) {
      image.DrawImageScale("button_top", new PVector(width / 2, height / 2), new PVector(1, 1));
      image.DrawImageScale("button_bottom", new PVector(width / 2, height / 2), new PVector(1, 1));

      //240605 QA
      //Mouse Hover
      if (mouseX > 480 && mouseX < 800 && mouseY > 375 && mouseY < 459) {
        image.DrawImage("button_top", new PVector(width / 2, height / 2), 0f,255,220,220,220);
      } else {
        image.DrawImageScale("button_top", new PVector(width / 2, height / 2), new PVector(1, 1));
      }
      //Mouse Hover
      if (mouseX > 480 && mouseX < 800 && mouseY >237 && mouseY < 324) {
        image.DrawImage("button_bottom", new PVector(width / 2, height / 2), 0f,255,220,220,220);
      } else {
        image.DrawImageScale("button_bottom", new PVector(width / 2, height / 2), new PVector(1, 1));
      }
      if (mousePressed && mouseButton == LEFT) {
        /// x 480 ~ 800 y237 ~ 324
        if (mouseX > 480 && mouseX < 800 && mouseY >237 && mouseY < 324) {
          // go back
          scene.ChangeScene(new S1C15());
          showButton = false;
        }
        /// x 480 ~ 800 y 375 ~ 459
        else if (mouseX > 480 && mouseX < 800 && mouseY > 375 && mouseY < 459) {
          print('2');

          //Home 버튼 눌렀을 떄 어떻게 해야하는지 안정해져있음
          showButton = false;

        }
      }
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
