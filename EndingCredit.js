class CreditText {
  constructor(text, size, offsetX, offsetY) {
    this.position = createVector(width / 2 + offsetX, height + 100 + offsetY);
    this.forcePosition = createVector(300, 0);
    this.text = text;
    this.size = size;
    this.dirX = 0;
    this.dirY = 0;
    this.speed = 0;
    this.flying = false;
  }
}

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
    this.lastMousePressed = false;
  }

  AddText(text, size, offset, offsetX) {
    this.offSetY += offset;
    let creditText = new CreditText(text, size, offsetX, this.offSetY);
    this.creditTextList.push(creditText);
  }

  AddSmallText(team, name, enName) {
    this.AddText(team, 32, 50, -400);
    this.AddText(name, 32, 0, 0);
    this.AddText(enName, 32, 0, 400);
  }

  AddTwoText(team, name) {
    this.AddText(team, 32, 50, -300);
    this.AddText(name, 32, 0, 300);
  }

  OnReturnButtonDown() {
    // forcePosition 초기화
    for (let i = 0; i < this.creditTextList.length; i++) {
      this.creditTextList[i].forcePosition = createVector(0, 0);
      this.creditTextList[i].flying = false;
      this.creditTextList[i].speed = 0;
    }
  }

  OnHomeButtonDown() {
    sceneManager.ChangeScene(new Opening());
  }

  OnEnter() {
    soundManager.PlaySound("Credit");
    imageManager.LoadImage("HomeButton", "Images/Ending/HomeButton");
    imageManager.LoadImage("ReturnButton", "Images/Ending/ReturnButton");
    this.creditTextList = [];
    this.offSetY = 0;
    this.scrollAmount = 0;

    this.AddText("단군신화", 64, 0);
    this.AddText("제작", 36, 100);
    this.AddText("숭실대학교 미디어경영학과 2024 학번", 36, 150);
    this.AddText("미디어앤테크 1팀", 36, 50);
    this.AddText("제작 총괄 박소영 Park Soyoung", 36, 80);
    this.AddText("개발 팀장 김민규 Kim Minkyu", 36, 80);
    this.AddText("디자인 팀장 이소연 Lee Soyeon", 36, 80);
    this.AddText("기획 팀장 권혁진 Kwon Hyeokjin", 36, 80);

    this.AddText("주역할 / 담당 시퀀스", 36, 150);
    this.AddText("1조", 36, 50);
    this.AddSmallText("개발 / 시퀀스 1,인터렉션1", "박소영", "Park Soyoung");
    this.AddSmallText("개발 / 시퀀스 1,인터렉션1", "박소원", "Park Sowon");
    this.AddSmallText("개발 / 시퀀스 1,인터렉션1", "최경선", "Choi Gyeongseon");
    this.AddSmallText("디자인 / 시퀀스 1,인터렉션1", "조유진", "Cho Youjin");
    this.AddSmallText("기획 / 시퀀스 1,인터렉션1", "정유진", "Jeong Yujin");
    this.AddSmallText("기획 / 시퀀스 1,인터렉션1", "권도예", "Kwon Doye");

    this.AddText("2조", 36, 50);
    this.AddSmallText("개발 / 시퀀스 2,인터렉션2", "김건", "Kim Geon");
    this.AddSmallText("개발 / 시퀀스 2,인터렉션2", "김병호", "Kim Byeongho");
    this.AddSmallText("개발 / 시퀀스 2,인터렉션2", "김예닮", "Kim Yedarm");
    this.AddSmallText("디자인 / 시퀀스 2,인터렉션2", "배연우", "Bae Yeonu");
    this.AddSmallText("디자인 / 시퀀스 2,인터렉션2", "이선우", "Lee Seonwoo");
    this.AddSmallText("기획 / 시퀀스 2,인터렉션2", "권혁진", "Kwon Hyeokjin");
    this.AddSmallText("기획 / 시퀀스 2,인터렉션2", "전유현", "Jeon Yuhyun");

    this.AddText("3조", 36, 50);
    this.AddSmallText("개발 / 시퀀스 3", "김민규", "Kim Minkyu");
    this.AddSmallText("개발 / 시퀀스 3", "김태겸", "Kim Taegyeom");
    this.AddSmallText("개발 / 시퀀스 3", "곽지한", "Kwak Jihan");
    this.AddSmallText("디자인 / 시퀀스 3", "이소연", "Lee Soyeon");
    this.AddSmallText("디자인 / 시퀀스 3", "강민지", "Kang Minji");
    this.AddSmallText("기획 / 시퀀스 3", "장지선", "Jang Jiseon");
    this.AddSmallText("기획 / 시퀀스 3", "박예희", "Park Yehui");
    this.AddText("사용 기능, 함수", 36, 150);
    this.AddTwoText(
      "Processing::Image ",
      "https://processing.org/reerence/#imageManager"
    );
    this.AddTwoText(
      "Processing::Math ",
      "https://processing.org/reerence/#math"
    );
    this.AddTwoText(
      "Processing::Typography ",
      "https://processing.org/reerence/#Typography"
    );
    this.AddTwoText(
      "Processing::Constants ",
      "https://processing.org/reerence/#Constants"
    );
    this.AddTwoText(
      "Processing::Input ",
      "https://processing.org/reerence/#Input"
    );
    this.AddTwoText(
      "Processing::Environment",
      "https://processing.org/reerence/#Environment"
    );
    this.AddTwoText("Design Patttern", "Singleton");
    this.AddTwoText("Design Patttern", "Abstract actory");
    this.AddTwoText("Design Patttern", "Component");
    this.AddTwoText("Renderer or Processing", "P2D / X2D");
    this.AddTwoText("Easing unctions", "https://easings.net/");

    this.AddText("담당 작업", 36, 150);
    this.AddText("1조", 36, 50);
    this.AddSmallText("S1C1,S1C2,S1C3,S1C15", "박소영", "Park Soyoung");
    this.AddSmallText("S1C7,S1C8,S3C3V2_2_2", "박소원", "Park Sowon");
    this.AddSmallText("S3_C3_V2_2_3", "", "");
    this.AddSmallText("S1C4,S1C5,S1C6_1,S1C6_2", "최경선", "Choi Gyeongseon");
    this.AddSmallText("S1C15V1,S1C15V2", "조유진", "Cho Youjin");
    this.AddSmallText("S1C13,S1C14", "정유진", "Jeong Yujin");
    this.AddSmallText("S1C9,S1C11", "권도예", "Kwon Doye");

    this.AddText("2조", 36, 50);
    this.AddSmallText("S2C1,S2C2,S2C5", "김건", "Kim Geon");
    this.AddSmallText("S3C3V2_1_1,S3C3V2_1_2", "김병호", "Kim Byeongho");
    this.AddSmallText("S3C3V2_1_3,S3C3V2_2_1", "", "");
    this.AddSmallText("S2C3,S2C4,p5js converting", "김예닮", "Kim Yedarm");
    this.AddSmallText("S2C7,S1C19_2", "배연우", "Bae Yeonu");
    this.AddSmallText("S1C19_1,S2C6V2", "이선우", "Lee Seonwoo");
    this.AddSmallText("S2C6V1,S1C18", "권혁진", "Kwon Hyeokjin");
    this.AddSmallText("S1C19_3,S2C8", "전유현", "Jeon Yuhyun");

    this.AddText("3조", 36, 50);
    this.AddSmallText("Manager Classes, Aracitecture", "김민규", "Kim Minkyu");
    this.AddSmallText("Opening, Ending Credit", "", "");
    this.AddSmallText("p5.js converting,S3C1,S3C2", "김태겸", "Kim Taegyeom");
    this.AddSmallText("S3C3_1_1,S3C3_1_2", "", "");
    this.AddSmallText("S3C3_1_3,S3C3V1_1_1", "곽지한", "Kwak Jihan");
    this.AddSmallText("S3C3V1_1_2,S3C3V1_2_1", "", "");
    this.AddSmallText("S3C3V1_2_2.S3C3V1_3_1", "이소연", "Lee Soyeon");
    this.AddSmallText("S3C3V1_4_1,S3C3V1_4_2", "강민지", "Kang Minji");
    this.AddSmallText("S3C3V1_3_2,S3C3V1_3_3", "장지선", "Jang Jiseon");
    this.AddSmallText("S3C3V1_4_3,S3C3V2", "박예희", "Park Yehui");

    this.AddText("사용 프로그램", 36, 150);
    this.AddText("GitHub", 36, 50);
    this.AddText("SourceTree", 36, 50);

    this.AddText("VSCode", 36, 50);
    this.AddText("ork", 36, 50);
    this.AddText("Git Kraken", 36, 50);
    this.AddText("Procreate", 36, 50);
    this.AddText("Adobe Photohop", 36, 50);
    this.AddText("Type Cast", 36, 50);
    this.AddText("Soundraw", 36, 50);
    this.AddText("My Edit", 36, 50);
    this.AddText("Audacity", 36, 50);
    this.AddText("참고자료", 36, 50);
    this.AddText("https://processing.org/reerence", 36, 50);
    this.AddText("위키백과 - 단군 신화", 36, 50);
    this.AddText("유튜브 - 단군 이야기", 36, 50);

    this.AddText("제작 : 구구퐁키즈", 36, 50);
    this.AddText("99Pong", 36, 50);
  }

  OnDraw() {
    stroke(0);
    strokeWeight(1);
    background(0);
    let conditionDist = 100;
    this.scrollAmount += (this.scrollSpeed * deltaTime) / 1000;

    for (let i = 0; i < this.creditTextList.length; i++) {
      textAlign(CENTER);
      let creditText = this.creditTextList[i];
      textSize(creditText.size);
      let textRectX =
        creditText.position.x +
        creditText.forcePosition.x -
        textWidth(creditText.text) / 2;
      let textRectY =
        creditText.position.y + creditText.forcePosition.y - textAscent();
      let textRectWidth = textWidth(creditText.text);
      let textRectHeight = textAscent() + textDescent();

      creditText.position.y -= (this.scrollSpeed * deltaTime) / 1000;

      if (creditText.flying) {
        creditText.forcePosition.x +=
          (creditText.dirX * creditText.speed * deltaTime) / 1000;
        creditText.forcePosition.y +=
          (creditText.dirY * creditText.speed * deltaTime) / 1000;
        creditText.dirX *= 0.9;
        creditText.dirY *= 0.9;
      }

      if (creditText.speed < 0) {
        creditText.flying = false;
      }

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
        creditText.dirX -= dir.x * creditText.speed;
        creditText.dirY -= dir.y * creditText.speed;
        creditText.speed = 30;
      }
      fontManager.DrawFont(
        "font",
        creditText.text,
        255,
        creditText.size,
        creditText.position.x + creditText.forcePosition.x,
        creditText.position.y + creditText.forcePosition.y
      );
    }

    let rtnButtonWidth = 238;
    let rtnButtonHeight = 61;
    let rtnButtonX = 1000 + rtnButtonWidth / 2;
    let rtnButtonY = 538 + rtnButtonHeight / 2;
    let isReturnButtonOverlaped =
      mouseX > rtnButtonX - rtnButtonWidth / 2 &&
      mouseX < rtnButtonX + rtnButtonWidth / 2 &&
      mouseY > rtnButtonY - rtnButtonHeight / 2 &&
      mouseY < rtnButtonY + rtnButtonHeight / 2;

    if (isReturnButtonOverlaped) {
      if (mouseIsPressed && !this.lastMousePressed) {
        OnReturnButtonDown();
        // 이미지 그리기
        imageManager.DrawImage(
          "ReturnButton",
          createVector(width / 2, height / 2, 0),
          0,
          120
        );
      } else {
        // 이미지 그리기
        imageManager.DrawImage(
          "ReturnButton",
          createVector(width / 2, height / 2, 0),
          0,
          120
        );
      }
    } else {
      // 이미지 그리기
      imageManager.DrawImage(
        "ReturnButton",
        createVector(width / 2, height / 2),
        0,
        255
      );
    }

    let homeButtonWidth = 238;
    let homeButtonHeight = 61;
    let homeButtonX = 1000 + homeButtonWidth / 2;
    let homeButtonY = 617 + homeButtonHeight / 2;
    let isHomeButtonOverlaped =
      mouseX > homeButtonX - homeButtonWidth / 2 &&
      mouseX < homeButtonX + homeButtonWidth / 2 &&
      mouseY > homeButtonY - homeButtonHeight / 2 &&
      mouseY < homeButtonY + homeButtonHeight / 2;

    if (isHomeButtonOverlaped) {
      if (mouseIsPressed && !this.lastMousePressed) {
        OnHomeButtonDown();
        // 이미지 그리기
        imageManager.DrawImage(
          "HomeButton",
          createVector(width / 2, height / 2, 0),
          0,
          120
        );
      } else {
        // 이미지 그리기
        imageManager.DrawImage(
          "HomeButton",
          createVector(width / 2, height / 2, 0),
          0,
          120
        );
      }
    } else {
      // 이미지 그리기
      imageManager.DrawImage(
        "HomeButton",
        createVector(width / 2, height / 2),
        0,
        255
      );
    }

    this.lastMousePressed = mouseIsPressed;

    if (this.creditTextList[this.creditTextList.length - 1].position.y < -100) {
      sceneManager.ChangeScene(new Opening());
    }
  }

  OnExit() {
    // soundManager.StopSound("intro");
  }
}
