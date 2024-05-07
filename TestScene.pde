public class TestScene extends Scene
{
    public TestScene()
    {
    }
    
    @Override 
    public void OnEnter()  
    {
        image.LoadImage("test", "11.JPG");
        print("Enter");
    }
    @Override 
    public  void OnDraw()
    {
        // image.DrawImage("test", 0, 0,40f);
        print("Draw");
    }
    
    @Override 
    public  void OnExit()
    {
        
    }
    
}