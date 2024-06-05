public class Opening extends Scene {
  public float SCENE_DURATION = 22f; // narr. 2 + 4 + 7 sec

  private float cloudX;
  private float zoomIn;

  private float logoAlpha;
  private boolean dropdown = false;
  private boolean pressedMouse = false;
  private int selectedSequence =0;

  public Opening() {
  }
  private String prefix = "Images/Opening/";

  @Override public void OnEnter() {
    image.LoadImage("background", prefix+"background/1");
    image.LoadImage("cloud01", prefix+"background/2");
    image.LoadImage("cloud02", prefix+"background/3");
    image.LoadImage("cloud03", prefix+"background/4");
    sound.LoadSound("intro", "Sounds/intro.wav");
    sound.PlaySound("intro");
    image.LoadImage("btn_sequence01", prefix + "ui/btn_sequence_1");
    image.LoadImage("btn_sequence02", prefix + "ui/btn_sequence_2");
    image.LoadImage("btn_sequence03", prefix + "ui/btn_sequence_3");
    image.LoadImage("dropdown_list", prefix + "ui/btn_sequence_dropdown_list");
    image.LoadImage("dropdown", prefix + "ui/btn_sequence_dropdown");
    image.LoadImage("logo", prefix + "ui/logo");
    image.LoadImage("btn_start", prefix + "ui/startButton");
    logoAlpha =0f;
    pressedMouse = false;

    cloudX = 0f;
    zoomIn = 1f;
    enterTime = time.time;
    dropdown = false;
  }

  @Override public void OnDraw() {
    PVector scale = new PVector(zoomIn, zoomIn, 0);
    image.DrawImageScale("background", new PVector(width / 2, height / 2, 0), scale);
    image.DrawImageScale("cloud01", new PVector(width / 2 - cloudX, height / 2, 0), scale);
    image.DrawImageScale("cloud02", new PVector(width / 2 - cloudX, height / 2, 0), scale);
    image.DrawImageScale("cloud03", new PVector(width / 2 + cloudX, height / 2, 0), scale);

    if (time.time- enterTime > 0.25f &&zoomIn <1.25f) {
      zoomIn += 0.1f * time.deltaTime;
      cloudX += 100f * time.deltaTime;
    }
    else if (zoomIn >= 1.25f) {
      zoomIn = 1.25f;
      image.DrawImage("logo", new PVector(width / 2, height / 2),0f, logoAlpha);

      //dropdown 위에 마우스가 있고, 마우스 버튼이 눌렸을ㄷ 때
      PVector mousePos = new PVector(mouseX, mouseY);
      //mouse down check
      //마우스가

      if (mousePos.x > 540 && mousePos.x < 736&& mousePos.y > 381 && mousePos.y < 456) {
        image.DrawImage("btn_start", new PVector(width / 2, height / 2), 0f,255,220,220,220);
        if (mousePressed == true && pressedMouse == false && mouseButton == LEFT) {
          if (selectedSequence == 0) {
            scene.ChangeScene(new S1C1());
          }
          else if (selectedSequence == 1) {
            scene.ChangeScene(new S2C1());
          }
          else if (selectedSequence == 2) {
            scene.ChangeScene(new S3C1());
          }
        }
      }
      else image.DrawImage("btn_start", new PVector(width / 2, height / 2), 0f,logoAlpha);

      if (mouseButton == LEFT && mousePos.x > 540 && mousePos.x < 736&& mousePos.y > 486 && mousePos.y < 536) {
        if (mousePressed == true && pressedMouse == false && mouseButton == LEFT) {
          dropdown = !dropdown;
          pressedMouse=true;
        }
      }

      if (dropdown) {
        image.DrawImage("dropdown_list", new PVector(width / 2, height / 2), 0f,logoAlpha);
        if (mousePos.x > 540 && mousePos.x < 736&& mousePos.y > 527 && mousePos.y < 569|| selectedSequence ==0) {
          image.DrawImage("btn_sequence01", new PVector(width / 2, height / 2), 0f,logoAlpha);
          if (mousePressed == true && pressedMouse == false) {
            selectedSequence = 0;
            dropdown = false;
          }
        }
        else image.DrawImage("btn_sequence01", new PVector(width / 2, height / 2), 0f,logoAlpha - 90f);
        if (mousePos.x > 540 && mousePos.x < 736&& mousePos.y > 569 && mousePos.y < 609|| selectedSequence ==1) {
          image.DrawImage("btn_sequence02", new PVector(width / 2, height / 2), 0f,logoAlpha);
          if (mousePressed == true && pressedMouse == false) {
            selectedSequence = 1;
            dropdown = false;
          }
        }
        else image.DrawImage("btn_sequence02", new PVector(width / 2, height / 2), 0f,logoAlpha - 90f);
        if (mousePos.x > 540 && mousePos.x < 736&& mousePos.y > 609 && mousePos.y < 649 || selectedSequence ==2) {
          image.DrawImage("btn_sequence03", new PVector(width / 2, height / 2), 0f,logoAlpha);
          if (mousePressed == true && pressedMouse == false) {
            selectedSequence = 2;
            dropdown = false;
          }
        }
        else image.DrawImage("btn_sequence03", new PVector(width / 2, height / 2), 0f,logoAlpha - 90f);
      }
      else image.DrawImage("dropdown", new PVector(width / 2, height / 2), 0f,logoAlpha);

      if (logoAlpha < 255f) logoAlpha += 255f * time.deltaTime;
      pressedMouse = mousePressed;

    }
  }

  @Override public void OnExit() {
    sound.StopSound("intro");
  }
}
