public class S3C1 extends Scene {
  private float animalScale = 0.25f;
  private float utilScale = 0.05f;
  private int animalY = height - 280;
  private int jumpY = 0;
  private int jumpDir = 1;
  private int garlicX = width / 2 + 315;
  private int garlicY = animalY - 15;
  private int ssugX = width / 2 + 110;
  private int ssugY = animalY - 15;
  private int utilY = height - 120;
  private int garlicInitVelY = 15;
  private int garlicInitVelX = 5;
  private int garlicCurrentVelY = garlicInitVelY;
  private int ssugInitVelY = 18;
  private int ssugInitVelX = 3;
  private int ssugCurrentVelY = ssugInitVelY;

  public S3C1() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S3/C1/background");
    image.LoadImage("bear", "Images/S3/C1/bear");
    image.LoadImage("tiger", "Images/S3/C1/tiger");
    image.LoadImage("garlic", "Images/S3/C1/garlic");
    image.LoadImage("ssug", "Images/S3/C1/ssug");
  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2), new PVector(1, 1));
    image.DrawImageScale("bear", new PVector(width / 2 - 250, animalY), new PVector(animalScale, animalScale));

    // up and down animation
    if (jumpY < 0) jumpY = 0;
    if (jumpY > 15) jumpDir *= -1;
    jumpY += jumpDir;

    image.DrawImageScale("tiger", new PVector(width / 2 + 230, animalY - jumpY), new PVector(animalScale, animalScale));

    // util animation
    //garlic part
    if(garlicY < utilY){
      garlicY -= garlicCurrentVelY;
      garlicX += garlicInitVelX;
      garlicCurrentVelY--;
    }

    image.DrawImageScale("garlic", new PVector(garlicX, garlicY), new PVector(utilScale, utilScale));

    //ssug part
    if(ssugY < utilY){
      ssugY -= ssugCurrentVelY;
      ssugX += ssugInitVelX;
      ssugCurrentVelY--;
    }

    image.DrawImageScale("ssug", new PVector(ssugX, ssugY), new PVector(utilScale, utilScale));
  }

  @Override public void OnExit() {
  }
}
