public class ImageManager {
    HashMap<String, PImage> images = new HashMap<String, PImage>();
    public ImageManager() {
    }
    
    public void LoadImage(String name, String path) {
        if (images.containsKey(name)) {
            return;
        }
        
        PImage img = loadImage(path);
        images.put(name, img);
    }
    
    void DrawImage(String key, int x, int y) {
        PImage img = images.get(key);
        
        if (img == null) {
            print("Key was not found in image manager: " + key + "\n");
            return;
        }
        image(img, x, y);
    }
    
    
    public PImage GetImage(String name) {
        return images.get(name);
    }
    
}