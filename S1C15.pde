import java.util.*;

public class S1C15 extends Scene {
  private int ALTIMETER_MAX = 550;
  private float altimeterSpeed;
  private float altimeter;

  private float indicator;

  private float groundY;

  private String[] obstacles;
  private float[] obstaclesImageScale;
  private int[] obstaclesProbability;
  List<Obstacle> obstacleList;
  private float obstacleCreatedTime;
  private float obstacleIntervalTime;

  PImage hwanungImage;
  private float hwanungX;
  private float hwanungY;
  private float hwanungImageScale = 0.4;

  private float collisionTime;
  private float collisionActionTime;
  private String collisionObstacle;
  private int collisionDirection;
  private float collisionActionSpeed;
  private int[] collisionLightning;
  private int collisionLightningIndex;
  private boolean collisionSoundPlayFlag;

  public S1C15() {
  }

  @Override public void OnEnter() {
    enterTime = time.time;

    image.LoadImage("background", "Images/S1/C15/background");
    image.LoadImage("ground", "Images/S1/C15/ground");

    image.LoadImage("hwanung", "Images/S1/C15/hwanung");
    image.LoadImage("hwanungFace1", "Images/S1/C15/hwanung_face_1");
    image.LoadImage("hwanungFace2", "Images/S1/C15/hwanung_face_2");

    image.LoadImage("bird", "Images/S1/C15/obstacles/bird");
    image.LoadImage("gust", "Images/S1/C15/obstacles/gust");
    image.LoadImage("plane", "Images/S1/C15/obstacles/plane");
    image.LoadImage("UFO", "Images/S1/C15/obstacles/UFO");
    image.LoadImage("cloud", "Images/S1/C15/obstacles/cloud");
    image.LoadImage("lightning", "Images/S1/C15/obstacles/lightning");

    image.LoadImage("wind", "Images/S1/C15/obstacles/wind");
    image.LoadImage("fog", "Images/S1/C15/obstacles/fog");

    image.LoadImage("altimeter", "Images/S1/C15/altimeter_1");
    image.LoadImage("altimeterHwanung", "Images/S1/C15/altimeter_2");
    image.LoadImage("arrow", "Images/S1/C15/arrow");

    sound.LoadSound("Interaction1", "Sounds/S1/C15/Interaction1.wav");
    sound.LoadSound("crash", "Sounds/S1/C15/crash.mp3");

    sound.PlaySound("Interaction1");

    groundY = 900;

    hwanungImage = image.GetImage("hwanung");
    hwanungX = width / 2;
    hwanungY = height / 2 - 170;

    altimeterSpeed = 0.4;
    altimeter = 150;

    indicator =(int)(Math.random() * 400 - 200);

    obstacleList = new ArrayList();
    obstacles = new String[] {
      "bird", "gust", "plane", "UFO", "cloud", "lightning"}
    ;
    obstaclesImageScale = new float[] {0.2, 0.3, 0.7, 0.3, 0.3, 0.25};
    obstaclesProbability = new int[] {0, 0, 0, 1, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5}; // 비행기 등장 확률을 낮춤

    obstacleCreatedTime = time.time;
    obstacleIntervalTime = 2.0f;

    collisionTime = 0f;
    collisionActionSpeed = 0f;
    collisionLightning = new int[] {6, 10, 6, 10, 6, 15, 15};
    collisionLightningIndex = 0;
    collisionSoundPlayFlag = false;
  }

  @Override public void OnDraw() {
    image.DrawImage("background", new PVector(width / 2, height / 2, 0));
    if (altimeter > 480 && hwanungY < height / 2 + 250) {
      hwanungY += 2;
    }
    if (altimeter > 400) {
      groundY--;
      image.DrawImage("ground", new PVector(width / 2 +(indicator * 6), groundY, 0));
    }
    if (mouseX < width / 2) {
      indicator += indicator < 200 ? 0.5 : 0;
    }
    else if (mouseX > width / 2) {
      indicator -= indicator > -200 ? 0.5 : 0;
    }
    if (altimeter <= ALTIMETER_MAX) {
      altimeter += altimeterSpeed;
    }
    if (collisionActionSpeed == 0 && altimeter <= ALTIMETER_MAX) {
      hwanungX = lerp(hwanungX, mouseX, time.deltaTime);
    } else {
      mouseX =(int)hwanungX;
    }
    image.DrawImageScale("hwanung", new PVector(hwanungX, hwanungY, 0), new PVector(hwanungImageScale, hwanungImageScale, 0));
    if (collisionTime == 0f) {
      image.DrawImageScale("hwanungFace1", new PVector(hwanungX - 8, hwanungY - 45, 0), new PVector(hwanungImageScale, hwanungImageScale, 0));
    } else {
      image.DrawImageScale("hwanungFace2", new PVector(hwanungX - 8, hwanungY - 45, 0), new PVector(hwanungImageScale, hwanungImageScale, 0));
    }
    // 장애물 등장
    if (time.time - obstacleCreatedTime > obstacleIntervalTime && altimeter < 480) {
      int obstacleIndex = obstaclesProbability[(int)(Math.random() * obstaclesProbability.length)];
      String randomObstacleImage = obstacles[obstacleIndex];
      obstacleList.add(new Obstacle(randomObstacleImage, obstaclesImageScale[obstacleIndex],(int)(Math.random() *(width - 100) + 30), height + 40));

      obstacleCreatedTime = time.time;
      obstacleIntervalTime =(float)(Math.random() * 2.2 + 0.5);
    }
    for(Iterator<Obstacle> iterator = obstacleList.iterator();
    iterator.hasNext();
) {
      Obstacle obstacle = iterator.next();
      image.DrawImageScale(obstacle.image, new PVector(obstacle.x, obstacle.y, 0), new PVector(obstacle.imageScale, obstacle.imageScale, 0));
      obstacle.y -= 5;

      //충돌처리
      PImage obstacleImage = image.GetImage(obstacle.image);

      if (collisionTime == 0f) {
        if ((hwanungX > obstacle.x && hwanungX <(obstacle.x + obstacleImage.width * obstacle.imageScale)) ||((hwanungX + hwanungImage.width *(hwanungImageScale - 0.1)) > obstacle.x &&(hwanungX + hwanungImage.width *(hwanungImageScale - 0.1)) <(obstacle.x + obstacleImage.width * obstacle.imageScale))) {
          if ((hwanungY > obstacle.y && hwanungY <(obstacle.y + obstacleImage.height * obstacle.imageScale)) ||((hwanungY + hwanungImage.height *(hwanungImageScale - 0.1)) > obstacle.y &&(hwanungY + hwanungImage.height *(hwanungImageScale - 0.1)) <(obstacle.y + obstacleImage.height * obstacle.imageScale))) {
            collisionTime = time.time;
            collisionActionTime = 2f;
            collisionObstacle = obstacle.image;
            collisionDirection = hwanungX < obstacle.x? 1 : 2;

            switch(obstacle.image) {
              case "bird" : collisionActionTime = 1f;
              collisionActionSpeed = 2;
              break;
              case "plane": collisionActionTime = 2f;
              collisionActionSpeed = 4;
              break;
              case "gust" : collisionActionTime = 1.5f;
              collisionDirection =(int)(Math.random() * 2) + 1;
              collisionActionSpeed = 3;
              break;
              case "UFO" : break;
              case "cloud" : break;
              case "lightning": collisionActionTime = 5f;
              break;
            }
          }
        }
      }
      // 지나간 장애물 삭제
      if (obstacle.y < -50) {
        iterator.remove();
      }
    }
    // 게이지 출력
    image.DrawImage("altimeter", new PVector(width / 2, height / 2, 0));
    image.DrawImage("altimeterHwanung", new PVector(90, altimeter, 0));

    float arrowAngle = Math.abs(indicator * 6) < 600? 0 : indicator < 0? 0.5 : -0.5;
    image.DrawImageScale("arrow", new PVector(width / 2, height - 100, 0), new PVector(0.4, 0.4, 0), arrowAngle, 200);

    // 장애물 효과 출력
    if (collisionTime != 0f) {
      if (!collisionSoundPlayFlag) {
        sound.PlaySound("crash");
        collisionSoundPlayFlag = true;
      }

      switch(collisionObstacle) {
        // 검은구름	닿으면 화면이 검은 안개효과로 잠시 덮힌다.(UI포함)
        // 새	닿으면 조금 밀려난다.
        // 비행기	닿으면 많이 밀려난다. 등장확률은 낮으나 크기가 큼.
        // UFO	닿으면 추락속도가 2배로 빨라진다.
        // 돌풍	무작위로 일정 구간동안 지속되는 바람. 지속적으로 한 방향으로 밀려난다.
        // 번개	전조증상으로 수직으로 약하게 세번 깜빡거리다가 크게번쩍임. 번개에 맞으면 잠시동안 마우스 입력의 통제를 받지 못함.
        case "bird" : case "plane" : hwanungX += collisionDirection == 1? collisionActionSpeed * -1 : collisionActionSpeed;

        if (hwanungX > width - hwanungImage.width * hwanungImageScale / 2) {
          hwanungX = width - hwanungImage.width * hwanungImageScale / 2;
        }
        else if (hwanungX < hwanungImage.width * hwanungImageScale / 2) {
          hwanungX = hwanungImage.width * hwanungImageScale / 2;
        }
        break;
        case "gust" : hwanungX += collisionDirection == 1? collisionActionSpeed * -1 : collisionActionSpeed;

        if (hwanungX > width - hwanungImage.width * hwanungImageScale / 2) {
          hwanungX = width - hwanungImage.width * hwanungImageScale / 2;
        }
        else if (hwanungX < hwanungImage.width * hwanungImageScale / 2) {
          hwanungX = hwanungImage.width * hwanungImageScale / 2;
        }
        if (collisionDirection == 1) {
          image.DrawImageScale("wind", new PVector(hwanungX + 160, hwanungY - 45, 0), new PVector(0.4, 0.4, 0), -0.5, 200);
        } else {
          image.DrawImageScale("wind", new PVector(hwanungX - 160, hwanungY - 45, 0), new PVector(0.4, 0.4, 0), -2.5, 200);
        }
        break;
        case "UFO" : obstacleIntervalTime *= 0.9;
        altimeter += altimeterSpeed;
        break;
        case "cloud" : image.DrawImageScale("fog", new PVector(width / 2, height / 2, 0), new PVector(1.2, 1.2, 0));
        break;
        case "lightning" : if (collisionLightning[collisionLightningIndex] == 0) {
          collisionLightningIndex++;
        }
        if (collisionLightningIndex == 0 || collisionLightningIndex % 2 == 0) {
          if (collisionLightningIndex == 6) {
            fill(0);
          } else {
            fill(0, 150);
          }
          rect(0, 0, width, height);
        }
        collisionLightning[collisionLightningIndex]--;

        break;
      }
      // 장애물 효과 종료
      if (time.time - collisionTime > collisionActionTime) {
        collisionTime = 0f;
        collisionActionSpeed = 0f;
        collisionDirection = 0;
        collisionSoundPlayFlag = false;
      }
      else if (collisionObstacle.equals("lightning") && collisionLightningIndex == 6 && collisionLightning[collisionLightningIndex] == 0) {
        collisionLightning = new int[] {6, 10, 6, 10, 6, 15, 15};
        collisionLightningIndex = 0;
        collisionTime = 0f;
        collisionActionSpeed = 0f;
        collisionDirection = 0;
        collisionSoundPlayFlag = false;
      }
    }
    // 게임 종료
    if (altimeter >= ALTIMETER_MAX && groundY <= 500) {
      altimeterSpeed = 0;
      delay(1000);
      if (Math.abs(indicator * 6) < 600) {
        // 성공
        scene.ChangeScene(new S1C15V2());
      } else {
        // 실패
        scene.ChangeScene(new S1C15V1());
      }
    }
  }

  @Override public void OnExit() {
    sound.StopSound("Interaction1");
  }

  private class Obstacle {

    public Obstacle(String image, float imageScale, float x, float y) {
      this.image = image;
      this.imageScale = imageScale;
      this.x = x;
      this.y = y;
    }
    String image;
    float imageScale;
    float x;
    float y;
  }
}
