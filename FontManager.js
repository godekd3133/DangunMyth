class FontManager {
  constructor() {
    this.fonts = {};
  }

  LoadFont(name, path) {
    this.fonts[name] = loadFont("Fonts/" + path);
  }

  DrawFont(fontName, txt, col, size, x, y) {
    push();
    fill(col);
    textFont(this.fonts[fontName], size);
    text(txt, x, y);
    pop();
  }
}
