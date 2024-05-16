public class Animation {
  int frameCount;
  String key = "";
  int currentFrame;

  public Animation(String key,int count) {
    for (int i = 0; i < count; i++) {
      if (!image.ValidateImage(key + i)) {
        print("Error: Image " + key + i + " not found");
        return;
      }
    }

    this.frameCount = count;
    this.key = key;
  }

  public void OnDraw() {
    // Draw the current frame
  }

}
