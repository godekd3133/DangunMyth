public class S3C3V1_4_2 extends Scene {
  private int SCENE_SCONDS = 5; // 5초 동안 씬 진행
  private String PREFIX = "Images/S3/C3/V1/_4/_2/";

  private float preparationTime = 1f;
  private float alpha = 1f;
  private float fadeoutTime = 4f;

  @Override public void OnEnter() {
    image.LoadImage("background", PREFIX+"background");
    image.LoadImage("family", PREFIX+"family");

    alpha=255f;
    fadeoutTime= 4f;
    preparationTime= 3f;
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2));
    image.DrawImageScale("family", new PVector(width / 2, height / 2), new PVector(0.25f, 0.25f, 0),0f, alpha);

    if (time.time - enterTime >= 1f) {
      alpha -= 255/fadeoutTime * time.deltaTime;
    }
    if (alpha <= 0f) {
      preparationTime -= time.deltaTime;
      if (preparationTime <= 0f) {
        scene.ChangeScene(new S3C3V1_4_3());
      }
    }
  }

  @Override public void OnExit() {
  }
}
