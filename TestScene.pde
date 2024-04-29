public class TestScene extends Scene
{
    public TestScene()
    {
    }
    
    @Override 
    public void OnEnter()  
    {
        image.LoadImage("test", "test.png");
        print("Enter");
    }
    @Override 
    public  void OnDraw()
    {
        image.DrawImage("test", 0, 0);
        print("Draw");
    }
    @Override 
    public  void OnExit()
    {
        
    }
    
}