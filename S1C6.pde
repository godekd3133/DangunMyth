public class S1C6 extends Scene
{
    
    int centerX = width/2;
    int centerY = height/2;

    PVector hwaninCoor = new PVector((float)centerX-300, (float)centerY);

    boolean tick1Flag = true;
    int tick1Cnt = 0;
    
    //환인 위치
    int hwaninfaceOffset = -40;
    int hwaninX = centerX-250;
    int hwaninY = centerY-50;

    //환인 얼굴 움직이는 변수
    boolean hwaninFaceFlag=true;
    int hwaninFaceCnt = 0;
    boolean hwaninMouse = true;


    //환웅 위치
    int hwanwoongfaceOffsetY = -80;
    int hwanwoongfaceOffsetX = -25;
    int hwanwoongX = centerX+300;
    int hwanwoongY = centerY+180;
    //환웅 얼굴 움직이는 변수
    boolean hwanwoongFaceFlag=false;
    int hwanwoongFaceCnt = 0;
    boolean hwanwoongMouse = true;

    
    public S1C6()
    {
    }
    
    @Override 
    public void OnEnter()  
    {
        // int hwaninX = centerX-200;
        // int hwaninY = centerY;

        //환인
        image.LoadImage("Background", "./Images/S1/C6/Background");
        image.LoadImage("HwaninBody", "./Images/S1/C6/HwaninBody");
        image.LoadImage("HwaninFace_MouseClose", "./Images/S1/C6/HwaninFace_MouseClose");
        image.LoadImage("HwaninFace_MouseOpen", "./Images/S1/C6/HwaninFace_MouseOpen");
        image.LoadImage("HwaninFace_MouseClose", "./Images/S1/C6/HwaninFace_MouseClose");
        
        //환웅
        image.LoadImage("HwanwoongBody1", "./Images/S1/C6/HwanwoongBody1");
        image.LoadImage("HwanwoongBody2", "./Images/S1/C6/HwanwoongBody2");
        image.LoadImage("HwanwoongFace1", "./Images/S1/C6/HwanwoongFace1");
        image.LoadImage("HwanwoongFace2-1", "./Images/S1/C6/HwanwoongFace2-1");
        image.LoadImage("HwanwoongFace2-2", "./Images/S1/C6/HwanwoongFace2-2");
        
        
        
        // print("Enter");
        background(#ffffff);
    }
    @Override 
    public  void OnDraw()
    {
        if(tick1Flag == true) {
            if(tick1Cnt <= 3000) {
                tick1Cnt++;
            }
            
        }
        else tick1Cnt=0;


        if(tick1Cnt%10 == 0) {
            println("[S1C6] tick1Cnt : "+tick1Cnt);
            //환인
            if(hwaninFaceFlag) {
                hwaninMouse = !hwaninMouse;
            }
            else {
                hwaninMouse = false;
            }

            //환웅
            if(hwanwoongFaceFlag) {
                hwanwoongMouse = !hwanwoongMouse;
            }
            else {
                hwanwoongMouse = false;
            }
        }

        //환웅 대사 시작지점
        if(tick1Cnt >= 800) {
            hwanwoongFaceFlag=true;
            hwaninFaceFlag=false;
        }

        //EndPoint
        if(tick1Cnt > 1000) {
            scene.ChangeScene(new S1C1()); 
        }
        

        
        image.DrawImageScale("Background", centerX, centerY, 1f, 0f, 255f);
        
        //환인 Draw
        image.DrawImageScale("HwaninBody", hwaninX, hwaninY, 0.15, 0f, 255f);
        if(hwaninFaceFlag == false) {
            image.DrawImageScale("HwaninFace_MouseClose", hwaninX, hwaninY+hwaninfaceOffset, 0.15, 0f, 255f);
        }
        else {
            if(hwaninMouse) {
                image.DrawImageScale("HwaninFace_MouseClose", hwaninX, hwaninY+hwaninfaceOffset, 0.15, 0f, 255f);
            }
            else {
                image.DrawImageScale("HwaninFace_MouseOpen", hwaninX, hwaninY+hwaninfaceOffset, 0.15, 0f, 255f);
            }
        }
        
            
        //환웅 Draw
        
        
        if(hwanwoongFaceFlag==false) {
            image.DrawImageScale("HwanwoongBody1", hwanwoongX, hwanwoongY, 0.15, 0f, 255f);
            image.DrawImageScale("HwanwoongFace1", hwanwoongX+(-10), hwanwoongY+hwanwoongfaceOffsetY, 0.15, 0f, 255f);
        }
        else {
            image.DrawImageScale("HwanwoongBody2", hwanwoongX, hwanwoongY, 0.15, 0f, 255f);
            if(hwanwoongMouse) {
                image.DrawImageScale("HwanwoongFace2-1", hwanwoongX+hwanwoongfaceOffsetX, hwanwoongY+hwanwoongfaceOffsetY, 0.15, 0f, 255f);
            }
            else {
                image.DrawImageScale("HwanwoongFace2-2", hwanwoongX+hwanwoongfaceOffsetX, hwanwoongY+hwanwoongfaceOffsetY, 0.15, 0f, 255f);
            }
        }
        
        
        // print("Draw");
    }
    
    @Override 
    public  void OnExit()
    {
        
    }
    
}