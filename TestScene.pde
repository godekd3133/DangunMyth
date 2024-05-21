public class TestScene extends Scene {

  public TestScene() {
  }

  @Override public void OnEnter() {
    print("Enter");
    font.LoadFont("LeeSeoyun.otf","LeeSeoyun.otf");

}

  @Override public void OnDraw() {
        for(int i =1; i< 10; i++){
          int size = i * 4;
                  font.DrawFont("LeeSeoyun.otf", "Hello 사이즈는 : " + size, 0, size, 40f,40 + i *50);
        }

        for(int i =10; i< 20; i++){
          int size = i * 4;
                  font.DrawFont("LeeSeoyun.otf", "Hello 사이즈는 : " + size, 0, size, 500f,40 + (i-10) *50);
        }
    
  }

  @Override public void OnExit() {
  }
}
