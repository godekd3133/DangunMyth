public class TestScene extends Scene
{
    public TestScene()
    {
        sceneManager.Setup(this);
    }
    
    @Override 
    public void OnEnter()  
    {
        print("Enter");
    }
    @Override 
    public  void OnDraw()
        {
        print("Draw");
    }
    @Override 
    public  void OnExit()
    {
        
    }
    
}