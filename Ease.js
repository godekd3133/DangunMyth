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
    return 1 - cos(t * HALF_PI);
  }

  static EaseOutSine(t) {
    return sin(t * HALF_PI);
  }

  static EaseInOutSine(t) {
    return -0.5 * (cos(PI * t) - 1);
  }

  static EaseInQuad(t) {
    return t * t;
  }

  static EaseOutQuad(t) {
    return 1 - pow(1 - t, 2);
  }

  static EaseInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - pow(-2 * t + 2, 2) / 2;
  }

  static EaseInCubic(t) {
    return t * t * t;
  }

  static EaseOutCubic(t) {
    return 1 - pow(1 - t, 3);
  }

  static EaseInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - pow(-2 * t + 2, 3) / 2;
  }

  static EaseInQuart(t) {
    return t * t * t * t;
  }

  static EaseOutQuart(t) {
    return 1 - pow(1 - t, 4);
  }

  static EaseInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - pow(-2 * t + 2, 4) / 2;
  }

  static EaseInQuint(t) {
    return t * t * t * t * t;
  }

  static EaseOutQuint(t) {
    return 1 + pow(t - 1, 5);
  }

  static EaseInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 - pow(-2 * t + 2, 5) / 2;
  }

  static EaseInExpo(t) {
    return t === 0 ? 0 : pow(2, 10 * t - 10);
  }

  static EaseOutExpo(t) {
    return t === 1 ? 1 : 1 - pow(2, -10 * t);
  }

  static EaseInOutExpo(t) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : t < 0.5
      ? pow(2, 20 * t - 10) / 2
      : (2 - pow(2, -20 * t + 10)) / 2;
  }

  static EaseInCirc(t) {
    return 1 - sqrt(1 - t * t);
  }

  static EaseOutCirc(t) {
    return sqrt(1 - pow(t - 1, 2));
  }

  static EaseInOutCirc(t) {
    return t < 0.5
      ? (1 - sqrt(1 - pow(2 * t, 2))) / 2
      : (sqrt(1 - pow(-2 * t + 2, 2)) + 1) / 2;
  }

  static EaseInBack(t) {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  }

  static EaseOutBack(t) {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * pow(t - 1, 3) + c1 * pow(t - 1, 2);
  }

  static EaseInOutBack(t) {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;
    return t < 0.5
      ? (pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
      : (pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  }

  static EaseInElastic(t) {
    const c4 = (2 * Math.PI) / 3;
    return t === 0
      ? 0
      : t === 1
      ? 1
      : -pow(2, 10 * t - 10) * sin((t * 10 - 10.75) * c4);
  }

  static EaseOutElastic(t) {
    const c4 = (2 * Math.PI) / 3;
    return t === 0
      ? 0
      : t === 1
      ? 1
      : pow(2, -10 * t) * sin((t * 10 - 0.75) * c4) + 1;
  }

  static EaseInOutElastic(t) {
    const c5 = (2 * Math.PI) / 4.5;
    return t === 0
      ? 0
      : t === 1
      ? 1
      : t < 0.5
      ? -(pow(2, 20 * t - 10) * sin((20 * t - 11.125) * c5)) / 2
      : (pow(2, -20 * t + 10) * sin((20 * t - 11.125) * c5)) / 2 + 1;
  }

  static EaseInBounce(t) {
    return 1 - Ease.EaseOutBounce(1 - t);
  }

  static EaseOutBounce(t) {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  }

  static EaseInOutBounce(t) {
    return t < 0.5
      ? Ease.EaseInBounce(t * 2) * 0.5
      : Ease.EaseOutBounce(t * 2 - 1) * 0.5 + 0.5;
  }
}
