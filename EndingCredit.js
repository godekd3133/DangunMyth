class CreditText {
  constructor() {
    this.position = createVector();
    this.forcePosition = createVector();
    this.text = "";
    this.size = 0;
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

  addText(text, size, offset, offsetX = 0) {
    this.offSetY += offset;
    let creditText = new CreditText();
    creditText.text = text;
    creditText.forcePosition = createVector(0, 0, 0);
    creditText.position = createVector(
      width / 2 + offsetX,
      height + 100 + this.offSetY
    );
    creditText.size = size;
    this.creditTextList.push(creditText);
  }

  addSmallText(team, name, enName) {
    this.addText(team, 32, 50, -400);
    this.addText(name, 32, 0);
    this.addText(enName, 32, 0, 400);
  }

  onReturnButtonDown() {
    for (let i = 0; i < this.creditTextList.length; i++) {
      let creditText = this.creditTextList[i];
      creditText.forcePosition = createVector(0, 0, 0);
      creditText.flying = false;
      creditText.speed = 0;
    }
  }

  onHomeButtonDown() {
    sceneManager.changeScene(new Opening());
  }

  onEnter() {
    soundManager.loadSound("Credit", "Sounds/BGM/EndingCredit.mp3");
    soundManager.playSound("Credit");
    imageManager.loadImage("HomeButton", "Images/Ending/HomeButton");
    imageManager.loadImage("ReturnButton", "Images/Ending/ReturnButton");
    this.creditTextList = [];
    this.offSetY = 0;
    this.scrollAmount = 0;
    this.addText("단군신화", 64, 0);
    // Add other text entries here...
  }

  onDraw() {
    stroke(0);
    strokeWeight(1);
    background(0);
    let conditionDist = 100;
    this.scrollAmount += (this.scrollSpeed * deltaTime) / 1000;
    for (let i = 0; i < this.creditTextList.length; i++) {
      textAlign(CENTER);
      let creditText = this.creditTextList[i];
      let textRectX = creditText.position.x - textWidth(creditText.text) / 2;
      let textRectY = creditText.position.y - textAscent();
      let textRectWidth = textWidth(creditText.text);
      let textRectHeight = textAscent() + textDescent();

      creditText.position.y -= (this.scrollSpeed * deltaTime) / 1000;
      if (creditText.flying) {
        creditText.forcePosition.x +=
          (creditText.dirX * creditText.speed * deltaTime) / 1000;
        creditText.forcePosition.y +=
          (creditText.dirY * creditText.speed * deltaTime) / 1000;
        creditText.speed = lerp(creditText.speed, 0, deltaTime / 1000);
      }
      if (creditText.speed < 0) {
        creditText.flying = false;
      }
      let isMouseOver =
        dist(mouseX, mouseY, textRectX, textRectY) < conditionDist ||
        dist(mouseX, mouseY, textRectX + textRectWidth, textRectY) <
          conditionDist ||
        dist(mouseX, mouseY, textRectX, textRectY + textRectHeight) <
          conditionDist ||
        dist(
          mouseX,
          mouseY,
          textRectX + textRectWidth,
          textRectY + textRectHeight
        ) < conditionDist;
      if (creditText.flying == false && isMouseOver) {
        let points = [
          createVector(textRectX, textRectY),
          createVector(textRectX + textRectWidth, textRectY),
          createVector(textRectX, textRectY + textRectHeight),
          createVector(textRectX + textRectWidth, textRectY + textRectHeight),
        ];
        let minDist = conditionDist;
        let minIndex = 0;
        for (let j = 0; j < points.length; j++) {
          let dist = dist(mouseX, mouseY, points[j].x, points[j].y);
          if (dist < minDist) {
            minDist = dist;
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
      font.DrawFont(
        "font",
        creditText.text,
        color(255),
        creditText.size,
        creditText.position.x + creditText.forcePosition.x,
        creditText.position.y + creditText.forcePosition.y
      );
    }
    // Draw buttons
    let isReturnButtonOverlaped;
    let rtnButtonWidth = 238;
    let rtnButtonHeight = 61;
    let rtnButtonX = 1000 + rtnButtonWidth / 2;
    let rtnButtonY = 538 + rtnButtonHeight / 2;
    isReturnButtonOverlaped =
      mouseX > rtnButtonX - rtnButtonWidth / 2 &&
      mouseX < rtnButtonX + rtnButtonWidth / 2 &&
      mouseY > rtnButtonY - rtnButtonHeight / 2 &&
      mouseY < rtnButtonY + rtnButtonHeight / 2;
    if (isReturnButtonOverlaped) {
      if (mouseIsPressed && !this.lastMousePressed) {
        this.onReturnButtonDown();
        imageManager.DrawImage(
          "ReturnButton",
          createVector(width / 2, height / 2),
          0,
          120
        );
      } else {
        imageManager.DrawImage(
          "ReturnButton",
          createVector(width / 2, height / 2),
          0,
          120
        );
      }
    } else {
      imageManager.DrawImage(
        "ReturnButton",
        createVector(width / 2, height / 2),
        0,
        255
      );
    }

    // Draw the home button
    // Similar to the return button, implement it here...

    this.lastMousePressed = mouseIsPressed;
  }

  onExit() {
    // soundManager.StopSound("intro");
  }
}
