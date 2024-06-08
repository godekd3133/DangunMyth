// [processing-p5-convert] import processing.sound.*;
function LoadSound2(filename2) {
  return loadSound(filename2);
}
class SoundManager {
  nowPlaying;
  sounds = {};
  LoadSound(name, filename) {
    let sound = LoadSound2(filename);
    this.sounds[name] = sound;
  }
  PlaySound(name) {
    let sound = this.sounds[name];
    sound.play();
    this.nowPlaying = sound;
  }
  StopSound(name) {
    let sound = this.sounds[name];
    sound.stop();
  }
  soundDuration(name) {
    return this.sounds[name].duration();
  }
  playSoundOnce(name) {
    this.PlaySound(name);
    this.removeSound(name);
  }
  removeSound(name) {
    this.sounds[name] = undefined;
  }
  hasSound(name) {
    return Object.prototype.hasOwnProperty.call(this.sounds, name);
  }
  isPlaying(name) {
    return this.sounds[name].isPlaying();
  }
  stopNowPlaying() {
    this.nowPlaying.stop();
  }
}
