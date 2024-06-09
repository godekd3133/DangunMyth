class Animation {
  constructor(key, count) {
    this.frameCount = count;
    this.key = key;
    this.currentFrame = 0;
    this.images = [];

    // Load all frames
    for (let i = 0; i < count; i++) {
      let imagePath = key + i + ".png";
      loadImage(
        imagePath,
        (img) => {
          this.images[i] = img;
        },
        () => {
          console.error("Error: Image " + imagePath + " not found");
        }
      );
    }
  }

  OnDraw(x, y) {
    if (this.images.length > 0 && this.images[this.currentFrame]) {
      image(this.images[this.currentFrame], x, y);
      this.currentFrame = (this.currentFrame + 1) % this.frameCount;
    }
  }
}
