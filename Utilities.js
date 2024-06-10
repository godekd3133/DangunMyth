function DrawFont(fontName, textContent, col, size, x, y) {
  loadFont(`../fonts/${fontName}`, (font) => {
    background(col);
    textFont(font);
    textSize(size);
    fill(0); // 텍스트 색상 설정
    text(textContent, x, y);
  });
}
function isTimeExceeded(startMinute, startSecond, endSecond) {
  // 시작 시간을 초 단위로 변환
  let startTotalSeconds = startMinute * 60 + startSecond;
  // 현재 시간을 초 단위로 변환
  let nowTotalSeconds = minute() * 60 + second();

  return nowTotalSeconds - startTotalSeconds >= endSecond;
}
function isTimeExceededMillis(startMillis, endSeconds) {
  let nowTotalMilliseconds = millis();
  let endMilliseconds = endSeconds * 1000;
  return nowTotalMilliseconds - startMillis >= endMilliseconds;
}
