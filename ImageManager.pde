public class ImageManager {
  HashMap<String, PImage> images = new HashMap<String, PImage>();

  public PVector pivot = new PVector(0.5f,0.5f);

  public ImageManager() {
  }

  public void ResetImages() {
    images.clear();
  }

  public void SetPivot(PVector p) {
    SetPivot(p.x, p.y);
  }

  public void SetPivot(float x, float y) {
    pivot.x = x;
    pivot.y = y;
  }

  public void LoadImage(String name, String path) {
    if (images.containsKey(name)) {
      return;
    }
    PImage img = loadImage(path + ".png");
    images.put(name, img);

  }

  public void LoadAnimation(String name, String path,int count) {
    for (int i=0; i<count; i++) {
      String key = name + "(" + i + ")";
      String fullPath = path + "(" + i + ")";
      LoadImage(key, fullPath);
    }
  }

  public boolean ValidateImage(String key) {
    if (images.containsKey(key)) {
      return true;
    }
    print("Key was not found in image manager: " + key + "\n");
    // print stack trace
    for(StackTraceElement ste : Thread.currentThread().getStackTrace()) {
    }
    return false;
  }

  void DrawImage(String key, PVector position) {
    DrawImage(key, position, 0f);
  }

  void DrawImage(String key, PVector position, float angle) {
    DrawImage(key, position, angle, 255);
  }

  void DrawImage(String key, PVector position, float angle, float alpha) {
    PImage img = images.get(key);

    if (ValidateImage(key) == false) {
      return;
    }
    pushMatrix();
    translate(position.x, position.y);
    rotate(angle);
    imageMode(CENTER);
    tint(255, alpha);
    image(img, 0, 0);
    popMatrix();
  }

  void DrawImage(String key, PVector position, float angle, float alpha, float r, float g, float b) {
    PImage img = images.get(key);

    if (ValidateImage(key) == false) {
      return;
    }
    pushMatrix();
    translate(position.x, position.y);
    rotate(angle);
    imageMode(CENTER);
    tint(r,g,b, alpha);
    image(img, 0, 0);
    popMatrix();
  }

  void DrawImageScale(String key, PVector position, PVector scale) {
    DrawImageScale(key, position, scale, 0f);
  }

  void DrawImageScale(String key, PVector position, PVector scale, float angle) {
    DrawImageScale(key, position, scale, angle, 255);
  }

  void DrawImageScale(String key, int x, int y, float scale, float angle, float alpha) {
    DrawImageScale(key, new PVector((float)x,(float)y), new PVector(scale,scale,0), angle, alpha);
  }

  void DrawImageScale(String key, PVector position, PVector scale, float angle, float alpha) {
    PImage img = images.get(key);

    if (ValidateImage(key) == false) {
      return;
    }
    pushMatrix();
    translate(position.x, position.y);
    rotate(angle);
    scale(scale.x, scale.y);
    imageMode(CENTER);
    tint(255, alpha);
    image(img, 0, 0);
    popMatrix();
  }

  void DrawImageSize(String key, PVector position, PVector size) {
    DrawImageSize(key, position, size, 0f);
  }

  void DrawImageSize(String key, PVector position, PVector size, float angle) {
    DrawImageSize(key, position, size, angle, 255);
  }

  void DrawImageSize(String key, PVector position, PVector size, float angle, float alpha) {
    PImage img = images.get(key);

    if (ValidateImage(key) == false) {
      return;
    }
    pushMatrix();
    translate(position.x, position.y);
    scale(size.x / img.width, size.y / img.height);
    rotate(angle);
    imageMode(CENTER);
    tint(255, alpha);
    image(img, 0, 0);
    popMatrix();
  }

  public PImage GetImage(String name) {
    return images.get(name);
  }
}
