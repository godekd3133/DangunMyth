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

    imageManager.LoadImage("background", "Images/S1/C15/background");
    imageManager.LoadImage("ground", "Images/S1/C15/ground");

    imageManager.LoadImage("hwanung", "Images/S1/C15/hwanung");
    imageManager.LoadImage("hwanungFace1", "Images/S1/C15/hwanung_face_1");
    imageManager.LoadImage("hwanungFace2", "Images/S1/C15/hwanung_face_2");

    imageManager.LoadImage("bird", "Images/S1/C15/obstacles/bird");
    imageManager.LoadImage("gust", "Images/S1/C15/obstacles/gust");
    imageManager.LoadImage("plane", "Images/S1/C15/obstacles/plane");
    imageManager.LoadImage("UFO", "Images/S1/C15/obstacles/UFO");
    imageManager.LoadImage("cloud", "Images/S1/C15/obstacles/cloud");
    imageManager.LoadImage("lightning", "Images/S1/C15/obstacles/lightning");

    imageManager.LoadImage("wind", "Images/S1/C15/obstacles/wind");
    imageManager.LoadImage("fog", "Images/S1/C15/obstacles/fog");

    imageManager.LoadImage("altimeter", "Images/S1/C15/altimeter_1");
    imageManager.LoadImage("altimeterHwanung", "Images/S1/C15/altimeter_2");
    imageManager.LoadImage("arrow", "Images/S1/C15/arrow");


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
