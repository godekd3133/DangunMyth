void DrawFont(String fontName, String text,color col,float size, float x, float y) {
  PFont mono = createFont("../fonts/" + fontName, size,true);
  background(col);
  textFont(mono);
  text(text, x, y);
}
// 시작 시간과 현재 시간의 차이가 특정 초를 경과했는지 확인

public static boolean isTimeExceeded(int startMinute, int startSecond, int endSecond) {
  // 시작 시간을 초 단위로 변환
  int startTotalSeconds =(startMinute * 60) + startSecond;
  // 현재 시간을 초 단위로 변환
  int nowTotalSeconds =(minute()*60) + second();

  return nowTotalSeconds-startTotalSeconds >= endSecond;
}
