import processing.sound.*;

SoundFile LoadSound2(String filename2) {
  return new SoundFile(this, filename2);
}
public class SoundManager {
  HashMap<String, SoundFile> sounds = new HashMap<String, SoundFile>();
  SoundFile nowPlaying;

  public void LoadSound(String name, String filename) {
    SoundFile sound = LoadSound2(filename);
    sounds.put(name, sound);
  }

  public void PlaySound(String name) {
    SoundFile sound = sounds.get(name);
    sound.play();
    nowPlaying = sound;
  }

  public void StopSound(String name) {
    SoundFile sound = sounds.get(name);
    sound.stop();
  }

  public float soundDuration(String name) {
    return sounds.get(name).duration();
  }

  public void playSoundOnce(String name) {
    PlaySound(name);
    sounds.remove(name);
  }

  public boolean hasSound(String name) {
    return sounds.containsKey(name);
  }

  public boolean isPlaying(String name) {
    return sounds.get(name).isPlaying();
  }

  public void removeSound(String name) {
    sounds.remove(name);
  }

  public void stopNowPlaying() {
    nowPlaying.stop();
  }
}
