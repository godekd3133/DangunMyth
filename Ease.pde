static class Ease {

  static float EaseIn(float t) {
    return t * t;
  }

  static float EaseOut(float t) {
    return t *(2 - t);
  }

  static float EaseInOut(float t) {
    return t < 0.5 ? 2 * t * t : -1 +(4 - 2 * t) * t;
  }

  static float EaseInSine(float t) {
    return 1 - cos(t * HALF_PI);
  }

  static float EaseOutSine(float t) {
    return sin(t * HALF_PI);
  }

  static float EaseInOutSine(float t) {
    return -0.5 *(cos(PI * t) - 1);
  }

  static float EaseInQuad(float t) {
    return t * t;
  }

  static float EaseOutQuad(float t) {
    return 1 - pow(1 - t, 2);
  }

  static float EaseInOutQuad(float t) {
    return t < 0.5 ? 2 * t * t : 1 - pow(-2 * t + 2, 2) / 2;
  }

  static float EaseInCubic(float t) {
    return t * t * t;
  }

  static float EaseOutCubic(float t) {
    return 1 - pow(1 - t, 3);
  }

  static float EaseInOutCubic(float t) {
    return t < 0.5 ? 4 * t * t * t : 1 - pow(-2 * t + 2, 3) / 2;
  }

  static float EaseInQuart(float t) {
    return t * t * t * t;
  }

  static float EaseOutQuart(float t) {
    return 1 - pow(1 - t, 4);
  }

  static float EaseInOutQuart(float t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - pow(-2 * t + 2, 4) / 2;
  }

  static float EaseInQuint(float t) {
    return t * t * t * t * t;
  }

  static float EaseOutQuint(float t) {
    return 1 + pow(t - 1, 5);
  }

  static float EaseInOutQuint(float t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 - pow(-2 * t + 2, 5) / 2;
  }

  static float EaseInExpo(float t) {
    return t == 0 ? 0 : pow(2, 10 * t - 10);
  }

  static float EaseOutExpo(float t) {
    return t == 1 ? 1 : 1 - pow(2, -10 * t);
  }

  static float EaseInOutExpo(float t) {
    return t == 0 ? 0 : t == 1 ? 1 : t < 0.5 ? pow(2, 20 * t - 10) / 2 :(2 - pow(2, -20 * t + 10)) / 2;
  }

  static float EaseInCirc(float t) {
    return 1 - sqrt(1 - t * t);
  }

  static float EaseOutCirc(float t) {
    return sqrt(1 - pow(t - 1, 2));
  }

  static float EaseInOutCirc(float t) {
    return t < 0.5 ?(1 - sqrt(1 - pow(2 * t, 2))) / 2 :(sqrt(1 - pow(-2 * t + 2, 2)) + 1) / 2;
  }

  static float EaseInBack(float t) {
    return t * t *(2.70158 * t - 1.70158);
  }

  static float EaseOutBack(float t) {
    return 1 + t * t *(2.70158 * t - 1.70158);
  }

  static float EaseInOutBack(float t) {
    return t < 0.5 ? 4 * t * t *(3.5949095 * t - 2.5949095) : 1 + pow(2 * t - 2, 2) *(3.5949095 *(2 * t - 2) - 2.5949095) / 2;
  }

  static float EaseInElastic(float t) {
    return pow(2, 10 *(t - 1)) * sin((t - 0.075) * TWO_PI / 0.3);
  }

  static float EaseOutElastic(float t) {
    return pow(2, -10 * t) * sin((t - 0.075) * TWO_PI / 0.3) + 1;
  }

  static float EaseInOutElastic(float t) {
    return t < 0.5 ? 0.5 * pow(2, 20 * t - 10) * sin((20 * t - 11.125) * TWO_PI / 0.45) : 0.5 * pow(2, -20 * t + 10) * sin((20 * t - 11.125) * TWO_PI / 0.45) + 1;
  }

  static float EaseInBounce(float t) {
    return 1 - EaseOutBounce(1 - t);
  }

  static float EaseOutBounce(float t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    }
    else if (t < 2 / 2.75) {
      return 7.5625 *(t -= 1.5 / 2.75) * t + 0.75;
    }
    else if (t < 2.5 / 2.75) {
      return 7.5625 *(t -= 2.25 / 2.75) * t + 0.9375;
    } else {
      return 7.5625 *(t -= 2.625 / 2.75) * t + 0.984375;
    }
  }

  static float EaseInOutBounce(float t) {
    return t < 0.5 ? 0.5 * EaseInBounce(t * 2) : 0.5 * EaseOutBounce(t * 2 - 1) + 0.5;
  }
}
