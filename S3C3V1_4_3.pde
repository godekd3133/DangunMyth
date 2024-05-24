public class S3C3V1_4_3 extends Scene {
  private String[] imageNames = {
    "background", "body", "head", "arm", "mouth1", "mouth2", "ally", "enemy1", "enemy2", "enemy3"}
  ;
  private String imagePath = "Images/S3/C3/V1/_4/_3/";
  private float manScale = 0.3f;
  private float allyScale = 0.2f;
  private float enemyScale1 = 0.2f;
  private float enemyScale2 = 0.13f;
  private int time = 0;
  private boolean openMouth = true;

  public S3C3V1_4_3() {
  }

  @Override public void OnEnter() {
    for(String imageName : imageNames) image.LoadImage(imageName, imagePath + imageName);
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));

    image.DrawImageScale("enemy2", new PVector(100, 450), new PVector(enemyScale2, enemyScale2));
    image.DrawImageScale("enemy2", new PVector(200, 450), new PVector(enemyScale2, enemyScale2));
    image.DrawImageScale("enemy1", new PVector(500, 450), new PVector(enemyScale2, enemyScale2));
    image.DrawImageScale("enemy3", new PVector(350, 450), new PVector(enemyScale1, enemyScale1));
    image.DrawImageScale("ally", new PVector(1180, 500), new PVector(allyScale, allyScale));
    image.DrawImageScale("arm", new PVector(900, 300), new PVector(manScale, manScale), -0.4f);
    image.DrawImageScale("body", new PVector(900, 500), new PVector(manScale, manScale));
    image.DrawImageScale("head", new PVector(1050, 300), new PVector(manScale, manScale), 0.2f);
    if (time % 20 == 0) openMouth = !openMouth;
    if (openMouth) image.DrawImageScale("mouth1", new PVector(1050, 300), new PVector(manScale, manScale), 0.2f);
    else image.DrawImageScale("mouth2", new PVector(1050, 300), new PVector(manScale, manScale), 0.2f);

    time++;
  }

  @Override public void OnExit() {
    // scene.ChangeScene(new ENDING());
  }
}
