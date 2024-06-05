public class S2C6V1 extends Scene {
  TimelineManager timelineManager = new TimelineManager();
  private float backgroundAlpha = 188f;
  private float animalScale = 0.25f;
  private float tearScale = 0.025f;
  private float tigerTearSpeedL = 0f;
  private float tigerTearSpeedR = 0f;
  private float tigerTearLeftY = height - 280f;
  private float tigerTearRightY = height - 290f;
  private float bearTearSpeedL = 0f;
  private float bearTearSpeedR = 0f;
  private float bearTearLeftY = height - 270f;
  private float bearTearRightY = height - 280f;

  private boolean showButton = false;

  public S2C6V1() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S2/C6/V1/background");
    image.LoadImage("bear", "Images/S2/C6/V1/bear");
    image.LoadImage("bear_tear", "Images/S2/C6/V1/bear_tear");
    image.LoadImage("tiger", "Images/S2/C6/V1/tiger");
    image.LoadImage("tiger_tear", "Images/S2/C6/V1/tiger_tear");

    image.LoadImage("button_top", "Images/S2/C6/V1/button_top");
    image.LoadImage("button_bottom", "Images/S2/C6/V1/button_bottom");

    timelineManager.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float time) {
        backgroundAlpha = lerp(0f, 188f, time / 10f);
      }
    }, 6f);

    timelineManager.pushTimeline(new TimelineCallback() {

      @Override public void OnDraw(float time) {
        showButton = true;
      }
    }, 1);
    showButton = true;
    animalScale = 0.25f;
    tearScale = 0.025f;
    tigerTearSpeedL = 0f;
    tigerTearSpeedR = 0f;
    tigerTearLeftY = height - 280f;
    tigerTearRightY = height - 290f;
    bearTearSpeedL = 0f;
    bearTearSpeedR = 0f;
    bearTearLeftY = height - 270f;
    bearTearRightY = height - 280f;

  }

  @Override public void OnDraw() {
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), new PVector(1, 1, 0));
    image.DrawImageScale("bear", new PVector(width / 2 - 220, height - 255), new PVector(animalScale, animalScale));
    image.DrawImageScale("tiger", new PVector(width / 2 + 220, height - 255), new PVector(animalScale, animalScale));

    // tiger tear animation
    if (tigerTearLeftY + tigerTearSpeedL > height - 260) tigerTearSpeedL = 0;
    if (tigerTearRightY + tigerTearSpeedR > height - 270) tigerTearSpeedR = 0;
    tigerTearSpeedL += random(0.3f, 0.9f);
    tigerTearSpeedR += random(0.3f, 0.9f);
    image.DrawImageScale("tiger_tear", new PVector(width - 510, tigerTearLeftY + tigerTearSpeedL), new PVector(tearScale, tearScale));
    image.DrawImageScale("tiger_tear", new PVector(width - 440, tigerTearRightY + tigerTearSpeedL), new PVector(tearScale, tearScale));

    if (bearTearLeftY + bearTearSpeedL > height - 250) bearTearSpeedL = 0;
    if (bearTearRightY + bearTearSpeedR > height - 260) bearTearSpeedR = 0;
    bearTearSpeedL += random(0.3f, 0.9f);
    bearTearSpeedR += random(0.3f, 0.9f);
    image.DrawImageScale("bear_tear", new PVector(width - 810, bearTearLeftY + bearTearSpeedL), new PVector(tearScale, tearScale));
    image.DrawImageScale("bear_tear", new PVector(width - 890, bearTearRightY + bearTearSpeedL), new PVector(tearScale, tearScale));
    // image.DrawImageScale("bear_tear", new PVector(width - 510, bearTearLeftY + bearTearSpeedL), new PVector(tearScale, tearScale));
    // image.DrawImageScale("bear_tear", new PVector(width - 440, bearTearRightY + bearTearSpeedR), new PVector(tearScale, tearScale));

    timelineManager.OnDraw();
    fill(0, backgroundAlpha);
    rect(0, 0, width, height);

    if (showButton) {
      image.DrawImageScale("button_top", new PVector(width / 2, height / 2), new PVector(1, 1));
      image.DrawImageScale("button_bottom", new PVector(width / 2, height / 2), new PVector(1, 1));

      //240605 QA
      //Mouse Hover
      if (mouseX > 480 && mouseX < 800 && mouseY > 375 && mouseY < 459) {
        image.DrawImage("button_top", new PVector(width / 2, height / 2), 0f,255,220,220,220);
      } else {
        image.DrawImageScale("button_top", new PVector(width / 2, height / 2), new PVector(1, 1));
      }
      //Mouse Hover
      if (mouseX > 480 && mouseX < 800 && mouseY >237 && mouseY < 324) {
        image.DrawImage("button_bottom", new PVector(width / 2, height / 2), 0f,255,220,220,220);
      } else {
        image.DrawImageScale("button_bottom", new PVector(width / 2, height / 2), new PVector(1, 1));
      }
      if (mousePressed && mouseButton == LEFT) {
        /// x 480 ~ 800 y237 ~ 324
        if (mouseX > 480 && mouseX < 800 && mouseY >237 && mouseY < 324) {
          // go back
          scene.ChangeScene(new S2C6());
          showButton = false;
        }
        /// x 480 ~ 800 y 375 ~ 459
        else if (mouseX > 480 && mouseX < 800 && mouseY > 375 && mouseY < 459) {
          print('2');
          showButton = false;

        }
      }
    }
  }

  @Override public void OnExit() {
  }
}
