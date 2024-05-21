public class S1C6_2 extends Scene
{
    
    int centerX = width/2;
    int centerY = height/2;

    boolean tick1Flag = true;
    int tick1Cnt = 0;

    int endpointTick = 0;
    
    //환인 위치
    int hwaninfaceOffset = -120;
    int hwaninX = centerX-250;
    int hwaninY = centerY+350;

    //환인 얼굴 움직이는 변수
    boolean hwaninFaceFlag=true;
    int hwaninFaceCnt = 0;
    boolean hwaninFace = true;

    
    public S1C6_2()
    {
    }
    
    @Override 
    public void OnEnter()  
    {
        // int hwaninX = centerX-200;
        // int hwaninY = centerY;

        //환인
        image.LoadImage("Background2", "./Images/S1/C6-2/Background");
        image.LoadImage("HwaninBody", "./Images/S1/C6-2/HwaninBody");
        image.LoadImage("HwaninFace", "./Images/S1/C6-2/HwaninFace");
        
        
        
        // print("Enter");
        background(#ffffff);
    }
    @Override 
    public  void OnDraw()
    {
        
        if(hwaninFace) tick1Cnt++;
        else tick1Cnt--;

        if(tick1Cnt >= 10 || tick1Cnt <= 0) {
            hwaninFace = !hwaninFace;
        }

        endpointTick++;
        // println(endpointTick);
        if(endpointTick >= 200) {
            scene.ChangeScene(new S1C6_1()); 
        }
        
        image.DrawImageScale("Background2", centerX, centerY, 1f, 0f, 255f);
        
        //환인 Draw
        image.DrawImageScale("HwaninBody", hwaninX, hwaninY, 0.4, 0f, 255f);
        image.DrawImageScale("HwaninFace", hwaninX+15, hwaninY+hwaninfaceOffset, 0.4+((float)tick1Cnt/400), 0f, 255f);

        

        // print("Draw");
    }
    
    @Override 
    public  void OnExit()
    {
        
    }
    
}