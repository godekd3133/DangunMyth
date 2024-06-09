class ImageManager {
  constructor() {
    this.images = new Map();
    this.pivot = createVector(0.5, 0.5);
  }

  ResetImages() {
    this.images.clear();
  }

  SetPivot(p) {
    this.SetPivot(p.x, p.y);
  }

  SetPivot(x, y) {
    this.pivot.x = x;
    this.pivot.y = y;
  }

  LoadImage(name, path) {
    if (this.images.has(name)) {
      return;
    }
    let img = loadImage(path + ".png");
    this.images.set(name, img);
  }

  LoadAnimation(name, path, count) {
    for (let i = 0; i < count; i++) {
      let key = `${name}(${i})`;
      let fullPath = `${path}(${i})`;
      this.LoadImage(key, fullPath);
    }
  }

  ValidateImage(key) {
    if (this.images.has(key)) {
      return true;
    }
    print(`Key was not found in image manager: ${key}\n`);
    // print stack trace
    console.trace();
    return false;
  }

  DrawImage(key, position, angle = 0, alpha = 255) {
    if (!this.ValidateImage(key)) {
      return;
    }
    let img = this.images.get(key);

    push();
    translate(position.x, position.y);
    rotate(angle);
    imageMode(CENTER);
    tint(255, alpha);
    image(img, 0, 0);
    pop();
  }

  DrawImageWithTint(
    key,
    position,
    angle = 0,
    alpha = 255,
    r = 255,
    g = 255,
    b = 255
  ) {
    if (!this.ValidateImage(key)) {
      return;
    }
    let img = this.images.get(key);

    push();
    translate(position.x, position.y);
    rotate(angle);
    imageMode(CENTER);
    tint(r, g, b, alpha);
    image(img, 0, 0);
    pop();
  }

  DrawImageScale(key, position, size, angle = 0, alpha = 255) {
    if (!this.ValidateImage(key)) {
      return;
    }
    let img = this.images.get(key);

    push();
    translate(position.x, position.y);
    rotate(angle);
    scale(size.x, size.y);
    imageMode(CENTER);
    tint(255, alpha);
    image(img, 0, 0);
    pop();
  }

  DrawImageScaleSimple(key, x, y, scale, angle, alpha) {
    this.DrawImageScale(
      key,
      createVector(x, y),
      createVector(scale, scale, 0),
      angle,
      alpha
    );
  }

  DrawImageSize(key, position, size, angle = 0, alpha = 255) {
    if (!this.ValidateImage(key)) {
      return;
    }
    let img = this.images.get(key);

    push();
    translate(position.x, position.y);
    rotate(angle);
    scale(size.x / img.width, size.y / img.height);
    imageMode(CENTER);
    tint(255, alpha);
    image(img, 0, 0);
    pop();
  }

  GetImage(name) {
    return this.images.get(name);
  }
}
