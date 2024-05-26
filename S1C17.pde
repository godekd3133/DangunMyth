public class S1C17 extends Scene {
  private final static String PREFIX = "Images/S1/C17/";
  private float HWANUNG_X = width / 2 - 100;
  private float HWANUNG_Y =  height / 2 - 50;
  private float HWANUNG_SCALE = 0.09;
  private float VASSAL_X = width / 2;
  private float VASSAL_Y =  height / 2 - 150;
  private float VASSAL_SCALE = 0.095;
  private float VASSAL1_X = width / 2 - 480;
  private float VASSAL1_Y =  height / 2 - 270;
  private float VASSAL1_SCALE = 0.07;
  private float VASSAL2_X = width / 2 - 170;
  private float VASSAL2_Y =  height / 2 - 220;
  private float VASSAL2_SCALE = 0.09;
  private float VASSAL3_X = width / 2 - 350;
  private float VASSAL3_Y =  height / 2 - 80;
  private float VASSAL3_SCALE = 0.1;
  private float VASSAL_JUMP = 0;
  private float VASSAL1_JUMP = 0;
  private float VASSAL2_JUMP = 0;
  private float VASSAL3_JUMP = 0;
  private float BEAR_X = width / 2 ;
  private float BEAR_Y =  height / 2 + 800;
  private float BEAR_SCALE = 0.4;
  private float TIGER_X = width / 2 + 400;
  private float TIGER_Y =  height / 2 + 900;
  private float TIGER_SCALE = 0.4;
  private float BEAR_POP = 0;
  private float TIGER_POP = 0;
  private float BUSH_OFFSET = 0;
  private final static int SCENE_SCONDS = 5; // 3초 동안 씬 진행
  private int startMinute;
  private int startSecond;
  
  @Override public void OnEnter() {
    image.LoadImage("background", PREFIX + "background");
    image.LoadImage("BUSH", PREFIX + "BUSH");
    image.LoadImage("HWANUNG", PREFIX + "HWANUNG");
    image.LoadImage("VASSAL", PREFIX + "VASSAL");
    image.LoadImage("VASSAL1", PREFIX + "VASSAL1");
    image.LoadImage("VASSAL2", PREFIX + "VASSAL2");
    image.LoadImage("VASSAL3", PREFIX + "VASSAL3");
    image.LoadImage("BEAR", PREFIX + "BEAR");
    image.LoadImage("TIGER", PREFIX + "TIGER");
    startMinute=minute();
    startSecond=second();
  }

  @Override public void OnDraw() {
    VASSAL_JUMP = abs(sin(float(millis()) / 100)) * 10;
    VASSAL1_JUMP = max((abs(sin(float(millis()) / 135 + 0.146))) * 1.4 - 0.4 , 0) * 10;
    VASSAL2_JUMP = max((abs(sin(float(millis()) / 170 + 0.5))) * 2 - 1 , 0) * 10;
    VASSAL3_JUMP = max((abs(sin(float(millis()) / 120 + 0.674))) * 1.6 - 0.6 , 0) * 10;
    if(BEAR_POP <= 450){
      BEAR_POP += 2;
    }
    if(TIGER_POP <= 600){
      TIGER_POP += 3;
    }
    if(BUSH_OFFSET <= 200){
      BUSH_OFFSET += 1;
    }
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImageScale("VASSAL2", new PVector(VASSAL2_X, VASSAL2_Y - VASSAL2_JUMP), new PVector(VASSAL2_SCALE, VASSAL2_SCALE));
    image.DrawImageScale("VASSAL1", new PVector(VASSAL1_X, VASSAL1_Y - VASSAL1_JUMP), new PVector(VASSAL1_SCALE, VASSAL1_SCALE));
    image.DrawImageScale("VASSAL3", new PVector(VASSAL3_X, VASSAL3_Y - VASSAL3_JUMP), new PVector(VASSAL3_SCALE, VASSAL3_SCALE));
    image.DrawImageScale("VASSAL", new PVector(VASSAL_X, VASSAL_Y - VASSAL_JUMP), new PVector(VASSAL_SCALE, VASSAL_SCALE));
    image.DrawImageScale("HWANUNG", new PVector(HWANUNG_X, HWANUNG_Y), new PVector(HWANUNG_SCALE, HWANUNG_SCALE));
    image.DrawImage("BUSH", new PVector(width / 2, height / 2 + 200 - BUSH_OFFSET));
    image.DrawImageScale("TIGER", new PVector(TIGER_X, TIGER_Y - TIGER_POP), new PVector(TIGER_SCALE, TIGER_SCALE));
    image.DrawImageScale("BEAR", new PVector(BEAR_X, BEAR_Y - BEAR_POP), new PVector(BEAR_SCALE, BEAR_SCALE));
  }

  @Override public void OnExit() {
  }
}
