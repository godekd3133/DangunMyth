public class S3C3V1_4_3 extends Scene {
  private float SCENE_DURATION = 5; // 5초 동안 씬 진행
  private String[] imageNames = {
    "background", "body", "head", "arm", "mouth1", "mouth2", "ally", "enemy1", "enemy2", "enemy3"}
  ;
  private String imagePath = "Images/S3/C3/V1/_4/_3/";
  private float manScale = 0.3f;
  private float allyScale = 0.2f;
  private float enemyScale1 = 0.2f;
  private float enemyScale2 = 0.13f;

  private float ANIMATION_TICK_INTERVAL = 1.0f;
  private float animationTick = 0f;
  private boolean isAnimating = true;

  private boolean firstFlag = false;

  public S3C3V1_4_3() {
  }

  @Override public void OnEnter() {
    // println("143 Enter");
    for(String imageName : imageNames) image.LoadImage(imageName, imagePath + imageName);

    image.LoadImage("text", "Images/S3/C3/V1/_4/_3/text");
    sound.LoadSound("narr", "Sounds/S3/C3/V1/_4/_3/narr.mp3");

    animationTick =0f;
    firstFlag = false;

  }

  @Override public void OnDraw() {
    animationTick += time.deltaTime;
    if (animationTick >= ANIMATION_TICK_INTERVAL) {
      animationTick = 0;
      isAnimating = !isAnimating;
    }
    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));

    image.DrawImageScale("enemy2", new PVector(100, 450), new PVector(enemyScale2, enemyScale2));
    image.DrawImageScale("enemy2", new PVector(200, 450), new PVector(enemyScale2, enemyScale2));
    image.DrawImageScale("enemy1", new PVector(500, 450), new PVector(enemyScale2, enemyScale2));
    image.DrawImageScale("enemy3", new PVector(350, 450), new PVector(enemyScale1, enemyScale1));
    image.DrawImageScale("ally", new PVector(1180, 500), new PVector(allyScale, allyScale));
    if (isAnimating) image.DrawImageScale("arm", new PVector(950, 280), new PVector(manScale, manScale), 0.3f);
    else image.DrawImageScale("arm", new PVector(900, 300), new PVector(manScale, manScale));
    image.DrawImageScale("body", new PVector(900, 500), new PVector(manScale, manScale));
    image.DrawImageScale("head", new PVector(1050, 300), new PVector(manScale, manScale), 0.2f);

    if (isAnimating) image.DrawImageScale("mouth1", new PVector(1050, 300), new PVector(manScale, manScale), 0.2f);
    else image.DrawImageScale("mouth2", new PVector(1050, 300), new PVector(manScale, manScale), 0.2f);

    image.DrawImage("text", new PVector(width / 2, height / 2, 0));

    if (time.time - enterTime >= SCENE_DURATION) {
      //엔딩 크레딧
    }
    if (!firstFlag) {
      firstFlag = true;
      sound.PlaySound("narr");
    }
  }

  @Override public void OnExit() {
    // scene.ChangeScene(new ENDING());
  }
}
