public  class Dialog {
    public Dialog() {}
    public ArrayList<DialogElement> elementList = new ArrayList<DialogElement>();
} 
public abstract class DialogElement{
    public DialogElement() {}
    
    public abstract void Setup();
    public abstract void Draw();
    public abstract void Release();
    
    public abstract boolean isRunning();
}

public class TextBox extends DialogElement{
    public TextBox() {}
    public String text;
    
    @Override
    public void Setup() {
        // Setup TextBox
    }
    @Override
    public void Draw() {
        // Draw TextBox
    }
    @Override
    public void Release() {
        // Release TextBox
    }
    
    @Override
    public boolean isRunning() {
        return true;
    }
}


public class ButtonBox extends DialogElement{
    public ButtonBox() {}
    public String text;
    
    @Override
    public void Setup() {
        // SetupButtonBox
    }
    @Override
    public void Draw() {
        // Draw ButtonBox
    }
    @Override
    public void Release() {
        // Release ButtonBox
    }
    
    @Override
    public boolean isRunning() {
        return true;
    }
}