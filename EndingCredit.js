class EndingCredit extends Scene {
  constructor() {
    super();
    this.textList = [
      "Game Design",
      "Programming",
      "Art",
      "Sound",
      "Special Thanks",
      "Presented by",
    ];
    this.creditTextList = [];
    this.offSetY = 0;
    this.scrollSpeed = 50;
    this.scrollAmount = 0;
  }

  AddText(text, size, offset, offsetX = 0) {
    this.offSetY += offset;
    let creditText = new CreditText(
      createVector(width / 2 + offsetX, height + 100 + this.offSetY),
      text,
      size
    );
    this.creditTextList.push(creditText);
  }

  AddSmallText(team, name, enName) {
    this.AddText(team, 36, 50, -400);
    this.AddText(name, 36, 0, 0);
    this.AddText(enName, 36, 0, 400);
  }

  OnEnter() {
    soundManager.LoadSound("Credit", "Sounds/BGM/EndingCredit.mp3");
    soundManager.PlaySound("Credit");
    this.creditTextList = [];
    this.offSetY = 0;
    this.scrollAmount = 0;
    this.AddText("단군신화", 64, 0);
    this.AddText("제작", 36, 100);
    this.AddText("숭실대학교 미디어경영학과 2024 학번", 36, 150);
    this.AddText("미디어앤테크 1팀", 36, 50);
    this.AddText("매니지먼트", 36, 150);
    this.AddText("제작 총괄 박소영 Park Soyoung", 36, 80);
    this.AddText("개발팀", 36, 150);
    this.AddText("개발 팀장 김민규 Kim Minkyu", 36, 80);
    this.AddSmallText("프로그래머", "곽지한", "Kwak Jihan");
    this.AddSmallText("프로그래머", "김건", "Kim Geon");
    this.AddSmallText("프로그래머", "김병호", "Kim Byeongho");
    this.AddSmallText("프로그래머", "김예닮", "Kim Yedarm");
    this.AddSmallText("프로그래머", "김태겸", "Kim Taegyeom");
    this.AddSmallText("프로그래머", "박소원", "Park Sowon");
    this.AddSmallText("프로그래머", "최경선", "Choi Gyeongseon");
    this.AddText("디자인팀", 36, 150);
    this.AddText("디자인 팀장 이소연 Lee Soyeon", 36, 80);
    this.AddSmallText("디자이너", "강민지", "Kang Minji");
    this.AddSmallText("디자이너", "배연우", "Bae Yeonu");
    this.AddSmallText("디자이너", "조유진", "Cho Youjin");
    this.AddSmallText("디자이너", "이선우", "Lee Seonwoo");
    this.AddText("기획팀", 36, 150);
    this.AddText("기획 팀장 권혁진 Kwon Hyeokjin", 36, 80);
    this.AddSmallText("기획자", "권도예", "Kwon Doye");
    this.AddSmallText("기획자", "박예희", "Park Yehui");
    this.AddSmallText("기획자", "장지선", "Jang Jiseon");
    this.AddSmallText("기획자", "전유현", "Jeon Yuhyun");
    this.AddSmallText("기획자", "정유진", "Jeong Yujin");
    this.AddText("사용 프로그램", 36, 150);
    this.AddText("GitHub", 36, 50);
    this.AddText("SourceTree", 36, 50);
    this.AddText("VSCode", 36, 50);
    this.AddText("Fork", 36, 50);
    this.AddText("Git Kraken", 36, 50);
    this.AddText("Procreate", 36, 50);
    this.AddText("Adobe Photohop", 36, 50);
    this.AddText("Type Cast", 36, 50);
    this.AddText("Soundraw", 36, 50);
    this.AddText("My Edit", 36, 50);
    this.AddText("Audacity", 36, 50);
    this.AddText("참고자료", 36, 50);
    this.AddText("https://processing.org/reference", 36, 50);
    this.AddText("위키백과 - 단군 신화", 36, 50);
    this.AddText("유튜브 - 단군 이야기", 36, 50);
    this.AddText("제작 : 구구퐁키즈", 36, 50);
    this.AddText("99Pong", 36, 50);
  }

  OnDraw() {
    background(0);
    stroke(0);
    strokeWeight(1);
    fill(255);
    this.scrollAmount += this.scrollSpeed * timeManager.deltaTime;

    for (let i = 0; i < this.creditTextList.length; i++) {
      let creditText = this.creditTextList[i];
      textAlign(CENTER);
      textSize(creditText.size);
      let textRectX = creditText.position.x - textWidth(creditText.text) / 2;
      let textRectY = creditText.position.y - textAscent();
      let textRectWidth = textWidth(creditText.text);
      let textRectHeight = textAscent() + textDescent();

      creditText.position.y -= this.scrollSpeed * timeManager.deltaTime;
      if (creditText.flying) {
        creditText.position.x +=
          creditText.dirX * creditText.speed * timeManager.deltaTime;
        creditText.position.y +=
          creditText.dirY * creditText.speed * timeManager.deltaTime;
        creditText.speed = lerp(creditText.speed, 0, timeManager.deltaTime);
      }
      if (creditText.speed < 0) {
        creditText.flying = false;
      }
      let conditionDist = 100;
      if (
        !creditText.flying &&
        (dist(mouseX, mouseY, textRectX, textRectY) < conditionDist ||
          dist(mouseX, mouseY, textRectX + textRectWidth, textRectY) <
            conditionDist ||
          dist(mouseX, mouseY, textRectX, textRectY + textRectHeight) <
            conditionDist ||
          dist(
            mouseX,
            mouseY,
            textRectX + textRectWidth,
            textRectY + textRectHeight
          ) < conditionDist)
      ) {
        let points = [
          createVector(textRectX, textRectY),
          createVector(textRectX + textRectWidth, textRectY),
          createVector(textRectX, textRectY + textRectHeight),
          createVector(textRectX + textRectWidth, textRectY + textRectHeight),
        ];
        let minDist = conditionDist;
        let minIndex = 0;
        for (let j = 0; j < points.length; j++) {
          let d = dist(mouseX, mouseY, points[j].x, points[j].y);
          if (d < minDist) {
            minDist = d;
            minIndex = j;
          }
        }
        let dir = p5.Vector.sub(createVector(mouseX, mouseY), points[minIndex]);
        dir.normalize();
        creditText.flying = true;
        creditText.dirX = -dir.x;
        creditText.dirY = -dir.y;
        creditText.speed = 500;
      }
      text(creditText.text, creditText.position.x, creditText.position.y);
    }
  }

  OnExit() {
    // Cleanup code if necessary
  }
}
