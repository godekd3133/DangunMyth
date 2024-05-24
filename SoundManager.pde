import processing.sound.*;
SoundFile LoadSound2(String filename2) {
  return new SoundFile(this, filename2);
}
public class SoundManager {
  HashMap<String, SoundFile> sounds = new HashMap<String, SoundFile>();

  public void LoadSound(String name, String filename) {
    SoundFile sound = LoadSound2(filename);
    sounds.put(name, sound);
  }

  public void PlaySound(String name) {
    SoundFile sound = sounds.get(name);
    sound.play();
  }

  public void StopSound(String name) {
    SoundFile sound = sounds.get(name);
    sound.stop();
  }
}