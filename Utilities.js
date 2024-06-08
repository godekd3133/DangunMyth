function DrawFont(fontName, text, col, size, x, y) {
  let mono = loadFont("../fonts/" + fontName);
  background(col);
  textFont(mono);
  text(text, x, y);
}

// 시작 시간과 현재 시간의 차이가 특정 초를 경과했는지 확인
function isTimeExceeded(startMinute, startSecond, endSecond) {
  // 시작 시간을 초 단위로 변환
  let startTotalSeconds = startMinute * 60 + startSecond; // 현재 시간을 초 단위로 변환
  let nowTotalSeconds = minute() * 60 + second();
  return nowTotalSeconds - startTotalSeconds >= endSecond;
}

// startMillis기준 endSeconds초가 경과하면 true 반환
function isTimeExceededMillis(startMillis, endSeconds) {
  let nowTotalMilliseconds = millis();
  let endMilliseconds = endSeconds * 1000;
  return nowTotalMilliseconds - startMillis >= endMilliseconds;
}
