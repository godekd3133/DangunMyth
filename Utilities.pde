

void DrawFont(String fontName, String text,color col,float size, float x, float y) {
    PFont mono = createFont("../fonts/" + fontName, size,true);
    background(col);
    textFont(mono);
    text(text, x, y);
}