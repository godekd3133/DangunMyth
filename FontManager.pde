public class FontManager {
  HashMap<String, PFont> fonts = new HashMap<String, PFont>();

  public void LoadFont(String name, String path) {
    fonts.put(name, createFont("Fonts/" + path,120f,true));
  }

  void DrawFont(String fontName, String text, color col, float size, float x, float y) {
    pushStyle();
    fill(col);
    PFont font = fonts.get(fontName);
    //font sizing
    textFont(font, size);
    text(text, x, y);
    popStyle();
  }
}
