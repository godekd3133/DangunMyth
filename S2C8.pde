public class S2C8 extends Scene {
  private static final String PREFIX = "Images/S2/C8/";
  private PVector centerVector;
  private float centerX;
  private float centerY;
  private float sunY = 600;
  private float cloudXDistance = 0;
  private float speed = 0.8;
  private boolean playingNarr = false;
  private boolean Chicken = false;
  public float SCENE_DURATION = 3f;

  @Override public void OnEnter() {
    centerX = width / 2;
    centerY = height / 2;
    centerVector = new PVector(centerX, centerY);
    sunY = 600;
    cloudXDistance = 0;

    image.LoadImage("cloud_left", PREFIX+"cloud_left");
    image.LoadImage("cloud_right", PREFIX+"cloud_right");
    image.LoadImage("cloud_middle", PREFIX+"cloud_middle");
    image.LoadImage("lake", PREFIX+"lake");
    image.LoadImage("mountains", PREFIX+"mountains");
    image.LoadImage("sky", PREFIX+"sky");
    image.LoadImage("sun", PREFIX+"sun");
    image.LoadImage("text", PREFIX+"text");
    sound.LoadSound("narr", "Sounds/S2/C8/narr/narr.mp3");
    sound.LoadSound("Chicken", "Sounds/Effects/Chicken_02.mp3");
  }

  @Override public void OnDraw() {
    image.DrawImage("sky", centerVector);
    image.DrawImage("sun", new PVector(centerX, sunY));
    image.DrawImage("mountains", centerVector);
    image.DrawImage("lake", centerVector);
    image.DrawImage("cloud_left", new PVector(centerX - cloudXDistance, centerY));
    image.DrawImage("cloud_right", new PVector(centerX + cloudXDistance, centerY));
    image.DrawImage("cloud_middle", new PVector(centerX - cloudXDistance, centerY));
    image.DrawImage("text", centerVector);

    if (time.time - enterTime > 1.f && !playingNarr) {
      sound.PlaySound("narr");
      playingNarr = true;
    }
    if (time.time - enterTime > 3.f && !Chicken) {
      sound.PlaySound("Chicken");
      Chicken = true;
    }
    if (sunY<400) {
      scene.ChangeScene(new S3C1());
    } else {
      sunY-=speed;
      cloudXDistance+=speed;
    }
  }

  @Override public void OnExit() {
  }
}
