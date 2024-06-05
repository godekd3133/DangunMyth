public class S1C14 extends Scene {
  public float SCENE_DURATION = 15f;
  private boolean isEffectOut;

  public S1C14() {
  }

  @Override public void OnEnter() {
    image.LoadImage("background", "Images/S1/C14/background");
    image.LoadImage("button", "Images/S1/C14/button");
    sound.LoadSound("effect", "Sounds/S1/C14/effect/effect.wav");
    enterTime = time.time;
    isEffectOut = false;

  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));

    if (mouseX >= 550 && mouseX <= width - 592 && mouseY >= 585 && mouseY <= height - 85) {
      image.DrawImage("button", new PVector(width / 2, height / 2), 0f,255,220,220,220);

      if (mousePressed) {
        if (!isEffectOut) {
          sound.PlaySound("effect");
          isEffectOut = !isEffectOut;
        }
        // 미니 게임 씬 이동
        scene.ChangeScene(new S1C15());
      }
    } else {
      image.DrawImageScale("button", new PVector(width / 2, height / 2), new PVector(1, 1));
    }
    if (time.time - enterTime > SCENE_DURATION) {
      scene.ChangeScene(new S1C15());
    }
  }

  @Override public void OnExit() {
  }
}
