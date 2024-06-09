/* SoundManager.js */
class SoundManager {
  constructor() {
    this.sounds = new Map();
    this.nowPlaying = null;
  }

  // 이 부분에서 preload() 함수를 사용하여 사운드를 미리 로드합니다.
  preloadSound(filename) {
    return new Promise((resolve, reject) => {
      let sound = loadSound(
        filename,
        () => resolve(sound),
        () => reject()
      );
    });
  }

  async LoadSound(name, filename) {
    try {
      let sound = await this.preloadSound(filename);
      this.sounds.set(name, sound);
    } catch (error) {
      console.error(`Failed to load sound ${filename}`);
    }
  }

  PlaySound(name) {
    let sound = this.sounds.get(name);
    if (sound) {
      sound.play();
      this.nowPlaying = sound;
    }
  }

  StopSound(name) {
    let sound = this.sounds.get(name);
    if (sound) {
      sound.stop();
    }
  }

  soundDuration(name) {
    let sound = this.sounds.get(name);
    if (sound) {
      return sound.duration();
    }
    return 0;
  }

  playSoundOnce(name) {
    this.PlaySound(name);
    this.removeSound(name);
  }

  removeSound(name) {
    this.sounds.delete(name);
  }

  hasSound(name) {
    return this.sounds.has(name);
  }

  isPlaying(name) {
    let sound = this.sounds.get(name);
    if (sound) {
      return sound.isPlaying();
    }
    return false;
  }

  stopNowPlaying() {
    if (this.nowPlaying) {
      this.nowPlaying.stop();
    }
  }
}
