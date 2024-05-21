public class S1C8 extends Scene
{
    
    int centerX = width/2;
    int centerY = height/2;

    boolean tick1Flag = true;
    int tick1Cnt = 0;

    int endpointTick = 0;
    
    //환인 위치
    int hwaninfaceOffset = -300;
    int hwaninX = centerX-250;
    int hwaninY = centerY+380;

    //환인 얼굴 움직이는 변수
    boolean hwaninFaceFlag=true;
    int hwaninFaceCnt = 0;
    boolean hwaninFace = true;

    
    public S1C8()
    {
    }
    
    @Override 
    public void OnEnter()  
    {
        // int hwaninX = centerX-200;
        // int hwaninY = centerY;

        //환인
        image.LoadImage("BackgroundS1C8", "./Images/S1/C8/Background");
        image.LoadImage("HwaninBody", "./Images/S1/C8/HwaninBody");
        // image.LoadImage("HwaninFace_MouseClose", "./Images/S1/C8/HwaninFace_MouseClose");
        // image.LoadImage("HwaninFace_MouseOpen", "./Images/S1/C8/HwaninFace_MouseOpen");
        image.LoadImage("HwaninFace", "./Images/S1/C8/HwaninFace");
        
        image.LoadImage("HwaninHand", "./Images/S1/C8/HwaninHand");
        
        
        
        // print("Enter");
        background(#ffffff);
    }
    @Override 
    public  void OnDraw()
    {
        // int mouseMove = (int)random(0,15);

        if(hwaninFace) tick1Cnt++;
        else tick1Cnt--;

        if(tick1Cnt >= 20 || tick1Cnt <= 0) {
            hwaninFace = !hwaninFace;
        }

        

        // endpointTick++;
        // println(endpointTick);
        // if(endpointTick >= 200) {
        //     scene.ChangeScene(new S1C6_1()); 
        // }
        
        image.DrawImageScale("BackgroundS1C8", centerX, centerY, 1f, 0f, 255f);
        
        //환인 Draw
        image.DrawImageScale("HwaninBody", hwaninX, hwaninY, 0.4, 0f, 255f);
        // if(mouseMove < 10) image.DrawImageScale("HwaninFace_MouseClose", hwaninX+15, hwaninY+hwaninfaceOffset+tick1Cnt, 0.4, 0f, 255f);
        // else image.DrawImageScale("HwaninFace_MouseOpen", hwaninX+15, hwaninY+hwaninfaceOffset+tick1Cnt, 0.4, 0f, 255f);
        
        image.DrawImageScale("HwaninFace", hwaninX+15, hwaninY+hwaninfaceOffset+tick1Cnt, 0.4, 0f, 255f);
        image.DrawImageScale("HwaninHand", hwaninX+(-35), hwaninY+(-140), 0.3, 0.7, 255f);

        

        // print("Draw");
    }
    
    @Override 
    public  void OnExit()
    {
        
    }
    
}