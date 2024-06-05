public class S1C19_2 extends Scene {
  public float SCENE_DURATION = 10f;
  private float armInterval;
  private float mouthInterval;
  private float mouthChangeTick;
  private float armChangeTick;
  private int mouthIndex;
  private int armIndex;

  private float firstDuration = 4.5f;
  private float secondDuration = 4.0f;
  private float thridDuration = 5.5f;

  private boolean firstFlag = false;
  private boolean secondFlag = false;
  private boolean thridFlag = false;

  private boolean animalVoiceFlag = false;

  public S1C19_2() {
  }

  @Override public void OnEnter() {
    armInterval = 0.25f;
    mouthInterval = 0.2f;
    armChangeTick = 0f;
    mouthChangeTick = 0f;
    mouthIndex = 0;
    armIndex = 0;

    firstDuration = 2.5f;
    secondDuration = 2.5f;
    thridDuration = 5.5f;

    firstFlag = false;
    secondFlag = false;
    thridFlag = false;

    image.LoadImage("background", "Images/S1/C19/background1");
    image.LoadImage("arm", "Images/S1/C19/hwanwoong_arm");
    image.LoadImage("mouth0", "Images/S1/C19/hwanwoong_mouth1");
    image.LoadImage("mouth1", "Images/S1/C19/hwanwoong_mouth0");
    image.LoadImage("skin", "Images/S1/C19/hwanwoong_skin");
    image.LoadImage("C19-2-Text", "Images/S1/C19/C19-2-Text");

    sound.LoadSound("hwanwoong1", "Sounds/S1/C19-2/hwanwoong1.mp3");
    sound.LoadSound("hwanwoong2", "Sounds/S1/C19-2/hwanwoong2.mp3");
    enterTime = time.time;
  }

  @Override public void OnDraw() {
    mouthChangeTick += time.deltaTime;
    armChangeTick += time.deltaTime;

    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    if (armIndex == 0) image.DrawImageScale("arm", new PVector(650, height - 350), new PVector(0.25, 0.25, 0));
    else image.DrawImageScale("arm", new PVector(630, height - 330), new PVector(0.25, 0.25), 0.3f);
    image.DrawImageScale("skin", new PVector(600, height - 250, 0), new PVector(0.25, 0.25, 0));
    image.DrawImageScale("mouth" + mouthIndex, new PVector(600, height - 250, 0), new PVector(0.25, 0.25, 0));

    image.DrawImage("C19-2-Text", new PVector(width / 2, height / 2, 0));

    //그렇구나
    if (time.time - enterTime > 3f && !firstFlag) {
      firstFlag = true;
      sound.PlaySound("hwanwoong1");
    }
    //너희의 소원을 들어주마
    if (time.time - enterTime >= firstDuration + 1.5f) {
      if (!secondFlag) {
        secondFlag = true;
        sound.PlaySound("hwanwoong2");
      }
    }
    //입 flag
    if (mouthChangeTick >= mouthInterval) {
      mouthIndex ^= 1;
      mouthChangeTick = 0;
    }
    //손 Flag
    if (armChangeTick >= armInterval) {
      armIndex ^= 1;
      armChangeTick = 0;
    }
    if (time.time - enterTime >= firstDuration+secondDuration+2.0f) {
      scene.ChangeScene(new S1C19_3());
    }
  }

  @Override public void OnExit() {
  }
}
