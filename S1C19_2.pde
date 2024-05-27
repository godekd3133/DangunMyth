public class S1C19_2 extends Scene {
  public float SCENE_DURATION = 10f;
  private float armInterval;
  private float mouthInterval;
  private float mouthChangeTick;
  private float armChangeTick;
  private int mouthIndex;
  private int armIndex;

  public S1C19_2() {
  }

  @Override public void OnEnter() {
    armInterval = 0.15f;
    mouthInterval = 0.1f;
    armChangeTick = 0f;
    mouthChangeTick = 0f;
    mouthIndex = 0;
    armIndex = 0;

    image.LoadImage("background", "Images/S1/C19/background1");
    image.LoadImage("arm0", "Images/S1/C19/hwanwoong_arm1");
    image.LoadImage("arm1", "Images/S1/C19/hwanwoong_arm0");
    image.LoadImage("mouth0", "Images/S1/C19/hwanwoong_mouth1");
    image.LoadImage("mouth1", "Images/S1/C19/hwanwoong_mouth0");
    image.LoadImage("skin", "Images/S1/C19/hwanwoong_skin");
  }

  @Override public void OnDraw() {
    mouthChangeTick += time.deltaTime;
    armChangeTick += time.deltaTime;

    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    image.DrawImageScale("skin", new PVector(600, height - 250, 0), new PVector(0.25, 0.25, 0));
    image.DrawImageScale("arm" + armIndex, new PVector(600, height - 250, 0), new PVector(0.25, 0.25, 0));
    image.DrawImageScale("mouth" + mouthIndex, new PVector(600, height - 250, 0), new PVector(0.25, 0.25, 0));

    if (mouthChangeTick >= mouthInterval) {
      mouthIndex ^= 1;
      mouthChangeTick = 0;
    }
    if (armChangeTick >= armInterval) {
      armIndex ^= 1;
      armChangeTick = 0;
    }
    if (time.time - enterTime >= SCENE_DURATION) {
      scene.ChangeScene(new S1C19_3());
    }
  }

  @Override public void OnExit() {
  }
}
