public class S3C3V1_3_3 extends Scene {
  private float preparationTime = 5f;
  private String BACKGROUND_IMAGE = "Images/S3/C3/V1/_3/_3/Background";
  private String DANGUN_IMAGE = "Images/S3/C3/V1/_3/_3/Dangun";
  private float alpha = 1f;

  private float fadeoutTime = 6f;

  private boolean firstFlag = false;

  public S3C3V1_3_3() {
  }

  @Override public void OnEnter() {
    // println("133 Enter");
    image.LoadImage("background", BACKGROUND_IMAGE);
    image.LoadImage("dangun", DANGUN_IMAGE);

    image.LoadImage("text", "Images/S3/C3/V1/_3/_3/text");

    sound.LoadSound("narr", "Sounds/S3/C3/V1/_3/_3/narr.mp3");
    firstFlag=false;
    alpha=255f;
    fadeoutTime= 8f;
    preparationTime= 7f;
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1f, 1f, 0));
    image.DrawImageScale("dangun", new PVector(width / 2, height / 2, 0), new PVector(0.25f, 0.25f, 0),0f, alpha);

    image.DrawImage("text", new PVector(width / 2, height / 2, 0));

    // if (time.time - enterTime >= 1f) {
      //   alpha -= 255/fadeoutTime * time.deltaTime;
      // }
    if (time.time - enterTime >= preparationTime) {
      scene.CreditScene();
    }
    if (!firstFlag) {
      firstFlag = true;
      sound.PlaySound("narr");
    }
  }

  @Override public void OnExit() {
  }
}
