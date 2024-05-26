public class S3C3V2_2_2 extends Scene {
  private float preparationTime = 3f;
  private String BACKGROUND_IMAGE = "Images/S3/C3/V1/_3/_2/Background";
  private String CHARACTER_IMAGE = "Images/S3/C3/V1/_3/_2/Characters";
  private float alpha = 1f;

  private float fadeoutTime = 4f;

  public S3C3V2_2_2() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", BACKGROUND_IMAGE);
    image.LoadImage("character", CHARACTER_IMAGE);
    alpha=255f;
    fadeoutTime= 4f;
    preparationTime= 3f;
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1f, 1f, 0));
    image.DrawImageScale("character", new PVector(width / 2, height / 2, 0), new PVector(0.25f, 0.25f, 0),0f, alpha);
    if (time.time - enterTime >= 1f) {
      alpha -= 255/fadeoutTime * time.deltaTime;
    }
    if (alpha <= 0f) {
      preparationTime -= time.deltaTime;
      if (preparationTime <= 0f) {
        scene.ChangeScene(new S3C3V2_2_3());
      }
    }
  }

  @Override public void OnExit() {
  }
}
