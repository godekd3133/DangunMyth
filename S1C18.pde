public class S1C18 extends Scene {
  public float SCENE_DURATION = 15f;
  private float tigerSoundTime = 7f;
  private float bear_sound_time = 10f;
  private float bearX = width / 2 - 100;
  private float animalY = height / 2 + 50;
  private float tigerX = width / 2 + 200;

  private float changeInterval;
  private float changeTick;
  private int currentIndex;

  HashMap<String, Integer> playedSoundMap = new HashMap<String, Integer>();
  private float startTime;

  public S1C18() {
  }

  @Override public void OnEnter() {
    changeInterval = 0.5f;
    changeTick = 0f;
    currentIndex = 0;

    image.LoadImage("background", "Images/S1/C18/background");
    // image.LoadImage("bear_body", "Images/S1/C18/bear_body");
    // image.LoadImage("bear_eyes0", "Images/S1/C18/bear_eyes0");
    // image.LoadImage("bear_eyes1", "Images/S1/C18/bear_eyes1");
    // image.LoadImage("bear_head0", "Images/S1/C18/bear_head0");
    // image.LoadImage("bear_head1", "Images/S1/C18/bear_head1");
    // image.LoadImage("tiger_body", "Images/S1/C18/tiger_body");
    // image.LoadImage("tiger_head0", "Images/S1/C18/tiger_head0");
    // image.LoadImage("tiger_head1", "Images/S1/C18/tiger_head1");
    // image.LoadImage("tiger_eyes0", "Images/S1/C18/tiger_eyes0");
    // image.LoadImage("tiger_eyes1", "Images/S1/C18/tiger_eyes1");
    image.LoadImage("narr", "Images/S1/C18/narr");

    image.LoadImage("tiger0", "Images/S1/C18/tiger0");
    image.LoadImage("tiger1", "Images/S1/C18/tiger1");

    image.LoadImage("bear0", "Images/S1/C18/bear0");
    image.LoadImage("bear1", "Images/S1/C18/bear1");

    playedSoundMap = new HashMap<String, Integer>();
    sound.LoadSound("S1C18_NARR", "Sounds/S1/C18/narr/narr.mp3");
    sound.LoadSound("S1C18_TIGER", "Sounds/S1/C18/narr/tiger.mp3");
    sound.LoadSound("S1C18_BEAR", "Sounds/S1/C18/narr/bear.mp3");
    playedSoundMap.put("S1C18_NARR", 0);
    playedSoundMap.put("S1C18_TIGER", 0);
    playedSoundMap.put("S1C18_BEAR", 0);

    startTime = millis();

  }

  @Override public void OnDraw() {
    changeTick += time.deltaTime;

    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    // image.DrawImageScale("bear_body", new PVector(bearX, animalY, 0), new PVector(0.25, 0.25, 0));
    // image.DrawImageScale("bear_eyes" + currentIndex, new PVector(bearX, animalY, 0), new PVector(0.25, 0.25, 0));
    // image.DrawImageScale("bear_head" + currentIndex, new PVector(bearX, animalY, 0), new PVector(0.25, 0.25, 0));
    // image.DrawImageScale("tiger_body", new PVector(tigerX, animalY, 0), new PVector(0.25, 0.25, 0));
    // image.DrawImageScale("tiger_eyes" + currentIndex, new PVector(tigerX, animalY, 0), new PVector(0.25, 0.25, 0));
    // image.DrawImageScale("tiger_head" + currentIndex, new PVector(tigerX, animalY, 0), new PVector(0.25, 0.25, 0));

    //240604 수정
    image.DrawImageScale("bear"+currentIndex, new PVector(bearX, animalY, 0), new PVector(0.25, 0.25, 0));
    image.DrawImageScale("tiger"+currentIndex, new PVector(tigerX, animalY, 0), new PVector(0.25, 0.25, 0));

    //240603 수정
    image.DrawImageScale("narr", new PVector(width / 2, height / 2), new PVector(1.0f, 1.0f));

    float currentTime =(millis() - startTime) / 1000;
    PlaySoundOnce("S1C18_NARR");
    if (currentTime >= tigerSoundTime) {
      PlaySoundOnce("S1C18_TIGER");
    }
    if (currentTime >= bear_sound_time) {
      PlaySoundOnce("S1C18_BEAR");
    }
    if (changeTick >= changeInterval) {
      currentIndex ^= 1;
      changeTick = 0;
    }
    if (time.time - enterTime >= SCENE_DURATION) {
      scene.ChangeScene(new S1C19_1());
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
