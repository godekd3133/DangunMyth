public class CreditText {
  public PVector position;
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

  public EndingCredit() {
  }

  public void AddText(String text,float size,float offset) {
    AddText(text,size,offset,0f);
  }

  public void AddText(String text,float size,float offset, float offsetX) {
    offSetY += offset;
    CreditText creditText = new CreditText();
    creditText.text = text;
    creditText.position = new PVector(width/2f + offsetX, height+100f+offSetY);
    creditText.size = size;
    creditTextList.add(creditText);
  }

  public void AddSmallText(String team,String name, String enName) {
    AddText(team,36f,50f,-400f);
    AddText(name,36f,0f,0f);
    AddText(enName,36f,0f,400f);
  }

  @Override public void OnEnter() {
    creditTextList.clear();
    offSetY =0f;
    scrollAmount = 0f;
    AddText("단군신화",64f,0f);
    AddText("제작",36f,100f);
    AddText("숭실대학교 미디어경영학과 2024 학번",36f,150f);
    AddText("미디어앤테크 1팀",36f,50f);
    AddText("매니지먼트",36f,150f);
    AddText("제작 총괄 박소영 Park Soyoung",36f,80f);
    AddText("개발팀",36f,150f);
    AddText("개발 팀장 김민규 Kim Minkyu",36f,80f);
    AddSmallText("프로그래머","곽지한","Kwak Jihan");
    AddSmallText("프로그래머","김건","Kim Geon");
    AddSmallText("프로그래머","김병호","Kim Byeongho");
    AddSmallText("프로그래머","김예닮","Kim Yedarm");
    AddSmallText("프로그래머","김태겸","Kim Taegyeom");
    AddSmallText("프로그래머","박소원","Park Sowon");
    AddSmallText("프로그래머","최경선","Choi Gyeongseon");
    AddText("디자인팀",36f,150f);
    AddText("디자인 팀장 이소연 Lee Soyeon",36f,80f);
    AddSmallText("디자이너","강민지","Kang Minji");
    AddSmallText("디자이너","배연우","Bae Yeonu");
    AddSmallText("디자이너","조유진","Cho Youjin");
    AddSmallText("디자이너","이선우","Lee Seonwoo");
    AddText("기획팀",36f,150f);
    AddText("기획 팀장 권혁진 Kwon Hyeokjin",36f,80f);
    AddSmallText("기획자","권도예","Kwon Doye");
    AddSmallText("기획자","박예희","Park Yehui");
    AddSmallText("기획자","장지선","Jang Jiseon");
    AddSmallText("기획자","전유현","Jeon Yuhyun");
    AddSmallText("기획자","정유진","Jeong Yujin");
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
      float textRectX = creditText.position.x - textWidth(creditText.text)/2f;
      float textRectY = creditText.position.y - textAscent();
      float textRectWidth = textWidth(creditText.text);
      float textRectHeight = textAscent() + textDescent();

      creditText.position.y -= scrollSpeed * time.deltaTime;
      if (creditText.flying) {
        creditText.position.x += creditText.dirX * creditText.speed * time.deltaTime;
        creditText.position.y += creditText.dirY * creditText.speed * time.deltaTime;
        creditText.speed = lerp(creditText.speed, 0f, time.deltaTime);
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
        creditText.dirX = -dir.x;
        creditText.dirY = -dir.y;
        creditText.speed = 1000f;
      }
      font.DrawFont("font",creditText.text, color(255,255,255,255),creditText.size,creditText.position.x,creditText.position.y);
    }
  }

  @Override public void OnExit() {
    // sound.StopSound("intro");
  }
}
