public  class Dialog {
    public Dialog() {}
    public ArrayList<DialogElement> elementList = new ArrayList<DialogElement>();
} 

public class DialogElement{
    public DialogElement() {}
    public abstract void Setup();
    public abstract void Draw();
    public abstract void Release();
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
}

