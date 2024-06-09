public class CreditText {
  public PVector position;
  public PVector forcePosition;
  public String text;
  public float size;
  public float dirX;
  public float dirY;
  public float speed;
  public boolean flying = false;
}
public class EndingCredit extends Scene {
  private String[] textList = {
    "Game Design", "Programming", "Art", "Sound", "Special Thanks", "Presented by" }
  ;
  private ArrayList<CreditText> creditTextList = new ArrayList<CreditText>();
  private float offSetY= 0f;
  private float scrollSpeed = 50f;
  private float scrollAmount = 0f;
  private boolean lastMousePressed = false;

  public EndingCredit() {
  }

  public void AddText(String text,float size,float offset) {
    AddText(text,size,offset,0f);
  }

  public void AddText(String text,float size,float offset, float offsetX) {
    offSetY += offset;
    CreditText creditText = new CreditText();
    creditText.text = text;
    creditText.forcePosition = new PVector(0,0,0);
    creditText.position = new PVector(width/2f + offsetX, height+100f+offSetY);
    creditText.size = size;
    creditTextList.add(creditText);
  }

  public void AddSmallText(String team,String name, String enName) {
    AddText(team,32f,50f,-400f);
    AddText(name,32f,0f,0f);
    AddText(enName,32f,0f,400f);
  }

  public void AddTwoText(String team,String name) {
    AddText(team,32f,50f,-300f);
    AddText(name,32f,0f,300f);
  }

  public void OnReturnButtonDown() {
    //forcePosition 초기화
    for(int i = 0;
    i < creditTextList.size();
    i++) {
      creditTextList.get(i).forcePosition = new PVector(0,0,0);
      creditTextList.get(i).flying = false;
      creditTextList.get(i).speed = 0f;

    }
  }

  public void OnHomeButtonDown() {
    scene.ChangeScene(new Opening());
  }

  @Override public void OnEnter() {
    sound.LoadSound("Credit","Sounds/BGM/EndingCredit.mp3");
    sound.PlaySound("Credit");
    image.LoadImage("HomeButton", "Images/Ending/HomeButton");
    image.LoadImage("ReturnButton", "Images/Ending/ReturnButton");
    creditTextList.clear();
    offSetY =0f;
    scrollAmount = 0f;
    AddText("단군신화",64f,0f);
    AddText("제작",36f,100f);
    AddText("숭실대학교 미디어경영학과 2024 학번",36f,150f);
    AddText("미디어앤테크 1팀",36f,50f);
    AddText("제작 총괄 박소영 Park Soyoung",36f,80f);
    AddText("개발 팀장 김민규 Kim Minkyu",36f,80f);
    AddText("디자인 팀장 이소연 Lee Soyeon",36f,80f);
    AddText("기획 팀장 권혁진 Kwon Hyeokjin",36f,80f);

    AddText("주역할 / 담당 시퀀스",36f,150f);
    AddText("1조",36f,50f);
    AddSmallText("개발 / 시퀀스 1,인터렉션1","박소영","Park Soyoung");
    AddSmallText("개발 / 시퀀스 1,인터렉션1","박소원","Park Sowon");
    AddSmallText("개발 / 시퀀스 1,인터렉션1","최경선","Choi Gyeongseon");
    AddSmallText("디자인 / 시퀀스 1,인터렉션1","조유진","Cho Youjin");
    AddSmallText("기획 / 시퀀스 1,인터렉션1","정유진","Jeong Yujin");
    AddSmallText("기획 / 시퀀스 1,인터렉션1","권도예","Kwon Doye");

    AddText("2조",36f,50f);
    AddSmallText("개발 / 시퀀스 2,인터렉션2","김건","Kim Geon");
    AddSmallText("개발 / 시퀀스 2,인터렉션2","김병호","Kim Byeongho");
    AddSmallText("개발 / 시퀀스 2,인터렉션2","김예닮","Kim Yedarm");
    AddSmallText("디자인 / 시퀀스 2,인터렉션2","배연우","Bae Yeonu");
    AddSmallText("디자인 / 시퀀스 2,인터렉션2","이선우","Lee Seonwoo");
    AddSmallText("기획 / 시퀀스 2,인터렉션2","권혁진","Kwon Hyeokjin");
    AddSmallText("기획 / 시퀀스 2,인터렉션2","전유현","Jeon Yuhyun");

    AddText("3조",36f,50f);
    AddSmallText("개발 / 시퀀스 3","김민규","Kim Minkyu");
    AddSmallText("개발 / 시퀀스 3","김태겸","Kim Taegyeom");
    AddSmallText("개발 / 시퀀스 3","곽지한","Kwak Jihan");
    AddSmallText("디자인 / 시퀀스 3","이소연","Lee Soyeon");
    AddSmallText("디자인 / 시퀀스 3","강민지","Kang Minji");
    AddSmallText("기획 / 시퀀스 3","장지선","Jang Jiseon");
    AddSmallText("기획 / 시퀀스 3","박예희","Park Yehui");
    AddText("사용 기능, 함수",36f,150f);
    AddTwoText("Processing::Image ","https://processing.org/reference/#image");
    AddTwoText("Processing::Math ","https://processing.org/reference/#math");
    AddTwoText("Processing::Typography ","https://processing.org/reference/#Typography");
    AddTwoText("Processing::Constants ","https://processing.org/reference/#Constants");
    AddTwoText("Processing::Input ","https://processing.org/reference/#Input");
    AddTwoText("Processing::Environment","https://processing.org/reference/#Environment");
    AddTwoText("Design Patttern","Singleton");
    AddTwoText("Design Patttern","Abstract Factory");
    AddTwoText("Design Patttern","Component");
    AddTwoText("Renderer for Processing","P2D / FX2D");
    AddTwoText("Easing Functions","https://easings.net/");

    AddText("담당 작업",36f,150f);
    AddText("1조",36f,50f);
    AddSmallText("S1C1,S1C2,S1C3,S1C15","박소영","Park Soyoung");
    AddSmallText("S1C7,S1C8,S3C3V2_2_2","박소원","Park Sowon");
    AddSmallText("S3_C3_V2_2_3","","");
    AddSmallText("S1C4,S1C5,S1C6_1,S1C6_2","최경선","Choi Gyeongseon");
    AddSmallText("S1C15V1,S1C15V2","조유진","Cho Youjin");
    AddSmallText("S1C13,S1C14","정유진","Jeong Yujin");
    AddSmallText("S1C9,S1C11","권도예","Kwon Doye");

    AddText("2조",36f,50f);
    AddSmallText("S2C1,S2C2,S2C5","김건","Kim Geon");
    AddSmallText("S3C3V2_1_1,S3C3V2_1_2","김병호","Kim Byeongho");
    AddSmallText("S3C3V2_1_3,S3C3V2_2_1","","");
    AddSmallText("S2C3,S2C4,p5js converting","김예닮","Kim Yedarm");
    AddSmallText("S2C7,S1C19_2","배연우","Bae Yeonu");
    AddSmallText("S1C19_1,S2C6V2","이선우","Lee Seonwoo");
    AddSmallText("S2C6V1,S1C18","권혁진","Kwon Hyeokjin");
    AddSmallText("S1C19_3,S2C8","전유현","Jeon Yuhyun");

    AddText("3조",36f,50f);
    AddSmallText("Manager Classes, Aracitecture","김민규","Kim Minkyu");
    AddSmallText("Opening, Ending Credit","","");
    AddSmallText("p5.js converting,S3C1,S3C2","김태겸","Kim Taegyeom");
    AddSmallText("S3C3_1_1,S3C3_1_2","","");
    AddSmallText("S3C3_1_3,S3C3V1_1_1","곽지한","Kwak Jihan");
    AddSmallText("S3C3V1_1_2,S3C3V1_2_1","","");
    AddSmallText("S3C3V1_2_2.S3C3V1_3_1","이소연","Lee Soyeon");
    AddSmallText("S3C3V1_4_1,S3C3V1_4_2","강민지","Kang Minji");
    AddSmallText("S3C3V1_3_2,S3C3V1_3_3","장지선","Jang Jiseon");
    AddSmallText("S3C3V1_4_3,S3C3V2","박예희","Park Yehui");

    AddText("사용 프로그램",36f,150f);
    AddText("GitHub",36f,50f);
    AddText("SourceTree",36f,50f);

    AddText("VSCode",36f,50f);
    AddText("Fork",36f,50f);
    AddText("Git Kraken",36f,50f);
    AddText("Procreate",36f,50f);
    AddText("Adobe Photohop",36f,50f);
    AddText("Type Cast",36f,50f);
    AddText("Soundraw",36f,50f);
    AddText("My Edit",36f,50f);
    AddText("Audacity",36f,50f);
    AddText("참고자료",36f,50f);
    AddText("https://processing.org/reference",36f,50f);
    AddText("위키백과 - 단군 신화",36f,50f);
    AddText("유튜브 - 단군 이야기",36f,50f);

    AddText("제작 : 구구퐁키즈",36f,50f);
    AddText("99Pong",36f,50f);
  }

  @Override public void OnDraw() {
    stroke(0);
    strokeWeight(1);
    background(0, 0, 0, 255);
    float conditionDist= 100f;
    scrollAmount += scrollSpeed * time.deltaTime;
    for(int i = 0;
    i < creditTextList.size();
    i++) {
      textAlign(CENTER);
      CreditText creditText = creditTextList.get(i);
      //if overlap the specific text, it will be push
      textSize(creditText.size);
      float textRectX = creditText.position.x+ creditText.forcePosition.x - textWidth(creditText.text)/2f;
      float textRectY = creditText.position.y+ creditText.forcePosition.y - textAscent();
      float textRectWidth = textWidth(creditText.text);
      float textRectHeight = textAscent() + textDescent();

      creditText.position.y -= scrollSpeed * time.deltaTime;
      if (creditText.flying) {
        creditText.forcePosition.x += creditText.dirX * creditText.speed * time.deltaTime;
        creditText.forcePosition.y += creditText.dirY * creditText.speed * time.deltaTime;
        creditText.dirX *= 0.9;
        creditText.dirY *= 0.9;
      }
      if (creditText.speed < 0f) {
        creditText.flying = false;
      }
      if (creditText.flying== false&& dist(mouseX,mouseY,textRectX,textRectY) < conditionDist || dist(mouseX,mouseY,textRectX + textRectWidth,textRectY) < conditionDist || dist(mouseX,mouseY,textRectX,textRectY + textRectHeight) < conditionDist || dist(mouseX,mouseY,textRectX + textRectWidth,textRectY + textRectHeight) < conditionDist
) {
        PVector[] points = {
          new PVector(textRectX,textRectY), new PVector(textRectX + textRectWidth,textRectY), new PVector(textRectX,textRectY + textRectHeight), new PVector(textRectX + textRectWidth,textRectY + textRectHeight) }
        ;
        float minDist = conditionDist;
        int minIndex = 0;
        for(int j = 0;
        j < points.length;
        j++) {
          float dist = dist(mouseX,mouseY,points[j].x,points[j].y);
          if (dist < minDist) {
            minDist = dist;
            minIndex = j;
          }
        }
        PVector dir = PVector.sub(new PVector(mouseX,mouseY),points[minIndex]);
        dir.normalize();

        creditText.flying = true;
        creditText.dirX -= dir.x * creditText.speed;
        creditText.dirY -= dir.y * creditText.speed;
        creditText.speed = 10f;

      }
      font.DrawFont("font",creditText.text, color(255,255,255,255),creditText.size,creditText.position.x + creditText.forcePosition.x,creditText.position.y + creditText.forcePosition.y);
    }
    boolean isReturnButtonOverlaped;
    int rtnButtonWidth = 238;
    int rtnButtonHeight = 61;
    int rtnButtonX = 1000 + rtnButtonWidth / 2;
    int rtnButtonY = 538 + rtnButtonHeight / 2;
    isReturnButtonOverlaped = mouseX > rtnButtonX - rtnButtonWidth / 2 && mouseX < rtnButtonX + rtnButtonWidth / 2 && mouseY > rtnButtonY - rtnButtonHeight / 2 && mouseY < rtnButtonY + rtnButtonHeight / 2;

    if (isReturnButtonOverlaped) {
      if (mousePressed && !lastMousePressed) {
        OnReturnButtonDown();
        image.DrawImage("ReturnButton", new PVector(width / 2, height / 2, 0),0f,120f);
      } else {
        image.DrawImage("ReturnButton", new PVector(width / 2, height / 2, 0),0f,120f);
      }
    } else {
      image.DrawImage("ReturnButton", new PVector(width / 2, height / 2),0f,255f);

    }
    boolean isHomeButtonOverlaped;
    int homeButtonWidth = 238;
    int homeButtonHeight = 61;
    int homeButtonX = 1000 + homeButtonWidth / 2;
    int homeButtonY = 617 + homeButtonHeight / 2;
    isHomeButtonOverlaped = mouseX > homeButtonX - homeButtonWidth / 2 && mouseX < homeButtonX + homeButtonWidth / 2 && mouseY > homeButtonY - homeButtonHeight / 2 && mouseY < homeButtonY + homeButtonHeight / 2;

    if (isHomeButtonOverlaped) {
      if (mousePressed && !lastMousePressed) {
        OnHomeButtonDown();
        image.DrawImage("HomeButton", new PVector(width / 2, height / 2, 0),0f,120f);
      } else {
        image.DrawImage("HomeButton", new PVector(width / 2, height / 2, 0),0f,120f);

      }
    } else {
      image.DrawImage("HomeButton", new PVector(width / 2, height / 2),0f,255f);

    }
    lastMousePressed = mousePressed;
    //last element가 화면 밖으로 나가면 종료
    if (creditTextList.get(creditTextList.size()-1).position.y < -100f) {
      scene.ChangeScene(new Opening());
    }
  }

  @Override public void OnExit() {
    // sound.StopSound("intro");
  }
}
