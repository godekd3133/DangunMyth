/* Scene.js */ 
class Scene {
  enterTime;
  OnEnter() { }
  OnDraw() { }
  OnExit() { }
}

/* Animation.js */ 
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

/* Ease.js */ 
class Ease {
  static EaseIn(t) {
    return t * t;
  }

  static EaseOut(t) {
    return t * (2 - t);
  }

  static EaseInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  static EaseInSine(t) {
    return 1 - cos(t * HALF_PI);
  }

  static EaseOutSine(t) {
    return sin(t * HALF_PI);
  }

  static EaseInOutSine(t) {
    return -0.5 * (cos(PI * t) - 1);
  }

  static EaseInQuad(t) {
    return t * t;
  }

  static EaseOutQuad(t) {
    return 1 - pow(1 - t, 2);
  }

  static EaseInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - pow(-2 * t + 2, 2) / 2;
  }

  static EaseInCubic(t) {
    return t * t * t;
  }

  static EaseOutCubic(t) {
    return 1 - pow(1 - t, 3);
  }

  static EaseInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - pow(-2 * t + 2, 3) / 2;
  }

  static EaseInQuart(t) {
    return t * t * t * t;
  }

  static EaseOutQuart(t) {
    return 1 - pow(1 - t, 4);
  }

  static EaseInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - pow(-2 * t + 2, 4) / 2;
  }

  static EaseInQuint(t) {
    return t * t * t * t * t;
  }

  static EaseOutQuint(t) {
    return 1 + pow(t - 1, 5);
  }

  static EaseInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 - pow(-2 * t + 2, 5) / 2;
  }

  static EaseInExpo(t) {
    return t === 0 ? 0 : pow(2, 10 * t - 10);
  }

  static EaseOutExpo(t) {
    return t === 1 ? 1 : 1 - pow(2, -10 * t);
  }

  static EaseInOutExpo(t) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : t < 0.5
      ? pow(2, 20 * t - 10) / 2
      : (2 - pow(2, -20 * t + 10)) / 2;
  }

  static EaseInCirc(t) {
    return 1 - sqrt(1 - t * t);
  }

  static EaseOutCirc(t) {
    return sqrt(1 - pow(t - 1, 2));
  }

  static EaseInOutCirc(t) {
    return t < 0.5
      ? (1 - sqrt(1 - pow(2 * t, 2))) / 2
      : (sqrt(1 - pow(-2 * t + 2, 2)) + 1) / 2;
  }

  static EaseInBack(t) {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  }

  static EaseOutBack(t) {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * pow(t - 1, 3) + c1 * pow(t - 1, 2);
  }

  static EaseInOutBack(t) {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;
    return t < 0.5
      ? (pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
      : (pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  }

  static EaseInElastic(t) {
    const c4 = (2 * Math.PI) / 3;
    return t === 0
      ? 0
      : t === 1
      ? 1
      : -pow(2, 10 * t - 10) * sin((t * 10 - 10.75) * c4);
  }

  static EaseOutElastic(t) {
    const c4 = (2 * Math.PI) / 3;
    return t === 0
      ? 0
      : t === 1
      ? 1
      : pow(2, -10 * t) * sin((t * 10 - 0.75) * c4) + 1;
  }

  static EaseInOutElastic(t) {
    const c5 = (2 * Math.PI) / 4.5;
    return t === 0
      ? 0
      : t === 1
      ? 1
      : t < 0.5
      ? -(pow(2, 20 * t - 10) * sin((20 * t - 11.125) * c5)) / 2
      : (pow(2, -20 * t + 10) * sin((20 * t - 11.125) * c5)) / 2 + 1;
  }

  static EaseInBounce(t) {
    return 1 - Ease.EaseOutBounce(1 - t);
  }

  static EaseOutBounce(t) {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  }

  static EaseInOutBounce(t) {
    return t < 0.5
      ? Ease.EaseInBounce(t * 2) * 0.5
      : Ease.EaseOutBounce(t * 2 - 1) * 0.5 + 0.5;
  }
}

/* EndingCredit.js */ 
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
    imageManager.LoadImage("HomeButton", "../../../Images/Ending/HomeButton");
    imageManager.LoadImage("ReturnButton", "../../../Images/Ending/ReturnButton");
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

/* FontManager.js */ 
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

/* ImageManager.js */ 
class ImageManager {
  constructor() {
    this.images = new Map();
    this.pivot = createVector(0.5, 0.5);
  }

  ResetImages() {
    this.images.clear();
  }

  SetPivot(p) {
    this.SetPivot(p.x, p.y);
  }

  SetPivot(x, y) {
    this.pivot.x = x;
    this.pivot.y = y;
  }

  LoadImage(name, path) {
    if (this.images.has(name)) {
      return;
    }
    let img = loadImage(path + ".png");
    this.images.set(name, img);
  }

  LoadAnimation(name, path, count) {
    for (let i = 0; i < count; i++) {
      let key = `${name}(${i})`;
      let fullPath = `${path}(${i})`;
      this.LoadImage(key, fullPath);
    }
  }

  ValidateImage(key) {
    if (this.images.has(key)) {
      return true;
    }
    print(`Key was not found in image manager: ${key}\n`);
    // print stack trace
    console.trace();
    return false;
  }

  DrawImage(key, position, angle = 0, alpha = 255) {
    if (!this.ValidateImage(key)) {
      return;
    }
    let img = this.images.get(key);

    push();
    translate(position.x, position.y);
    rotate(angle);
    imageMode(CENTER);
    tint(255, alpha);
    image(img, 0, 0);
    pop();
  }

  DrawImageWithTint(
    key,
    position,
    angle = 0,
    alpha = 255,
    r = 255,
    g = 255,
    b = 255
  ) {
    if (!this.ValidateImage(key)) {
      return;
    }
    let img = this.images.get(key);

    push();
    translate(position.x, position.y);
    rotate(angle);
    imageMode(CENTER);
    tint(r, g, b, alpha);
    image(img, 0, 0);
    pop();
  }

  DrawImageScale(key, position, size, angle = 0, alpha = 255) {
    if (!this.ValidateImage(key)) {
      return;
    }
    let img = this.images.get(key);

    push();
    translate(position.x, position.y);
    rotate(angle);
    scale(size.x, size.y);
    imageMode(CENTER);
    tint(255, alpha);
    image(img, 0, 0);
    pop();
  }

  DrawImageScaleSimple(key, x, y, scale, angle, alpha) {
    this.DrawImageScale(
      key,
      createVector(x, y),
      createVector(scale, scale, 0),
      angle,
      alpha
    );
  }

  DrawImageSize(key, position, size, angle = 0, alpha = 255) {
    if (!this.ValidateImage(key)) {
      return;
    }
    let img = this.images.get(key);

    push();
    translate(position.x, position.y);
    rotate(angle);
    scale(size.x / img.width, size.y / img.height);
    imageMode(CENTER);
    tint(255, alpha);
    image(img, 0, 0);
    pop();
  }

  GetImage(name) {
    return this.images.get(name);
  }
}

/* Opening.js */ 
class Opening extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 22; // narr. 2 + 4 + 7 sec
    this.cloudX = 0;
    this.zoomIn = 1;
    this.logoAlpha = 0;
    this.dropdown = false;
    this.pressedMouse = false;
    this.selectedSequence = 0;
    this.prefix = "../../../Images/Opening/";
  }

  OnEnter() {
    imageManager.LoadImage("Opening_background", this.prefix + "background/1");
    imageManager.LoadImage("cloud01", this.prefix + "background/2");
    imageManager.LoadImage("cloud02", this.prefix + "background/3");
    imageManager.LoadImage("cloud03", this.prefix + "background/4");
    soundManager.PlaySound("intro");
    imageManager.LoadImage("btn_sequence01", this.prefix + "ui/btn_sequence_1");
    imageManager.LoadImage("btn_sequence02", this.prefix + "ui/btn_sequence_2");
    imageManager.LoadImage("btn_sequence03", this.prefix + "ui/btn_sequence_3");
    imageManager.LoadImage(
      "dropdown_list",
      this.prefix + "ui/btn_sequence_dropdown_list"
    );
    imageManager.LoadImage(
      "dropdown",
      this.prefix + "ui/btn_sequence_dropdown"
    );
    imageManager.LoadImage("logo", this.prefix + "ui/logo");
    imageManager.LoadImage("btn_start", this.prefix + "ui/startButton");

    this.logoAlpha = 0;
    this.pressedMouse = false;
    this.cloudX = 0;
    this.zoomIn = 1;
    this.enterTime = timeManager.time;
    this.dropdown = false;
  }

  OnDraw() {
    let scale = createVector(this.zoomIn, this.zoomIn, 0);
    imageManager.DrawImageScale(
      "Opening_background",
      createVector(width / 2, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "cloud01",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "cloud02",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "cloud03",
      createVector(width / 2 + this.cloudX, height / 2, 0),
      scale
    );

    if (timeManager.time - this.enterTime > 0.25 && this.zoomIn < 1.25) {
      this.zoomIn += 0.1 * timeManager.deltaTime;
      this.cloudX += 100 * timeManager.deltaTime;
    } else if (this.zoomIn >= 1.25) {
      this.zoomIn = 1.25;
      imageManager.DrawImage(
        "logo",
        createVector(width / 2, height / 2),
        0,
        this.logoAlpha
      );

      let mousePos = createVector(mouseX, mouseY);

      if (
        mousePos.x > 540 &&
        mousePos.x < 736 &&
        mousePos.y > 381 &&
        mousePos.y < 456
      ) {
        imageManager.DrawImage(
          "btn_start",
          createVector(width / 2, height / 2),
          0,
          255,
          220,
          220,
          220
        );
        if (mouseIsPressed && !this.pressedMouse) {
          if (this.selectedSequence == 0) {
            sceneManager.ChangeScene(new S1C1());
          } else if (this.selectedSequence == 1) {
            sceneManager.ChangeScene(new S2C1());
          } else if (this.selectedSequence == 2) {
            sceneManager.ChangeScene(new S3C1());
          }
        }
      } else {
        imageManager.DrawImage(
          "btn_start",
          createVector(width / 2, height / 2),
          0,
          this.logoAlpha
        );
      }

      if (
        mouseIsPressed &&
        mousePos.x > 540 &&
        mousePos.x < 736 &&
        mousePos.y > 486 &&
        mousePos.y < 536
      ) {
        if (!this.pressedMouse) {
          this.dropdown = !this.dropdown;
          this.pressedMouse = true;
        }
      }

      if (this.dropdown) {
        imageManager.DrawImage(
          "dropdown_list",
          createVector(width / 2, height / 2),
          0,
          this.logoAlpha
        );
        if (
          (mousePos.x > 540 &&
            mousePos.x < 736 &&
            mousePos.y > 527 &&
            mousePos.y < 569) ||
          this.selectedSequence == 0
        ) {
          imageManager.DrawImage(
            "btn_sequence01",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha
          );
          if (mouseIsPressed && !this.pressedMouse) {
            this.selectedSequence = 0;
            this.dropdown = false;
          }
        } else {
          imageManager.DrawImage(
            "btn_sequence01",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha - 90
          );
        }
        if (
          (mousePos.x > 540 &&
            mousePos.x < 736 &&
            mousePos.y > 569 &&
            mousePos.y < 609) ||
          this.selectedSequence == 1
        ) {
          imageManager.DrawImage(
            "btn_sequence02",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha
          );
          if (mouseIsPressed && !this.pressedMouse) {
            this.selectedSequence = 1;
            this.dropdown = false;
          }
        } else {
          imageManager.DrawImage(
            "btn_sequence02",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha - 90
          );
        }
        if (
          (mousePos.x > 540 &&
            mousePos.x < 736 &&
            mousePos.y > 609 &&
            mousePos.y < 649) ||
          this.selectedSequence == 2
        ) {
          imageManager.DrawImage(
            "btn_sequence03",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha
          );
          if (mouseIsPressed && !this.pressedMouse) {
            this.selectedSequence = 2;
            this.dropdown = false;
          }
        } else {
          imageManager.DrawImage(
            "btn_sequence03",
            createVector(width / 2, height / 2),
            0,
            this.logoAlpha - 90
          );
        }
      } else {
        imageManager.DrawImage(
          "dropdown",
          createVector(width / 2, height / 2),
          0,
          this.logoAlpha
        );
      }

      if (this.logoAlpha < 255) this.logoAlpha += 255 * timeManager.deltaTime;
      this.pressedMouse = mouseIsPressed;
    }
  }

  OnExit() {
    soundManager.StopSound("intro");
  }
}

/* S1C1.js */ 
class S1C1 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 17;
    this.cloudX = 0;
    this.zoomIn = 1;
    this.sessionIndex = 0;
    this.sessionDuration = [4, 9.5, 15];
    this.sessionSound = ["S1/C1/narr", "S1/C1/narr2", "S1/C1/narr3"];
    this.sessionText = ["text1", "text1", "text2"];
    this.isSessionOut = [false, false, false];
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S1/C1/background");
    imageManager.LoadImage("cloud01", "../../../Images/S1/C1/cloud_01");
    imageManager.LoadImage("cloud02", "../../../Images/S1/C1/cloud_02");
    imageManager.LoadImage("cloud03", "../../../Images/S1/C1/cloud_03");
    soundManager.PlaySound("intro");
    imageManager.LoadImage("text1", "../../../Images/S1/C1/text_01");
    imageManager.LoadImage("text2", "../../../Images/S1/C1/text_02");
    this.cloudX = 0;
    this.zoomIn = 1;
    this.enterTime = timeManager.time;
    this.sessionIndex = 0;
    this.isSessionOut = [false, false, false];
  }

  OnDraw() {
    let scale = createVector(this.zoomIn, this.zoomIn, 0);
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "cloud01",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "cloud02",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      scale
    );
    imageManager.DrawImageScale(
      "cloud03",
      createVector(width / 2 + this.cloudX, height / 2, 0),
      scale
    );

    if (timeManager.time - this.enterTime > 0.25) {
      this.cloudX += 100 * timeManager.deltaTime;
    }
    if (timeManager.time - this.enterTime > 0.25 && this.zoomIn < 1.8) {
      this.zoomIn += 0.02 * timeManager.deltaTime;
    }
    imageManager.DrawImage(
      this.sessionText[this.sessionIndex],
      createVector(width / 2, height / 2)
    );
    if (!this.isSessionOut[this.sessionIndex]) {
      soundManager.PlaySound(this.sessionSound[this.sessionIndex]);
      this.isSessionOut[this.sessionIndex] = true;
    }
    if (
      timeManager.time - this.enterTime >
      this.sessionDuration[this.sessionIndex]
    ) {
      if (this.sessionDuration.length - 1 > this.sessionIndex)
        this.sessionIndex++;
    }
    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C3());
    }
  }

  OnExit() {
    soundManager.StopSound("intro");
  }
}

/* S1C11.js */ 
class S1C11 extends Scene {
  constructor() {
    super();
    this.IMG_PREFIX = "../../../Images/S1/C11/";
    this.SOUND_PREFIX = "../../../Sounds/S1/C11/narr/";

    this.HWANIN_BODY_X = 200.0;
    this.HWANIN_BODY_Y = 520.0;
    this.HWANIN_EYE_X = 200.0;
    this.HWANIN_EYE_Y = 420.0;
    this.HWANIN_SCALE = 0.35;

    this.HWANWOONG_BODY_X = 1100.0;
    this.HWANWOONG_BODY_Y = 580.0;
    this.HWANWOONG_EYE_X = 1025.0;
    this.HWANWOONG_EYE_Y = 385.0;
    this.HWANWOONG_SCALE = 0.35;

    this.SCENE_SCONDS = 3; // 3초 동안 씬 진행
    this.startMillis = 0;

    this.narrDuration = 0;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.IMG_PREFIX + "background");
    imageManager.LoadImage("text", this.IMG_PREFIX + "text");

    imageManager.LoadImage("hwanin_body", this.IMG_PREFIX + "hwanin_body");
    imageManager.LoadImage(
      "hwanin_expression1",
      this.IMG_PREFIX + "hwanin_expression1"
    );
    imageManager.LoadImage(
      "hwanin_expression2",
      this.IMG_PREFIX + "hwanin_expression2"
    );

    imageManager.LoadImage(
      "hwanwoong_body",
      this.IMG_PREFIX + "hwanwoong_body"
    );
    imageManager.LoadImage(
      "hwanwoong_expression1",
      this.IMG_PREFIX + "hwanwoong_expression1"
    );
    imageManager.LoadImage(
      "hwanwoong_expression2",
      this.IMG_PREFIX + "hwanwoong_expression2"
    );

    this.startMillis = millis();
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImage("text", createVector(width / 2, height / 2));

    imageManager.DrawImageScale(
      "hwanin_body",
      createVector(this.HWANIN_BODY_X, this.HWANIN_BODY_Y),
      createVector(this.HWANIN_SCALE, this.HWANIN_SCALE, 0)
    );
    imageManager.DrawImageScale(
      "hwanwoong_body",
      createVector(this.HWANWOONG_BODY_X, this.HWANWOONG_BODY_Y),
      createVector(this.HWANWOONG_SCALE, this.HWANWOONG_SCALE, 0)
    );

    // 입, 움직임 인터랙션 반복
    if ((millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "hwanin_expression1",
        createVector(this.HWANIN_EYE_X, this.HWANIN_EYE_Y),
        createVector(this.HWANIN_SCALE, this.HWANIN_SCALE, 0)
      );
      imageManager.DrawImageScale(
        "hwanwoong_expression1",
        createVector(this.HWANWOONG_EYE_X, this.HWANWOONG_EYE_Y),
        createVector(this.HWANWOONG_SCALE, this.HWANWOONG_SCALE, 0)
      );
    } else {
      imageManager.DrawImageScale(
        "hwanin_expression2",
        createVector(this.HWANIN_EYE_X, this.HWANIN_EYE_Y),
        createVector(this.HWANIN_SCALE, this.HWANIN_SCALE, 0)
      );
      imageManager.DrawImageScale(
        "hwanwoong_expression2",
        createVector(this.HWANWOONG_EYE_X, this.HWANWOONG_EYE_Y),
        createVector(this.HWANWOONG_SCALE, this.HWANWOONG_SCALE, 0)
      );
    }

    // 씬 시작 후 1.5초 뒤 대사1 시작
    if (
      soundManager.hasSound("S1/C11/hwanin") &&
      isTimeExceededMillis(this.startMillis, 1.5)
    ) {
      this.narrDuration = soundManager.soundDuration("S1/C11/hwanin");
      soundManager.playSoundOnce("S1/C11/hwanin");
      this.startMillis = millis(); // 대사 1 시작 millis
    }

    // 대사 1 종료 후 1초 뒤 대사2 시작
    if (
      !soundManager.hasSound("S1/C11/hwanin") &&
      soundManager.hasSound("S1/C11/hwanwoong") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)
    ) {
      this.narrDuration = soundManager.soundDuration("S1/C11/hwanwoong");
      soundManager.playSoundOnce("S1/C11/hwanwoong");
      this.startMillis = millis();
    }

    // 대사 2 종료 후 1초 뒤 다음 장면으로 이동
    if (
      !soundManager.hasSound("S1/C11/hwanin") &&
      !soundManager.hasSound("S1/C11/hwanwoong") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)
    ) {
      sceneManager.ChangeScene(new S1C13());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }

  isTimeExceededMillis(startMillis, endSeconds) {
    let nowTotalMilliseconds = millis();
    let endMilliseconds = endSeconds * 1000;
    return nowTotalMilliseconds - startMillis >= endMilliseconds;
  }
}

/* S1C13.js */ 
class S1C13 extends Scene {
  constructor() {
    super();
    this.IMG_PREFIX = "../../../Images/S1/C13/";
    this.SOUND_PREFIX = "../../../Sounds/S1/C13/narr/";
    this.backgroundImages = [
      "background1",
      "background2",
      "background3",
      "background4",
      "background5",
      "background6",
      "background7",
    ];
    this.intervals = [0.0, 0.5, 1.0, 1.3, 1.6, 1.9, 2.1];

    this.startMillis = 0;
    this.narrDuration = 0;
  }

  OnEnter() {
    for (let backgroundImage of this.backgroundImages) {
      imageManager.LoadImage(
        backgroundImage,
        this.IMG_PREFIX + backgroundImage
      );
    }
    this.startMillis = millis();
    soundManager.PlaySound("Door");
  }

  OnDraw() {
    for (let i = 1; i < this.intervals.length; i++) {
      if (
        !isTimeExceededMillis(this.startMillis, this.intervals[i]) &&
        isTimeExceededMillis(this.startMillis, this.intervals[i - 1])
      ) {
        imageManager.DrawImage(
          "background" + i,
          createVector(width / 2, height / 2)
        );
        break;
      } else {
        imageManager.DrawImage(
          "background7",
          createVector(width / 2, height / 2)
        );
      }
    }
    if (isTimeExceededMillis(this.startMillis, 4.0)) {
      sceneManager.ChangeScene(new S1C14());
    }
  }

  OnExit() {}

  isTimeExceededMillis(startMillis, endSeconds) {
    let nowTotalMilliseconds = millis();
    let endMilliseconds = endSeconds * 1000;
    return nowTotalMilliseconds - startMillis >= endMilliseconds;
  }
}

/* S1C14.js */ 
class S1C14 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 15;
    this.isEffectOut = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S1/C14/background");
    imageManager.LoadImage("button", "../../../Images/S1/C14/button");
    this.enterTime = timeManager.time;
    this.isEffectOut = false;
  }

  OnDraw() {
    imageManager.DrawImage(
      "background",
      createVector(width / 2, height / 2, 0)
    );

    if (
      mouseX >= 550 &&
      mouseX <= width - 592 &&
      mouseY >= 585 &&
      mouseY <= height - 85
    ) {
      imageManager.DrawImage(
        "button",
        createVector(width / 2, height / 2),
        0,
        255,
        220,
        220,
        220
      );

      if (mouseIsPressed) {
        if (!this.isEffectOut) {
          soundManager.PlaySound("effect");
          this.isEffectOut = !this.isEffectOut;
        }
        // 미니 게임 씬 이동
        sceneManager.ChangeScene(new S1C15());
      }
    } else {
      imageManager.DrawImageScale(
        "button",
        createVector(width / 2, height / 2),
        createVector(1, 1)
      );
    }

    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C15());
    }
  }

  OnExit() {}
}

/* S1C15.js */ 
class Obstacle {
  constructor(image, imageScale, x, y) {
    this.image = image;
    this.imageScale = imageScale;
    this.x = x;
    this.y = y;
  }
}

class S1C15 extends Scene {
  constructor() {
    super();
    this.ALTIMETER_MAX = 550;
    this.altimeterSpeed = 0.4;
    this.altimeter = 150;

    this.indicator = Math.random() * 400 - 200;

    this.groundY = 900;

    this.obstacles = ["bird", "gust", "plane", "UFO", "cloud", "lightning"];
    this.obstaclesImageScale = [0.2, 0.3, 0.7, 0.3, 0.3, 0.25];
    this.obstaclesProbability = [
      0, 0, 0, 1, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5,
    ]; // 비행기 등장 확률을 낮춤
    this.obstacleList = [];
    this.obstacleCreatedTime = 0;
    this.obstacleIntervalTime = 2.0;

    this.hwanungX = width / 2;
    this.hwanungY = height / 2 - 170;
    this.hwanungImageScale = 0.4;

    this.collisionTime = 0;
    this.collisionActionTime = 0;
    this.collisionObstacle = "";
    this.collisionDirection = 0;
    this.collisionActionSpeed = 0;
    this.collisionLightning = [6, 10, 6, 10, 6, 15, 15];
    this.collisionLightningIndex = 0;
    this.collisionSoundPlayFlag = false;
  }

  OnEnter() {
    this.enterTime = timeManager.time;

    imageManager.LoadImage("background", "../../../Images/S1/C15/background");
    imageManager.LoadImage("ground", "../../../Images/S1/C15/ground");

    imageManager.LoadImage("hwanung", "../../../Images/S1/C15/hwanung");
    imageManager.LoadImage("hwanungFace1", "../../../Images/S1/C15/hwanung_face_1");
    imageManager.LoadImage("hwanungFace2", "../../../Images/S1/C15/hwanung_face_2");

    imageManager.LoadImage("bird", "../../../Images/S1/C15/obstacles/bird");
    imageManager.LoadImage("gust", "../../../Images/S1/C15/obstacles/gust");
    imageManager.LoadImage("plane", "../../../Images/S1/C15/obstacles/plane");
    imageManager.LoadImage("UFO", "../../../Images/S1/C15/obstacles/UFO");
    imageManager.LoadImage("cloud", "../../../Images/S1/C15/obstacles/cloud");
    imageManager.LoadImage("lightning", "../../../Images/S1/C15/obstacles/lightning");

    imageManager.LoadImage("wind", "../../../Images/S1/C15/obstacles/wind");
    imageManager.LoadImage("fog", "../../../Images/S1/C15/obstacles/fog");

    imageManager.LoadImage("altimeter", "../../../Images/S1/C15/altimeter_1");
    imageManager.LoadImage("altimeterHwanung", "../../../Images/S1/C15/altimeter_2");
    imageManager.LoadImage("arrow", "../../../Images/S1/C15/arrow");


    soundManager.PlaySound("Interaction1");

    this.hwanungImage = imageManager.GetImage("hwanung");

    this.obstacleCreatedTime = timeManager.time;
  }

  OnDraw() {
    imageManager.DrawImage(
      "background",
      createVector(width / 2, height / 2, 0)
    );
    if (this.altimeter > 480 && this.hwanungY < height / 2 + 250) {
      this.hwanungY += 2;
    }
    if (this.altimeter > 400) {
      this.groundY--;
      imageManager.DrawImage(
        "ground",
        createVector(width / 2 + this.indicator * 6, this.groundY, 0)
      );
    }

    if (mouseX < width / 2) {
      this.indicator += this.indicator < 200 ? 0.5 : 0;
    } else if (mouseX > width / 2) {
      this.indicator -= this.indicator > -200 ? 0.5 : 0;
    }

    if (this.altimeter <= this.ALTIMETER_MAX) {
      this.altimeter += this.altimeterSpeed;
    }

    if (
      this.collisionActionSpeed === 0 &&
      this.altimeter <= this.ALTIMETER_MAX
    ) {
      this.hwanungX = lerp(this.hwanungX, mouseX, timeManager.deltaTime);
    } else {
      mouseX = this.hwanungX;
    }

    imageManager.DrawImageScale(
      "hwanung",
      createVector(this.hwanungX, this.hwanungY, 0),
      createVector(this.hwanungImageScale, this.hwanungImageScale, 0)
    );
    if (this.collisionTime === 0) {
      imageManager.DrawImageScale(
        "hwanungFace1",
        createVector(this.hwanungX - 8, this.hwanungY - 45, 0),
        createVector(this.hwanungImageScale, this.hwanungImageScale, 0)
      );
    } else {
      imageManager.DrawImageScale(
        "hwanungFace2",
        createVector(this.hwanungX - 8, this.hwanungY - 45, 0),
        createVector(this.hwanungImageScale, this.hwanungImageScale, 0)
      );
    }

    // 장애물 등장
    if (
      timeManager.time - this.obstacleCreatedTime > this.obstacleIntervalTime &&
      this.altimeter < 480
    ) {
      let obstacleIndex =
        this.obstaclesProbability[
          Math.floor(Math.random() * this.obstaclesProbability.length)
        ];
      let randomObstacleImage = this.obstacles[obstacleIndex];
      this.obstacleList.push(
        new Obstacle(
          randomObstacleImage,
          this.obstaclesImageScale[obstacleIndex],
          Math.random() * (width - 100) + 30,
          height + 40
        )
      );

      this.obstacleCreatedTime = timeManager.time;
      this.obstacleIntervalTime = Math.random() * 2.2 + 0.5;
    }

    for (let i = this.obstacleList.length - 1; i >= 0; i--) {
      let obstacle = this.obstacleList[i];
      imageManager.DrawImageScale(
        obstacle.image,
        createVector(obstacle.x, obstacle.y, 0),
        createVector(obstacle.imageScale, obstacle.imageScale, 0)
      );
      obstacle.y -= 5;

      // 충돌처리
      let obstacleImage = imageManager.GetImage(obstacle.image);

      if (this.collisionTime === 0) {
        if (
          (this.hwanungX > obstacle.x &&
            this.hwanungX <
              obstacle.x + obstacleImage.width * obstacle.imageScale) ||
          (this.hwanungX +
            this.hwanungImage.width * (this.hwanungImageScale - 0.1) >
            obstacle.x &&
            this.hwanungX +
              this.hwanungImage.width * (this.hwanungImageScale - 0.1) <
              obstacle.x + obstacleImage.width * obstacle.imageScale)
        ) {
          if (
            (this.hwanungY > obstacle.y &&
              this.hwanungY <
                obstacle.y + obstacleImage.height * obstacle.imageScale) ||
            (this.hwanungY +
              this.hwanungImage.height * (this.hwanungImageScale - 0.1) >
              obstacle.y &&
              this.hwanungY +
                this.hwanungImage.height * (this.hwanungImageScale - 0.1) <
                obstacle.y + obstacleImage.height * obstacle.imageScale)
          ) {
            this.collisionTime = timeManager.time;
            this.collisionActionTime = 2;
            this.collisionObstacle = obstacle.image;
            this.collisionDirection = this.hwanungX < obstacle.x ? 1 : 2;

            switch (obstacle.image) {
              case "bird":
                this.collisionActionTime = 1;
                this.collisionActionSpeed = 2;
                break;
              case "plane":
                this.collisionActionTime = 2;
                this.collisionActionSpeed = 4;
                break;
              case "gust":
                this.collisionActionTime = 1.5;
                this.collisionDirection = Math.floor(Math.random() * 2) + 1;
                this.collisionActionSpeed = 3;
                break;
              case "UFO":
                break;
              case "cloud":
                break;
              case "lightning":
                this.collisionActionTime = 5;
                break;
            }
          }
        }
      }

      // 지나간 장애물 삭제
      if (obstacle.y < -50) {
        this.obstacleList.splice(i, 1);
      }
    }

    // 게이지 출력
    imageManager.DrawImage("altimeter", createVector(width / 2, height / 2, 0));
    imageManager.DrawImage(
      "altimeterHwanung",
      createVector(90, this.altimeter, 0)
    );

    let arrowAngle =
      Math.abs(this.indicator * 6) < 600 ? 0 : this.indicator < 0 ? 0.5 : -0.5;
    imageManager.DrawImageScale(
      "arrow",
      createVector(width / 2, height - 100, 0),
      createVector(0.4, 0.4, 0),
      arrowAngle,
      200
    );

    // 장애물 효과 출력
    if (this.collisionTime !== 0) {
      if (!this.collisionSoundPlayFlag) {
        soundManager.PlaySound("crash");
        this.collisionSoundPlayFlag = true;
      }

      switch (this.collisionObstacle) {
        case "bird":
        case "plane":
          this.hwanungX +=
            this.collisionDirection === 1
              ? this.collisionActionSpeed * -1
              : this.collisionActionSpeed;

          if (
            this.hwanungX >
            width - (this.hwanungImage.width * this.hwanungImageScale) / 2
          ) {
            this.hwanungX =
              width - (this.hwanungImage.width * this.hwanungImageScale) / 2;
          } else if (
            this.hwanungX <
            (this.hwanungImage.width * this.hwanungImageScale) / 2
          ) {
            this.hwanungX =
              (this.hwanungImage.width * this.hwanungImageScale) / 2;
          }
          break;
        case "gust":
          this.hwanungX +=
            this.collisionDirection === 1
              ? this.collisionActionSpeed * -1
              : this.collisionActionSpeed;

          if (
            this.hwanungX >
            width - (this.hwanungImage.width * this.hwanungImageScale) / 2
          ) {
            this.hwanungX =
              width - (this.hwanungImage.width * this.hwanungImageScale) / 2;
          } else if (
            this.hwanungX <
            (this.hwanungImage.width * this.hwanungImageScale) / 2
          ) {
            this.hwanungX =
              (this.hwanungImage.width * this.hwanungImageScale) / 2;
          }

          if (this.collisionDirection === 1) {
            imageManager.DrawImageScale(
              "wind",
              createVector(this.hwanungX + 160, this.hwanungY - 45, 0),
              createVector(0.4, 0.4, 0),
              -0.5,
              200
            );
          } else {
            imageManager.DrawImageScale(
              "wind",
              createVector(this.hwanungX - 160, this.hwanungY - 45, 0),
              createVector(0.4, 0.4, 0),
              -2.5,
              200
            );
          }
          break;
        case "UFO":
          this.obstacleIntervalTime *= 0.9;
          this.altimeter += this.altimeterSpeed;
          break;
        case "cloud":
          imageManager.DrawImageScale(
            "fog",
            createVector(width / 2, height / 2, 0),
            createVector(1.2, 1.2, 0)
          );
          break;
        case "lightning":
          if (this.collisionLightning[this.collisionLightningIndex] === 0) {
            this.collisionLightningIndex++;
          }

          if (
            this.collisionLightningIndex === 0 ||
            this.collisionLightningIndex % 2 === 0
          ) {
            if (this.collisionLightningIndex === 6) {
              fill(0);
            } else {
              fill(0, 150);
            }
            rect(0, 0, width, height);
          }

          this.collisionLightning[this.collisionLightningIndex]--;

          break;
      }

      // 장애물 효과 종료
      if (timeManager.time - this.collisionTime > this.collisionActionTime) {
        this.collisionTime = 0;
        this.collisionActionSpeed = 0;
        this.collisionDirection = 0;
        this.collisionSoundPlayFlag = false;
      } else if (
        this.collisionObstacle === "lightning" &&
        this.collisionLightningIndex === 6 &&
        this.collisionLightning[this.collisionLightningIndex] === 0
      ) {
        this.collisionLightning = [6, 10, 6, 10, 6, 15, 15];
        this.collisionLightningIndex = 0;
        this.collisionTime = 0;
        this.collisionActionSpeed = 0;
        this.collisionDirection = 0;
        this.collisionSoundPlayFlag = false;
      }
    }

    // 게임 종료
    if (this.altimeter >= this.ALTIMETER_MAX && this.groundY <= 500) {
      this.altimeterSpeed = 0;
      setTimeout(() => {
        if (Math.abs(this.indicator * 6) < 600) {
          // 성공
          sceneManager.ChangeScene(new S1C15V2());
        } else {
          // 실패
          sceneManager.ChangeScene(new S1C15V1());
        }
      }, 1000);
    }
  }

  OnExit() {
    soundManager.StopSound("Interaction1");
  }
}

/* S1C15V1.js */ 
class S1C15V1 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S1/C15-1/";
    this.backgroundAlpha = 0;

    this.SCENE_DURATION = 20;
    this.narrDuration = 2.7;
    this.HWANUNG_BODY_X = width / 2;
    this.HWANUNG_BODY_Y = height / 2 + 50;
    this.HWANUNG_BODY_SCALE = 0.25;
    this.HWANUNG_FACE_X = width / 2;
    this.HWANUNG_FACE_Y = height / 2 - 120;
    this.HWANUNG_FACE_SCALE = 0.3;
    this.HWANUNG_SWEAT_X = width / 2 + 10;
    this.HWANUNG_SWEAT_Y = height / 2;
    this.HWANUNG_SWEAT_SCALE = 0.4;
    this.flowY = 0;
    this.faceX = 0;
    this.showButton = false;

    this.playedSoundMap = new Map();
    this.startTime = 0;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("HWANUNG_BODY", this.PREFIX + "HWANUNG_BODY");
    imageManager.LoadImage("HWANUNG_FACE", this.PREFIX + "HWANUNG_FACE");
    imageManager.LoadImage("HWANUNG_SWEAT", this.PREFIX + "HWANUNG_SWEAT");
    imageManager.LoadImage("HWANUNG_TEXT", this.PREFIX + "TEXT");

    imageManager.LoadImage("button_top", "../../../Images/S1/C15-1/button_top");
    imageManager.LoadImage("button_bottom", "../../../Images/S1/C15-1/button_bottom");

    this.playedSoundMap = new Map();
    this.playedSoundMap.set("HWANUNG_NARR1", 0);
    // this.playedSoundMap.set("HWANUNG_NARR2", 0);
    this.showButton = false;

    this.flowY = 0;
    this.faceX = 0;
    this.startTime = millis();
    this.backgroundAlpha = 0;
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "HWANUNG_BODY",
      createVector(this.HWANUNG_BODY_X, this.HWANUNG_BODY_Y),
      createVector(this.HWANUNG_BODY_SCALE, this.HWANUNG_BODY_SCALE)
    );
    // this.faceX = sin(float(millis()) * 0.004) * 4; //240604 QA수정(얼굴 흔들림 삭제)
    imageManager.DrawImageScale(
      "HWANUNG_FACE",
      createVector(this.HWANUNG_FACE_X + this.faceX + 2, this.HWANUNG_FACE_Y),
      createVector(this.HWANUNG_FACE_SCALE, this.HWANUNG_FACE_SCALE)
    );
    //240603 수정 : Drop 속도 Down 및 반복 삭제
    if (this.flowY <= 1.5) {
      this.flowY += 0.005;
    } else {
      // this.flowY = 0;
    }
    this.HWANUNG_SWEAT_Y = height / 2 + this.flowY * 40 - 150;
    imageManager.DrawImageScale(
      "HWANUNG_SWEAT",
      createVector(this.HWANUNG_SWEAT_X + 4, this.HWANUNG_SWEAT_Y),
      createVector(this.HWANUNG_SWEAT_SCALE, this.HWANUNG_SWEAT_SCALE)
    );

    let currentTime = (millis() - this.startTime) / 1000;
    this.PlaySoundOnce("HWANUNG_NARR1");
    if (currentTime > 1.0) {
      // this.PlaySoundOnce("HWANUNG_NARR2");
    }
    //240603 텍스트 수정
    imageManager.DrawImage(
      "HWANUNG_TEXT",
      createVector(width / 2, height / 2 + 50)
    );

    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      // sceneManager.ChangeScene(new S1C15V2());
    }
    //240606 QA 나레이션 종료된 다음에 배경에 어두운거 나오기
    if (timeManager.time - this.enterTime > this.narrDuration) {
      this.showButton = true;
      // sceneManager.ChangeScene(new S1C15V2());
    }
    //240605 QA 배경에 어두운거 추가
    // println(this.backgroundAlpha);
    if (this.showButton && this.backgroundAlpha <= 180)
      this.backgroundAlpha += 1.2;

    fill(0, this.backgroundAlpha);
    rect(0, 0, width, height);

    //240605 QA 버튼 추가

    if (this.showButton) {
      // imageManager.DrawImageScale("button_top", createVector(width / 2, height / 2), createVector(1, 1));
      // imageManager.DrawImageScale("button_bottom", createVector(width / 2, height / 2), createVector(1, 1));

      //Mouse Hover
      if (mouseX > 480 && mouseX < 800 && mouseY > 375 && mouseY < 459) {
        imageManager.DrawImage(
          "button_top",
          createVector(width / 2, height / 2),
          0,
          180,
          220,
          220,
          220
        );
      } else {
        // imageManager.DrawImageScale("button_top", createVector(width / 2, height / 2), createVector(1, 1));
        imageManager.DrawImage(
          "button_top",
          createVector(width / 2, height / 2),
          0,
          this.backgroundAlpha + 80,
          220,
          220,
          220
        );
      }
      //Mouse Hover
      if (mouseX > 480 && mouseX < 800 && mouseY > 237 && mouseY < 324) {
        imageManager.DrawImage(
          "button_bottom",
          createVector(width / 2, height / 2),
          0,
          180,
          220,
          220,
          220
        );
      } else {
        // imageManager.DrawImageScale("button_bottom", createVector(width / 2, height / 2), createVector(1, 1));
        imageManager.DrawImage(
          "button_bottom",
          createVector(width / 2, height / 2),
          0,
          this.backgroundAlpha + 80,
          220,
          220,
          220
        );
      }
      if (mouseIsPressed) {
        /// x 480 ~ 800 y 237 ~ 324
        if (mouseX > 480 && mouseX < 800 && mouseY > 237 && mouseY < 324) {
          // go back
          sceneManager.ChangeScene(new S1C15());
          this.showButton = false;
        }
        /// x 480 ~ 800 y 375 ~ 459
        else if (mouseX > 480 && mouseX < 800 && mouseY > 375 && mouseY < 459) {
          //Home 버튼 눌렀을 때 어떻게 해야하는지 안정해져있음
          sceneManager.ChangeScene(new Opening());
          this.showButton = false;
        }
      }
    }
  }

  PlaySoundOnce(soundName) {
    if (this.playedSoundMap.get(soundName) === 1) {
      return;
    }
    soundManager.PlaySound(soundName);
    this.playedSoundMap.set(soundName, 1);
  }

  OnExit() {}
}

/* S1C15V2.js */ 
class S1C15V2 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S1/C15-2/";
    this.SCENE_DURATION = 5;
    this.HWANUNG_BODY_X = width / 2;
    this.HWANUNG_BODY_Y = height / 2 + 20;
    this.HWANUNG_BODY_SCALE = 0.215;
    this.HWANUNG_FACE_X = width / 2 + 4;
    this.HWANUNG_FACE_Y = height / 2 - 125;
    this.HWANUNG_FACE_SCALE = 0.25;
    this.cloudY = 50;
  }

  OnEnter() {
    this.cloudY = 50;
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("HWANUNG_BODY", this.PREFIX + "HWANUNG_BODY");
    imageManager.LoadImage("HWANUNG_FACE", this.PREFIX + "HWANUNG_FACE");
    imageManager.LoadImage("cloud", this.PREFIX + "cloud");
    this.startTime = millis();
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "HWANUNG_BODY",
      createVector(this.HWANUNG_BODY_X, this.HWANUNG_BODY_Y - this.cloudY),
      createVector(this.HWANUNG_BODY_SCALE, this.HWANUNG_BODY_SCALE)
    );
    imageManager.DrawImageScale(
      "HWANUNG_FACE",
      createVector(this.HWANUNG_FACE_X, this.HWANUNG_FACE_Y - this.cloudY),
      createVector(this.HWANUNG_FACE_SCALE, this.HWANUNG_FACE_SCALE)
    );
    imageManager.DrawImage(
      "cloud",
      createVector(width / 2, height / 2 - this.cloudY)
    );
    this.cloudY -= 0.13;
    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C16());
    }
  }

  OnExit() {
    // Add any cleanup code here if needed
  }
}

/* S1C16.js */ 
class S1C16 extends Scene {
  constructor() {
    super();
    this.handX = 360;
    this.handRotate = 0.0;
    this.handAngle = 0.01;
    this.handDir = -0.4;
    this.SCENE_DURATION = 7;
    this.isNarrOut = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S1/C16/background");
    imageManager.LoadImage("extra_1", "../../../Images/S1/C16/extra_1");
    imageManager.LoadImage("extra_2", "../../../Images/S1/C16/extra_2");
    imageManager.LoadImage("extra_3", "../../../Images/S1/C16/extra_3");
    imageManager.LoadImage("extra_4", "../../../Images/S1/C16/extra_4");
    imageManager.LoadImage("hwanung_arm", "../../../Images/S1/C16/hwanung_arm");
    imageManager.LoadImage("hwanung_face", "../../../Images/S1/C16/hwanung_face");
    imageManager.LoadImage("hwanung_face1", "../../../Images/S1/C16/hwanung_face1");
    imageManager.LoadImage("hwanung_face2", "../../../Images/S1/C16/hwanung_face2");
    imageManager.LoadImage("hwanung", "../../../Images/S1/C16/hwanung");
    imageManager.LoadImage("hwanung1", "../../../Images/S1/C16/hwanung1");
    imageManager.LoadImage("hwanung2", "../../../Images/S1/C16/hwanung2");
    imageManager.LoadImage("text", "../../../Images/S1/C16/text");
    this.isNarrOut = false;
    this.enterTime = timeManager.time;
  }

  OnDraw() {
    if (!this.isNarrOut) {
      soundManager.PlaySound("S1/C16/narr");
      this.isNarrOut = true;
    }

    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );

    imageManager.DrawImageScale(
      "extra_1",
      createVector(width / 2 - 550, height / 2 - 200),
      createVector(0.1, 0.1)
    );
    imageManager.DrawImageScale(
      "extra_2",
      createVector(width / 2 - 150, height / 2 - 200),
      createVector(0.1, 0.1)
    );
    imageManager.DrawImageScale(
      "extra_3",
      createVector(width / 2 - 350, height / 2 - 20),
      createVector(0.1, 0.1)
    );
    imageManager.DrawImageScale(
      "extra_4",
      createVector(width / 2 - 50, height / 2 - 30),
      createVector(0.1, 0.1)
    );

    this.handX += this.handDir;

    if (this.handX < 360) {
      this.handDir = 0.4;
    } else if (this.handX > 380) {
      this.handDir = -0.4;
    }

    this.handRotate += this.handAngle;
    if (this.handRotate > 0.1) {
      this.handAngle = -0.01;
    } else if (this.handRotate < -0.1) {
      this.handAngle = 0.01;
    }

    // imageManager.DrawImageScale("hwanung_arm", createVector(width / 2 + this.handX, height / 2 - 80), createVector(0.3, 0.3), this.handRotate);

    if ((millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "hwanung1",
        createVector(width / 2 + 500, height / 2),
        createVector(0.3, 0.3)
      );
    } else {
      imageManager.DrawImageScale(
        "hwanung2",
        createVector(width / 2 + 500, height / 2),
        createVector(0.3, 0.3)
      );
    }
    imageManager.DrawImageScale(
      "hwanung_face",
      createVector(width / 2 + 480, height / 2 - 165),
      createVector(0.3, 0.3)
    );

    imageManager.DrawImageScale(
      "text",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );

    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C17());
    }
  }

  OnExit() {
    // Add any cleanup code here if needed
  }
}

/* S1C17.js */ 
class S1C17 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S1/C17/";
    this.HWANUNG_X = width / 2 - 100;
    this.HWANUNG_Y = height / 2 - 50;
    this.HWANUNG_SCALE = 0.09;
    this.VASSAL_X = width / 2;
    this.VASSAL_Y = height / 2 - 150;
    this.VASSAL_SCALE = 0.095;
    this.VASSAL1_X = width / 2 - 480;
    this.VASSAL1_Y = height / 2 - 270;
    this.VASSAL1_SCALE = 0.07;
    this.VASSAL2_X = width / 2 - 170;
    this.VASSAL2_Y = height / 2 - 220;
    this.VASSAL2_SCALE = 0.09;
    this.VASSAL3_X = width / 2 - 350;
    this.VASSAL3_Y = height / 2 - 80;
    this.VASSAL3_SCALE = 0.1;
    this.VASSAL_JUMP = 0;
    this.VASSAL1_JUMP = 0;
    this.VASSAL2_JUMP = 0;
    this.VASSAL3_JUMP = 0;
    this.BEAR_X = width / 2;
    this.BEAR_Y = height / 2 + 800;
    this.BEAR_SCALE = 0.4;
    this.TIGER_X = width / 2 + 400;
    this.TIGER_Y = height / 2 + 900;
    this.TIGER_SCALE = 0.4;
    this.BEAR_POP = 0;
    this.TIGER_POP = 0;
    this.BUSH_OFFSET = 0;
    this.SCENE_SCONDS = 6.5; // 6.5초 동안 씬 진행
    this.playingBushRustle = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("BUSH", this.PREFIX + "BUSH");
    imageManager.LoadImage("HWANUNG", this.PREFIX + "HWANUNG");
    imageManager.LoadImage("VASSAL", this.PREFIX + "VASSAL");
    imageManager.LoadImage("VASSAL1", this.PREFIX + "VASSAL1");
    imageManager.LoadImage("VASSAL2", this.PREFIX + "VASSAL2");
    imageManager.LoadImage("VASSAL3", this.PREFIX + "VASSAL3");
    imageManager.LoadImage("BEAR", this.PREFIX + "BEAR");
    imageManager.LoadImage("TIGER", this.PREFIX + "TIGER");
    this.BEAR_POP = 0;
    this.TIGER_POP = 0;
    this.BUSH_OFFSET = 0;
    this.VASSAL_JUMP = 0;
    this.VASSAL1_JUMP = 0;
    this.VASSAL2_JUMP = 0;
    this.VASSAL3_JUMP = 0;
    this.enterTime = timeManager.time;
  }

  OnDraw() {
    this.VASSAL_JUMP = abs(sin(millis() / 100)) * 10;
    this.VASSAL1_JUMP =
      max(abs(sin(millis() / 135 + 0.146)) * 1.4 - 0.4, 0) * 10;
    this.VASSAL2_JUMP = max(abs(sin(millis() / 170 + 0.5)) * 2 - 1, 0) * 10;
    this.VASSAL3_JUMP =
      max(abs(sin(millis() / 120 + 0.674)) * 1.6 - 0.6, 0) * 10;

    if (timeManager.time - this.enterTime > 1.5 && !this.playingBushRustle) {
      soundManager.PlaySound("Bush");
      this.playingBushRustle = true;
    }
    if (this.BEAR_POP <= 450) {
      this.BEAR_POP += 2;
    }
    if (this.TIGER_POP <= 600) {
      this.TIGER_POP += 3;
    }
    if (this.BUSH_OFFSET <= 200) {
      this.BUSH_OFFSET += 1;
    }

    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "VASSAL2",
      createVector(this.VASSAL2_X, this.VASSAL2_Y - this.VASSAL2_JUMP),
      createVector(this.VASSAL2_SCALE, this.VASSAL2_SCALE)
    );
    imageManager.DrawImageScale(
      "VASSAL1",
      createVector(this.VASSAL1_X, this.VASSAL1_Y - this.VASSAL1_JUMP),
      createVector(this.VASSAL1_SCALE, this.VASSAL1_SCALE)
    );
    imageManager.DrawImageScale(
      "VASSAL3",
      createVector(this.VASSAL3_X, this.VASSAL3_Y - this.VASSAL3_JUMP),
      createVector(this.VASSAL3_SCALE, this.VASSAL3_SCALE)
    );
    imageManager.DrawImageScale(
      "VASSAL",
      createVector(this.VASSAL_X, this.VASSAL_Y - this.VASSAL_JUMP),
      createVector(this.VASSAL_SCALE, this.VASSAL_SCALE)
    );
    imageManager.DrawImageScale(
      "HWANUNG",
      createVector(this.HWANUNG_X, this.HWANUNG_Y),
      createVector(this.HWANUNG_SCALE, this.HWANUNG_SCALE)
    );
    imageManager.DrawImage(
      "BUSH",
      createVector(width / 2, height / 2 + 200 - this.BUSH_OFFSET)
    );
    imageManager.DrawImageScale(
      "TIGER",
      createVector(this.TIGER_X, this.TIGER_Y - this.TIGER_POP),
      createVector(this.TIGER_SCALE, this.TIGER_SCALE)
    );
    imageManager.DrawImageScale(
      "BEAR",
      createVector(this.BEAR_X, this.BEAR_Y - this.BEAR_POP),
      createVector(this.BEAR_SCALE, this.BEAR_SCALE)
    );

    if (timeManager.time - this.enterTime > this.SCENE_SCONDS) {
      sceneManager.ChangeScene(new S1C18());
    }
  }

  OnExit() {
    // Add any cleanup code here if needed
  }
}

/* S1C18.js */ 
class S1C18 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 15;
    this.tigerSoundTime = 7;
    this.bearSoundTime = 10;
    this.bearX = width / 2 - 100;
    this.animalY = height / 2 + 50;
    this.tigerX = width / 2 + 200;
    this.changeInterval = 0.5;
    this.changeTick = 0;
    this.currentIndex = 0;
    this.playedSoundMap = new Map();
  }

  OnEnter() {
    this.changeInterval = 0.5;
    this.changeTick = 0;
    this.currentIndex = 0;

    imageManager.LoadImage("background", "../../../Images/S1/C18/background");
    imageManager.LoadImage("narr", "../../../Images/S1/C18/narr");
    imageManager.LoadImage("tiger0", "../../../Images/S1/C18/tiger0");
    imageManager.LoadImage("tiger1", "../../../Images/S1/C18/tiger1");
    imageManager.LoadImage("bear0", "../../../Images/S1/C18/bear0");
    imageManager.LoadImage("bear1", "../../../Images/S1/C18/bear1");

    this.playedSoundMap = new Map();
    this.playedSoundMap.set("S1C18_NARR", 0);
    this.playedSoundMap.set("S1C18_TIGER", 0);
    this.playedSoundMap.set("S1C18_BEAR", 0);

    this.startTime = millis();
  }

  OnDraw() {
    this.changeTick += timeManager.deltaTime;

    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      `bear${this.currentIndex}`,
      createVector(this.bearX, this.animalY),
      createVector(0.25, 0.25)
    );
    imageManager.DrawImageScale(
      `tiger${this.currentIndex}`,
      createVector(this.tigerX, this.animalY),
      createVector(0.25, 0.25)
    );

    imageManager.DrawImageScale(
      "narr",
      createVector(width / 2, height / 2),
      createVector(1.0, 1.0)
    );

    let currentTime = (millis() - this.startTime) / 1000;
    this.PlaySoundOnce("S1C18_NARR");
    if (currentTime >= this.tigerSoundTime) {
      this.PlaySoundOnce("S1C18_TIGER");
    }
    if (currentTime >= this.bearSoundTime) {
      this.PlaySoundOnce("S1C18_BEAR");
    }
    if (this.changeTick >= this.changeInterval) {
      this.currentIndex ^= 1;
      this.changeTick = 0;
    }
    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C19_1());
    }
  }

  PlaySoundOnce(soundName) {
    if (this.playedSoundMap.get(soundName) === 1) {
      return;
    }
    soundManager.PlaySound(soundName);
    this.playedSoundMap.set(soundName, 1);
  }

  OnExit() {
    // Add any cleanup code here if needed
  }
}

/* S1C19_1.js */ 
class S1C19_1 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 8.5;
    this.tigerX = width - 200;
    this.tigerY = height - 150;
    this.bearX = width - 450;
    this.bearY = height - 150;
    this.narrFlag = false;
    this.narrDuration = 4.5;
    this.animalVoiceFlag = false;
    this.tigerRoutine = ["tiger1", "tiger2", "tiger3", "tiger2", "tiger1"];
    this.bearRoutine = ["bear1", "bear2", "bear3", "bear2", "bear1"];
  }

  OnEnter() {
    this.tigerX = width - 200;
    this.tigerY = height - 350;
    this.bearX = width - 400;
    this.bearY = height - 350;

    this.animalVoiceFlag = false;
    this.narrFlag = false;

    imageManager.LoadImage("background", "../../../Images/S1/C19/background0");
    imageManager.LoadImage("hwangwoong", "../../../Images/S1/C19/V1/hwanwoong");

    imageManager.LoadImage("bear1", "../../../Images/S1/C19/V1/bear1");
    imageManager.LoadImage("bear2", "../../../Images/S1/C19/V1/bear2");
    imageManager.LoadImage("bear3", "../../../Images/S1/C19/V1/bear3");

    imageManager.LoadImage("tiger1", "../../../Images/S1/C19/V1/tiger1");
    imageManager.LoadImage("tiger2", "../../../Images/S1/C19/V1/tiger2");
    imageManager.LoadImage("tiger3", "../../../Images/S1/C19/V1/tiger3");

    imageManager.LoadImage("C19-1-Text", "../../../Images/S1/C19/C19-1-Text");

  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImage("C19-1-Text", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "hwangwoong",
      createVector(320, height - 280),
      createVector(0.25, 0.25)
    );

    if (this.bearX > width / 2) {
      this.tigerX -= 40 * timeManager.deltaTime;
      this.bearX -= 40 * timeManager.deltaTime;
      imageManager.DrawImageScale(
        this.tigerRoutine[(millis() / 100) % 5],
        createVector(this.tigerX, this.tigerY),
        createVector(0.15, 0.15)
      );
      imageManager.DrawImageScale(
        this.bearRoutine[(millis() / 100) % 5],
        createVector(this.bearX, this.bearY),
        createVector(0.15, 0.15)
      );
    } else {
      imageManager.DrawImageScale(
        this.tigerRoutine[0],
        createVector(this.tigerX, this.tigerY),
        createVector(0.15, 0.15)
      );
      imageManager.DrawImageScale(
        this.bearRoutine[1],
        createVector(this.bearX, this.bearY),
        createVector(0.15, 0.15)
      );
    }

    if (!this.narrFlag) {
      this.narrFlag = true;
      soundManager.PlaySound("S1/C19-1/narr");
    }
    if (timeManager.time - this.enterTime >= this.narrDuration) {
      if (!this.animalVoiceFlag) {
        this.animalVoiceFlag = true;
        soundManager.PlaySound("S1/C19-1/Bear");
      }
    }
    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C19_2());
    }
  }

  OnExit() {
    // Add any cleanup code here if needed
  }
}

/* S1C19_2.js */ 
class S1C19_2 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 10;

    this.armInterval = 0.25;
    this.mouthInterval = 0.2;
    this.mouthChangeTick = 0;
    this.armChangeTick = 0;
    this.mouthIndex = 0;
    this.armIndex = 0;

    this.firstDuration = 2.5;
    this.secondDuration = 2.5;
    this.thirdDuration = 5.5;

    this.firstFlag = false;
    this.secondFlag = false;
    this.thirdFlag = false;

    this.animalVoiceFlag = false;
  }

  OnEnter() {
    this.armInterval = 0.25;
    this.mouthInterval = 0.2;
    this.armChangeTick = 0;
    this.mouthChangeTick = 0;
    this.mouthIndex = 0;
    this.armIndex = 0;

    this.firstDuration = 2.5;
    this.secondDuration = 2.5;
    this.thirdDuration = 5.5;

    this.firstFlag = false;
    this.secondFlag = false;
    this.thirdFlag = false;

    imageManager.LoadImage("background", "../../../Images/S1/C19/background1");
    imageManager.LoadImage("arm", "../../../Images/S1/C19/hwanwoong_arm");
    imageManager.LoadImage("mouth0", "../../../Images/S1/C19/hwanwoong_mouth1");
    imageManager.LoadImage("mouth1", "../../../Images/S1/C19/hwanwoong_mouth0");
    imageManager.LoadImage("skin", "../../../Images/S1/C19/hwanwoong_skin");
    imageManager.LoadImage("C19-2-Text", "../../../Images/S1/C19/C19-2-Text");

    this.enterTime = timeManager.time;
  }

  OnDraw() {
    this.mouthChangeTick += timeManager.deltaTime;
    this.armChangeTick += timeManager.deltaTime;

    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    if (this.armIndex === 0) {
      imageManager.DrawImageScale(
        "arm",
        createVector(650, height - 350),
        createVector(0.25, 0.25)
      );
    } else {
      imageManager.DrawImageScale(
        "arm",
        createVector(630, height - 330),
        createVector(0.25, 0.25),
        0.3
      );
    }
    imageManager.DrawImageScale(
      "skin",
      createVector(600, height - 250),
      createVector(0.25, 0.25)
    );
    imageManager.DrawImageScale(
      "mouth" + this.mouthIndex,
      createVector(600, height - 250),
      createVector(0.25, 0.25)
    );

    imageManager.DrawImage("C19-2-Text", createVector(width / 2, height / 2));

    // "그렇구나 너희의 소원을 들어주마"
    if (timeManager.time - this.enterTime > 1.5 && !this.firstFlag) {
      this.firstFlag = true;
      soundManager.PlaySound("S1/C19-2/hwanwoong1");
    }

    // Toggle mouth index
    if (this.mouthChangeTick >= this.mouthInterval) {
      this.mouthIndex ^= 1;
      this.mouthChangeTick = 0;
    }

    // Toggle arm index
    if (this.armChangeTick >= this.armInterval) {
      this.armIndex ^= 1;
      this.armChangeTick = 0;
    }

    // Change scene after the specified duration
    if (timeManager.time - this.enterTime >= 5.5) {
      sceneManager.ChangeScene(new S1C19_3());
    }
  }

  OnExit() {}
}

/* S1C19_3.js */ 
class S1C19_3 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 9;
    this.handX = 0;
    this.animalX = 0;
    this.animalY = 0;
    this.basketX = 0;
    this.basketY = 0;
    this.firstDuration = 4.5;
    this.secondDuration = 4.0;
    this.thridDuration = 5.5;
    this.firstFlag = false;
    this.secondFlag = false;
    this.thridFlag = false;
  }

  OnEnter() {
    this.handX = 150;
    this.animalX = width - 250;
    this.animalY = height - 200;
    this.basketX = this.handX + 450;
    this.basketY = 250;

    this.firstDuration = 5.5;
    this.secondDuration = 2.5;
    this.thridDuration = 5.5;

    this.firstFlag = false;
    this.secondFlag = false;
    this.thridFlag = false;

    imageManager.LoadImage("background", "../../../Images/S1/C19/background2");
    imageManager.LoadImage("hands", "../../../Images/S1/C19/hands");
    imageManager.LoadImage("hwangwoong", "../../../Images/S1/C19/hwanwoong_hand");
    imageManager.LoadImage("basket", "../../../Images/S1/C19/basket");
    imageManager.LoadImage("C19-3-Text", "../../../Images/S1/C19/C19-3-Text");
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));

    imageManager.DrawImageScale(
      "hands",
      createVector(this.animalX, this.animalY),
      createVector(0.3, 0.3, 0)
    );
    imageManager.DrawImageScale(
      "hwangwoong",
      createVector(this.handX, 150),
      createVector(0.7, 0.7, 0),
      90
    );
    imageManager.DrawImageScale(
      "basket",
      createVector(this.basketX, this.basketY),
      createVector(0.45, 0.45, 0)
    );

    imageManager.DrawImage("C19-3-Text", createVector(width / 2, height / 2));

    if (!this.firstFlag) {
      this.firstFlag = true;
      soundManager.PlaySound("S1/C19-3/hwanwoong1");
    }
    if (timeManager.time - timeManager.enterTime >= 7) {
      if (!this.thridFlag) {
        this.thridFlag = true;
        soundManager.PlaySound("S1/C19-3/Bear");
      }
    }
    if (this.handX <= 230) {
      this.handX += 30 * timeManager.deltaTime;
      this.basketX += 30 * timeManager.deltaTime;
      this.animalX -= 15 * timeManager.deltaTime;
      this.animalY -= 15 * timeManager.deltaTime;
    }
    if (timeManager.time - timeManager.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S2C1());
    }
  }

  OnExit() {}
}

/* S1C2.js */ 
class S1C2 extends Scene {
  constructor() {
    super();
    this.BACKGROUND_IMAGE = "../../../Images/S1/C2/background";
    this.CLOUD_IMAGE = "../../../Images/S1/C2/cloud";
    this.MAX_TIMER = 25;
    this.backgroundAlpha = 255;
    this.cloudX = 0;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.BACKGROUND_IMAGE);
    imageManager.LoadImage("cloud01", this.CLOUD_IMAGE);
    this.backgroundAlpha = 255;
    this.cloudX = 0;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImageScale(
      "cloud01",
      createVector(width / 2 - this.cloudX, height / 2, 0),
      createVector(0.67, 0.67, 0)
    );

    fill(0, this.backgroundAlpha);
    rect(0, 0, width, height);

    if (this.backgroundAlpha > 0) {
      this.backgroundAlpha -= 70 - timeManager.deltaTime;
    }
    if (this.cloudX > width / 2 + 200) {
      // sceneManager.ChangeScene(new S1C3());
    }
  }

  OnExit() {}
}

/* S1C3.js */ 
class S1C3 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 8; // narr. 7sec

    this.GOD_IMAGE = "../../../Images/S1/C3/god";
    this.BACKGROUND_IMAGE = "../../../Images/S1/C3/background";
    this.CLOUD_IMAGE = "../../../Images/S1/C3/cloud";
    this.DEFAULT_FACE = "../../../Images/S1/C3/god_smile";
    this.TELLING_FACES = [
      "../../../Images/S1/C3/god_telling1",
      "../../../Images/S1/C3/god_telling2",
    ];

    this.GOD_WIDTH = width / 2.1;
    this.GOD_HEIGHT = this.GOD_WIDTH * 1.18;
    this.isNarrOut = false;

    this.cloudY = 0;
    this.godY = 0;
    this.currentImageIndex = 0;
    this.changeInterval = 30;
  }

  OnEnter() {
    this.isNarrOut = false;

    imageManager.LoadImage("background", this.BACKGROUND_IMAGE);
    imageManager.LoadImage("cloud01", this.CLOUD_IMAGE);

    imageManager.LoadImage("god", this.GOD_IMAGE);
    imageManager.LoadImage("face", this.DEFAULT_FACE);
    imageManager.LoadImage("text", "../../../Images/S1/C3/text");

    let imageCount = this.TELLING_FACES.length;
    this.currentImageIndex = 0;
    this.godY = 0;
    this.cloudY = 0;

    for (let i = 0; i < imageCount; i++) {
      imageManager.LoadImage("telling" + i, this.TELLING_FACES[i]);
    }

    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImageScale(
      "god",
      createVector(width / 2, height / 2 + this.godY, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "face",
      createVector(width / 2, height / 2 + this.godY, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "cloud01",
      createVector(width / 2, height / 2 + this.cloudY, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImage("text", createVector(width / 2, height / 2));
  }

  OnDraw() {
    if (!this.isNarrOut) {
      this.isNarrOut = !this.isNarrOut;
      soundManager.PlaySound("S1/C3/narr");
    }

    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImageScale(
      "god",
      createVector(width / 2, height / 2 + this.godY, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "telling" + this.currentImageIndex,
      createVector(width / 2, height / 2 + this.godY, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "cloud01",
      createVector(width / 2, height / 2 + this.cloudY, 0),
      createVector(0.67, 0.67, 0)
    );
    imageManager.DrawImage("text", createVector(width / 2, height / 2));

    this.godY += (100 * timeManager.deltaTime) / this.SCENE_DURATION;
    this.cloudY += (100 * timeManager.deltaTime) / this.SCENE_DURATION;

    if (frameCount % this.changeInterval === 0) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.TELLING_FACES.length;
    }

    if (
      this.cloudY >= 100 ||
      timeManager.time - this.enterTime >= this.SCENE_DURATION
    ) {
      sceneManager.ChangeScene(new S1C4());
    }
  }

  OnExit() {}
}

/* S1C4.js */ 
class S1C4 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 7.5;
    this.openDelay = 0.33;
    this.closeMin = 1;
    this.closeMax = 2;
    this.eyeIndex = 0;
    this.nextCloseDuration = 0;
    this.closeTime = 0;
    this.openTime = 0;
    this.isNarrOut = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S1/C4/background");
    imageManager.LoadImage("man1", "../../../Images/S1/C4/man1");
    imageManager.LoadImage("man2", "../../../Images/S1/C4/man2");
    imageManager.LoadImage("eye1", "../../../Images/S1/C4/eye1");
    imageManager.LoadImage("eye2", "../../../Images/S1/C4/eye2");
    imageManager.LoadImage("eye3", "../../../Images/S1/C4/eye3");
    imageManager.LoadImage("mouth", "../../../Images/S1/C4/mouth");
    imageManager.LoadImage("text", "../../../Images/S1/C4/text");

    this.closeTime = timeManager.time;
    this.openTime = timeManager.time;
    this.nextCloseDuration =
      random(this.closeMin * 100, this.closeMax * 100) / 100;
    this.isNarrOut = false;
  }

  OnDraw() {
    if (!this.isNarrOut) {
      this.isNarrOut = !this.isNarrOut;
      soundManager.PlaySound("S1/C4/narr");
    }
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "text",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "man1",
      createVector(width / 2 + 130, height - 165),
      createVector(0.35, 0.35)
    );
    imageManager.DrawImageScale(
      "eye3",
      createVector(width / 2 + 130, height - 165),
      createVector(0.35, 0.35)
    );
    imageManager.DrawImageScale(
      "mouth",
      createVector(width / 2 + 130, height - 165),
      createVector(0.35, 0.35)
    );
    imageManager.DrawImageScale(
      "man2",
      createVector(width / 2 + 400, height - 165),
      createVector(0.43, 0.43)
    );

    if (this.eyeIndex == 0) {
      imageManager.DrawImageScale(
        "eye1",
        createVector(width / 2 + 370, height - 390),
        createVector(0.38, 0.38)
      );
    } else {
      imageManager.DrawImageScale(
        "eye2",
        createVector(width / 2 + 370, height - 390),
        createVector(0.38, 0.38)
      );
    }

    if (
      this.eyeIndex == 0 &&
      timeManager.time - this.openTime >= this.nextCloseDuration
    ) {
      this.eyeIndex = 1;
      this.nextCloseDuration =
        random(this.closeMin * 100, this.closeMax * 100) / 100;
      this.closeTime = timeManager.time;
    } else if (
      this.eyeIndex == 1 &&
      timeManager.time - this.closeTime >= this.openDelay
    ) {
      this.eyeIndex = 0;
      this.openTime = timeManager.time;
    }

    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C5());
    }
  }

  OnExit() {}
}

/* S1C5.js */ 
class S1C5 extends Scene {
  constructor() {
    super();
    this.timeline = new TimelineManager();

    this.isNarrOut = false;

    this.xPos = 0;
    this.yPos = 0;
    this.size = 0;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S1/C5/background");
    imageManager.LoadImage("hwanin", "../../../Images/S1/C5/hawnin");
    imageManager.LoadImage("hwanwoong", "../../../Images/S1/C5/hwanwoong");
    imageManager.LoadImage("text", "../../../Images/S1/C5/text");

    this.timeline = new TimelineManager();

    this.timeline.pushTimeline((elapsedTime) => {
      this.xPos = curvePoint(
        width * 0.24,
        width * 0.2,
        width * 0.32,
        width * 0.28,
        elapsedTime / 3
      );
      this.yPos = curvePoint(
        height * 0.95,
        height * 0.8,
        height * 0.7,
        height * 0.55,
        elapsedTime / 3
      );

      this.size = lerp(0.3, 0.25, elapsedTime / 3);
    }, 3);

    this.timeline.pushTimeline((elapsedTime) => {
      this.xPos = curvePoint(
        width * 0.36,
        width * 0.32,
        width * 0.44,
        width * 0.4,
        elapsedTime / 3
      );
      this.yPos = curvePoint(
        height * 0.85,
        height * 0.7,
        height * 0.6,
        height * 0.45,
        elapsedTime / 3
      );
      this.size = lerp(0.25, 0.2, elapsedTime / 3);
    }, 3);

    this.timeline.pushTimeline((elapsedTime) => {
      this.xPos = curvePoint(
        width * 0.36,
        width * 0.32,
        width * 0.44,
        width * 0.4,
        1
      );
      this.yPos = curvePoint(
        height * 0.85,
        height * 0.7,
        height * 0.6,
        height * 0.45,
        1
      );
      this.size = lerp(0.25, 0.2, 1);
    }, 3);

    this.timeline.setEndCallback(() => {
      sceneManager.ChangeScene(new S1C6_1());
    });
  }

  OnDraw() {
    if (!this.isNarrOut) {
      this.isNarrOut = !this.isNarrOut;
      soundManager.PlaySound("S1/C5/narr");
    }
    this.timeline.OnDraw();
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );
    imageManager.DrawImageScale(
      "hwanwoong",
      createVector(width * 0.64, height * 0.35, 0),
      createVector(0.15, 0.15, 0)
    );
    imageManager.DrawImageScale(
      "hwanin",
      createVector(this.xPos, this.yPos, 0),
      createVector(this.size, this.size, 0)
    );
    imageManager.DrawImage("text", createVector(width / 2, height / 2));
  }

  OnExit() {}
}

/* S1C6_1.js */ 
class S1C6_1 extends Scene {
  constructor() {
    super();
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.SCENE_DURATION = 14;
    this.hwaninDuration = 4;
    this.hwanwoongDuration = 3;
    this.soundStartTime = 0;
    this.hwaninStartTime = 4;
    this.hwanwoongStartTime = 9;
    this.narrFlag = false;
    this.hwaninVoiceFlag = false;
    this.hwanwoongVoiceFlag = false;
    this.hwaninCoor = createVector(this.centerX - 300, this.centerY);
    this.mouseTickInterval = 10 / 60;
    this.mouseTick = 0;

    this.hwaninfaceOffset = -40;
    this.hwaninX = this.centerX - 250;
    this.hwaninY = this.centerY - 50;
    this.hwaninFaceFlag = false;
    this.hwaninMouse = true;

    this.hwanwoongfaceOffsetY = -80;
    this.hwanwoongfaceOffsetX = -25;
    this.hwanwoongX = this.centerX + 300;
    this.hwanwoongY = this.centerY + 180;
    this.hwanwoongFaceFlag = false;
    this.hwanwoongMouse = true;
  }

  OnEnter() {
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.SCENE_DURATION = 14;
    this.hwaninDuration = 4;
    this.hwanwoongDuration = 3;
    this.soundStartTime = 0;
    this.hwaninStartTime = 4;
    this.hwanwoongStartTime = 9;
    this.narrFlag = false;
    this.hwaninVoiceFlag = false;
    this.hwanwoongVoiceFlag = false;
    this.hwaninCoor = createVector(this.centerX - 300, this.centerY);
    this.mouseTickInterval = 10 / 60;
    this.mouseTick = 0;

    this.hwaninfaceOffset = -40;
    this.hwaninX = this.centerX - 250;
    this.hwaninY = this.centerY - 50;
    this.hwaninFaceFlag = false;
    this.hwaninMouse = true;

    this.hwanwoongfaceOffsetY = -80;
    this.hwanwoongfaceOffsetX = -25;
    this.hwanwoongX = this.centerX + 300;
    this.hwanwoongY = this.centerY + 180;
    this.hwanwoongFaceFlag = false;
    this.hwanwoongMouse = true;

    this.hwaninFaceCnt = 0;
    this.hwanwoongFaceCnt = 0;
    this.mouseTick = 0;
    this.soundStartTime = 0;

    this.soundStartTime = 0;
    this.hwaninStartTime = 4;
    this.hwanwoongStartTime = 9;

    imageManager.LoadImage("text", "../../../Images/S1/C6-1/text");

    imageManager.LoadImage("Background", "../../../Images/S1/C6-1/Background");
    imageManager.LoadImage("HwaninBody", "../../../Images/S1/C6-1/HwaninBody");
    imageManager.LoadImage(
      "HwaninFace_MouseClose",
      "../../../Images/S1/C6-1/HwaninFace_MouseClose"
    );
    imageManager.LoadImage(
      "HwaninFace_MouseOpen",
      "../../../Images/S1/C6-1/HwaninFace_MouseOpen"
    );
    imageManager.LoadImage(
      "HwaninFace_MouseClose",
      "../../../Images/S1/C6-1/HwaninFace_MouseClose"
    );

    imageManager.LoadImage("HwanwoongBody1", "../../../Images/S1/C6-1/HwanwoongBody1");
    imageManager.LoadImage("HwanwoongBody2", "../../../Images/S1/C6-1/HwanwoongBody2");
    imageManager.LoadImage("HwanwoongFace1", "../../../Images/S1/C6-1/HwanwoongFace1");
    imageManager.LoadImage(
      "HwanwoongFace2-1",
      "../../../Images/S1/C6-1/HwanwoongFace2-1"
    );
    imageManager.LoadImage(
      "HwanwoongFace2-2",
      "../../../Images/S1/C6-1/HwanwoongFace2-2"
    );

    background(255);
    timeManager.enterTime = timeManager.time;
  }

  OnDraw() {
    if (!this.narrFlag) {
      this.narrFlag = true;
      soundManager.PlaySound("S1/C6-1/narr");
    }
    this.mouseTick += timeManager.deltaTime;
    if (this.mouseTick >= this.mouseTickInterval) {
      this.mouseTick = 0;

      if (this.hwaninFaceFlag) {
        this.hwaninMouse = !this.hwaninMouse;
      } else {
        this.hwaninMouse = false;
      }

      if (this.hwanwoongFaceFlag) {
        this.hwanwoongMouse = !this.hwanwoongMouse;
      } else {
        this.hwanwoongMouse = false;
      }
    }
    if (timeManager.time - timeManager.enterTime >= this.hwaninStartTime) {
      this.hwaninFaceFlag = true;
      if (!this.hwaninVoiceFlag) {
        this.soundStartTime = timeManager.time;
        this.hwaninVoiceFlag = true;
        soundManager.PlaySound("S1/C6-1/hwanin");
      }
      if (
        this.hwaninVoiceFlag &&
        timeManager.time - this.soundStartTime > this.hwaninDuration
      ) {
        this.hwaninFaceFlag = false;
      }
    }
    if (timeManager.time - timeManager.enterTime >= this.hwanwoongStartTime) {
      this.hwanwoongFaceFlag = true;
      this.hwaninFaceFlag = false;
      if (!this.hwanwoongVoiceFlag) {
        this.soundStartTime = timeManager.time;
        this.hwanwoongVoiceFlag = true;
        soundManager.PlaySound("S1/C6-1/hwanwoong");
      }
    }
    if (timeManager.time - timeManager.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C6_2());
    }
    imageManager.DrawImageScale(
      "Background",
      createVector(this.centerX, this.centerY),
      createVector(1, 1),
      0,
      255
    );
    imageManager.DrawImageScale(
      "text",
      createVector(this.centerX, this.centerY),
      createVector(1, 1),
      0,
      255
    );

    imageManager.DrawImageScale(
      "HwaninBody",
      createVector(this.hwaninX, this.hwaninY),
      createVector(0.15, 0.15),
      0,
      255
    );
    if (!this.hwaninFaceFlag) {
      imageManager.DrawImageScale(
        "HwaninFace_MouseClose",
        createVector(this.hwaninX, this.hwaninY + this.hwaninfaceOffset),
        createVector(0.15, 0.15),
        0,
        255
      );
    } else {
      if (this.hwaninMouse) {
        imageManager.DrawImageScale(
          "HwaninFace_MouseClose",
          createVector(this.hwaninX, this.hwaninY + this.hwaninfaceOffset),
          createVector(0.15, 0.15),
          0,
          255
        );
      } else {
        imageManager.DrawImageScale(
          "HwaninFace_MouseOpen",
          createVector(this.hwaninX, this.hwaninY + this.hwaninfaceOffset),
          createVector(0.15, 0.15),
          0,
          255
        );
      }
    }

    if (!this.hwanwoongFaceFlag) {
      imageManager.DrawImageScale(
        "HwanwoongBody1",
        createVector(this.hwanwoongX, this.hwanwoongY),
        createVector(0.15, 0.15),
        0,
        255
      );
      imageManager.DrawImageScale(
        "HwanwoongFace1",
        createVector(
          this.hwanwoongX - 10,
          this.hwanwoongY + this.hwanwoongfaceOffsetY
        ),
        createVector(0.15, 0.15),
        0,
        255
      );
    } else {
      imageManager.DrawImageScale(
        "HwanwoongBody2",
        createVector(this.hwanwoongX, this.hwanwoongY),
        createVector(0.15, 0.15),
        0,
        255
      );
      if (this.hwanwoongMouse) {
        imageManager.DrawImageScale(
          "HwanwoongFace2-1",
          createVector(
            this.hwanwoongX + this.hwanwoongfaceOffsetX,
            this.hwanwoongY + this.hwanwoongfaceOffsetY
          ),
          createVector(0.15, 0.15),
          0,
          255
        );
      } else {
        imageManager.DrawImageScale(
          "HwanwoongFace2-2",
          createVector(
            this.hwanwoongX + this.hwanwoongfaceOffsetX,
            this.hwanwoongY + this.hwanwoongfaceOffsetY
          ),
          createVector(0.15, 0.15),
          0,
          255
        );
      }
    }
  }

  OnExit() {}
}

/* S1C6_2.js */ 
class S1C6_2 extends Scene {
  constructor() {
    super();
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.SCENE_DURATION = 8.5;
    this.hwaninFaceScale = 0.4;

    this.hwaninStartTime = 4.0;

    this.narrFlag = false;
    this.hwaninVoiceFlag = false;

    this.tick1Flag = true;
    this.tick1Cnt = 0;

    this.endpointTick = 0;

    //환인 위치
    this.hwaninfaceOffset = -130;
    this.hwaninX = this.centerX - 310;
    this.hwaninY = this.centerY + 350;

    //환인 얼굴 움직이는 변수
    this.hwaninFaceFlag = true;
    this.hwaninFaceCnt = 0;
    this.hwaninFace = true;
  }

  OnEnter() {
    this.hwaninFaceScale = 0.4;
    // int hwaninX = centerX-200;
    // int hwaninY = centerY;

    //나레이션

    //환인
    imageManager.LoadImage("Background2", "../../../Images/S1/C6-2/Background");
    imageManager.LoadImage("HwaninBody", "../../../Images/S1/C6-2/HwaninBody");
    imageManager.LoadImage("HwaninFace", "../../../Images/S1/C6-2/HwaninFace");
    imageManager.LoadImage("text", "../../../Images/S1/C6-2/text");
  }

  OnDraw() {
    if (!this.narrFlag) {
      this.narrFlag = true;
      soundManager.PlaySound("S1/C6-2/hwanwoong");
    }
    if (
      timeManager.time - this.enterTime > this.hwaninStartTime &&
      !this.hwaninVoiceFlag
    ) {
      this.hwaninVoiceFlag = true;
      soundManager.PlaySound("S1/C6-2/hwanin");
    }
    if (this.hwaninFace) this.hwaninFaceScale += timeManager.deltaTime * 0.2;
    else this.hwaninFaceScale -= timeManager.deltaTime * 0.2;

    if (this.hwaninFaceScale >= 0.5 || this.hwaninFaceScale <= 0.36) {
      this.hwaninFace = !this.hwaninFace;
    }
    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C7());
    }
    imageManager.DrawImageScale(
      "Background2",
      createVector(this.centerX, this.centerY),
      createVector(1, 1)
    );

    //환인 Draw
    imageManager.DrawImageScale(
      "HwaninBody",
      createVector(this.hwaninX, this.hwaninY),
      createVector(0.47, 0.47)
    );
    imageManager.DrawImageScale(
      "HwaninFace",
      createVector(this.hwaninX, this.hwaninY + this.hwaninfaceOffset),
      createVector(0.47, 0.47)
    );
    imageManager.DrawImage("text", createVector(this.centerX, this.centerY, 0));
  }

  OnExit() {}
}

/* S1C7.js */ 
class S1C7 extends Scene {
  constructor() {
    super();
    this.PREFIX = "S1/C7/";
    this.IMG_PREFIX = "../../../Images/" + this.PREFIX;
    this.SOUND_PREFIX = "../../../Sounds/" + this.PREFIX + "narr/";
    this.SCENE_DURATION = 6;

    this.HWAN_BODY_X = 980.0;
    this.HWAN_BODY_Y = 590.0;
    this.HWAN_EYE_Y = 310.0;
    this.HWAN_SCALE = 0.4;

    this.startMillis;
    this.narrDuration;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.IMG_PREFIX + "background");
    imageManager.LoadImage("text", this.IMG_PREFIX + "text");
    imageManager.LoadImage("hwan_body", this.IMG_PREFIX + "hwan_body");
    imageManager.LoadImage(
      "hwan_expression1",
      this.IMG_PREFIX + "hwan_expression1"
    );
    imageManager.LoadImage(
      "hwan_expression2",
      this.IMG_PREFIX + "hwan_expression2"
    );

    this.startMillis = millis(); // 씬 시작 millis
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImage("text", createVector(width / 2, height / 2));

    imageManager.DrawImageScale(
      "hwan_body",
      createVector(this.HWAN_BODY_X, this.HWAN_BODY_Y),
      createVector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
    );

    if ((millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "hwan_expression1",
        createVector(this.HWAN_BODY_X, this.HWAN_EYE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
      );
    } else {
      imageManager.DrawImageScale(
        "hwan_expression2",
        createVector(this.HWAN_BODY_X, this.HWAN_EYE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE, 0)
      );
    }
    // 씬 시작 후 1.5초 뒤 대사1 시작
    if (
      soundManager.hasSound("S1/C7/hwan") &&
      isTimeExceededMillis(this.startMillis, 1.0)
    ) {
      this.narrDuration = soundManager.soundDuration("S1/C7/hwan");
      soundManager.playSoundOnce("S1/C7/hwan");
      this.startMillis = millis();
    }

    /* // 대사 2 종료 후 1초 뒤 다음 장면으로 이동
    if (!soundManager.hasSound("narr") && !soundManager.hasSound("S1/C7/hwan") && isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)) {
      scene.ChangeScene(new S1C8());
    }
    */

    // 다음 장면으로 이동
    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C8());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}

/* S1C8 .js */ 
class S1C8 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 6;

    this.centerX = width / 2;
    this.centerY = height / 2;

    this.tick1Flag = true;
    this.tick1Cnt = 0;

    this.endpointTick = 0;

    // 환인 위치
    this.hwaninfaceOffset = -300;
    this.hwaninX = this.centerX - 250;
    this.hwaninY = this.centerY + 380;

    // 환인 얼굴 움직이는 변수
    this.hwaninFaceFlag = true;
    this.hwaninFaceCnt = 0;
    this.hwaninFace = true;

    this.playedSoundMap = new Map();
    this.startTime = 0;
  }

  OnEnter() {
    this.hwaninX = this.centerX - 310;
    this.hwaninY = this.centerY + 350;

    // 환인
    imageManager.LoadImage("BackgroundS1C8", "../../../Images/S1/C8/Background");
    imageManager.LoadImage("HwaninBody", "../../../Images/S1/C8/HwaninBody");
    // imageManager.LoadImage("HwaninFace_MouseClose", "../../../Images/S1/C8/HwaninFace_MouseClose");
    // imageManager.LoadImage("HwaninFace_MouseOpen", "../../../Images/S1/C8/HwaninFace_MouseOpen");
    imageManager.LoadImage("HwaninFace", "../../../Images/S1/C8/HwaninFace");

    imageManager.LoadImage("HwaninHand", "../../../Images/S1/C8/HwaninHand");
    imageManager.LoadImage("NarrS1C8", "../../../Images/S1/C8/narr");
    this.playedSoundMap.set("NarrS1C8", 0);
    this.playedSoundMap.set("HawninS1C8", 0);

    this.startTime = millis();

    // print("Enter");
    background(255);
  }

  OnDraw() {
    // int mouseMove =(int)random(0,15);

    // if (hwaninFace) tick1Cnt++;
    // else tick1Cnt--;

    // if (tick1Cnt >= 20 || tick1Cnt <= 0) {
    //   hwaninFace = !hwaninFace;
    // }
    // endpointTick++;
    // println(endpointTick);
    // if (endpointTick >= 200) {
    //     scene.ChangeScene(new S1C6_1());
    // }

    imageManager.DrawImageScale(
      "BackgroundS1C8",
      createVector(this.centerX, this.centerY),
      createVector(1, 1)
    );

    // 환인 Draw
    imageManager.DrawImageScale(
      "HwaninBody",
      createVector(this.hwaninX, this.hwaninY),
      createVector(0.49, 0.49)
    );
    // if (mouseMove < 10) imageManager.DrawImageScale("HwaninFace_MouseClose", this.hwaninX + 15, this.hwaninY + this.hwaninfaceOffset + this.tick1Cnt, 0.4, 0.0, 255);
    // else imageManager.DrawImageScale("HwaninFace_MouseOpen", this.hwaninX + 15, this.hwaninY + this.hwaninfaceOffset + this.tick1Cnt, 0.4, 0.0, 255);

    imageManager.DrawImageScale(
      "HwaninFace",
      createVector(
        this.hwaninX + 15,
        this.hwaninY + this.hwaninfaceOffset + this.tick1Cnt - 80
      ),
      createVector(0.49, 0.49)
    );
    imageManager.DrawImageScale(
      "HwaninHand",
      createVector(this.hwaninX - 75, this.hwaninY - 160),
      createVector(0.4, 0.4),
      0.7,
      255
    );

    imageManager.DrawImageScale(
      "NarrS1C8",
      createVector(this.centerX, this.centerY),
      createVector(1.0, 1.0)
    );

    let currentTime = (millis() - this.startTime) / 1000;

    this.PlaySoundOnce("NarrS1C8");
    if (currentTime > 3.0) {
      this.PlaySoundOnce("HawninS1C8");
    }
    // print("Draw");

    if (timeManager.time - this.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C9());
    }
  }

  PlaySoundOnce(soundName) {
    if (this.playedSoundMap.get(soundName) === 1) {
      return;
    }
    soundManager.PlaySound(soundName);
    this.playedSoundMap.set(soundName, 1);
  }

  OnExit() {}
}

/* S1C9.js */ 
class S1C9 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 6;
    this.MOVING_DURATION = 5;
    this.PREPARATION_DURATION = 5;
    this.cloudX = 0;
    this.handY = 0;
    this.startMillis = 0;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S1/C9/background");
    imageManager.LoadImage("text", "../../../Images/S1/C9/text");
    imageManager.LoadImage("cloud01", "../../../Images/S1/C9/cloud_01");
    imageManager.LoadImage("cloud02", "../../../Images/S1/C9/cloud_02");
    imageManager.LoadImage("cloud03", "../../../Images/S1/C9/cloud_03");
    imageManager.LoadImage("hand", "../../../Images/S1/C9/hand");

    this.cloudX = 0;
    this.handY = 0;
    this.startMillis = millis();
  }

  OnDraw() {
    imageManager.DrawImage(
      "background",
      createVector(width / 2, height / 2, 0)
    );

    imageManager.DrawImage(
      "cloud01",
      createVector(width / 2 - 400 + this.cloudX, height / 2, 0)
    );
    imageManager.DrawImage(
      "cloud02",
      createVector(width / 2 - 400 + this.cloudX, height / 2, 0)
    );
    imageManager.DrawImage(
      "cloud03",
      createVector(width / 2 + 400 - this.cloudX, height / 2, 0)
    );

    imageManager.DrawImageScale(
      "hand",
      createVector(width / 2 + 250, height + 200 - this.handY, 0),
      createVector(0.67, 0.67, 0),
      -0.6
    );

    this.cloudX = lerp(
      0,
      400,
      min(1, (timeManager.time - this.enterTime) / this.MOVING_DURATION)
    );
    this.handY = lerp(
      0,
      300,
      min(1, (timeManager.time - this.enterTime) / this.MOVING_DURATION)
    );

    if (timeManager.time - this.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S1C11());
    }
    imageManager.DrawImage("text", createVector(width / 2, height / 2, 0));

    // 씬 시작 후 1초 뒤 대사1 시작
    if (
      soundManager.hasSound("S1/C9/hwanwoog") &&
      isTimeExceededMillis(this.startMillis, 1)
    ) {
      soundManager.playSoundOnce("S1/C9/hwanwoog");
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }

  isTimeExceededMillis(startMillis, endSeconds) {
    let nowTotalMilliseconds = millis();
    let endMilliseconds = endSeconds * 1000;
    return nowTotalMilliseconds - startMillis >= endMilliseconds;
  }
}

/* S2C1.js */ 
class S2C1 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 7.5;
    this.originalAnimalScale = 0.3;
    this.animalScale = 0.3;
    this.animalX = 300;
    this.animalY = 550;
    this.imageNumber = 1;
    this.imageMaxNumber = 3;
    this.imageNumberDelta = 1;
    this.WALK_INTERVAL = 0.1;
    this.walkTick = 0;
    this.SOUND_INTERVAL = 0.4;
    this.soundTick = 0;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S2/C1/background");
    imageManager.LoadImage("tiger1", "../../../Images/S2/C1/tiger1");
    imageManager.LoadImage("tiger2", "../../../Images/S2/C1/tiger2");
    imageManager.LoadImage("tiger3", "../../../Images/S2/C1/tiger3");
    imageManager.LoadImage("bear1", "../../../Images/S2/C1/bear1");
    imageManager.LoadImage("bear2", "../../../Images/S2/C1/bear2");
    imageManager.LoadImage("bear3", "../../../Images/S2/C1/bear3");

    this.walkTick = 0;
    this.soundTick = 0;
    this.imageNumber = 1;
    this.animalScale = 0.3;
    this.animalX = 300;
    this.animalY = 550;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );

    if (this.animalX < 900) {
      this.walkTick += timeManager.deltaTime;
      this.soundTick += timeManager.deltaTime;

      if (this.walkTick > this.WALK_INTERVAL) {
        this.walkTick = 0;
        this.imageNumber += this.imageNumberDelta;

        if (
          this.imageNumber === 1 ||
          this.imageNumber === this.imageMaxNumber
        ) {
          this.imageNumberDelta *= -1;
        }
      }

      if (this.soundTick > this.SOUND_INTERVAL) {
        soundManager.PlaySound("S2/C1/step");
        this.soundTick = 0;
      }
    }

    imageManager.DrawImageScale(
      "bear" + this.imageNumber,
      createVector(this.animalX, this.animalY),
      createVector(this.animalScale, this.animalScale)
    );
    imageManager.DrawImageScale(
      "tiger" + this.imageNumber,
      createVector(
        this.animalX + (200 * this.animalScale) / this.originalAnimalScale,
        this.animalY
      ),
      createVector(this.animalScale, this.animalScale)
    );

    if (this.animalX < 900) {
      this.animalX += 120 * timeManager.deltaTime;
      this.animalY -= 0.5 * timeManager.deltaTime;
      this.animalScale -= 0.03 * timeManager.deltaTime;
    }

    if (timeManager.time - timeManager.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S2C2());
    }
  }

  OnExit() {
    // sceneManager.ChangeScene(new S2C2());
  }
}

/* S2C2.js */ 
class S2C2 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 6;
    this.ROTATE_INTERVAL = 0.167;
    this.rotateTick = 0;
    this.WALK_INTERVAL = 0.09;
    this.walkTick = 0;
    this.imageNumber = 1;
    this.imageMaxNumber = 3;
    this.imageNumberDelta = 1;
    this.rock_x = 1000;
    this.rock_y = 450;
    this.rock_width = 200;
    this.rock_height = 200;
    this._rock_size = 0.5;
    this._rock_rotate = 0.01;
    this.tiger_x = 20;
    this.tiger_y = 400;
    this.bear_x = -200;
    this.bear_y = 400;
    this.animation = 1;
    this.stepDuration = 0;
    this.stepSoundInterval = 0.3;
    this.stepSeconds = 0;
    this.stepID = 0;
    this.isPlayedEffect = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S2/C2/background");
    imageManager.LoadImage("rock", "../../../Images/S2/C2/rock");
    imageManager.LoadImage("tiger_body", "../../../Images/S2/C2/tiger_body");
    imageManager.LoadImage("tiger_face", "../../../Images/S2/C2/tiger_face");
    imageManager.LoadImage("tiger_left", "../../../Images/S2/C2/tiger_foot_right");
    imageManager.LoadImage("tiger_right", "../../../Images/S2/C2/tiger_foot_left");
    imageManager.LoadImage("bear_body", "../../../Images/S2/C2/bear_body");
    imageManager.LoadImage("bear_face", "../../../Images/S2/C2/bear_face");
    imageManager.LoadImage("bear_left", "../../../Images/S2/C2/bear_foot_right");
    imageManager.LoadImage("bear_right", "../../../Images/S2/C2/bear_foot_left");
    imageManager.LoadImage("tiger1", "../../../Images/S2/C2/tiger1");
    imageManager.LoadImage("tiger2", "../../../Images/S2/C2/tiger2");
    imageManager.LoadImage("tiger3", "../../../Images/S2/C2/tiger3");
    imageManager.LoadImage("bear1", "../../../Images/S2/C2/bear1");
    imageManager.LoadImage("bear2", "../../../Images/S2/C2/bear2");
    imageManager.LoadImage("bear3", "../../../Images/S2/C2/bear3");

    this._rock_size = 0.5;
    this._rock_rotate = 0.01;
    this.tiger_x = 20;
    this.tiger_y = 400;
    this.bear_x = -200;
    this.bear_y = 400;
    this.animation = 1;
    this.rotateTick = 0;
    this.walkTick = 0;
    this.isPlayedEffect = false;
  }

  OnDraw() {
    if (timeManager.time - timeManager.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S2C3());
    }
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );

    imageManager.DrawImageScale(
      "tiger" + this.imageNumber,
      createVector(this.tiger_x, this.tiger_y + 30, 0),
      createVector(0.2, 0.2, 0)
    );
    imageManager.DrawImageScale(
      "bear" + this.imageNumber,
      createVector(this.bear_x, this.bear_y + 30, 0),
      createVector(0.2, 0.2, 0)
    );

    if (timeManager.time - timeManager.enterTime > 4.167) {
      this.rotateTick += timeManager.deltaTime;
      if (this.rotateTick > this.ROTATE_INTERVAL) {
        this.rotateTick = 0;
        this._rock_rotate *= -1;
      }
      imageManager.DrawImageScale(
        "rock",
        createVector(this.rock_x, this.rock_y, 0),
        createVector(this._rock_size, this._rock_size, 0),
        this._rock_rotate
      );

      if (this._rock_size >= 0.4) {
        this._rock_size -= 0.6 * timeManager.deltaTime;
      }
    } else {
      this.walkTick += timeManager.deltaTime;

      if (
        this.stepSeconds >= this.stepSoundInterval &&
        this.stepDuration < 4.167
      ) {
        this.stepID = floor(random(2));
        if (this.stepID === 0) {
          soundManager.PlaySound("../../../Sounds/Effects/step1");
        } else if (this.stepID === 1) {
          soundManager.PlaySound("../../../Sounds/Effects/step2");
        } else if (this.stepID === 2) {
          soundManager.PlaySound("../../../Sounds/Effects/step3");
        }
        this.stepSeconds = 0;
      } else {
        this.stepDuration += timeManager.deltaTime;
        this.stepSeconds += timeManager.deltaTime;
      }

      if (this.walkTick > this.WALK_INTERVAL) {
        this.walkTick = 0;
        this.animation *= -1;
        this.imageNumber += this.imageNumberDelta;

        if (this.imageNumber === this.imageMaxNumber) {
          this.imageNumber = 1;
        }
      }

      this.tiger_x += 180 * timeManager.deltaTime;
      this.bear_x += 180 * timeManager.deltaTime;
    }

    if (
      timeManager.time - timeManager.enterTime > this.SCENE_DURATION &&
      !this.isPlayedEffect
    ) {
      soundManager.PlaySound("S2_S3_FootStuckRock");
      this.isPlayedEffect = true;
    }
  }

  OnExit() {}
}

/* S2C3.js */ 
class S2C3 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 2;
    this.background = "S2C3_background";
    this.bear = "S2S3_bear";
    this.bearEye = "S2S3_bear_eye";
    this.tiger = "S2S3_tiger";
    this.basket = "S2S3_basket";
    this.garlic = "S2S3_garlic";
    this.ssuk = "S2S3_ssuk";
    this.text = "S2S3_text";

    this.playedSoundMap = {};
    this.narr1 = "S2C3_narr1";
    this.narr2 = "S2C3_narr2";

    this.backgroundPosition = createVector(width / 2, height / 2);
    this.backgroundScale = createVector(1, 1);

    this.animalScale = createVector(0.25, 0.25);
    this.tigerPosition = createVector(510, 500);
    this.tigerScale = createVector(0.2, 0.2);

    this.basketPosition = createVector(800, 570);

    this.startTime = millis();
  }

  OnEnter() {
    fontManager.LoadFont("lee", "../../../../Fonts/LeeSeoyun.otf");
    imageManager.LoadImage(this.background, "../../../Images/S2/C3/background");
    imageManager.LoadImage(this.bear, "../../../Images/S2/C3/bear");
    imageManager.LoadImage(this.bearEye, "../../../Images/S2/C3/bear_eye");
    imageManager.LoadImage(this.tiger, "../../../Images/S2/C3/tiger");
    imageManager.LoadImage(this.basket, "../../../Images/S2/C3/basket");
    imageManager.LoadImage(this.garlic, "../../../Images/S2/C3/garlic");
    imageManager.LoadImage(this.ssuk, "../../../Images/S2/C3/ssuk");
    imageManager.LoadImage(this.text, "../../../Images/S2/C3/text");

    this.playedSoundMap[this.narr1] = 0;

    this.basketPosition = createVector(800, 570);
    this.animalScale = createVector(0.25, 0.25);
    this.tigerPosition = createVector(510, 500);
    this.tigerScale = createVector(0.2, 0.2);

    this.startTime = millis();
  }

  OnDraw() {
    let currentTime = (millis() - this.startTime) / 1000;

    this.PlaySoundOnce(this.narr1);
    imageManager.DrawImageScale(
      this.background,
      this.backgroundPosition,
      this.backgroundScale
    );

    let timeMovingTiger = 1.1;
    let tigerPositionPercent =
      (currentTime > timeMovingTiger ? timeMovingTiger : currentTime) /
      timeMovingTiger;
    this.tigerPosition.x = lerp(
      480,
      570,
      Ease.EaseOutCubic(tigerPositionPercent)
    );
    imageManager.DrawImageScale(
      this.tiger,
      this.tigerPosition,
      this.tigerScale
    );

    imageManager.DrawImageScale(
      this.bearEye,
      createVector(257, 400 - 65),
      this.animalScale
    );
    imageManager.DrawImageScale(
      this.bear,
      createVector(260, 400),
      this.animalScale
    );

    let timeMovingBasket = 1.5;
    let basketPositionPercent =
      (currentTime > timeMovingBasket ? timeMovingBasket : currentTime) /
      timeMovingBasket;

    let garlicX1 = lerp(700, 820, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      this.garlic,
      createVector(garlicX1, 540),
      createVector(0.03, 0.03),
      this.getAngleByDegree(-20)
    );
    let garlicX2 = lerp(720, 840, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      this.garlic,
      createVector(garlicX2, 570),
      createVector(0.035, 0.035),
      this.getAngleByDegree(160)
    );
    let garlicX3 = lerp(730, 940, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      this.garlic,
      createVector(garlicX3, 570),
      createVector(0.04, 0.04),
      this.getAngleByDegree(-20)
    );
    let garlicX4 = lerp(740, 1000, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      this.garlic,
      createVector(garlicX4, 550),
      createVector(0.033, 0.033),
      this.getAngleByDegree(30)
    );

    let ssukX1 = lerp(720, 780, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      this.ssuk,
      createVector(ssukX1, 520),
      createVector(0.02, 0.02),
      this.getAngleByDegree(10)
    );
    let ssukX2 = lerp(740, 860, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      this.ssuk,
      createVector(ssukX2, 590),
      createVector(0.03, 0.03),
      this.getAngleByDegree(100)
    );
    let ssukX3 = lerp(730, 900, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      this.ssuk,
      createVector(ssukX3, 530),
      createVector(0.04, 0.04),
      this.getAngleByDegree(30)
    );
    let ssukX4 = lerp(740, 1020, Ease.EaseOutCubic(basketPositionPercent));
    imageManager.DrawImageScale(
      this.ssuk,
      createVector(ssukX4, 590),
      createVector(0.03, 0.03),
      this.getAngleByDegree(-30)
    );

    this.basketPosition.x = lerp(
      700,
      800,
      Ease.EaseOutCubic(basketPositionPercent)
    );
    imageManager.DrawImageScale(
      this.basket,
      this.basketPosition,
      createVector(0.25, 0.25),
      this.getAngleByDegree(30)
    );

    if (currentTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S2C4());
    }
    this.PrintText();
  }

  PlaySoundOnce(soundName) {
    if (this.playedSoundMap[soundName] === 1) {
      return;
    }
    soundManager.PlaySound(soundName);
    this.playedSoundMap[soundName] = 1;
  }

  PrintText() {
    let currentTime = (millis() - this.startTime) / 1000;

    if (currentTime > 1) {
      imageManager.DrawImageScale(
        this.text,
        createVector(660, 280),
        createVector(1, 1)
      );
    } else {
      imageManager.DrawImageScale(
        this.text,
        createVector(960, 480),
        createVector(1, 1)
      );
    }
  }

  getAngleByDegree(degree) {
    return (PI * degree) / 180;
  }

  OnExit() {}
}

/* S2C4.js */ 
class S2C4 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 11;
    this.SCENE_TIME;
    this.animalScale = 0.25;
    this.utilScale = 0.035;
    this.tearScale = 0.025;
    this.bearY = height - 280;
    this.tigerY = height - 305;
    this.handX = 530;
    this.handY = 470;
    this.handRotate = 0.0;
    this.handAngle = 0.6;
    this.handDir = -24;
    this.tearLeftY = height - 280;
    this.tearRightY = height - 290;
    this.tearSpeed = 0;
    this.sessionIndex;
    this.sessionDuration = [4, 8];
    this.sessionSound = ["S2/C4/narr1", "S2/C4/narr2", "S2/C4/narr3"];
    this.sessionText = ["text1", "text2", "text3"];
    this.isSessionOut = [];
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S2/C4/background");
    imageManager.LoadImage("bear1", "../../../Images/S2/C4/bear1");
    imageManager.LoadImage("bear2", "../../../Images/S2/C4/bear2");
    imageManager.LoadImage("tiger", "../../../Images/S2/C4/tiger");
    imageManager.LoadImage("garlic", "../../../Images/S2/C4/garlic");
    imageManager.LoadImage("ssug", "../../../Images/S2/C4/ssug");
    imageManager.LoadImage("basket", "../../../Images/S2/C4/basket");
    imageManager.LoadImage("tear", "../../../Images/S2/C4/tear");
    imageManager.LoadImage("text1", "../../../Images/S2/C4/text1");
    imageManager.LoadImage("text2", "../../../Images/S2/C4/text2");
    imageManager.LoadImage("text3", "../../../Images/S2/C4/text3");
    this.isSessionOut = [false, false];
    this.animalScale = 0.25;
    this.utilScale = 0.035;
    this.tearScale = 0.025;
    this.bearY = height - 280;
    this.tigerY = height - 305;
    this.handX = 530;
    this.handY = 470;
    this.handRotate = 0.0;
    this.handAngle = 0.6;
    this.handDir = -24;
    this.tearLeftY = height - 280;
    this.tearRightY = height - 290;
    this.tearSpeed = 0;
    this.sessionIndex = 0;
    this.SCENE_TIME = 0;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    if (this.sessionIndex == 1) {
      imageManager.DrawImageScale(
        "bear" + ((floor(millis() / 300) % 2) + 1),
        createVector(width / 2 - 200, height - 280),
        createVector(this.animalScale, this.animalScale)
      );
    } else {
      imageManager.DrawImageScale(
        "bear2",
        createVector(width / 2 - 200, height - 280),
        createVector(this.animalScale, this.animalScale)
      );
    }
    imageManager.DrawImageScale(
      "tiger",
      createVector(width / 2 + 50, height - 305),
      createVector(this.animalScale, this.animalScale)
    );
    imageManager.DrawImageScale(
      "basket",
      createVector(width / 2 + 360, height - 105),
      createVector(0.2, 0.2),
      -0.27
    );
    imageManager.DrawImageScale(
      "garlic",
      createVector(width - 130, height - 210),
      createVector(this.utilScale, this.utilScale),
      -0.3
    );
    imageManager.DrawImageScale(
      "garlic",
      createVector(width - 180, height - 100),
      createVector(this.utilScale, this.utilScale),
      0.5
    );
    imageManager.DrawImageScale(
      "ssug",
      createVector(width - 50, height - 170),
      createVector(this.utilScale, this.utilScale),
      0.3
    );
    imageManager.DrawImageScale(
      "ssug",
      createVector(width - 240, height - 10),
      createVector(this.utilScale, this.utilScale),
      -0.5
    );

    // tear animation
    if (this.tearLeftY + this.tearSpeed > height - 250) this.tearSpeed = 0;
    this.tearSpeed += 0.5;
    imageManager.DrawImageScale(
      "tear",
      createVector(width - 510, this.tearLeftY + this.tearSpeed),
      createVector(this.tearScale, this.tearScale)
    );
    imageManager.DrawImageScale(
      "tear",
      createVector(width - 440, this.tearRightY + this.tearSpeed),
      createVector(this.tearScale, this.tearScale)
    );

    this.SCENE_TIME = timeManager.time - timeManager.enterTime;
    imageManager.DrawImageScale(
      this.sessionText[this.sessionIndex],
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    if (!this.isSessionOut[this.sessionIndex]) {
      soundManager.PlaySound(this.sessionSound[this.sessionIndex]);
      this.isSessionOut[this.sessionIndex] =
        !this.isSessionOut[this.sessionIndex];
    }
    if (this.SCENE_TIME > this.sessionDuration[this.sessionIndex]) {
      if (this.sessionDuration.length - 1 > this.sessionIndex)
        this.sessionIndex++;
    }
    if (this.SCENE_TIME > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S2C5());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}

/* S2C5.js */ 
class S2C5 extends Scene {
  constructor() {
    super();
    this.isEffectOut = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S2/C5/background");
    imageManager.LoadImage("button", "../../../Images/S2/C5/button");
    this.isEffectOut = false;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );

    if (
      mouseX >= 550 &&
      mouseX <= width - 592 &&
      mouseY >= 585 &&
      mouseY <= height - 85
    ) {
      imageManager.DrawImage(
        "button",
        createVector(width / 2, height / 2),
        0,
        255,
        220,
        220,
        220
      );

      if (mouseIsPressed) {
        if (!this.isEffectOut) {
          soundManager.PlaySound("effect");
          this.isEffectOut = !this.isEffectOut;
        }
        // Navigate to the mini-game scene
        sceneManager.ChangeScene(new S2C6());
      }
    } else {
      imageManager.DrawImageScale(
        "button",
        createVector(width / 2, height / 2),
        createVector(1, 1)
      );
    }
  }

  OnExit() {}
}

/* S2C6.js */ 
class S2C6 extends Scene {
  constructor() {
    super();
    this.DISPLAY_TIME = 99;
    this.TYPE_SOOK = 0x1;
    this.TYPE_MANUL = 0x2;
    this.TYPE_CLICKED = 0x4;
    this.m_Items = null;
    this.m_ItemsLoc = null;
    this.m_SookCnt = 0;
    this.m_ManulCnt = 0;
    this.TOTAL_SOOK_CNT = 5;
    this.TOTAL_MANUL_CNT = 20;
    this.m_IsTigerHand = true;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S2/C6/background");
    imageManager.LoadImage("clock", "../../../Images/S2/C6/clock");
    imageManager.LoadImage("manul", "../../../Images/S2/C6/manul");
    imageManager.LoadImage("sook", "../../../Images/S2/C6/sook");
    imageManager.LoadImage("bear_hand", "../../../Images/S2/C6/bear_hand");
    imageManager.LoadImage("bear_click", "../../../Images/S2/C6/bear_click");
    imageManager.LoadImage("tiger_hand", "../../../Images/S2/C6/tiger_hand");
    imageManager.LoadImage("tiger_click", "../../../Images/S2/C6/tiger_click");
    imageManager.LoadImage("transparent", "../../../Images/S2/C6/transparent");

    this.m_Items = new Array(25);
    this.m_ItemsLoc = new Array(25);

    for (let i = 0; i < this.m_ItemsLoc.length; i++) {
      if (i < 20) {
        this.m_Items[i] = this.TYPE_MANUL;
      } else {
        this.m_Items[i] = this.TYPE_SOOK;
      }
      this.m_ItemsLoc[i] = createVector(
        random(22) * 50 + 5,
        random(11) * 50 + 150,
        0
      );
    }
    this.m_SookCnt = 0;
    this.m_ManulCnt = 0;

    soundManager.PlaySound("S2/C6/bgm");
    fontManager.LoadFont("lee", "../../../../Fonts/LeeSeoyun.otf");
  }

  OnDraw() {
    let displayTime =
      this.DISPLAY_TIME - (timeManager.time - timeManager.enterTime);

    if (
      this.m_ManulCnt >= this.TOTAL_MANUL_CNT &&
      this.m_SookCnt >= this.TOTAL_SOOK_CNT
    ) {
      sceneManager.ChangeScene(new S2C6V2());
    }
    if (displayTime <= 0) {
      sceneManager.ChangeScene(new S2C6V1());
    }
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );

    for (let i = 0; i < this.m_ItemsLoc.length; i++) {
      let item = this.m_Items[i];

      if ((item & this.TYPE_CLICKED) === this.TYPE_CLICKED) {
        continue;
      }
      if ((item & this.TYPE_SOOK) === this.TYPE_SOOK) {
        imageManager.DrawImageScale(
          "sook",
          this.m_ItemsLoc[i],
          createVector(0.025, 0.025, 0)
        );
      }
      if ((item & this.TYPE_MANUL) === this.TYPE_MANUL) {
        imageManager.DrawImageScale(
          "manul",
          this.m_ItemsLoc[i],
          createVector(0.025, 0.025, 0)
        );
      }
    }

    fill(0);
    let viewX = mouseX / 20;
    let viewY = mouseY / 20;
    let areaSize = 10;
    let visibleArea = 0.7;

    for (let i = 0; i < 64; i++) {
      for (let j = 0; j < 36; j++) {
        if (viewX - areaSize < i && i < viewX + areaSize) {
          if (viewY - areaSize < j && j < viewY + areaSize) {
            continue;
          }
        }
        rect(i * 20, j * 20, 20, 20);
      }
    }
    imageManager.DrawImageScale(
      "transparent",
      createVector(mouseX, mouseY),
      createVector(visibleArea, visibleArea, 0)
    );

    if (!this.m_IsTigerHand) {
      if (mouseIsPressed) {
        imageManager.DrawImageScale(
          "bear_click",
          createVector(mouseX, mouseY),
          createVector(0.12, 0.12, 0)
        );
      } else {
        imageManager.DrawImageScale(
          "bear_hand",
          createVector(mouseX, mouseY),
          createVector(0.12, 0.12, 0)
        );
      }
    } else {
      if (mouseIsPressed) {
        imageManager.DrawImageScale(
          "tiger_click",
          createVector(mouseX, mouseY),
          createVector(0.12, 0.12, 0)
        );
      } else {
        imageManager.DrawImageScale(
          "tiger_hand",
          createVector(mouseX, mouseY),
          createVector(0.12, 0.12, 0)
        );
      }
    }

    imageManager.DrawImageScale(
      "sook",
      createVector(70, 70),
      createVector(0.05, 0.05, 0)
    );
    fontManager.DrawFont(
      "lee",
      "" + (this.TOTAL_SOOK_CNT - this.m_SookCnt),
      255,
      50,
      110,
      90
    );

    imageManager.DrawImageScale(
      "manul",
      createVector(180, 70),
      createVector(0.05, 0.05, 0)
    );
    fontManager.DrawFont(
      "lee",
      "" + (this.TOTAL_MANUL_CNT - this.m_ManulCnt),
      255,
      50,
      220,
      90
    );

    imageManager.DrawImageScale(
      "clock",
      createVector(1205, 75),
      createVector(0.055, 0.055, 0)
    );

    textSize(25);
    fill(0);
    let timeStr = "";
    if (displayTime < 10) {
      fill(255, 0, 0);
      timeStr = " D-" + displayTime;
    } else {
      timeStr = "D-" + displayTime;
    }
    text(timeStr, 1176, 90);
  }

  OnExit() {
    soundManager.StopSound("S2/C6/bgm");
  }

  OnMousePressed() {
    for (let i = 0; i < this.m_ItemsLoc.length; i++) {
      if (
        this.m_ItemsLoc[i].x - 25 <= mouseX &&
        this.m_ItemsLoc[i].x + 25 >= mouseX
      ) {
        if (
          this.m_ItemsLoc[i].y - 25 <= mouseY &&
          this.m_ItemsLoc[i].y + 25 >= mouseY
        ) {
          if ((this.m_Items[i] & this.TYPE_CLICKED) === this.TYPE_CLICKED) {
            continue;
          }
          soundManager.PlaySound("item_click");
          this.m_Items[i] |= this.TYPE_CLICKED;

          if ((this.m_Items[i] & this.TYPE_MANUL) === this.TYPE_MANUL) {
            this.m_ManulCnt++;
          } else if ((this.m_Items[i] & this.TYPE_SOOK) === this.TYPE_SOOK) {
            this.m_SookCnt++;
          }
          break;
        }
      }
    }
  }

  SetTigerHand(options) {
    this.m_IsTigerHand = options;
  }
}

/* S2C6V1.js */ 
class S2C6V1 extends Scene {
  constructor() {
    super();
    this.timelineManager = new TimelineManager();
    this.backgroundAlpha = 0;
    this.animalScale = 0.25;
    this.tearScale = 0.025;
    this.tigerTearSpeedL = 0;
    this.tigerTearSpeedR = 0;
    this.tigerTearLeftY = height - 280;
    this.tigerTearRightY = height - 290;
    this.bearTearSpeedL = 0;
    this.bearTearSpeedR = 0;
    this.bearTearLeftY = height - 270;
    this.bearTearRightY = height - 280;
    this.showButton = false;
    this.startTime = millis();
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S2/C6/V1/background");
    imageManager.LoadImage("bear", "../../../Images/S2/C6/V1/bear");
    imageManager.LoadImage("bear_tear", "../../../Images/S2/C6/V1/bear_tear");
    imageManager.LoadImage("tiger", "../../../Images/S2/C6/V1/tiger");
    imageManager.LoadImage("tiger_tear", "../../../Images/S2/C6/V1/tiger_tear");
    imageManager.LoadImage("button_top", "../../../Images/S2/C6/V1/button_top");
    imageManager.LoadImage("button_bottom", "../../../Images/S2/C6/V1/button_bottom");

    this.timelineManager.pushTimeline(() => {
      this.showButton = true;
    }, 2);

    this.backgroundAlpha = 0;
    this.showButton = true;
    this.animalScale = 0.25;
    this.tearScale = 0.025;
    this.tigerTearSpeedL = 0;
    this.tigerTearSpeedR = 0;
    this.tigerTearLeftY = height - 280;
    this.tigerTearRightY = height - 290;
    this.bearTearSpeedL = 0;
    this.bearTearSpeedR = 0;
    this.bearTearLeftY = height - 270;
    this.bearTearRightY = height - 280;
    this.startTime = millis();
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );
    imageManager.DrawImageScale(
      "bear",
      createVector(width / 2 - 220, height - 255),
      createVector(this.animalScale, this.animalScale)
    );
    imageManager.DrawImageScale(
      "tiger",
      createVector(width / 2 + 220, height - 255),
      createVector(this.animalScale, this.animalScale)
    );

    if (this.tigerTearLeftY + this.tigerTearSpeedL > height - 260)
      this.tigerTearSpeedL = 0;
    if (this.tigerTearRightY + this.tigerTearSpeedR > height - 270)
      this.tigerTearSpeedR = 0;
    this.tigerTearSpeedL += random(0.3, 0.9);
    this.tigerTearSpeedR += random(0.3, 0.9);
    imageManager.DrawImageScale(
      "tiger_tear",
      createVector(width - 510, this.tigerTearLeftY + this.tigerTearSpeedL),
      createVector(this.tearScale, this.tearScale)
    );
    imageManager.DrawImageScale(
      "tiger_tear",
      createVector(width - 440, this.tigerTearRightY + this.tigerTearSpeedL),
      createVector(this.tearScale, this.tearScale)
    );

    if (this.bearTearLeftY + this.bearTearSpeedL > height - 250)
      this.bearTearSpeedL = 0;
    if (this.bearTearRightY + this.bearTearSpeedR > height - 260)
      this.bearTearSpeedR = 0;
    this.bearTearSpeedL += random(0.3, 0.9);
    this.bearTearSpeedR += random(0.3, 0.9);
    imageManager.DrawImageScale(
      "bear_tear",
      createVector(width - 810, this.bearTearLeftY + this.bearTearSpeedL),
      createVector(this.tearScale, this.tearScale)
    );
    imageManager.DrawImageScale(
      "bear_tear",
      createVector(width - 890, this.bearTearRightY + this.bearTearSpeedL),
      createVector(this.tearScale, this.tearScale)
    );

    if (millis() - this.startTime < 2000) return;

    this.timelineManager.OnDraw();
    if (this.showButton && this.backgroundAlpha <= 180)
      this.backgroundAlpha += 1.2;
    fill(0, this.backgroundAlpha);
    rect(0, 0, width, height);

    if (this.showButton) {
      if (mouseX > 480 && mouseX < 800 && mouseY > 375 && mouseY < 459) {
        imageManager.DrawImage(
          "button_top",
          createVector(width / 2, height / 2),
          0,
          255,
          220,
          220,
          220
        );
      } else {
        imageManager.DrawImageScale(
          "button_top",
          createVector(width / 2, height / 2),
          createVector(1, 1),
          0,
          this.backgroundAlpha + 80
        );
      }
      if (mouseX > 480 && mouseX < 800 && mouseY > 237 && mouseY < 324) {
        imageManager.DrawImage(
          "button_bottom",
          createVector(width / 2, height / 2),
          0,
          255,
          220,
          220,
          220
        );
      } else {
        imageManager.DrawImageScale(
          "button_bottom",
          createVector(width / 2, height / 2),
          createVector(1, 1),
          0,
          this.backgroundAlpha + 80
        );
      }
      if (mouseIsPressed && mouseButton == LEFT) {
        if (mouseX > 480 && mouseX < 800 && mouseY > 237 && mouseY < 324) {
          sceneManager.ChangeScene(new S2C6());
          this.showButton = false;
        } else if (
          mouseX > 480 &&
          mouseX < 800 &&
          mouseY > 375 &&
          mouseY < 459
        ) {
          sceneManager.Setup(sceneList.get(0));
          this.showButton = false;
        }
      }
    }
  }

  OnExit() {}
}

/* S2C6V2.js */ 
class S2C6V2 extends Scene {
  constructor() {
    super();
    this.showButton = false;
    this.SCENE_DURATION = 10;
    this.SCENE_TIME = 0;

    this.bearArmX = width / 2 + 200;
    this.bearArmRotate = 0.0;
    this.bearArmAngle = 0.01;
    this.bearArmDir = -0.4;

    this.tigerArmX = width / 2 - 200;
    this.tigerArmRotate = 0.0;
    this.tigerArmAngle = 0.01;
    this.tigerArmDir = 0.4;
    this.bearArmY = height / 2 + 200;
    this.tigerArmY = height / 2 + 200;
    this.basketY = height / 2 + 190;

    this.sessionIndex = 0;
    this.sessionDuration = [3, 6];
    this.sessionSound = ["S2/C6/V2/narr1", "S2/C6/V2/narr2", "S2/C6/V2/narr3"];
    this.sessionText = ["text1", "text2", "text3"];
    this.isSessionOut = [false, false];
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S2/C6/V2/background");
    imageManager.LoadImage("bear_arm", "../../../Images/S2/C6/V2/bear_arm");
    imageManager.LoadImage("tiger_arm", "../../../Images/S2/C6/V2/tiger_arm");
    imageManager.LoadImage("chars", "../../../Images/S2/C6/V2/chars");
    imageManager.LoadImage("basket", "../../../Images/S2/C6/V2/basket");
    imageManager.LoadImage("text1", "../../../Images/S2/C6/V2/text1");
    imageManager.LoadImage("text2", "../../../Images/S2/C6/V2/text2");
    imageManager.LoadImage("text3", "../../../Images/S2/C6/V2/text3");
    this.isSessionOut = [false, false];
    this.SCENE_TIME = 0;
  }

  OnDraw() {
    this.bearArmY = height / 2 + 220 + sin(millis() / 1000.0) * 20;
    this.tigerArmY = height / 2 + 220 + sin(millis() / 1000.0) * 20;
    this.basketY = height / 2 + 210 + sin(millis() / 1000.0) * 20;

    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "chars",
      createVector(width / 2, height / 2 + 150),
      createVector(0.4, 0.4)
    );
    imageManager.DrawImageScale(
      "basket",
      createVector(width / 2, this.basketY),
      createVector(0.4, 0.4)
    );
    imageManager.DrawImageScale(
      "bear_arm",
      createVector(this.bearArmX, this.bearArmY),
      createVector(0.4, 0.4),
      this.bearArmRotate
    );
    imageManager.DrawImageScale(
      "tiger_arm",
      createVector(this.tigerArmX, this.tigerArmY),
      createVector(0.4, 0.4),
      this.tigerArmRotate
    );

    this.SCENE_TIME = timeManager.time - timeManager.enterTime;
    if (this.sessionIndex == 0) {
      imageManager.DrawImageScale(
        this.sessionText[this.sessionIndex],
        createVector(width / 2, height / 2 - 60),
        createVector(1, 1)
      );
    } else {
      imageManager.DrawImageScale(
        this.sessionText[this.sessionIndex],
        createVector(width / 2, height / 2),
        createVector(1, 1)
      );
    }
    if (!this.isSessionOut[this.sessionIndex]) {
      soundManager.PlaySound(this.sessionSound[this.sessionIndex]);
      this.isSessionOut[this.sessionIndex] = true;
    }
    if (this.SCENE_TIME > this.sessionDuration[this.sessionIndex]) {
      if (this.sessionDuration.length - 1 > this.sessionIndex)
        this.sessionIndex++;
    }
    if (this.SCENE_TIME > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S2C7());
    }
  }

  OnExit() {}
}

/* S2C7.js */ 
class S2C7 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 5;
    this.animalScale = 0.2;
    this.utilScale = 0.035;
    this.tearScale = 0.025;
    this.bearY = height - 280;
    this.tigerY = height - 305;
    this.handX = 530;
    this.handY = 470;
    this.handRotate = 0.0;
    this.handAngle = 0.01;
    this.handDir = -0.4;
    this.tearLeftY = height - 280;
    this.tearRightY = height - 290;
    this.tearSpeedL = 0;
    this.tearSpeedR = 0;
    this.startTime = 0;
    this.playingYum = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S2/C7/background");
    imageManager.LoadImage("tiger1", "../../../Images/S2/C7/tiger1");
    imageManager.LoadImage("tiger2", "../../../Images/S2/C7/tiger2");
    imageManager.LoadImage("bear1", "../../../Images/S2/C7/bear1");
    imageManager.LoadImage("bear2", "../../../Images/S2/C7/bear2");
    this.startTime = millis();
  }

  OnDraw() {
    let currentProcessingTime = (millis() - this.startTime) / 500;
    let isEating = currentProcessingTime % 2 == 1;
    let positionToMoveHead = isEating ? 10 : 0;
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );

    if (isEating) {
      imageManager.DrawImageScale(
        "bear1",
        createVector(520, 440),
        createVector(this.animalScale, this.animalScale)
      );
      imageManager.DrawImageScale(
        "tiger1",
        createVector(660, 405),
        createVector(this.animalScale, this.animalScale)
      );
    } else {
      imageManager.DrawImageScale(
        "bear2",
        createVector(520, 440),
        createVector(this.animalScale, this.animalScale)
      );
      imageManager.DrawImageScale(
        "tiger2",
        createVector(660, 405),
        createVector(this.animalScale, this.animalScale)
      );
    }

    if (timeManager.time - timeManager.enterTime > 1 && !this.playingYum) {
      soundManager.PlaySound("yum");
      this.playingYum = true;
    }

    if (timeManager.time - timeManager.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S2C8());
    }
  }

  OnExit() {}
}

/* S2C8.js */ 
class S2C8 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S2/C8/";
    this.centerVector;
    this.centerX;
    this.centerY;
    this.sunY = 600;
    this.cloudXDistance = 0;
    this.speed = 0.8;
    this.playingNarr = false;
    this.Chicken = false;
    this.SCENE_DURATION = 3;
  }

  OnEnter() {
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.centerVector = createVector(this.centerX, this.centerY);
    this.sunY = 600;
    this.cloudXDistance = 0;

    imageManager.LoadImage("cloud_left", this.PREFIX + "cloud_left");
    imageManager.LoadImage("cloud_right", this.PREFIX + "cloud_right");
    imageManager.LoadImage("cloud_middle", this.PREFIX + "cloud_middle");
    imageManager.LoadImage("lake", this.PREFIX + "lake");
    imageManager.LoadImage("mountains", this.PREFIX + "mountains");
    imageManager.LoadImage("sky", this.PREFIX + "sky");
    imageManager.LoadImage("sun", this.PREFIX + "sun");
    imageManager.LoadImage("text", this.PREFIX + "text");
  }

  OnDraw() {
    imageManager.DrawImage("sky", this.centerVector);
    imageManager.DrawImage("sun", createVector(this.centerX, this.sunY));
    imageManager.DrawImage("mountains", this.centerVector);
    imageManager.DrawImage("lake", this.centerVector);
    imageManager.DrawImage(
      "cloud_left",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "cloud_right",
      createVector(this.centerX + this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "cloud_middle",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage("text", this.centerVector);

    if (timeManager.time - timeManager.enterTime > 1 && !this.playingNarr) {
      soundManager.PlaySound("S2/C8/narr");
      this.playingNarr = true;
    }
    if (timeManager.time - timeManager.enterTime > 3 && !this.Chicken) {
      soundManager.PlaySound("Chicken");
      this.Chicken = true;
    }
    if (this.sunY < 400) {
      sceneManager.ChangeScene(new S3C1());
    } else {
      this.sunY -= this.speed;
      this.cloudXDistance += this.speed;
    }
  }

  OnExit() {}
}

/* S3C1.js */ 
class S3C1 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 3;
    this.animalScale = 0.25;
    this.utilScale = 0.05;
    this.animalY = height - 280;
    this.jumpY = 0;
    this.jumpDir = 1;
    this.garlicX = width / 2 + 315;
    this.garlicY = this.animalY - 15;
    this.ssugX = width / 2 + 110;
    this.ssugY = this.animalY - 15;
    this.utilY = height - 120;
    this.garlicInitVelY = 15;
    this.garlicInitVelX = 5;
    this.garlicCurrentVelY = this.garlicInitVelY;
    this.garlicRotate = 1.0;
    this.garlicAngle = random(0.05, 0.15);
    this.ssugInitVelY = 18;
    this.ssugInitVelX = 3;
    this.ssugCurrentVelY = this.ssugInitVelY;
    this.ssugRotate = 1.0;
    this.ssugAngle = random(0.05, 0.15);
    this.isNarrOut = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S3/C1/background");
    imageManager.LoadImage("bear", "../../../Images/S3/C1/bear");
    imageManager.LoadImage("tiger", "../../../Images/S3/C1/tiger");
    imageManager.LoadImage("garlic", "../../../Images/S3/C1/garlic");
    imageManager.LoadImage("ssug", "../../../Images/S3/C1/ssug");
    imageManager.LoadImage("text", "../../../Images/S3/C1/text");
    this.isNarrOut = false;
  }

  OnDraw() {
    if (!this.isNarrOut) {
      this.isNarrOut = true;
      soundManager.PlaySound("S3/C1/narr");
    }
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "text",
      createVector(width / 2, height / 2 - 50),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "bear",
      createVector(width / 2 - 210, this.animalY),
      createVector(this.animalScale, this.animalScale)
    );

    // up and down animation
    if (this.jumpY < 0) this.jumpY = 0;
    if (this.jumpY > 15) this.jumpDir *= -1;
    this.jumpY += this.jumpDir;

    imageManager.DrawImageScale(
      "tiger",
      createVector(width / 2 + 230, this.animalY - this.jumpY),
      createVector(this.animalScale, this.animalScale)
    );

    // util animation
    // garlic part
    if (this.garlicY < this.utilY) {
      this.garlicY -= this.garlicCurrentVelY;
      this.garlicX += this.garlicInitVelX;
      this.garlicCurrentVelY--;
      this.garlicRotate += this.garlicAngle;
    }
    imageManager.DrawImageScale(
      "garlic",
      createVector(this.garlicX, this.garlicY),
      createVector(this.utilScale, this.utilScale),
      this.garlicRotate
    );

    // ssug part
    if (this.ssugY < this.utilY) {
      this.ssugY -= this.ssugCurrentVelY;
      this.ssugX += this.ssugInitVelX;
      this.ssugCurrentVelY--;
      this.ssugRotate += this.ssugAngle;
    }
    imageManager.DrawImageScale(
      "ssug",
      createVector(this.ssugX, this.ssugY),
      createVector(this.utilScale, this.utilScale),
      this.ssugRotate
    );

    if (timeManager.time - timeManager.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C2());
    }
  }

  OnExit() {}
}

/* S3C2.js */ 
class S3C2 extends Scene {
  constructor() {
    super();
    this.thinkScale = 0.3;
    this.thinkY = 200;
    this.thinkLeftX = 200;
    this.thinkRightX = width - 200;
    this.selectOption = 0; // 0 : None / 1 : Left / 2 : Right
    this.isEffectOut = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S3/C2/background");
    imageManager.LoadImage("body", "../../../Images/S3/C2/body");
    imageManager.LoadImage("eye_black", "../../../Images/S3/C2/eye_black");
    imageManager.LoadImage("eye_white", "../../../Images/S3/C2/eye_white");
    imageManager.LoadImage("left", "../../../Images/S3/C2/left");
    imageManager.LoadImage("right", "../../../Images/S3/C2/right");
    imageManager.LoadImage("Button1", "../../../Images/S3/C2/Button1");
    imageManager.LoadImage("Button2", "../../../Images/S3/C2/Button2");
    this.isEffectOut = false;
  }

  OnDraw() {
    // init select option
    this.selectOption = 0;

    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );
    imageManager.DrawImageScale(
      "eye_white",
      createVector(width / 2 - 10, height - 240),
      createVector(0.2, 0.2)
    );
    imageManager.DrawImageScale(
      "body",
      createVector(width / 2, height - 200),
      createVector(0.23, 0.23)
    );

    // Mouse animation
    if (mouseX <= width / 2 - 200 && mouseY <= height / 2) {
      this.selectOption = 1;
      imageManager.DrawImageScale(
        "left",
        createVector(this.thinkLeftX + 60, this.thinkY + 50),
        createVector(this.thinkScale + 0.04, this.thinkScale + 0.04)
      );
      imageManager.DrawImageScale(
        "eye_black",
        createVector(width / 2 - 15, height - 255),
        createVector(0.23, 0.23)
      );

      if (mouseIsPressed) {
        sceneManager.ChangeScene(new S3C3V1_1());
        if (!this.isEffectOut) {
          soundManager.PlaySound("S3/C2/effect");
          this.isEffectOut = !this.isEffectOut;
        }
      }
    } else {
      imageManager.DrawImageScale(
        "left",
        createVector(this.thinkLeftX, this.thinkY),
        createVector(this.thinkScale, this.thinkScale)
      );
    }
    if (mouseX >= width / 2 + 200 && mouseY <= height / 2) {
      this.selectOption = 2;
      imageManager.DrawImageScale(
        "right",
        createVector(this.thinkRightX - 60, this.thinkY + 50),
        createVector(this.thinkScale + 0.04, this.thinkScale + 0.04)
      );
      imageManager.DrawImageScale(
        "eye_black",
        createVector(width / 2 - 9, height - 255),
        createVector(0.23, 0.23)
      );

      if (mouseIsPressed) {
        sceneManager.ChangeScene(new S3C3V2());
        if (!this.isEffectOut) {
          soundManager.PlaySound("S3/C2/effect");
          this.isEffectOut = !this.isEffectOut;
        }
      }
    } else {
      imageManager.DrawImageScale(
        "right",
        createVector(this.thinkRightX, this.thinkY),
        createVector(this.thinkScale, this.thinkScale)
      );
    }
    //Button
    if (mouseX <= width / 2 - 200 && mouseY <= height / 2) {
      imageManager.DrawImageScale(
        "Button1",
        createVector(width / 2, height / 2),
        createVector(0.7, 0.7)
      );
    } else if (mouseX >= width / 2 + 200 && mouseY <= height / 2) {
      imageManager.DrawImageScale(
        "Button2",
        createVector(width / 2, height / 2),
        createVector(0.7, 0.7)
      );
    }
    if (this.selectOption == 0)
      imageManager.DrawImageScale(
        "eye_black",
        createVector(width / 2 - 12, height - 245),
        createVector(0.23, 0.23)
      );
  }

  OnExit() {}
}

/* S3C3V1_1.js */ 
class S3C3V1_1 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S3/C3/V1/_1/";
    this.SCENE_DURATION = 4.5;
    this.narrFlag = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("bear1", this.PREFIX + "bear1");
    imageManager.LoadImage("bear2", this.PREFIX + "bear2");
    imageManager.LoadImage("tiger", this.PREFIX + "tiger");
    imageManager.LoadImage("text", this.PREFIX + "text");


    this.narrFlag = false;

    timeManager.enterTime = timeManager.time;
  }

  OnDraw() {
    imageManager.DrawImage(
      "background",
      createVector(width / 2, height / 2, 0)
    );
    imageManager.DrawImageScale(
      "bear" + (((millis() / 500) % 2) + 1),
      createVector(475, 400, 0),
      createVector(0.25, 0.25, 0)
    );
    imageManager.DrawImageScale(
      "tiger",
      createVector(width / 2 + 25, height / 2, 0),
      createVector(0.25, 0.25, 0)
    );

    imageManager.DrawImage("text", createVector(width / 2, height / 2, 0));

    if (!this.narrFlag) {
      this.narrFlag = true;
      soundManager.PlaySound("S3/C3/V1/_1/Bear");
    }
    if (timeManager.time - timeManager.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C3V1_2());
    }
  }

  OnExit() {}
}

/* S3C3V1_1_1.js */ 
class S3C3V1_1_1 extends Scene {
  constructor() {
    super();
    this._time = 0;
    this.SCENE_DURATION = 5.33; // 5 seconds for scene duration
    this.tiger_x = 820;
    this.tiger_y = 440;
    this.bear_x = 500;
    this.bear_y = 440;
    this.character_scale = createVector(0.22, 0.22, 0);
    this.effectTime = 0;
    this.effectPlaying = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S3/C3/V1/_1/_1/background");
    imageManager.LoadImage("bear_before", "../../../Images/S3/C3/V1/_1/_1/bear_before");
    imageManager.LoadImage("bear_after", "../../../Images/S3/C3/V1/_1/_1/bear_after");
    imageManager.LoadImage(
      "tiger_before",
      "../../../Images/S3/C3/V1/_1/_1/tiger_before"
    );
    imageManager.LoadImage("tiger_after", "../../../Images/S3/C3/V1/_1/_1/tiger_after");
    this._time = 0;
  }

  OnDraw() {
    if (timeManager.time - timeManager.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C3V1_1_2());
    }
    this._time += 2;
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );

    if (this._time < 100) {
      imageManager.DrawImageScale(
        "bear_before",
        createVector(this.bear_x, this.bear_y, 0),
        this.character_scale,
        0
      );
      imageManager.DrawImageScale(
        "tiger_before",
        createVector(this.tiger_x, this.tiger_y, 0),
        this.character_scale,
        0
      );
    } else {
      imageManager.DrawImageScale(
        "bear_before",
        createVector(this.bear_x, this.bear_y, 0),
        this.character_scale,
        0,
        255
      );
      imageManager.DrawImageScale(
        "bear_after",
        createVector(this.bear_x, this.bear_y, 0),
        this.character_scale,
        0,
        this._time
      );

      imageManager.DrawImageScale(
        "tiger_before",
        createVector(this.tiger_x, this.tiger_y, 0),
        this.character_scale,
        0,
        255
      );
      imageManager.DrawImageScale(
        "tiger_after",
        createVector(this.tiger_x, this.tiger_y, 0),
        this.character_scale,
        0,
        this._time
      );
    }
    if (!this.effectPlaying && this.effectTime > 1.0) {
      soundManager.PlaySound("evolution");
      this.effectPlaying = true;
    } else if (!this.effectPlaying) {
      this.effectTime += timeManager.deltaTime;
    }
  }

  OnExit() {}
}

/* S3C3V1_1_2.js */ 
class S3C3V1_1_2 extends Scene {
  constructor() {
    super();
    this._time = 0;
    this.SCENE_DURATION = 5; // 5 seconds for scene duration
    this.tiger_x = 800;
    this.tiger_y = 400;
    this.bear_x = 500;
    this.bear_y = 400;
    this.bear_star_size = 0.2;
    this.tiger_star_size = 0.1;
    this.bear_star_a = 0.03;
    this.tiger_star_a = -0.03;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S3/C3/V1/_1/_2/background");
    imageManager.LoadImage("bear", "../../../Images/S3/C3/V1/_1/_2/bear");
    imageManager.LoadImage("bear_star", "../../../Images/S3/C3/V1/_1/_2/bear_star");
    imageManager.LoadImage("tiger", "../../../Images/S3/C3/V1/_1/_2/tiger");
    imageManager.LoadImage("tiger_star", "../../../Images/S3/C3/V1/_1/_2/tiger_star");
    soundManager.PlaySound("harp");

    this._time = 0;
    this.tiger_x = 800;
    this.tiger_y = 400;
    this.bear_x = 500;
    this.bear_y = 400;
    this.bear_star_size = 0.2;
    this.tiger_star_size = 0.1;
    this.bear_star_a = 0.03;
    this.tiger_star_a = -0.03;
  }

  OnDraw() {
    if (timeManager.time - timeManager.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C3V1_2_1());
    }
    this._time++;
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );

    imageManager.DrawImageScale(
      "bear",
      createVector(this.bear_x, this.bear_y, 0),
      createVector(0.2, 0.2, 0)
    );
    imageManager.DrawImageScale(
      "tiger",
      createVector(this.tiger_x, this.tiger_y, 0),
      createVector(0.2, 0.2, 0)
    );

    if (this._time % 3 == 0) {
      this.bear_star_size -= this.bear_star_a;
      this.tiger_star_size -= this.tiger_star_a;

      if (this.bear_star_size > 0.2 || this.bear_star_size < 0.1) {
        this.bear_star_a *= -1;
      }
      if (this.tiger_star_size > 0.2 || this.tiger_star_size < 0.1) {
        this.tiger_star_a *= -1;
      }
    }
    imageManager.DrawImageScale(
      "bear_star",
      createVector(300, 200, 0),
      createVector(this.bear_star_size, this.bear_star_size, 0)
    );
    imageManager.DrawImageScale(
      "tiger_star",
      createVector(1000, 200, 0),
      createVector(this.tiger_star_size, this.tiger_star_size, 0)
    );
  }

  OnExit() {}
}

/* S3C3V1_2.js */ 
class S3C3V1_2 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S3/C3/V1/_2/";
    this.CHARACTER_SCALE = 0.25;
    this.BEAR_X = 470;
    this.BEAR_Y = 460;
    this.BEAR_EYE_X = this.BEAR_X - 5;
    this.BEAR_EYE_Y = this.BEAR_Y - 50;
    this.TIGER_X = this.BEAR_X + 350;
    this.TIGER_Y = this.BEAR_Y;
    this.SCENE_SECONDS = 4; // 4초 동안 씬 진행
    this.startMinute = 0;
    this.startSecond = 0;
    this.tongueY = 0; // Not sure what this is for
    this.narrFlag = false;
  }

  OnEnter() {
    // 이미지 로드
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("text", this.PREFIX + "text");
    imageManager.LoadImage("bear_body", this.PREFIX + "bear_body");
    imageManager.LoadImage("bear_eye", this.PREFIX + "bear_eye");
    imageManager.LoadImage("tiger1", this.PREFIX + "tiger1");
    imageManager.LoadImage("tiger2", this.PREFIX + "tiger2");

    this.narrFlag = false;
    this.startMinute = minute();
    this.startSecond = second();
  }

  OnDraw() {
    if (!this.narrFlag) {
      this.narrFlag = true;
      soundManager.PlaySound("S3/C3/V1/_2/Tiger");
    }
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImage("text", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "bear_eye",
      createVector(this.BEAR_EYE_X, this.BEAR_EYE_Y),
      createVector(this.CHARACTER_SCALE, this.CHARACTER_SCALE)
    );
    imageManager.DrawImageScale(
      "bear_body",
      createVector(this.BEAR_X, this.BEAR_Y),
      createVector(this.CHARACTER_SCALE, this.CHARACTER_SCALE)
    );
    imageManager.DrawImageScale(
      "tiger" + (((millis() / 500) % 2) + 1),
      createVector(this.TIGER_X, this.TIGER_Y),
      createVector(this.CHARACTER_SCALE, this.CHARACTER_SCALE)
    );

    // 씬 시작 후 SCENE_SCONDS 초 경과시 다음 장면으로 이동
    if (
      isTimeExceeded(this.startMinute, this.startSecond, this.SCENE_SECONDS)
    ) {
      sceneManager.ChangeScene(new S3C3V1_3());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}

/* S3C3V1_2_1.js */ 
class S3C3V1_2_1 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S3/C3/V1/_2/_1/";
    this.SCENE_SECONDS = 7;
    this.animationCompleted = false;
    this.범녀_X = 300;
    this.범녀_Y = 100;
    this.범녀Name = "범녀1";
    this.범녀_X_End = 375;
    this.범녀_Y_End = 350;
    this.moveMillis = 5000;
    this.웅녀_X = 500;
    this.웅녀_Y = 100;
    this.웅녀_X_End = 588;
    this.웅녀_Y_End = 350;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.tongueY = 0;
    this.startMinute = 0;
    this.startSecond = 0;
    this.startMillis = 0;
    this.stepDuration = 0;
    this.stepSoundInterval = 0.5;
    this.stepSeconds = 0;
    this.stepID = 0;
  }

  OnEnter() {
    this.animationCompleted = false;

    // 이미지 로드
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("범녀1", this.PREFIX + "범녀1");
    imageManager.LoadImage("범녀2", this.PREFIX + "범녀2");
    imageManager.LoadImage("범녀3", this.PREFIX + "범녀3");
    imageManager.LoadImage("웅녀", this.PREFIX + "웅녀");
    imageManager.LoadImage("환웅", this.PREFIX + "환웅");

    this.startMinute = minute();
    this.startSecond = second();
    this.startMillis = millis();
    this.tongueY = 0;
  }

  OnDraw() {
    this.tongueY += 30 * timeManager.deltaTime;

    if (this.tongueY > 13) {
      this.tongueY *= -1;
    }
    let elapsedMillis = millis() - this.startMillis;
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    let prevName = this.범녀Name;
    this.범녀Name = "범녀" + (((elapsedMillis / 300) % 3) + 1);
    if (prevName === "범녀3" && this.범녀Name === "범녀1")
      this.animationCompleted = true;
    if (this.animationCompleted) this.범녀Name = "범녀1";
    imageManager.DrawImageScale(
      this.범녀Name,
      createVector(
        lerp(
          this.범녀_X,
          this.범녀_X_End,
          min(1, elapsedMillis / this.moveMillis)
        ),
        lerp(
          this.범녀_Y,
          this.범녀_Y_End,
          min(1, elapsedMillis / this.moveMillis)
        )
      ),
      createVector(0.2, 0.2)
    );
    imageManager.DrawImageScale(
      "웅녀",
      createVector(
        lerp(
          this.웅녀_X,
          this.웅녀_X_End,
          min(1, elapsedMillis / this.moveMillis)
        ),
        lerp(
          this.웅녀_Y,
          this.웅녀_Y_End,
          min(1, elapsedMillis / this.moveMillis)
        )
      ),
      createVector(0.2, 0.2)
    );
    imageManager.DrawImageScale(
      "환웅",
      createVector(this.환웅_X, this.환웅_Y),
      createVector(0.3, 0.3)
    );

    // 씬 시작 후 SCENE_SECONDS 초 경과시 다음 장면으로 이동
    if (
      isTimeExceeded(this.startMinute, this.startSecond, this.SCENE_SECONDS)
    ) {
      sceneManager.ChangeScene(new S3C3V1_2_2());
    }
    //발소리
    if (this.stepSeconds >= this.stepSoundInterval && this.stepDuration < 5) {
      this.stepID = int(random(2));
      if (this.stepID === 0) {
        soundManager.PlaySound("../../../Sounds/Effects/step1");
      } else if (this.stepID === 1) {
        soundManager.PlaySound("../../../Sounds/Effects/step2");
      } else if (this.stepID === 2) {
        soundManager.PlaySound("../../../Sounds/Effects/step3");
      }
      this.stepSeconds = 0;
    } else {
      this.stepDuration += timeManager.deltaTime;
      this.stepSeconds += timeManager.deltaTime;
    }
  }

  OnExit() {}
}

/* S3C3V1_2_2.js */ 
class S3C3V1_2_2 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S3/C3/V1/_2/_2/";
    this.moveMillis = 5000;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.tongueY = 0;
    this.startMinute = 0;
    this.startSecond = 0;
    this.startMillis = 0;
    this.darkenMillis = 1500;
    this.selected = false;
    this.lastScene = null;
  }

  OnEnter() {
    this.lastScene = new S3C3V1_2_1();

    // 이미지 로드
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("범녀", this.PREFIX + "범녀1");
    imageManager.LoadImage("웅녀", this.PREFIX + "웅녀");
    imageManager.LoadImage("환웅", this.PREFIX + "환웅");
    imageManager.LoadImage("button_left", this.PREFIX + "button_left");
    imageManager.LoadImage("button_right", this.PREFIX + "button_right");
    imageManager.LoadImage("S3C3V1_2_2_TEXT", this.PREFIX + "text");

    this.startMinute = minute();
    this.startSecond = second();
    this.startMillis = millis();
    this.tongueY = 0;
  }

  OnDraw() {
    this.tongueY += 30 * timeManager.deltaTime;

    if (this.tongueY > 13) {
      this.tongueY *= -1;
    }
    let elapsedMills = millis() - this.startMillis;
    imageManager.DrawImage("background", createVector(width / 2, height / 2));

    // 검은색 반투명
    fill(0, min(128, lerp(255, 128, this.darkenMillis / elapsedMills)));
    rect(0, 0, width, height);

    let hoveredTiger =
      mouseX > 280 && mouseX < 280 + 200 && mouseY > 150 && mouseY < 150 + 460;
    let hoveredBear =
      mouseX > 500 && mouseX < 500 + 200 && mouseY > 150 && mouseY < 150 + 460;

    let tigerScale = hoveredTiger ? 0.22 : 0.2;
    let bearScale = hoveredBear ? 0.22 : 0.2;

    imageManager.DrawImageScale(
      "범녀",
      createVector(this.lastScene.범녀_X_End, this.lastScene.범녀_Y_End),
      createVector(tigerScale, tigerScale)
    );
    imageManager.DrawImageScale(
      "웅녀",
      createVector(this.lastScene.웅녀_X_End, this.lastScene.웅녀_Y_End),
      createVector(bearScale, bearScale)
    );
    imageManager.DrawImageScale(
      "환웅",
      createVector(this.환웅_X, this.환웅_Y),
      createVector(0.3, 0.3)
    );
    imageManager.DrawImageScale(
      "S3C3V1_2_2_TEXT",
      createVector(width / 2, height / 2),
      createVector(1.0, 1.0)
    );

    if (hoveredTiger) {
      imageManager.DrawImageScale(
        "button_left",
        createVector(width / 2 - 60, height / 2 - 80),
        createVector(0.8, 0.8)
      );
    }

    if (hoveredBear) {
      imageManager.DrawImageScale(
        "button_right",
        createVector(width / 2, height / 2 - 55),
        createVector(0.8, 0.8)
      );
    }
    this.checkClick();
  }

  checkClick() {
    if (mouseIsPressed && !this.selected) {
      if (
        mouseX > 280 &&
        mouseX < 280 + 200 &&
        mouseY > 150 &&
        mouseY < 150 + 460
      ) {
        sceneManager.ChangeScene(new S3C3V1_4_1());
        this.selected = true;
      }
      if (
        mouseX > 500 &&
        mouseX < 500 + 200 &&
        mouseY > 150 &&
        mouseY < 150 + 460
      ) {
        sceneManager.ChangeScene(new S3C3V1_3_1());
        this.selected = true;
      }
    }
  }

  OnExit() {}
}

/* S3C3V1_3.js */ 
class S3C3V1_3 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S3/C3/V1/_3/_0/";
    this.centerVector = createVector();
    this.centerX = 0;
    this.centerY = 0;
    this.sunY = 600;
    this.cloudXDistance = 0;
    this.speed = 0.8;
    this.playingChicken = false;
    this.chickenTime = 0;
    this.SCENE_DURATION = 3;
  }

  OnEnter() {
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.centerVector = createVector(this.centerX, this.centerY);
    this.sunY = 600;
    this.cloudXDistance = 0;

    imageManager.LoadImage("cloud_left", this.PREFIX + "cloud_left");
    imageManager.LoadImage("cloud_right", this.PREFIX + "cloud_right");
    imageManager.LoadImage("cloud_middle", this.PREFIX + "cloud_middle");
    imageManager.LoadImage("lake", this.PREFIX + "lake");
    imageManager.LoadImage("mountains", this.PREFIX + "mountains");
    imageManager.LoadImage("sky", this.PREFIX + "sky");
    imageManager.LoadImage("sun", this.PREFIX + "sun");
    imageManager.LoadImage("text", this.PREFIX + "text");
    soundManager.PlaySound("../../../Sounds/Effects/bird");
  }

  OnDraw() {
    imageManager.DrawImage("sky", this.centerVector);
    imageManager.DrawImage("sun", createVector(this.centerX, this.sunY));
    imageManager.DrawImage("mountains", this.centerVector);
    imageManager.DrawImage("lake", this.centerVector);
    imageManager.DrawImage(
      "cloud_left",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "cloud_right",
      createVector(this.centerX + this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "cloud_middle",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage("text", this.centerVector);

    if (!this.playingChicken && this.chickenTime > 1) {
      soundManager.PlaySound("../../../Sounds/Effects/chicken");
      this.playingChicken = true;
    } else {
      this.chickenTime += deltaTime / 1000; // Convert milliseconds to seconds
    }

    if (this.sunY < 400) {
      sceneManager.ChangeScene(new S3C3V1_1_1());
    } else {
      this.sunY -= this.speed;
      this.cloudXDistance += this.speed;
    }
  }

  OnExit() {}
}

/* S3C3V1_3_1.js */ 
class S3C3V1_3_1 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S3/C3/V1/_3/_1/";
    this.웅녀_X = 588;
    this.웅녀_Y = 350;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.SCENE_SECONDS = 6;
    this.startMinute = 0;
    this.startSecond = 0;
    this.startMillis = 0;
    this.heartSize = 0;
    this.diameter = height - 400; // 최대크기
    this.minimumSize = this.diameter - 350;
    this.angle = 0;
  }

  OnEnter() {
    this.웅녀_X = 588;
    this.웅녀_Y = 350;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.heartSize = 0;
    this.SCENE_SECONDS = 6;
    this.diameter = height - 400; // 최대크기
    this.minimumSize = this.diameter - 350;
    this.angle = 0;

    // 이미지 로드
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("웅녀", this.PREFIX + "웅녀");
    imageManager.LoadImage("환웅", this.PREFIX + "환웅");
    imageManager.LoadImage("heart", this.PREFIX + "heart");
    soundManager.PlaySound("Choice");

    this.startMinute = minute();
    this.startSecond = second();
    this.startMillis = millis();
  }

  OnDraw() {
    let d1 =
      this.minimumSize +
      sin(this.angle) * (this.diameter / 2) +
      this.diameter / 2;

    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "웅녀",
      createVector(this.웅녀_X, this.웅녀_Y),
      createVector(0.2, 0.2)
    );
    imageManager.DrawImageScale(
      "환웅",
      createVector(this.환웅_X, this.환웅_Y),
      createVector(0.3, 0.3)
    );
    imageManager.DrawImageScale(
      "heart",
      createVector(width / 2, height / 2),
      createVector(d1 / 2000, d1 / 2000)
    );

    if (
      isTimeExceeded(this.startMinute, this.startSecond, this.SCENE_SECONDS)
    ) {
      sceneManager.ChangeScene(new S3C3V1_3_2());
    }

    this.angle += 0.1;
    this.diameter += 7.0;
    this.minimumSize += 15;
  }

  OnExit() {}
}

/* S3C3V1_3_2.js */ 
class S3C3V1_3_2 extends Scene {
  constructor() {
    super();
    this.preparationTime = 1;
    this.fadeoutTime = 4;
    this.BACKGROUND_IMAGE = "../../../Images/S3/C3/V1/_3/_2/Background";
    this.CHARACTER_IMAGE = "../../../Images/S3/C3/V1/_3/_2/Characters";
    this.alpha = 255;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.BACKGROUND_IMAGE);
    imageManager.LoadImage("character", this.CHARACTER_IMAGE);
    this.alpha = 255;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1, 0)
    );
    imageManager.DrawImageScale(
      "character",
      createVector(width / 2, height / 2),
      createVector(0.25, 0.25, 0),
      0,
      this.alpha
    );
    if (timeManager.time - timeManager.enterTime >= 1) {
      this.alpha -= (255 / this.fadeoutTime) * timeManager.deltaTime;
    }
    if (this.alpha <= 0) {
      this.preparationTime -= timeManager.deltaTime;
      if (this.preparationTime <= 0) {
        sceneManager.ChangeScene(new S3C3V1_3_3());
      }
    }
  }

  OnExit() {}
}

/* S3C3V1_3_3.js */ 
class S3C3V1_3_3 extends Scene {
  constructor() {
    super();
    this.preparationTime = 5;
    this.fadeoutTime = 6;
    this.BACKGROUND_IMAGE = "../../../Images/S3/C3/V1/_3/_3/Background";
    this.DANGUN_IMAGE = "../../../Images/S3/C3/V1/_3/_3/Dangun";
    this.alpha = 255;
    this.firstFlag = false;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.BACKGROUND_IMAGE);
    imageManager.LoadImage("dangun", this.DANGUN_IMAGE);
    imageManager.LoadImage("text", "../../../Images/S3/C3/V1/_3/_3/text");
    this.firstFlag = false;
    this.alpha = 255;
    this.preparationTime = 8;
    this.fadeoutTime = 7;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );
    imageManager.DrawImageScale(
      "dangun",
      createVector(width / 2, height / 2, 0),
      createVector(0.25, 0.25, 0),
      0,
      this.alpha
    );
    imageManager.DrawImage("text", createVector(width / 2, height / 2, 0));

    if (timeManager.time - timeManager.enterTime >= this.preparationTime) {
      sceneManager.CreditScene();
    }

    if (!this.firstFlag) {
      this.firstFlag = true;
      soundManager.PlaySound("S3/C3/V1/_3/_3/narr");
    }
  }

  OnExit() {}
}

/* S3C3V1_4_1.js */ 
class S3C3V1_4_1 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S3/C3/V1/_4/_1/";
    this.범녀_X = 588;
    this.범녀_Y = 350;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.SCENE_SECONDS = 6;
    this.startMinute = 0;
    this.startSecond = 0;
    this.startMillis = 0;
    this.heartSize = 0;
    this.diameter = 0;
    this.minimumSize = 0;
    this.angle = 0;
  }

  OnEnter() {
    this.범녀_X = 588;
    this.범녀_Y = 350;
    this.환웅_X = 1150;
    this.환웅_Y = 500;
    this.heartSize = 0;
    this.SCENE_SECONDS = 4;
    this.diameter = height - 400; // 최대크기
    this.minimumSize = this.diameter - 350;
    this.angle = 0;

    // 이미지 로드
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("범녀1", this.PREFIX + "범녀1");
    imageManager.LoadImage("환웅", this.PREFIX + "환웅");
    imageManager.LoadImage("heart", this.PREFIX + "heart");
    soundManager.PlaySound("Choice");
    this.startMinute = minute();
    this.startSecond = second();
    this.startMillis = millis();
  }

  OnDraw() {
    // 최소크기, 최대크기
    let d1 =
      this.minimumSize +
      (sin(this.angle) * this.diameter) / 2 +
      this.diameter / 2;

    imageManager.DrawImage("background", createVector(width / 2, height / 2));

    // 범녀 선택 씬
    imageManager.DrawImageScale(
      "범녀1",
      createVector(this.범녀_X, this.범녀_Y),
      createVector(0.2, 0.2)
    );
    imageManager.DrawImageScale(
      "환웅",
      createVector(this.환웅_X, this.환웅_Y),
      createVector(0.3, 0.3)
    );
    imageManager.DrawImageScale(
      "heart",
      createVector(width / 2, height / 2),
      createVector(d1 / 2000, d1 / 2000)
    );

    // 씬 시작 후 SCENE_SECONDS 초 경과시 다음 장면으로 이동
    if (
      isTimeExceeded(this.startMinute, this.startSecond, this.SCENE_SECONDS)
    ) {
      sceneManager.ChangeScene(new S3C3V1_4_2());
    }
    this.angle += 0.1; // 크기 증가 속도
    this.diameter += 7.0; // 최대크기 증가
    this.minimumSize += 15; // 최소크기 증가
  }

  OnExit() {}
}

/* S3C3V1_4_2.js */ 
class S3C3V1_4_2 extends Scene {
  constructor() {
    super();
    this.SCENE_SECONDS = 5;
    this.PREFIX = "../../../Images/S3/C3/V1/_4/_2/";
    this.preparationTime = 1;
    this.alpha = 1;
    this.fadeoutTime = 4;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("family", this.PREFIX + "family");

    this.alpha = 255;
    this.fadeoutTime = 4;
    this.preparationTime = 3;
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImageScale(
      "family",
      createVector(width / 2, height / 2),
      createVector(0.25, 0.25),
      0,
      this.alpha
    );

    if (timeManager.time - timeManager.enterTime >= 1) {
      this.alpha -= (255 / this.fadeoutTime) * timeManager.deltaTime;
    }
    if (this.alpha <= 0) {
      this.preparationTime -= timeManager.deltaTime;
      if (this.preparationTime <= 0) {
        sceneManager.ChangeScene(new S3C3V1_4_3());
      }
    }
  }

  OnExit() {}
}

/* S3C3V1_4_3.js */ 
class S3C3V1_4_3 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 7;
    this.imageNames = [
      "background",
      "body",
      "head",
      "arm",
      "mouth1",
      "mouth2",
      "ally",
      "enemy1",
      "enemy2",
      "enemy3",
      "flag",
    ];
    this.imagePath = "../../../Images/S3/C3/V1/_4/_3/";
    this.manScale = 0.3;
    this.allyScale = 0.2;
    this.enemyScale1 = 0.2;
    this.enemyScale2 = 0.13;

    this.ANIMATION_TICK_INTERVAL = 1.0;
    this.animationTick = 0;
    this.isAnimating = true;

    this.firstFlag = false;
  }

  OnEnter() {
    this.imageNames.forEach((imageName) =>
      imageManager.LoadImage(imageName, this.imagePath + imageName)
    );

    imageManager.LoadImage("text", "../../../Images/S3/C3/V1/_4/_3/text");

    this.animationTick = 0;
    this.firstFlag = false;
  }

  OnDraw() {
    this.animationTick += timeManager.deltaTime;
    if (this.animationTick >= this.ANIMATION_TICK_INTERVAL) {
      this.animationTick = 0;
      this.isAnimating = !this.isAnimating;
    }

    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2),
      createVector(1, 1)
    );

    imageManager.DrawImageScale(
      "enemy2",
      createVector(100, 450),
      createVector(this.enemyScale2, this.enemyScale2)
    );
    imageManager.DrawImageScale(
      "enemy2",
      createVector(200, 450),
      createVector(this.enemyScale2, this.enemyScale2)
    );
    imageManager.DrawImageScale(
      "enemy1",
      createVector(500, 450),
      createVector(this.enemyScale2, this.enemyScale2)
    );
    imageManager.DrawImageScale(
      "enemy3",
      createVector(350, 450),
      createVector(this.enemyScale1, this.enemyScale1)
    );
    imageManager.DrawImageScale(
      "ally",
      createVector(1180, 500),
      createVector(this.allyScale, this.allyScale)
    );
    imageManager.DrawImageScale(
      "flag",
      createVector(1300, 250),
      createVector(0.25, 0.25),
      0.3
    );

    if (this.isAnimating)
      imageManager.DrawImageScale(
        "arm",
        createVector(950, 280),
        createVector(this.manScale, this.manScale),
        0.3
      );
    else
      imageManager.DrawImageScale(
        "arm",
        createVector(900, 300),
        createVector(this.manScale, this.manScale)
      );

    imageManager.DrawImageScale(
      "body",
      createVector(900, 500),
      createVector(this.manScale, this.manScale)
    );
    imageManager.DrawImageScale(
      "head",
      createVector(1050, 300),
      createVector(this.manScale, this.manScale),
      0.2
    );

    if (this.isAnimating)
      imageManager.DrawImageScale(
        "mouth1",
        createVector(1050, 300),
        createVector(this.manScale, this.manScale),
        0.2
      );
    else
      imageManager.DrawImageScale(
        "mouth2",
        createVector(1050, 300),
        createVector(this.manScale, this.manScale),
        0.2
      );

    imageManager.DrawImage("text", createVector(width / 2, height / 2));

    if (timeManager.time - timeManager.enterTime >= this.SCENE_DURATION) {
      sceneManager.CreditScene();
    }
    if (!this.firstFlag) {
      this.firstFlag = true;
      soundManager.PlaySound("S3/C3/V1/_4/_3/narr");
    }
  }

  OnExit() {
    // sceneManager.ChangeScene(new ENDING());
  }
}

/* S3C3V2.js */ 
class S3C3V2 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 5;
    this.tiger_SCALE = 0.2;
    this.bear_SCALE = 0.25;
    this.bear_X = 300;
    this.bear_Y = 450;
    this.tiger_X = 800;
    this.tiger_Y = 250;
    this.bear_EYE_X = 295;
    this.bear_EYE_Y = 400;
    this.bear_MOU_X = 305;
    this.bear_MOU_Y = 460;
    this.startTime = 0;
    this.imageIndex = 0;
    this.tigerList = ["tiger1", "tiger2", "tiger3"];
    this.WALK_INTERVAL = 0.075;
    this.walkTick = 0;
  }

  OnEnter() {
    imageManager.LoadImage("text", "../../../Images/S3/C3/V2/_0/text");
    imageManager.LoadImage("background", "../../../Images/S3/C3/V2/_0/background");
    imageManager.LoadImage("bear1", "../../../Images/S3/C3/V2/_0/bear1");
    imageManager.LoadImage("bear2", "../../../Images/S3/C3/V2/_0/bear2");

    for (let i = 0; i < this.tigerList.length; i++) {
      imageManager.LoadImage(
        `tiger${i + 1}`,
        "../../../Images/S3/C3/V2/_0/tiger" + `${i + 1}`
      );
    }

    soundManager.LoadSound(
      "woonggirl",
      "../../../Sounds/S3/C3/V2/_0/narr/woonggirl.mp3"
    );
    soundManager.PlaySound("woonggirl");

    this.tiger_X = 800;
    this.tiger_Y = 250;
    this.bear_SCALE = 0.25;
    this.bear_X = 300;
    this.bear_Y = 450;
    this.tiger_SCALE = 0.2;
    this.bear_EYE_X = 295;
    this.bear_EYE_Y = 400;
    this.bear_MOU_X = 305;
    this.bear_MOU_Y = 460;
    this.imageIndex = 0;
    this.walkTick = 0;
    this.startTime = millis();
  }

  OnDraw() {
    let currentProcessingTime = (millis() - this.startTime) / 1000;
    let isEating = currentProcessingTime % 2 === 1;

    imageManager.DrawImage("background", createVector(width / 2, height / 2));

    if (Math.floor(millis() / 300) % 2 === 0) {
      imageManager.DrawImageScale(
        "bear1",
        createVector(this.bear_EYE_X, this.bear_EYE_Y),
        createVector(this.bear_SCALE, this.bear_SCALE, 0)
      );
    } else {
      imageManager.DrawImageScale(
        "bear2",
        createVector(this.bear_EYE_X, this.bear_EYE_Y),
        createVector(this.bear_SCALE, this.bear_SCALE, 0)
      );
    }

    if (this.tiger_X < 900) {
      this.walkTick += timeManager.deltaTime;
      if (this.walkTick > this.WALK_INTERVAL) {
        this.walkTick = 0;
        this.imageIndex++;
      }
    }
    imageManager.DrawImageScale(
      this.tigerList[this.imageIndex % 3],
      createVector(this.tiger_X, this.tiger_Y),
      createVector(this.tiger_SCALE, this.tiger_SCALE, 0)
    );
    imageManager.DrawImage("text", createVector(width / 2, height / 2));

    if (this.tiger_X < 900) {
      this.tiger_X += 26 * timeManager.deltaTime;
      this.tiger_Y -= 0.5 * timeManager.deltaTime;
      this.tiger_SCALE -= 0.03 * timeManager.deltaTime;
    }
    if (timeManager.time - timeManager.enterTime > this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C3V2_1_1());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}

/* S3C3V2_1_1.js */ 
class S3C3V2_1_1 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S3/C3/V2/_1/_1/";
    this.SOUND_PREFIX = "../../../Sounds/S3/C3/V2/_1/_1/narr/";

    this.centerVector;
    this.centerX;
    this.centerY;
    this.sunY = 600;
    this.cloudXDistance = 0;
    this.speed = 0.8;

    this.SCENE_DURATION = 3;
  }

  OnEnter() {
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.centerVector = createVector(this.centerX, this.centerY);
    this.sunY = 600;
    this.cloudXDistance = 0;

    imageManager.LoadImage("text", this.PREFIX + "text");
    imageManager.LoadImage("cloud_left", this.PREFIX + "cloud_left");
    imageManager.LoadImage("cloud_right", this.PREFIX + "cloud_right");
    imageManager.LoadImage("cloud_middle", this.PREFIX + "cloud_middle");
    imageManager.LoadImage("lake", this.PREFIX + "lake");
    imageManager.LoadImage("mountains", this.PREFIX + "mountains");
    imageManager.LoadImage("sky", this.PREFIX + "sky");
    imageManager.LoadImage("sun", this.PREFIX + "sun");

    soundManager.PlaySound("S3/C3/V2/_1/_1/narr");
  }

  OnDraw() {
    imageManager.DrawImage("sky", this.centerVector);
    imageManager.DrawImage("sun", createVector(this.centerX, this.sunY));
    imageManager.DrawImage("mountains", this.centerVector);
    imageManager.DrawImage("lake", this.centerVector);
    imageManager.DrawImage(
      "cloud_left",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "cloud_right",
      createVector(this.centerX + this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage(
      "cloud_middle",
      createVector(this.centerX - this.cloudXDistance, this.centerY)
    );
    imageManager.DrawImage("text", this.centerVector);

    if (this.sunY < 400) {
      sceneManager.ChangeScene(new S3C3V2_1_2());
    } else {
      this.sunY -= this.speed;
      this.cloudXDistance += this.speed;
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}

/* S3C3V2_1_2.js */ 
class S3C3V2_1_2 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 4;
    this.GIRL_X = 600;
    this.GIRL_Y = 550;
    this.GIRL_SCALE = 0.4;
    this.GIRL_EYE_Y = 380;
    this.GIRL_EYE_X = 620;
    this.GIRL_HAND_X = 630;
    this.GIRL_HAND_Y = 550;
    this.startMillis = 0;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S3/C3/V2/_1/_2/background");
    imageManager.LoadImage("text", "../../../Images/S3/C3/V2/_1/_2/text");

    imageManager.LoadImage("girlbody", "../../../Images/S3/C3/V2/_1/_2/girlbody");
    imageManager.LoadImage("girlface", "../../../Images/S3/C3/V2/_1/_2/girlface");
    imageManager.LoadImage("girlface2", "../../../Images/S3/C3/V2/_1/_2/girlface2");
    imageManager.LoadImage("girlhand", "../../../Images/S3/C3/V2/_1/_2/girlhand");

    this.startMillis = millis();

    this.GIRL_X = 600;
    this.GIRL_Y = 550;
    this.GIRL_SCALE = 0.4;
    this.GIRL_EYE_Y = 380;
    this.GIRL_EYE_X = 620;
    this.GIRL_HAND_X = 630;
    this.GIRL_HAND_Y = 550;
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImage("text", createVector(width / 2, height / 2));

    this.GIRL_HAND_Y = lerp(
      550,
      515,
      (timeManager.time - timeManager.enterTime) / this.SCENE_DURATION
    );

    //girl
    imageManager.DrawImageScale(
      "girlbody",
      createVector(this.GIRL_X, this.GIRL_Y),
      createVector(this.GIRL_SCALE, this.GIRL_SCALE)
    );
    imageManager.DrawImageScale(
      "girlhand",
      createVector(this.GIRL_HAND_X, abs(this.GIRL_HAND_Y)),
      createVector(this.GIRL_SCALE, this.GIRL_SCALE)
    );
    if ((millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "girlface",
        createVector(this.GIRL_EYE_X, this.GIRL_EYE_Y),
        createVector(this.GIRL_SCALE, this.GIRL_SCALE)
      );
    } else {
      imageManager.DrawImageScale(
        "girlface2",
        createVector(this.GIRL_EYE_X, this.GIRL_EYE_Y),
        createVector(this.GIRL_SCALE, this.GIRL_SCALE)
      );
    }
    if (
      soundManager.hasSound("S3/C3/V2/_1/_2/woonggirl") &&
      isTimeExceededMillis(this.startMillis, 1)
    ) {
      soundManager.playSoundOnce("S3/C3/V2/_1/_2/woonggirl");
    }
    // 씬 시작 후 SCENE_DURATION 초 경과시 다음 장면으로 이동
    if (timeManager.time - timeManager.enterTime >= this.SCENE_DURATION) {
      sceneManager.ChangeScene(new S3C3V2_1_3());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}

/* S3C3V2_1_3.js */ 
class S3C3V2_1_3 extends Scene {
  constructor() {
    super();
    this.GIRL_X = 900;
    this.GIRL_Y = 480;
    this.GIRL_SCALE = 0.15;
    this.GIRL_EYE_Y = 410;
    this.HWAN_X = 300;
    this.HWAN_Y = 480;
    this.HWAN_SCALE = 0.15;
    this.HWAN_MOUSE_Y = 405;
    this.HWAN_SHOE_Y = this.HWAN_Y + 140;
    this.startMillis = 0;
    this.stepTime = 0;
    this.curTime = 0;
    this.narrDuration = 0;
  }

  OnEnter() {
    imageManager.LoadImage("background", "../../../Images/S3/C3/V2/_1/_3/background");
    imageManager.LoadImage(
      "hwanwoong_text",
      "../../../Images/S3/C3/V2/_1/_3/hwanwoong_text"
    );
    imageManager.LoadImage("girl_text", "../../../Images/S3/C3/V2/_1/_3/girl_text");


    // girl
    imageManager.LoadImage("girl_body", "../../../Images/S3/C3/V2/_1/_3/girl");
    imageManager.LoadImage("girl_eye_1", "../../../Images/S3/C3/V2/_1/_3/girleye1");
    imageManager.LoadImage("girl_eye_2", "../../../Images/S3/C3/V2/_1/_3/girleye2");

    // hwan
    imageManager.LoadImage("hwan_body", "../../../Images/S3/C3/V2/_1/_3/hwan");
    imageManager.LoadImage("hwan_mouse_1", "../../../Images/S3/C3/V2/_1/_3/hwanmouse1");
    imageManager.LoadImage("hwan_mouse_2", "../../../Images/S3/C3/V2/_1/_3/hwanmouse2");
    imageManager.LoadImage("hwan_shoe_1", "../../../Images/S3/C3/V2/_1/_3/hwanshoe");
    imageManager.LoadImage("hwan_shoe_2", "../../../Images/S3/C3/V2/_1/_3/hwanshoe2");

    this.startMillis = millis();
  }

  OnDraw() {
    this.sound();
    // 배경화면
    imageManager.DrawImage("background", createVector(width / 2, height / 2));
    imageManager.DrawImage(
      "hwanwoong_text",
      createVector(width / 2, height / 2 + 100)
    );
    imageManager.DrawImage(
      "girl_text",
      createVector(width / 2, height / 2 + 100)
    );

    // girl
    imageManager.DrawImageScale(
      "girl_body",
      createVector(this.GIRL_X, this.GIRL_Y),
      createVector(this.GIRL_SCALE, this.GIRL_SCALE)
    );

    // hwan
    if (this.HWAN_X <= this.GIRL_X - 400) {
      this.HWAN_X += 1.5;
      if ((millis() / 500) % 2 === 0) {
        imageManager.DrawImageScale(
          "hwan_shoe_1",
          createVector(this.HWAN_X + 17, this.HWAN_SHOE_Y),
          createVector(this.HWAN_SCALE, this.HWAN_SCALE)
        );
      } else {
        imageManager.DrawImageScale(
          "hwan_shoe_2",
          createVector(this.HWAN_X + 17, this.HWAN_SHOE_Y),
          createVector(this.HWAN_SCALE, this.HWAN_SCALE)
        );
      }
    } else {
      imageManager.DrawImageScale(
        "hwan_shoe_2",
        createVector(this.HWAN_X + 17, this.HWAN_SHOE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
    }
    if ((millis() / 500) % 2 === 0) {
      imageManager.DrawImageScale(
        "girl_eye_1",
        createVector(this.GIRL_X, this.GIRL_EYE_Y),
        createVector(this.GIRL_SCALE, this.GIRL_SCALE)
      );
      imageManager.DrawImageScale(
        "hwan_body",
        createVector(this.HWAN_X, this.HWAN_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
      imageManager.DrawImageScale(
        "hwan_mouse_1",
        createVector(this.HWAN_X + 10, this.HWAN_MOUSE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
    } else {
      imageManager.DrawImageScale(
        "girl_eye_2",
        createVector(this.GIRL_X, this.GIRL_EYE_Y),
        createVector(this.GIRL_SCALE, this.GIRL_SCALE)
      );
      imageManager.DrawImageScale(
        "hwan_body",
        createVector(this.HWAN_X, this.HWAN_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
      imageManager.DrawImageScale(
        "hwan_mouse_2",
        createVector(this.HWAN_X + 10, this.HWAN_MOUSE_Y),
        createVector(this.HWAN_SCALE, this.HWAN_SCALE)
      );
    }
    if (this.stepTime > 0.5 && this.curTime < 4.8) {
      soundManager.PlaySound("../../../Sounds/Effects/Step_Rock_02");
      this.stepTime = 0;
    } else {
      this.stepTime += timeManager.deltaTime;
    }
    this.curTime += timeManager.deltaTime;
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }

  sound() {
    // 씬 시작 후 1초 뒤 대사1 시작
    if (
      soundManager.hasSound("S3/C3/V2/_1/_3/hwanwoong") &&
      isTimeExceededMillis(this.startMillis, 1)
    ) {
      this.narrDuration = soundManager.soundDuration("S3/C3/V2/_1/_3/hwanwoong");
      soundManager.playSoundOnce("S3/C3/V2/_1/_3/hwanwoong");
      this.startMillis = millis(); // 대사 1 시작 millis
    }
    // 대사 1 종료 후 1.2초 뒤 대사2 시작
    if (
      !soundManager.hasSound("S3/C3/V2/_1/_3/hwanwoong") &&
      soundManager.hasSound("S3/C3/V2/_1/_3/woonggirl") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.2)
    ) {
      this.narrDuration = soundManager.soundDuration("S3/C3/V2/_1/_3/woonggirl");
      soundManager.playSoundOnce("S3/C3/V2/_1/_3/woonggirl");
      this.startMillis = millis();
    }
    // 대사 2 종료 후 1초 뒤 다음 장면으로 이동
    if (
      !soundManager.hasSound("S3/C3/V2/_1/_3/hwanwoong") &&
      !soundManager.hasSound("S3/C3/V2/_1/_3/woonggirl") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)
    ) {
      sceneManager.ChangeScene(new S3C3V2_2_1());
    }
  }
}

/* S3C3V2_2_1.js */ 
class S3C3V2_2_1 extends Scene {
  constructor() {
    super();
    this.SCENE_DURATION = 5; // 5초 동안 씬 진행
    this.PREFIX = "../../../Images/S3/C3/V2/_2/_1/";
    this.SOUND_PREFIX = "../../../Sounds/S3/C3/V2/_2/_1/narr/";
    this.EXTRA_Y = 580;
    this.COUPLE_Y = 500;
    this.extraScale = createVector(0.2, 0.2, 0);
    this.coupleScale = createVector(0.33, 0.33, 0);
    this.startMillis = 0;
    this.narrDuration = 0;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("couple", this.PREFIX + "couple");
    imageManager.LoadImage("extra_left", this.PREFIX + "extra_left");
    imageManager.LoadImage("extra_right", this.PREFIX + "extra_right");

    this.startMillis = millis(); // 씬 시작 millis
  }

  OnDraw() {
    imageManager.DrawImage("background", createVector(width / 2, height / 2));

    imageManager.DrawImageScale(
      "extra_left",
      createVector(150, this.EXTRA_Y),
      this.extraScale
    );
    imageManager.DrawImageScale(
      "extra_right",
      createVector(1150, this.EXTRA_Y),
      this.extraScale
    );

    imageManager.DrawImageScale(
      "couple",
      createVector(width / 2, this.COUPLE_Y),
      this.coupleScale
    );

    // 씬 시작 후 1초 뒤 대사1 시작
    if (
      soundManager.hasSound("haha") &&
      isTimeExceededMillis(this.startMillis, 1)
    ) {
      this.narrDuration = soundManager.soundDuration("haha");
      soundManager.playSoundOnce("haha");
      this.startMillis = millis(); // 대사 1 시작 millis
    }
    // 대사 1 종료 후 1초 뒤 다음 장면으로 이동
    if (
      !soundManager.hasSound("haha") &&
      !soundManager.hasSound("thank") &&
      isTimeExceededMillis(this.startMillis, this.narrDuration + 1.0)
    ) {
      sceneManager.ChangeScene(new S3C3V2_2_2());
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}

/* S3C3V2_2_2.js */ 
class S3C3V2_2_2 extends Scene {
  constructor() {
    super();
    this.preparationTime = 1;
    this.BACKGROUND_IMAGE = "../../../Images/S3/C3/V1/_3/_2/Background";
    this.CHARACTER_IMAGE = "../../../Images/S3/C3/V1/_3/_2/Characters";
    this.alpha = 255;
    this.fadeoutTime = 4;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.BACKGROUND_IMAGE);
    imageManager.LoadImage("character", this.CHARACTER_IMAGE);
    this.alpha = 255;
  }

  OnDraw() {
    imageManager.DrawImageScale(
      "background",
      createVector(width / 2, height / 2, 0),
      createVector(1, 1, 0)
    );
    imageManager.DrawImageScale(
      "character",
      createVector(width / 2, height / 2, 0),
      createVector(0.25, 0.25, 0),
      0,
      this.alpha
    );
    if (timeManager.time - timeManager.enterTime >= 1) {
      this.alpha -= (255 / this.fadeoutTime) * timeManager.deltaTime;
    }
    if (this.alpha <= 0) {
      this.preparationTime -= timeManager.deltaTime;
      if (this.preparationTime <= 0) {
        sceneManager.ChangeScene(new S3C3V2_2_3());
      }
    }
  }

  OnExit() {}
}

/* S3C3V2_2_3.js */ 
class S3C3V2_2_3 extends Scene {
  constructor() {
    super();
    this.PREFIX = "../../../Images/S3/C3/V2/_2/_3/";
    this.SOUND_PREFIX = "../../../Sounds/S3/C3/V2/_2/_3/narr/";
    this.SCENE_DURATION = 5;
  }

  OnEnter() {
    imageManager.LoadImage("background", this.PREFIX + "background");
    imageManager.LoadImage("text", this.PREFIX + "text");
    imageManager.LoadImage("dangun", this.PREFIX + "dangun");
    soundManager.PlaySound("S3/C3/V2/_2/_3/narr");
    timeManager.enterTime = timeManager.time;
  }

  OnDraw() {
    imageManager.DrawImage(
      "background",
      createVector(width / 2, height / 2, 0)
    );
    imageManager.DrawImageScale(
      "dangun",
      createVector(width / 2, height / 2 + 60, 0),
      createVector(0.22, 0.22, 0)
    );
    imageManager.DrawImage("text", createVector(width / 2, height / 2, 0));

    if (timeManager.time - timeManager.enterTime > this.SCENE_DURATION) {
      sceneManager.CreditScene();
    }
  }

  OnExit() {
    soundManager.stopNowPlaying();
  }
}

/* SceneManager.js */ 
class SceneManager {
  constructor() {
    this.currentScene = null;
    this.nextScene = null;
    this.firstScene = null;
    this.creditScene = null;
    this.backgroundAlpha = 0;
    this.fadeIn = false;
    this.fadeOut = false;
    this.fadeSpeed = 360;
    this.looping = true;
  }

  CreditScene() {
    this.ChangeScene(this.creditScene);
  }

  SetCreditScene(scene) {
    this.creditScene = scene;
  }

  Setup(initialScene) {
    this.currentScene = null;
    this.nextScene = null;

    if (initialScene != null) {
      this.fadeIn = true;
      this.fadeOut = false;
      this.backgroundAlpha = 255;
      this.firstScene = initialScene;
      initialScene.enterTime = millis() / 1000;
      initialScene.OnEnter();
    }
  }

  Draw() {
    if (this.currentScene != null) {
      this.currentScene.OnDraw();
    }

    if (
      this.firstScene != null &&
      this.currentScene == null &&
      frameCount > 50
    ) {
      this.firstScene.OnDraw();
      if (this.backgroundAlpha > 0) {
        this.backgroundAlpha -= (deltaTime / 1000) * this.fadeSpeed;
      } else {
        this.backgroundAlpha = 0;
        this.fadeIn = false;
        this.currentScene = this.firstScene;
        this.firstScene = null;
        this.nextScene = null;
      }
    }

    if (this.nextScene != null && this.currentScene != null) {
      if (this.fadeOut == true && this.fadeIn == false) {
        this.backgroundAlpha += (deltaTime / 1000) * this.fadeSpeed;
        if (this.backgroundAlpha >= 255) {
          this.fadeIn = true;
          this.backgroundAlpha = 255;
          this.fadeOut = false;
          if (this.currentScene != null) {
            this.currentScene.OnExit();
          }
          this.currentScene = this.nextScene;
          imageManager.ResetImages();
          soundManager.ResetSounds();
          this.currentScene.enterTime = millis() / 1000;
          this.currentScene.OnEnter();
        }
      }
      if (this.fadeIn == true && this.fadeOut == false) {
        if (this.backgroundAlpha > 0) {
          this.backgroundAlpha -= (deltaTime / 1000) * this.fadeSpeed;
        } else {
          this.backgroundAlpha = 0;
          this.fadeIn = false;
          this.firstScene = null;
          this.nextScene = null;
        }
      }
    }

    fill(0, this.backgroundAlpha);
    rect(0, 0, width, height);
  }

  ChangeScene(scene) {
    if (QAMode == true) {
      if (this.nextScene == null) this.looping = false;
      return;
    }
    if (this.nextScene != null || this.firstScene != null) {
      return;
    }
    this.backgroundAlpha = 0;
    this.fadeIn = false;
    this.fadeOut = true;
    this.nextScene = scene;
    this.looping = true;
  }

  ChangeSceneManually(scene) {
    if (this.nextScene != null || this.firstScene != null) return;
    this.backgroundAlpha = 0;
    this.fadeIn = false;
    this.fadeOut = true;
    this.nextScene = scene;
    this.looping = true;
  }
}

/* SoundManager.js */ 
class SoundManager {
  constructor() {
    this.sounds = new Map();
    this.nowPlaying = null;
  }

  ResetSounds() {
    this.sounds.clear();
  }

  LoadSound(name, filename) {
    let sound = loadSound(filename);
    this.sounds.set(name, sound);
  }

  PlaySound(name) {
    let sound = this.sounds.get(name);
    if (sound) {
      sound.play();
      this.nowPlaying = sound;
    }
  }

  StopSound(name) {
    let sound = this.sounds.get(name);
    if (sound) {
      sound.stop();
    }
  }

  soundDuration(name) {
    let sound = this.sounds.get(name);
    if (sound) {
      return sound.duration();
    }
    return 0;
  }

  playSoundOnce(name) {
    this.PlaySound(name);
    this.removeSound(name);
  }

  removeSound(name) {
    this.sounds.delete(name);
  }

  hasSound(name) {
    return this.sounds.has(name);
  }

  isPlaying(name) {
    let sound = this.sounds.get(name);
    if (sound) {
      return sound.isPlaying();
    }
    return false;
  }

  stopNowPlaying() {
    if (this.nowPlaying) {
      this.nowPlaying.stop();
    }
  }
}

/* TimelineManager.js */ 
class Timeline {
  constructor(callback, endTime) {
    this.callback = callback;
    this.endTime = endTime;
  }

  OnDraw(time) {
    if (this.callback) {
      this.callback(time);
    }
  }
}
class TimelineManager {
  constructor() {
    this.timelines = [];
    this.currentTimeline = null;
    this.endCallback = null;
    this.totalTime = 0.0;
    this.currentUseSceneTime = 0.0;
    this.currentTime = millis() / 1000;
  }

  OnDraw() {
    if (this.timelines.length > 0) {
      if (this.currentTimeline === null) {
        this.currentTimeline = this.timelines[0];
        this.currentTime = millis() / 1000;
      } else {
        let elapsedTime = millis() / 1000 - this.currentTime;

        if (
          millis() / 1000 - this.currentTime >=
          this.currentTimeline.endTime
        ) {
          this.timelines.shift(); // Remove the first timeline
          if (this.timelines.length > 0) {
            this.currentUseSceneTime = this.currentTimeline.endTime;
            this.currentTimeline = this.timelines[0];
            this.currentTime = millis() / 1000;
          } else {
            this.currentTimeline = null;
          }
        }
      }
      if (this.currentTimeline !== null) {
        this.currentTimeline.OnDraw(millis() / 1000 - this.currentTime);
      }
    } else {
      if (this.endCallback) {
        this.endCallback();
        this.clear();
      }
    }
  }

  initTimeline() {
    this.timelines = [];
  }

  pushTimeline(callback, time) {
    this.totalTime += time;
    this.timelines.push(new Timeline(callback, time));
  }

  setEndCallback(callback) {
    this.endCallback = callback;
  }

  clear() {
    this.currentTimeline = null;
    this.timelines = [];
    this.endCallback = null;
  }
}

/* TimeManager.js */ 
class TimeManager {
  constructor() {
    this.deltaTime = 0;
    this.time = 0;
    this.currentTime = millis();
    this.lastTime = millis();
  }

  OnDraw() {
    this.lastTime = this.currentTime;
    this.currentTime = millis();
    this.deltaTime = (this.currentTime - this.lastTime) / 1000;
    this.time += this.deltaTime;
  }
}

/* Utilities.js */ 
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

/* DangunMyth.js */ 
let sceneManager;
let imageManager;
let fontManager;
let timeManager;
let soundManager;
let sceneList = [];
let QAMode = false; // 이 변수를 true로 바꾸면 시간에 따른 씬 전환 안됩니다

function preload(){
  soundManager = new SoundManager();
  
  soundManager.LoadSound("Credit", "../../../Sounds/BGM/EndingCredit.mp3");
  soundManager.LoadSound("intro", "../../../Sounds/intro.wav");
  soundManager.LoadSound("S1/C1/narr", "../../../Sounds/S1/C1/narr/narr1.mp3");
  soundManager.LoadSound("S1/C1/narr2", "../../../Sounds/S1/C1/narr/narr2.mp3");
  soundManager.LoadSound("S1/C1/narr3", "../../../Sounds/S1/C1/narr/narr3.mp3");
  soundManager.LoadSound("S1/C3/narr", "../../../Sounds/S1/C3/narr/narr.mp3");
  soundManager.LoadSound("S1/C4/narr", "../../../Sounds/S1/C4/narr/narr.mp3");
  soundManager.LoadSound("S1/C5/narr", "../../../Sounds/S1/C5/narr/narr.mp3");
  soundManager.LoadSound("S1/C6-1/narr", "../../../Sounds/S1/C6-1/narr/narr.mp3");
  soundManager.LoadSound("S1/C6-1/hwanin", "../../../Sounds/S1/C6-1/narr/hwanin.mp3");
  soundManager.LoadSound("S1/C6-1/hwanwoong", "../../../Sounds/S1/C6-1/narr/hwanwung.mp3");
  soundManager.LoadSound("S1/C6-2/hwanwoong", "../../../Sounds/S1/C6-2/narr/narr.mp3");
  soundManager.LoadSound("S1/C6-2/hwanin", "../../../Sounds/S1/C6-2/narr/hwanin.mp3");
  soundManager.LoadSound("S1/C7/hwan", "../../../Sounds/S1/C7/narr/hwan.mp3");
  soundManager.LoadSound("NarrS1C8", "../../../Sounds/S1/C8/narr/narr.mp3");
  soundManager.LoadSound("HawninS1C8", "../../../Sounds/S1/C8/narr/hwanin.mp3");
  soundManager.LoadSound("S1/C9/hwanwoog", "../../../Sounds/S1/C9/narr/hwanwoong.mp3");
  soundManager.LoadSound("S1/C11/hwanin", "../../../Sounds/S1/C11/narr/hwanin.mp3");
  soundManager.LoadSound("S1/C11/hwanwoong", "../../../Sounds/S1/C11/narr/hwanwoong.mp3");
  soundManager.LoadSound("Door", "../../../Sounds/Effects/WoodenDoorOpen.mp3");
  soundManager.LoadSound("effect", "../../../Sounds/S1/C14/effect/effect.wav");
  soundManager.LoadSound("Interaction1", "../../../Sounds/S1/C15/Interaction1.wav");
  soundManager.LoadSound("crash", "../../../Sounds/S1/C15/crash.mp3");
  soundManager.LoadSound("HWANUNG_NARR1", "../../../Sounds/S1/C15-1/narr/narr1.mp3");
  soundManager.LoadSound("S1/C16/narr", "../../../Sounds/S1/C16/narr/narr.mp3");
  soundManager.LoadSound("Bush", "../../../Sounds/Effects/BushRustle.mp3");
  soundManager.LoadSound("S1C18_NARR", "../../../Sounds/S1/C18/narr/narr.mp3");
  soundManager.LoadSound("S1C18_TIGER", "../../../Sounds/S1/C18/narr/tiger.mp3");
  soundManager.LoadSound("S1C18_BEAR", "../../../Sounds/S1/C18/narr/bear.mp3");
  soundManager.LoadSound("S1/C19-1/narr", "../../../Sounds/S1/C19-1/narr.mp3");
  soundManager.LoadSound("S1/C19-1/Bear", "../../../Sounds/S1/C19-1/Bear.mp3");
  soundManager.LoadSound("S1/C19-2/hwanwoong1", "../../../Sounds/S1/C19-2/hwanwoong1.mp3");
  soundManager.LoadSound("S1/C19-3/hwanwoong1", "../../../Sounds/S1/C19-3/hwanwoong1.mp3");
  soundManager.LoadSound("S1/C19-3/hwanwoong2", "../../../Sounds/S1/C19-3/hwanwoong2.mp3");
  soundManager.LoadSound("S1/C19-3/Bear", "../../../Sounds/S1/C19-3/Bear.mp3");
  soundManager.LoadSound("S2/C1/step", "../../../Sounds/S2/C1/effect/Step_Grass_01.wav");
  soundManager.LoadSound(
    "S2_S3_FootStuckRock",
    "../../../Sounds/Effects/FootStuckRock2.mp3"
  );
  soundManager.LoadSound("../../../Sounds/Effects/step1", "../../../Sounds/Effects/Step_Cave2.mp3");
  soundManager.LoadSound("../../../Sounds/Effects/step2", "../../../Sounds/Effects/Step_Cave3.mp3");
  soundManager.LoadSound("../../../Sounds/Effects/step3", "../../../Sounds/Effects/Step_Cave4.mp3");
  soundManager.LoadSound("S2C3_narr1", "../../../Sounds/S2/C3/narr/narr1.mp3");
  soundManager.LoadSound("S2/C4/narr1", "../../../Sounds/S2/C4/narr/narr1.mp3");
  soundManager.LoadSound("S2/C4/narr2", "../../../Sounds/S2/C4/narr/narr2.mp3");
  soundManager.LoadSound("S2/C4/narr3", "../../../Sounds/S2/C4/narr/narr3.mp3");
  soundManager.LoadSound("effect", "../../../Sounds/S2/C5/effect/effect.wav");
  soundManager.LoadSound("S2/C6/V2/narr1", "../../../Sounds/S2/C6/V2/narr/narr1.mp3");
  soundManager.LoadSound("S2/C6/V2/narr2", "../../../Sounds/S2/C6/V2/narr/narr2.mp3");
  soundManager.LoadSound("S2/C6/V2/narr3", "../../../Sounds/S2/C6/V2/narr/narr3.mp3");
  soundManager.LoadSound("item_click", "../../../Sounds/S2/C6/item_click.wav");
  soundManager.LoadSound("S2/C6/bgm", "../../../Sounds/S2/C6/bgm.mp3");
  soundManager.LoadSound("yum", "../../../Sounds/Effects/YumYum.mp3");
  soundManager.LoadSound("S2/C8/narr", "../../../Sounds/S2/C8/narr/narr.mp3");
  soundManager.LoadSound("Chicken", "../../../Sounds/Effects/Chicken_02.mp3");
  soundManager.LoadSound("S3/C1/narr", "../../../Sounds/S3/C1/narr/narr.mp3");
  soundManager.LoadSound("S3/C2/effect", "../../../Sounds/S3/C2/effect/effect.wav");
  soundManager.LoadSound("evolution", "../../../Sounds/Effects/Evolution.mp3");
  soundManager.LoadSound("harp", "../../../Sounds/Effects/HarpSound.mp3");
  soundManager.LoadSound("S3/C3/V1/_1/Bear", "../../../Sounds/S3/C3/V1/_1/Bear.mp3");
  soundManager.LoadSound("../../../Sounds/Effects/step1", "../../../Sounds/Effects/Step_Grass_01.wav");
  soundManager.LoadSound("../../../Sounds/Effects/step2", "../../../Sounds/Effects/Step_Grass_02.wav");
  soundManager.LoadSound("../../../Sounds/Effects/step3", "../../../Sounds/Effects/Step_Grass_02.wav");
  soundManager.LoadSound("S3/C3/V1/_2/Tiger", "../../../Sounds/S3/C3/V1/_2/Tiger.mp3");
  soundManager.LoadSound("Choice", "../../../Sounds/Effects/Choice.mp3");
  soundManager.LoadSound("S3/C3/V1/_3/_3/narr", "../../../Sounds/S3/C3/V1/_3/_3/narr.mp3");
  soundManager.LoadSound("../../../Sounds/Effects/bird", "../../../Sounds/Effects/NatureSound.wav");
  soundManager.LoadSound("../../../Sounds/Effects/chicken", "../../../Sounds/Effects/Chicken_02.mp3");
  soundManager.LoadSound("S3/C3/V1/_4/_3/narr", "../../../Sounds/S3/C3/V1/_4/_3/narr.mp3");
  soundManager.LoadSound("S3/C3/V2/_1/_1/narr", "../../../Sounds/S3/C3/V2/_1/_1/narr/narr.mp3");
  soundManager.LoadSound(
    "S3/C3/V2/_1/_2/woonggirl",
    "../../../Sounds/S3/C3/V2/_1/_2/narr/woonggirl.mp3"
  );
  soundManager.LoadSound(
    "S3/C3/V2/_1/_3/woonggirl",
    "../../../Sounds/S3/C3/V2/_1/_3/narr/woonggirl.mp3"
  );
  soundManager.LoadSound(
    "S3/C3/V2/_1/_3/hwanwoong",
    "../../../Sounds/S3/C3/V2/_1/_3/narr/hwanwoong.mp3"
  );
  soundManager.LoadSound("../../../Sounds/Effects/Step_Rock_02", "../../../Sounds/Effects/Step_Rock_02.mp3");
  soundManager.LoadSound("haha", "../../../Sounds/S3/C3/V2/_2/_1/narr/haha.mp3");
  soundManager.LoadSound("S3/C3/V2/_2/_3/narr", "../../../Sounds/S3/C3/V2/_2/_3/narr/narr.mp3");
}

function setup() {
  createCanvas(1280, 720, P2D);
  frameRate(60);
  noStroke();

  fontManager = new FontManager();
  fontManager.LoadFont("font", "../../../../Fonts/NanumGothic.ttf");

  imageManager = new ImageManager();
  timeManager = new TimeManager();
  sceneManager = new SceneManager();

  // S1(0 ~ 21)
  sceneList.push(new Opening());
  sceneList.push(new S1C1());
  sceneList.push(new S1C3());
  sceneList.push(new S1C4());
  sceneList.push(new S1C5());
  sceneList.push(new S1C6_1());
  sceneList.push(new S1C6_2());
  sceneList.push(new S1C7());
  sceneList.push(new S1C8());
  sceneList.push(new S1C9());
  sceneList.push(new S1C11());
  sceneList.push(new S1C13());
  sceneList.push(new S1C14());
  sceneList.push(new S1C15()); // 미니게임
  sceneList.push(new S1C15V1());
  sceneList.push(new S1C15V2());
  sceneList.push(new S1C16());
  sceneList.push(new S1C17());
  sceneList.push(new S1C18());
  sceneList.push(new S1C19_1());
  sceneList.push(new S1C19_2());
  sceneList.push(new S1C19_3());

  // S2(22 ~ 31)
  sceneList.push(new S2C1());
  sceneList.push(new S2C2());
  sceneList.push(new S2C3());
  sceneList.push(new S2C4());
  sceneList.push(new S2C5());
  sceneList.push(new S2C6()); // 미니게임
  sceneList.push(new S2C6V1());
  sceneList.push(new S2C6V2());
  sceneList.push(new S2C7());
  sceneList.push(new S2C8());

  // S3(32 ~ 53)
  sceneList.push(new S3C1());
  sceneList.push(new S3C2());

  // S3 - V1(34 ~ 46)
  sceneList.push(new S3C3V1_1());
  sceneList.push(new S3C3V1_2());
  sceneList.push(new S3C3V1_3());
  sceneList.push(new S3C3V1_1_1());
  sceneList.push(new S3C3V1_1_2());
  sceneList.push(new S3C3V1_2_1());
  sceneList.push(new S3C3V1_2_2());
  sceneList.push(new S3C3V1_3_1());
  sceneList.push(new S3C3V1_3_2());
  sceneList.push(new S3C3V1_3_3());
  sceneList.push(new S3C3V1_4_1());
  sceneList.push(new S3C3V1_4_2());
  sceneList.push(new S3C3V1_4_3());
  // S3 - V2(47 ~ 53)
  sceneList.push(new S3C3V2());
  sceneList.push(new S3C3V2_1_1());
  sceneList.push(new S3C3V2_1_2());
  sceneList.push(new S3C3V2_1_3());
  sceneList.push(new S3C3V2_2_1());
  sceneList.push(new S3C3V2_2_2());
  sceneList.push(new S3C3V2_2_3());

  sceneManager.SetCreditScene(new EndingCredit());
  sceneManager.Setup(sceneList[0]);
}

function draw() {
  timeManager.OnDraw();
  if (!sceneManager.looping) return;

  background(255);
  fill(0);

  sceneManager.Draw();
}

function keyPressed() {
  if (!sceneManager.firstScene) {
    let index = sceneList.findIndex(
      (scene) =>
        scene.constructor.name === sceneManager.currentScene.constructor.name
    );
    if (index === -1) return;
    if (keyCode === RIGHT_ARROW) {
      if (index < sceneList.length - 1) {
        sceneManager.looping = true;
        sceneManager.ChangeSceneManually(sceneList[index + 1]);
      }
    } else if (keyCode === LEFT_ARROW) {
      if (index > 0) {
        sceneManager.looping = true;
        sceneManager.ChangeSceneManually(sceneList[index - 1]);
      }
    }
  }
}
