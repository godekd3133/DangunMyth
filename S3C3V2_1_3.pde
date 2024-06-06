public class S3C3V2_1_3 extends Scene {
  private float GIRL_X = 900;
  private float GIRL_Y = 480;
  private float GIRL_SCALE = 0.15;
  private float GIRL_EYE_Y = 410;

  private float HWAN_X = 300;
  private float HWAN_Y = 480;
  private float HWAN_SCALE = 0.15;
  private float HWAN_MOUSE_Y=405;
  private float HWAN_SHOE_Y=HWAN_Y+140;

  private int startMillis;
  private float narrDuration;
  
  private float stepTime = 0;
  private float curTime = 0;

  public S3C3V2_1_3() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S3/C3/V2/_1/_3/background");
    image.LoadImage("hwanwoong_text", "Images/S3/C3/V2/_1/_3/hwanwoong_text");
    image.LoadImage("girl_text", "Images/S3/C3/V2/_1/_3/girl_text");

    sound.LoadSound("woonggirl", "Sounds/S3/C3/V2/_1/_3/narr/woonggirl.mp3");
    sound.LoadSound("hwanwoong", "Sounds/S3/C3/V2/_1/_3/narr/hwanwoong.mp3");

    // girl
    image.LoadImage("girl_body", "Images/S3/C3/V2/_1/_3/girl");
    image.LoadImage("girl_eye_1", "Images/S3/C3/V2/_1/_3/girleye1");
    image.LoadImage("girl_eye_2", "Images/S3/C3/V2/_1/_3/girleye2");

    // hwan
    image.LoadImage("hwan_body", "Images/S3/C3/V2/_1/_3/hwan");
    image.LoadImage("hwan_mouse_1", "Images/S3/C3/V2/_1/_3/hwanmouse1");
    image.LoadImage("hwan_mouse_2", "Images/S3/C3/V2/_1/_3/hwanmouse2");
    image.LoadImage("hwan_shoe_1", "Images/S3/C3/V2/_1/_3/hwanshoe");
    image.LoadImage("hwan_shoe_2", "Images/S3/C3/V2/_1/_3/hwanshoe2");
    sound.LoadSound("Step","Sounds/Effects/Step_Rock_02.mp3");

    GIRL_X = 900;
    GIRL_Y = 480;
    GIRL_SCALE = 0.15;
    GIRL_EYE_Y = 410;
    HWAN_X = 300;
    HWAN_Y = 480;
    HWAN_SCALE = 0.15;
    HWAN_MOUSE_Y=405;
    HWAN_SHOE_Y=HWAN_Y+140;

    startMillis=millis();
  }

  @Override public void OnDraw() {
    sound();
    // 배경화면
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImage("hwanwoong_text", new PVector(width / 2, height / 2));
    image.DrawImage("girl_text", new PVector(width / 2, height / 2));

    // girl
    image.DrawImageScale("girl_body", new PVector(GIRL_X, GIRL_Y), new PVector(GIRL_SCALE, GIRL_SCALE, 0));

    // hwan
    if (HWAN_X <= GIRL_X-200) {
      HWAN_X+=1.5;
      if ((millis()/500)%2==0) {
        image.DrawImageScale("hwan_shoe_1", new PVector(HWAN_X+17, HWAN_SHOE_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
      } else {
        image.DrawImageScale("hwan_shoe_2", new PVector(HWAN_X+17, HWAN_SHOE_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
      }
    } else {
      image.DrawImageScale("hwan_shoe_2", new PVector(HWAN_X+17, HWAN_SHOE_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
    }
    if ((millis()/500)%2==0) {
      image.DrawImageScale("girl_eye_1", new PVector(GIRL_X, GIRL_EYE_Y), new PVector(GIRL_SCALE, GIRL_SCALE, 0));
      image.DrawImageScale("hwan_body", new PVector(HWAN_X, HWAN_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
      image.DrawImageScale("hwan_mouse_1", new PVector(HWAN_X+10, HWAN_MOUSE_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
    } else {
      image.DrawImageScale("girl_eye_2", new PVector(GIRL_X, GIRL_EYE_Y), new PVector(GIRL_SCALE, GIRL_SCALE, 0));
      image.DrawImageScale("hwan_body", new PVector(HWAN_X, HWAN_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
      image.DrawImageScale("hwan_mouse_2", new PVector(HWAN_X+10, HWAN_MOUSE_Y), new PVector(HWAN_SCALE, HWAN_SCALE, 0));
    }
    if(stepTime > 0.5 && curTime < 4.8f){
     sound.PlaySound("Step");
     stepTime = 0;
    }else{
     stepTime += time.deltaTime; 
    }
    curTime += time.deltaTime;
    
    
  }

  @Override public void OnExit() {
    sound.stopNowPlaying();
  }

  void sound() {
    // 씬 시작 후 1초 뒤 대사1 시작
    if (sound.hasSound("hwanwoong")&&isTimeExceededMillis(startMillis, 1)) {
      narrDuration=sound.soundDuration("hwanwoong");
      sound.playSoundOnce("hwanwoong");
      startMillis = millis(); // 대사 1 시작 millis
    }
    // 대사 1 종료 후 1.2초 뒤 대사2 시작
    if (!sound.hasSound("hwanwoong")&&sound.hasSound("woonggirl")&&isTimeExceededMillis(startMillis, narrDuration+1.2)) {
      narrDuration=sound.soundDuration("woonggirl");
      sound.playSoundOnce("woonggirl");
      startMillis = millis();
    }
    // 대사 2 종료 후 1초 뒤 다음 장면으로 이동
    if (!sound.hasSound("hwanwoong")&&!sound.hasSound("woonggirl")&&isTimeExceededMillis(startMillis, narrDuration+1.0)) {
      scene.ChangeScene(new S3C3V2_2_1());
    }
  }
}
