const HALF_PI = Math.PI;
const TWO_PI = Math.PI * 2;

class Ease {
  static EaseIn(t) {
    return t * t;
  }
  static EaseOut(t) {
    return t * (2 - t);
  }
  static EaseInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  static EaseInSine(t) {
    return 1 - Math.cos(t * HALF_PI);
  }
  static EaseOutSine(t) {
    return Math.sin(t * HALF_PI);
  }
  static EaseInOutSine(t) {
    return -0.5 * (Math.cos(PI * t) - 1);
  }
  static EaseInQuad(t) {
    return t * t;
  }
  static EaseOutQuad(t) {
    return 1 - Math.pow(1 - t, 2);
  }
  static EaseInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }
  static EaseInCubic(t) {
    return t * t * t;
  }
  static EaseOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }
  static EaseInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  static EaseInQuart(t) {
    return t * t * t * t;
  }
  static EaseOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }
  static EaseInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }
  static EaseInQuint(t) {
    return t * t * t * t * t;
  }
  static EaseOutQuint(t) {
    return 1 + Math.pow(t - 1, 5);
  }
  static EaseInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
  }
  static EaseInExpo(t) {
    return t == 0 ? 0 : Math.pow(2, 10 * t - 10);
  }
  static EaseOutExpo(t) {
    return t == 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }
  static EaseInOutExpo(t) {
    return t == 0
      ? 0
      : t == 1
      ? 1
      : t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2;
  }
  static EaseInCirc(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  static EaseOutCirc(t) {
    return Math.sqrt(1 - Math.pow(t - 1, 2));
  }
  static EaseInOutCirc(t) {
    return t < 0.5
      ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
      : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
  }
  static EaseInBack(t) {
    return t * t * (2.70158 * t - 1.70158);
  }
  static EaseOutBack(t) {
    return 1 + t * t * (2.70158 * t - 1.70158);
  }
  static EaseInOutBack(t) {
    return t < 0.5
      ? 4 * t * t * (3.5949095 * t - 2.5949095)
      : 1 +
          (Math.pow(2 * t - 2, 2) * (3.5949095 * (2 * t - 2) - 2.5949095)) / 2;
  }
  static EaseInElastic(t) {
    return Math.pow(2, 10 * (t - 1)) * Math.sin(((t - 0.075) * TWO_PI) / 0.3);
  }
  static EaseOutElastic(t) {
    return Math.pow(2, -10 * t) * Math.sin(((t - 0.075) * TWO_PI) / 0.3) + 1;
  }
  static EaseInOutElastic(t) {
    return t < 0.5
      ? 0.5 *
          Math.pow(2, 20 * t - 10) *
          Math.sin(((20 * t - 11.125) * TWO_PI) / 0.45)
      : 0.5 *
          Math.pow(2, -20 * t + 10) *
          Math.sin(((20 * t - 11.125) * TWO_PI) / 0.45) +
          1;
  }
  static EaseInBounce(t) {
    return 1 - this.EaseOutBounce(1 - t);
  }
  static EaseOutBounce(t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    } else {
      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    }
  }
  static EaseInOutBounce(t) {
    return t < 0.5
      ? 0.5 * this.EaseInBounce(t * 2)
      : 0.5 * this.EaseOutBounce(t * 2 - 1) + 0.5;
  }
}
