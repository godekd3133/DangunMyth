public class S2C3 extends Scene {
  public float SCENE_DURATION =2f;
  private static final String background = "S2C3_background";
  private static final String bear = "S2S3_bear";
  private static final String bearEye = "S2S3_bear_eye";
  private static final String tiger = "S2S3_tiger";
  private static final String basket = "S2S3_basket";
  private static final String garlic = "S2S3_garlic";
  private static final String ssuk = "S2S3_ssuk";
  private static final String text = "S2S3_text";

  HashMap<String, Integer> playedSoundMap = new HashMap<String, Integer>();
  private static final String narr1 = "S2C3_narr1";
  private static final String narr2 = "S2C3_narr2";

  private PVector backgroundPosition = new PVector(width / 2, height / 2);
  private PVector backgroundSacle = new PVector(1, 1);

  private PVector animalScale = new PVector(0.25f, 0.25f);
  private PVector tigerPosition = new PVector(510, 500);
  private PVector tigerScale = new PVector(0.2f, 0.2f);

  private PVector basketPosition = new PVector(800, 570);

  private float startTime;

  public S2C3() {
  }

  @Override public void OnEnter() {
    // timeline.clear();
    font.LoadFont("LeeSeoyun.otf","LeeSeoyun.otf");
    image.LoadImage(background, "Images/S2/C3/background");
    image.LoadImage(bear, "Images/S2/C3/bear");
    image.LoadImage(bearEye, "Images/S2/C3/bear_eye");
    image.LoadImage(tiger, "Images/S2/C3/tiger");
    image.LoadImage(basket, "Images/S2/C3/basket");
    image.LoadImage(garlic, "Images/S2/C3/garlic");
    image.LoadImage(ssuk, "Images/S2/C3/ssuk");
    image.LoadImage(text, "Images/S2/C3/text");

    sound.LoadSound(narr1, "Sounds/S2/C3/narr/narr1.mp3");
    playedSoundMap = new HashMap<String, Integer>();
    playedSoundMap.put(narr1, 0);

    basketPosition = new PVector(800, 570);
    animalScale = new PVector(0.25f, 0.25);
    tigerPosition = new PVector(510, 500);
    tigerScale = new PVector(0.2f, 0.2f);

    startTime = millis();
  }

  @Override public void OnDraw() {
    float currentTime =(millis() - startTime) / 1000;

    PlaySoundOnce(narr1);
    image.DrawImageScale(background, backgroundPosition, backgroundSacle);

    float timeMovingTiger = 1.1;
    float tigerPositionPercent =(currentTime > timeMovingTiger ? timeMovingTiger : currentTime) / timeMovingTiger;
    tigerPosition.x = lerp(480, 570, Ease.EaseOutCubic(tigerPositionPercent));
    image.DrawImageScale(tiger, tigerPosition, tigerScale);

    image.DrawImageScale(bearEye, new PVector(257, 400 - 65), animalScale);
    image.DrawImageScale(bear, new PVector(260, 400), animalScale);

    float timeMovingBasket = 1.5;
    float basketPositionPercent =(currentTime > timeMovingBasket ? timeMovingBasket : currentTime) / timeMovingBasket;

    //240603 마늘 사이즈 수정
    float garlicX1 = lerp(700, 820, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(garlic, new PVector(garlicX1, 540), new PVector(0.03f, 0.03f), getAngleByDegree(-20));
    float garlicX2 = lerp(720, 840, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(garlic, new PVector(garlicX2, 570), new PVector(0.035f, 0.035f), getAngleByDegree(160));
    float garlicX3 = lerp(730, 940, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(garlic, new PVector(garlicX3, 570), new PVector(0.04f, 0.04f), getAngleByDegree(-20));
    float garlicX4 = lerp(740, 1000, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(garlic, new PVector(garlicX4, 550), new PVector(0.033f, 0.033f), getAngleByDegree(30));

    float ssukX1 = lerp(720, 780, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(ssuk, new PVector(ssukX1, 520), new PVector(0.02f, 0.02f), getAngleByDegree(10));
    float ssukX2 = lerp(740, 860, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(ssuk, new PVector(ssukX2, 590), new PVector(0.03f, 0.03f), getAngleByDegree(100));
    float ssukX3 = lerp(730, 900, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(ssuk, new PVector(ssukX3, 530), new PVector(0.04f, 0.04f), getAngleByDegree(30));
    float ssukX4 = lerp(740, 1020, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(ssuk, new PVector(ssukX4, 590), new PVector(0.03f, 0.03f), getAngleByDegree(-30));

    basketPosition.x = lerp(700, 800, Ease.EaseOutCubic(basketPositionPercent));
    image.DrawImageScale(basket, basketPosition, new PVector(0.25f, 0.25f), getAngleByDegree(30));

    if (currentTime > SCENE_DURATION) {
      scene.ChangeScene(new S2C4());
    }
    PrintText();
  }

  void PlaySoundOnce(String soundName) {
    if (playedSoundMap.get(soundName) == 1) {
      return;
    }
    sound.PlaySound(soundName);
    playedSoundMap.put(soundName, 1);
  }

  void PrintText() {
    float currentTime =(millis() - startTime) / 1000;

    if (currentTime > 1) {
      image.DrawImageScale(text, new PVector(660, 280), new PVector(1f, 1f));
    } else {
      image.DrawImageScale(text, new PVector(960, 480), new PVector(1f, 1f));
    }
  }

  float getAngleByDegree(float degree) {
    return PI * degree / 180;
  }

  @Override public void OnExit() {
  }
}
