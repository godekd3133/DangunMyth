class FontManager {
  constructor() {
    this.fonts = new Map();
  }

  LoadFont(name, path) {
    loadFont("Fonts/" + path, (font) => {
      this.fonts.set(name, font);
    });
  }

  DrawFont(fontName, text, col, size, x, y) {
    push();
    fill(col);
    let font = this.fonts.get(fontName);
    if (font) {
      textFont(font);
      textSize(size);
      text(text, x, y);
    }
    pop();
  }
}
