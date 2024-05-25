public class S3C3V2_1_3 extends Scene {
  private static final float GIRL_X = 900;
  private static final float GIRL_Y = 480;
  private static final float GIRL_SCALE = 0.15;
  private static final float GIRL_EYE_Y = 410;

  private float HWAN_X = 300;
  private static final float HWAN_Y = 480;
  private static final float HWAN_SCALE = 0.15;
  private static final float HWAN_MOUSE_Y=405;
  private static final float HWAN_SHOE_Y=HWAN_Y+140;

  private final static int SCENE_SCONDS = 3; // 3초 동안 씬 진행
  private int startMinute;
  private int startSecond;

  public S3C3V2_1_3() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S3/C3/V2/_1/_3/background");

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
  }

  @Override public void OnDraw() {
    // 배경화면
    image.DrawImage("background", new PVector(width / 2, height / 2));

    // girl
    image.DrawImageScale("girl_body", new PVector(GIRL_X, GIRL_Y), new PVector(GIRL_SCALE, GIRL_SCALE, 0));

    // hwan
    if (HWAN_X <= GIRL_X-200) {
      HWAN_X+=2;
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
    // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    if (isTimeExceeded(startMinute, startSecond, SCENE_SCONDS)) {
      // scene.ChangeScene(new S3C3V2_2_1());
    }
  }

  @Override public void OnExit() {
  }
}
