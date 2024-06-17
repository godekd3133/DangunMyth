class ImageManager {
  constructor() {
    this.images = new Map();
    this.pivot = createVector(0.5, 0.5);
  }

  ResetImages() {
    this.images.clear();
  }

  SetPivot(p) {
    this.SetPivot(p.x, p.y);
  }

  SetPivot(x, y) {
    this.pivot.x = x;
    this.pivot.y = y;
  }

  LoadImage(name, path) {
    if (this.images.has(name)) {
      return;
    }
    let img = loadImage(path + ".png");
    this.images.set(name, img);
  }

  LoadAnimation(name, path, count) {
    for (let i = 0; i < count; i++) {
      let key = `${name}(${i})`;
      let fullPath = `${path}(${i})`;
      this.LoadImage(key, fullPath);
    }
  }

  ValidateImage(key) {
    if (this.images.has(key)) {
      return true;
    }
    print(`Key was not found in image manager: ${key}\n`);
    // print stack trace
    console.trace();
    return false;
  }

  DrawImage(key, position, angle = 0, alpha = 255) {
    if (!this.ValidateImage(key)) {
      return;
    }
    let img = this.images.get(key);

    push();
    translate(position.x, position.y);
    rotate(angle);
    imageMode(CENTER);
    tint(255, alpha);
    image(img, 0, 0);
    pop();
  }

  DrawImageWithTint(
    key,
    position,
    angle = 0,
    alpha = 255,
    r = 255,
    g = 255,
    b = 255
  ) {
    if (!this.ValidateImage(key)) {
      return;
    }
    let img = this.images.get(key);

    push();
    translate(position.x, position.y);
    rotate(angle);
    imageMode(CENTER);
    tint(r, g, b, alpha);
    image(img, 0, 0);
    pop();
  }

  DrawImageScale(key, position, size, angle = 0, alpha = 255) {
    if (!this.ValidateImage(key)) {
      return;
    }
    let img = this.images.get(key);

    push();
    translate(position.x, position.y);
    rotate(angle);
    scale(size.x, size.y);
    imageMode(CENTER);
    tint(255, alpha);
    image(img, 0, 0);
    pop();
  }

  DrawImageScaleSimple(key, x, y, scale, angle, alpha) {
    this.DrawImageScale(
      key,
      createVector(x, y),
      createVector(scale, scale, 0),
      angle,
      alpha
    );
  }

  DrawImageSize(key, position, size, angle = 0, alpha = 255) {
    if (!this.ValidateImage(key)) {
      return;
    }
    let img = this.images.get(key);

    push();
    translate(position.x, position.y);
    rotate(angle);
    scale(size.x / img.width, size.y / img.height);
    imageMode(CENTER);
    tint(255, alpha);
    image(img, 0, 0);
    pop();
  }

  GetImage(name) {
    return this.images.get(name);
  }
  async preloadAllImages() {
    // sequence1
    
    // s1c1
    imageManager.LoadImage("s1c1_background", "Images/S1/C1/background");
    imageManager.LoadImage("s1c1_cloud01", "Images/S1/C1/cloud_01");
    imageManager.LoadImage("s1c1_cloud02", "Images/S1/C1/cloud_02");
    imageManager.LoadImage("s1c1_cloud03", "Images/S1/C1/cloud_03");
    imageManager.LoadImage("s1c1_text1", "Images/S1/C1/text_01");
    imageManager.LoadImage("s1c1_text2", "Images/S1/C1/text_02");
  
    // s1c2
    imageManager.LoadImage("s1c2_background", "Images/S1/C2/background");
    imageManager.LoadImage("s1c2_cloud01", "Images/S1/C2/cloud");
  
    // s1c3
    imageManager.LoadImage("s1c3_background", "Images/S1/C3/background");
    imageManager.LoadImage("s1c3_cloud01", "Images/S1/C3/cloud");
    imageManager.LoadImage("s1c3_god", "Images/S1/C3/god");
    imageManager.LoadImage("s1c3_face", "Images/S1/C3/god_smile");
    imageManager.LoadImage("s1c3_text", "Images/S1/C3/text");
    imageManager.LoadImage("s1c3_telling0", "Images/S1/C3/god_telling1");
    imageManager.LoadImage("s1c3_telling1", "Images/S1/C3/god_telling2");
  
    // s1c4
    imageManager.LoadImage("s1c4_background", "Images/S1/C4/background");
    imageManager.LoadImage("s1c4_man1", "Images/S1/C4/man1");
    imageManager.LoadImage("s1c4_man2", "Images/S1/C4/man2");
    imageManager.LoadImage("s1c4_eye1", "Images/S1/C4/eye1");
    imageManager.LoadImage("s1c4_eye2", "Images/S1/C4/eye2");
    imageManager.LoadImage("s1c4_eye3", "Images/S1/C4/eye3");
    imageManager.LoadImage("s1c4_mouth", "Images/S1/C4/mouth");
    imageManager.LoadImage("s1c4_text", "Images/S1/C4/text");
  
  
    // s1c5
    imageManager.LoadImage("s1c5_background", "Images/S1/C5/background");
    imageManager.LoadImage("s1c5_hwanin", "Images/S1/C5/hawnin");
    imageManager.LoadImage("s1c5_hwanwoong", "Images/S1/C5/hwanwoong");
    imageManager.LoadImage("s1c5_text", "Images/S1/C5/text");
  
    // s1c6_1
    imageManager.LoadImage("s1c6_1_text", "Images/S1/C6-1/text");
    imageManager.LoadImage("s1c6_1_Background", "Images/S1/C6-1/Background");
    imageManager.LoadImage("s1c6_1_HwaninBody", "Images/S1/C6-1/HwaninBody");
    imageManager.LoadImage("s1c6_1_HwaninFace_MouseClose", "Images/S1/C6-1/HwaninFace_MouseClose");
    imageManager.LoadImage("s1c6_1_HwaninFace_MouseOpen", "Images/S1/C6-1/HwaninFace_MouseOpen");
    imageManager.LoadImage("s1c6_1_HwaninFace_MouseClose", "Images/S1/C6-1/HwaninFace_MouseClose");
    imageManager.LoadImage("s1c6_1_HwanwoongBody1", "Images/S1/C6-1/HwanwoongBody1");
    imageManager.LoadImage("s1c6_1_HwanwoongBody2", "Images/S1/C6-1/HwanwoongBody2");
    imageManager.LoadImage("s1c6_1_HwanwoongFace1", "Images/S1/C6-1/HwanwoongFace1");
    imageManager.LoadImage("s1c6_1_HwanwoongFace2-1", "Images/S1/C6-1/HwanwoongFace2-1");
    imageManager.LoadImage("s1c6_1_HwanwoongFace2-2", "Images/S1/C6-1/HwanwoongFace2-2");
  
    // s1c6_2
    imageManager.LoadImage("s1c6_2_Background2", "Images/S1/C6-2/Background");
    imageManager.LoadImage("s1c6_2_HwaninBody", "Images/S1/C6-2/HwaninBody");
    imageManager.LoadImage("s1c6_2_HwaninFace", "Images/S1/C6-2/HwaninFace");
    imageManager.LoadImage("s1c6_2_text", "Images/S1/C6-2/text");
  
    // s1c7
    imageManager.LoadImage("s1c7_background", "Images/S1/C7/background");
    imageManager.LoadImage("s1c7_text", "Images/S1/C7/text");
    imageManager.LoadImage("s1c7_hwan_body", "Images/S1/C7/hwan_body");
    imageManager.LoadImage("s1c7_hwan_expression1", "Images/S1/C7/hwan_expression1");
    imageManager.LoadImage("s1c7_hwan_expression2", "Images/S1/C7/hwan_expression2");
  
    // s1c8
    imageManager.LoadImage("s1c8_BackgroundS1C8", "Images/S1/C8/Background");
    imageManager.LoadImage("s1c8_HwaninBody", "Images/S1/C8/HwaninBody");
    imageManager.LoadImage("s1c8_HwaninFace", "Images/S1/C8/HwaninFace");
    imageManager.LoadImage("s1c8_HwaninHand", "Images/S1/C8/HwaninHand");
    imageManager.LoadImage("s1c8_NarrS1C8", "Images/S1/C8/narr");
  
    // s1c9
    imageManager.LoadImage("s1c9_background", "Images/S1/C9/background");
    imageManager.LoadImage("s1c9_text", "Images/S1/C9/text");
    imageManager.LoadImage("s1c9_cloud01", "Images/S1/C9/cloud_01");
    imageManager.LoadImage("s1c9_cloud02", "Images/S1/C9/cloud_02");
    imageManager.LoadImage("s1c9_cloud03", "Images/S1/C9/cloud_03");
    imageManager.LoadImage("s1c9_hand", "Images/S1/C9/hand");
  
    // s1c11
    imageManager.LoadImage("s1c11_background", "Images/S1/C11/background");
    imageManager.LoadImage("s1c11_text", "Images/S1/C11/text");
    imageManager.LoadImage("s1c11_hwanin_body", "Images/S1/C11/hwanin_body");
    imageManager.LoadImage("s1c11_hwanin_expression1", "Images/S1/C11/hwanin_expression1");
    imageManager.LoadImage("s1c11_hwanin_expression2","Images/S1/C11/hwanin_expression2");
    imageManager.LoadImage("s1c11_hwanwoong_body", "Images/S1/C11/hwanwoong_body");
    imageManager.LoadImage("s1c11_hwanwoong_expression1", "Images/S1/C11/hwanwoong_expression1");
    imageManager.LoadImage("s1c11_hwanwoong_expression2", "Images/S1/C11/hwanwoong_expression2");
  
    // s1c13
    imageManager.LoadImage("s1c13_background1", "Images/S1/C13/background1");
    imageManager.LoadImage("s1c13_background2", "Images/S1/C13/background2");
    imageManager.LoadImage("s1c13_background3", "Images/S1/C13/background3");
    imageManager.LoadImage("s1c13_background4", "Images/S1/C13/background4");
    imageManager.LoadImage("s1c13_background5", "Images/S1/C13/background5");
    imageManager.LoadImage("s1c13_background6", "Images/S1/C13/background6");
    imageManager.LoadImage("s1c13_background7", "Images/S1/C13/background7");
  
    // s1c14
    imageManager.LoadImage("s1c14_background", "Images/S1/C14/background");
    imageManager.LoadImage("s1c14_button", "Images/S1/C14/button");
  
    // s1c15
    imageManager.LoadImage("s1c15_background", "Images/S1/C15/background");
    imageManager.LoadImage("s1c15_ground", "Images/S1/C15/ground");
  
    imageManager.LoadImage("s1c15_hwanung", "Images/S1/C15/hwanung");
    imageManager.LoadImage("s1c15_hwanungFace1", "Images/S1/C15/hwanung_face_1");
    imageManager.LoadImage("s1c15_hwanungFace2", "Images/S1/C15/hwanung_face_2");
  
    imageManager.LoadImage("s1c15_bird", "Images/S1/C15/obstacles/bird");
    imageManager.LoadImage("s1c15_gust", "Images/S1/C15/obstacles/gust");
    imageManager.LoadImage("s1c15_plane", "Images/S1/C15/obstacles/plane");
    imageManager.LoadImage("s1c15_UFO", "Images/S1/C15/obstacles/UFO");
    imageManager.LoadImage("s1c15_cloud", "Images/S1/C15/obstacles/cloud");
    imageManager.LoadImage("s1c15_lightning", "Images/S1/C15/obstacles/lightning");
  
    imageManager.LoadImage("s1c15_wind", "Images/S1/C15/obstacles/wind");
    imageManager.LoadImage("s1c15_fog", "Images/S1/C15/obstacles/fog");
  
    imageManager.LoadImage("s1c15_altimeter", "Images/S1/C15/altimeter_1");
    imageManager.LoadImage("s1c15_altimeterHwanung", "Images/S1/C15/altimeter_2");
    imageManager.LoadImage("s1c15_arrow", "Images/S1/C15/arrow");
  
    // s1c15v1
    imageManager.LoadImage("s1c15v1_background", "Images/S1/C15-1/background");
    imageManager.LoadImage("s1c15v1_HWANUNG_BODY", "Images/S1/C15-1/HWANUNG_BODY");
    imageManager.LoadImage("s1c15v1_HWANUNG_FACE", "Images/S1/C15-1/HWANUNG_FACE");
    imageManager.LoadImage("s1c15v1_HWANUNG_SWEAT", "Images/S1/C15-1/HWANUNG_SWEAT");
    imageManager.LoadImage("s1c15v1_HWANUNG_TEXT", "Images/S1/C15-1/TEXT");
  
    imageManager.LoadImage("s1c15v1_button_top", "Images/S1/C15-1/button_top");
    imageManager.LoadImage("s1c15v1_button_bottom", "Images/S1/C15-1/button_bottom");
  
    // s1c15v2
    imageManager.LoadImage("s1c15v2_background", "Images/S1/C15-2/background");
    imageManager.LoadImage("s1c15v2_HWANUNG_BODY", "Images/S1/C15-2/HWANUNG_BODY");
    imageManager.LoadImage("s1c15v2_HWANUNG_FACE", "Images/S1/C15-2/HWANUNG_FACE");
    imageManager.LoadImage("s1c15v2_cloud", "Images/S1/C15-2/cloud");
  
    // s1c16
    imageManager.LoadImage("s1c16_background", "Images/S1/C16/background");
    imageManager.LoadImage("s1c16_extra_1", "Images/S1/C16/extra_1");
    imageManager.LoadImage("s1c16_extra_2", "Images/S1/C16/extra_2");
    imageManager.LoadImage("s1c16_extra_3", "Images/S1/C16/extra_3");
    imageManager.LoadImage("s1c16_extra_4", "Images/S1/C16/extra_4");
    imageManager.LoadImage("s1c16_hwanung_arm", "Images/S1/C16/hwanung_arm");
    imageManager.LoadImage("s1c16_hwanung_face", "Images/S1/C16/hwanung_face");
    imageManager.LoadImage("s1c16_hwanung_face1", "Images/S1/C16/hwanung_face1");
    imageManager.LoadImage("s1c16_hwanung_face2", "Images/S1/C16/hwanung_face2");
    imageManager.LoadImage("s1c16_hwanung", "Images/S1/C16/hwanung");
    imageManager.LoadImage("s1c16_hwanung1", "Images/S1/C16/hwanung1");
    imageManager.LoadImage("s1c16_hwanung2", "Images/S1/C16/hwanung2");
    imageManager.LoadImage("s1c16_text", "Images/S1/C16/text");
  
    // s1c17
    imageManager.LoadImage("s1c17_background", "Images/S1/C17/background");
    imageManager.LoadImage("s1c17_BUSH", "Images/S1/C17/BUSH");
    imageManager.LoadImage("s1c17_HWANUNG", "Images/S1/C17/HWANUNG");
    imageManager.LoadImage("s1c17_VASSAL", "Images/S1/C17/VASSAL");
    imageManager.LoadImage("s1c17_VASSAL1", "Images/S1/C17/VASSAL1");
    imageManager.LoadImage("s1c17_VASSAL2", "Images/S1/C17/VASSAL2");
    imageManager.LoadImage("s1c17_VASSAL3", "Images/S1/C17/VASSAL3");
    imageManager.LoadImage("s1c17_BEAR", "Images/S1/C17/BEAR");
    imageManager.LoadImage("s1c17_TIGER", "Images/S1/C17/TIGER");
  
    // s1c18
    imageManager.LoadImage("s1c18_background", "Images/S1/C18/background");
    imageManager.LoadImage("s1c18_narr", "Images/S1/C18/narr");
    imageManager.LoadImage("s1c18_tiger0", "Images/S1/C18/tiger0");
    imageManager.LoadImage("s1c18_tiger1", "Images/S1/C18/tiger1");
    imageManager.LoadImage("s1c18_bear0", "Images/S1/C18/bear0");
    imageManager.LoadImage("s1c18_bear1", "Images/S1/C18/bear1");
  
    // s1c19_1
    imageManager.LoadImage("s1c19_1_background", "Images/S1/C19/background0");
    imageManager.LoadImage("s1c19_1_hwangwoong", "Images/S1/C19/V1/hwanwoong");
  
    imageManager.LoadImage("s1c19_1_bear1", "Images/S1/C19/V1/bear1");
    imageManager.LoadImage("s1c19_1_bear2", "Images/S1/C19/V1/bear2");
    imageManager.LoadImage("s1c19_1_bear3", "Images/S1/C19/V1/bear3");
  
    imageManager.LoadImage("s1c19_1_tiger1", "Images/S1/C19/V1/tiger1");
    imageManager.LoadImage("s1c19_1_tiger2", "Images/S1/C19/V1/tiger2");
    imageManager.LoadImage("s1c19_1_tiger3", "Images/S1/C19/V1/tiger3");
  
    imageManager.LoadImage("s1c19_1_C19-1-Text", "Images/S1/C19/C19-1-Text");
  
    // s1c19_2
    imageManager.LoadImage("s1c19_2_background", "Images/S1/C19/background1");
    imageManager.LoadImage("s1c19_2_arm", "Images/S1/C19/hwanwoong_arm");
    imageManager.LoadImage("s1c19_2_mouth0", "Images/S1/C19/hwanwoong_mouth1");
    imageManager.LoadImage("s1c19_2_mouth1", "Images/S1/C19/hwanwoong_mouth0");
    imageManager.LoadImage("s1c19_2_skin", "Images/S1/C19/hwanwoong_skin");
    imageManager.LoadImage("s1c19_2_C19-2-Text", "Images/S1/C19/C19-2-Text");
  
    // s1c19_3
    imageManager.LoadImage("s1c19_3_background", "Images/S1/C19/background2");
    imageManager.LoadImage("s1c19_3_hands", "Images/S1/C19/hands");
    imageManager.LoadImage("s1c19_3_hwangwoong", "Images/S1/C19/hwanwoong_hand");
    imageManager.LoadImage("s1c19_3_basket", "Images/S1/C19/basket");
    imageManager.LoadImage("s1c19_3_C19-3-Text", "Images/S1/C19/C19-3-Text");
  
    // sequence2
  
    // s2c1
    imageManager.LoadImage("s2c1_background", "Images/S2/C1/background");
    imageManager.LoadImage("s2c1_tiger1", "Images/S2/C1/tiger1");
    imageManager.LoadImage("s2c1_tiger2", "Images/S2/C1/tiger2");
    imageManager.LoadImage("s2c1_tiger3", "Images/S2/C1/tiger3");
    imageManager.LoadImage("s2c1_bear1", "Images/S2/C1/bear1");
    imageManager.LoadImage("s2c1_bear2", "Images/S2/C1/bear2");
    imageManager.LoadImage("s2c1_bear3", "Images/S2/C1/bear3");
  
    // s2c2
    imageManager.LoadImage("s2c2_background", "Images/S2/C2/background");
    imageManager.LoadImage("s2c2_rock", "Images/S2/C2/rock");
    imageManager.LoadImage("s2c2_tiger_body", "Images/S2/C2/tiger_body");
    imageManager.LoadImage("s2c2_tiger_face", "Images/S2/C2/tiger_face");
    imageManager.LoadImage("s2c2_tiger_left", "Images/S2/C2/tiger_foot_right");
    imageManager.LoadImage("s2c2_tiger_right", "Images/S2/C2/tiger_foot_left");
    imageManager.LoadImage("s2c2_bear_body", "Images/S2/C2/bear_body");
    imageManager.LoadImage("s2c2_bear_face", "Images/S2/C2/bear_face");
    imageManager.LoadImage("s2c2_bear_left", "Images/S2/C2/bear_foot_right");
    imageManager.LoadImage("s2c2_bear_right", "Images/S2/C2/bear_foot_left");
    imageManager.LoadImage("s2c2_tiger1", "Images/S2/C2/tiger1");
    imageManager.LoadImage("s2c2_tiger2", "Images/S2/C2/tiger2");
    imageManager.LoadImage("s2c2_tiger3", "Images/S2/C2/tiger3");
    imageManager.LoadImage("s2c2_bear1", "Images/S2/C2/bear1");
    imageManager.LoadImage("s2c2_bear2", "Images/S2/C2/bear2");
    imageManager.LoadImage("s2c2_bear3", "Images/S2/C2/bear3");
  
    // s2c3
    imageManager.LoadImage("s2c3_background", "Images/S2/C3/background");
    imageManager.LoadImage("s2c3_bear", "Images/S2/C3/bear");
    imageManager.LoadImage("s2c3_bear_eye", "Images/S2/C3/bear_eye");
    imageManager.LoadImage("s2c3_tiger", "Images/S2/C3/tiger");
    imageManager.LoadImage("s2c3_basket", "Images/S2/C3/basket");
    imageManager.LoadImage("s2c3_garlic", "Images/S2/C3/garlic");
    imageManager.LoadImage("s2c3_ssuk", "Images/S2/C3/ssuk");
    imageManager.LoadImage("s2c3_text", "Images/S2/C3/text");
  
    // s2c4
    imageManager.LoadImage("s2c4_background", "Images/S2/C4/background");
    imageManager.LoadImage("s2c4_bear1", "Images/S2/C4/bear1");
    imageManager.LoadImage("s2c4_bear2", "Images/S2/C4/bear2");
    imageManager.LoadImage("s2c4_tiger", "Images/S2/C4/tiger");
    imageManager.LoadImage("s2c4_garlic", "Images/S2/C4/garlic");
    imageManager.LoadImage("s2c4_ssug", "Images/S2/C4/ssug");
    imageManager.LoadImage("s2c4_basket", "Images/S2/C4/basket");
    imageManager.LoadImage("s2c4_tear", "Images/S2/C4/tear");
    imageManager.LoadImage("s2c4_text1", "Images/S2/C4/text1");
    imageManager.LoadImage("s2c4_text2", "Images/S2/C4/text2");
    imageManager.LoadImage("s2c4_text3", "Images/S2/C4/text3");
  
    // s2c5
    imageManager.LoadImage("s2c5_background", "Images/S2/C5/background");
    imageManager.LoadImage("s2c5_button", "Images/S2/C5/button");
  
    // s2c6
    imageManager.LoadImage("s2c6_background", "Images/S2/C6/background");
    imageManager.LoadImage("s2c6_clock", "Images/S2/C6/clock");
    imageManager.LoadImage("s2c6_manul", "Images/S2/C6/manul");
    imageManager.LoadImage("s2c6_sook", "Images/S2/C6/sook");
    imageManager.LoadImage("s2c6_bear_hand", "Images/S2/C6/bear_hand");
    imageManager.LoadImage("s2c6_bear_click", "Images/S2/C6/bear_click");
    imageManager.LoadImage("s2c6_tiger_hand", "Images/S2/C6/tiger_hand");
    imageManager.LoadImage("s2c6_tiger_click", "Images/S2/C6/tiger_click");
    imageManager.LoadImage("s2c6_transparent", "Images/S2/C6/transparent");
  
    // s2c6v1
    imageManager.LoadImage("s2c6v1_background", "Images/S2/C6/V1/background");
    imageManager.LoadImage("s2c6v1_bear", "Images/S2/C6/V1/bear");
    imageManager.LoadImage("s2c6v1_bear_tear", "Images/S2/C6/V1/bear_tear");
    imageManager.LoadImage("s2c6v1_tiger", "Images/S2/C6/V1/tiger");
    imageManager.LoadImage("s2c6v1_tiger_tear", "Images/S2/C6/V1/tiger_tear");
    imageManager.LoadImage("s2c6v1_button_top", "Images/S2/C6/V1/button_top");
    imageManager.LoadImage("s2c6v1_button_bottom", "Images/S2/C6/V1/button_bottom");
  
    // s2c6v2
    imageManager.LoadImage("s2c6v2_background", "Images/S2/C6/V2/background");
    imageManager.LoadImage("s2c6v2_bear_arm", "Images/S2/C6/V2/bear_arm");
    imageManager.LoadImage("s2c6v2_tiger_arm", "Images/S2/C6/V2/tiger_arm");
    imageManager.LoadImage("s2c6v2_chars", "Images/S2/C6/V2/chars");
    imageManager.LoadImage("s2c6v2_basket", "Images/S2/C6/V2/basket");
    imageManager.LoadImage("s2c6v2_text1", "Images/S2/C6/V2/text1");
    imageManager.LoadImage("s2c6v2_text2", "Images/S2/C6/V2/text2");
    imageManager.LoadImage("s2c6v2_text3", "Images/S2/C6/V2/text3");
  
    // s2c7
    imageManager.LoadImage("s2c7_background", "Images/S2/C7/background");
    imageManager.LoadImage("s2c7_tiger1", "Images/S2/C7/tiger1");
    imageManager.LoadImage("s2c7_tiger2", "Images/S2/C7/tiger2");
    imageManager.LoadImage("s2c7_bear1", "Images/S2/C7/bear1");
    imageManager.LoadImage("s2c7_bear2", "Images/S2/C7/bear2");
  
    // s2c8
    imageManager.LoadImage("s2c8_cloud_left", "Images/S2/C8/cloud_left");
    imageManager.LoadImage("s2c8_cloud_right", "Images/S2/C8/cloud_right");
    imageManager.LoadImage("s2c8_cloud_middle", "Images/S2/C8/cloud_middle");
    imageManager.LoadImage("s2c8_lake", "Images/S2/C8/lake");
    imageManager.LoadImage("s2c8_mountains", "Images/S2/C8/mountains");
    imageManager.LoadImage("s2c8_sky", "Images/S2/C8/sky");
    imageManager.LoadImage("s2c8_sun", "Images/S2/C8/sun");
    imageManager.LoadImage("s2c8_text", "Images/S2/C8/text");
  
    // sequence 3
    
    // s3c1
    imageManager.LoadImage("s3c1_background", "Images/S3/C1/background");
    imageManager.LoadImage("s3c1_bear", "Images/S3/C1/bear");
    imageManager.LoadImage("s3c1_tiger", "Images/S3/C1/tiger");
    imageManager.LoadImage("s3c1_garlic", "Images/S3/C1/garlic");
    imageManager.LoadImage("s3c1_ssug", "Images/S3/C1/ssug");
    imageManager.LoadImage("s3c1_text", "Images/S3/C1/text");
  
    // s3c2
    imageManager.LoadImage("s3c2_background", "Images/S3/C2/background");
    imageManager.LoadImage("s3c2_body", "Images/S3/C2/body");
    imageManager.LoadImage("s3c2_eye_black", "Images/S3/C2/eye_black");
    imageManager.LoadImage("s3c2_eye_white", "Images/S3/C2/eye_white");
    imageManager.LoadImage("s3c2_left", "Images/S3/C2/left");
    imageManager.LoadImage("s3c2_right", "Images/S3/C2/right");
    imageManager.LoadImage("s3c2_Button1", "Images/S3/C2/Button1");
    imageManager.LoadImage("s3c2_Button2", "Images/S3/C2/Button2");
  
    // s3c3v1_1_1
    imageManager.LoadImage("s3c3v1_1_1_background", "Images/S3/C3/V1/_1/_1/background");
    imageManager.LoadImage("s3c3v1_1_1_bear_before", "Images/S3/C3/V1/_1/_1/bear_before");
    imageManager.LoadImage("s3c3v1_1_1_bear_after", "Images/S3/C3/V1/_1/_1/bear_after");
    imageManager.LoadImage("s3c3v1_1_1_tiger_before", "Images/S3/C3/V1/_1/_1/tiger_before");
    imageManager.LoadImage("s3c3v1_1_1_tiger_after", "Images/S3/C3/V1/_1/_1/tiger_after");
  
    // s3c3v1_1_2
    imageManager.LoadImage("s3c3v1_1_2_background", "Images/S3/C3/V1/_1/_2/background");
    imageManager.LoadImage("s3c3v1_1_2_bear", "Images/S3/C3/V1/_1/_2/bear");
    imageManager.LoadImage("s3c3v1_1_2_bear_star", "Images/S3/C3/V1/_1/_2/bear_star");
    imageManager.LoadImage("s3c3v1_1_2_tiger", "Images/S3/C3/V1/_1/_2/tiger");
    imageManager.LoadImage("s3c3v1_1_2_tiger_star", "Images/S3/C3/V1/_1/_2/tiger_star");
  
    // s3c3v1_1
    imageManager.LoadImage("s3c3v1_1_background", "Images/S3/C3/V1/_1/background");
    imageManager.LoadImage("s3c3v1_1_bear1", "Images/S3/C3/V1/_1/bear1");
    imageManager.LoadImage("s3c3v1_1_bear2", "Images/S3/C3/V1/_1/bear2");
    imageManager.LoadImage("s3c3v1_1_tiger", "Images/S3/C3/V1/_1/tiger");
    imageManager.LoadImage("s3c3v1_1_text", "Images/S3/C3/V1/_1/text");
  
    // s3c3v1_2_1
    imageManager.LoadImage("s3c3v1_2_1_background", "Images/S3/C3/V1/_2/_1/background");
    imageManager.LoadImage("s3c3v1_2_1_범녀1", "Images/S3/C3/V1/_2/_1/범녀1");
    imageManager.LoadImage("s3c3v1_2_1_범녀2", "Images/S3/C3/V1/_2/_1/범녀2");
    imageManager.LoadImage("s3c3v1_2_1_범녀3", "Images/S3/C3/V1/_2/_1/범녀3");
    imageManager.LoadImage("s3c3v1_2_1_웅녀", "Images/S3/C3/V1/_2/_1/웅녀");
    imageManager.LoadImage("s3c3v1_2_1_환웅", "Images/S3/C3/V1/_2/_1/환웅");
  
    // s3c3v1_2_2
    imageManager.LoadImage("s3c3v1_2_2_background", "Images/S3/C3/V1/_2/_2/background");
    imageManager.LoadImage("s3c3v1_2_2_범녀", "Images/S3/C3/V1/_2/_2/범녀1");
    imageManager.LoadImage("s3c3v1_2_2_웅녀", "Images/S3/C3/V1/_2/_2/웅녀");
    imageManager.LoadImage("s3c3v1_2_2_환웅", "Images/S3/C3/V1/_2/_2/환웅");
    imageManager.LoadImage("s3c3v1_2_2_button_left", "Images/S3/C3/V1/_2/_2/button_left");
    imageManager.LoadImage("s3c3v1_2_2_button_right", "Images/S3/C3/V1/_2/_2/button_right");
    imageManager.LoadImage("s3c3v1_2_2_S3C3V1_2_2_TEXT", "Images/S3/C3/V1/_2/_2/text");
  
    // s3c3v1_2
    imageManager.LoadImage("s3c3v1_2_background", "Images/S3/C3/V1/_2/background");
    imageManager.LoadImage("s3c3v1_2_text", "Images/S3/C3/V1/_2/text");
    imageManager.LoadImage("s3c3v1_2_bear_body", "Images/S3/C3/V1/_2/bear_body");
    imageManager.LoadImage("s3c3v1_2_bear_eye", "Images/S3/C3/V1/_2/bear_eye");
    imageManager.LoadImage("s3c3v1_2_tiger1", "Images/S3/C3/V1/_2/tiger1");
    imageManager.LoadImage("s3c3v1_2_tiger2", "Images/S3/C3/V1/_2/tiger2");
  
    // s3c3v1_3_1
    imageManager.LoadImage("s3c3v1_3_1_background", "Images/S3/C3/V1/_3/_1/background");
    imageManager.LoadImage("s3c3v1_3_1_웅녀", "Images/S3/C3/V1/_3/_1/웅녀");
    imageManager.LoadImage("s3c3v1_3_1_환웅", "Images/S3/C3/V1/_3/_1/환웅");
    imageManager.LoadImage("s3c3v1_3_1_heart", "Images/S3/C3/V1/_3/_1/heart");
  
    // s3c3v1_3_2
    imageManager.LoadImage("s3c3v1_3_2_background", "Images/S3/C3/V1/_3/_2/Background");
    imageManager.LoadImage("s3c3v1_3_2_character", "Images/S3/C3/V1/_3/_2/Characters");
  
    // s3c3v1_3_3
    imageManager.LoadImage("s3c3v1_3_3_background", "Images/S3/C3/V1/_3/_3/Background");
    imageManager.LoadImage("s3c3v1_3_3_dangun", "Images/S3/C3/V1/_3/_3/Dangun");
    imageManager.LoadImage("s3c3v1_3_3_text", "Images/S3/C3/V1/_3/_3/text");
  
    // s3c3v1_3
    imageManager.LoadImage("s3c3v1_3_cloud_left", "Images/S3/C3/V1/_3/_0/cloud_left");
    imageManager.LoadImage("s3c3v1_3_cloud_right", "Images/S3/C3/V1/_3/_0/cloud_right");
    imageManager.LoadImage("s3c3v1_3_cloud_middle", "Images/S3/C3/V1/_3/_0/cloud_middle");
    imageManager.LoadImage("s3c3v1_3_lake", "Images/S3/C3/V1/_3/_0/lake");
    imageManager.LoadImage("s3c3v1_3_mountains", "Images/S3/C3/V1/_3/_0/mountains");
    imageManager.LoadImage("s3c3v1_3_sky", "Images/S3/C3/V1/_3/_0/sky");
    imageManager.LoadImage("s3c3v1_3_sun", "Images/S3/C3/V1/_3/_0/sun");
    imageManager.LoadImage("s3c3v1_3_text", "Images/S3/C3/V1/_3/_0/text");
  
    // s3c3v1_4_1
    imageManager.LoadImage("s3c3v1_4_1_background", "Images/S3/C3/V1/_4/_1/background");
    imageManager.LoadImage("s3c3v1_4_1_범녀1", "Images/S3/C3/V1/_4/_1/범녀1");
    imageManager.LoadImage("s3c3v1_4_1_환웅", "Images/S3/C3/V1/_4/_1/환웅");
    imageManager.LoadImage("s3c3v1_4_1_heart", "Images/S3/C3/V1/_4/_1/heart"); 
  
    // s3c3v1_4_2
    imageManager.LoadImage("s3c3v1_4_2_background", "Images/S3/C3/V1/_4/_2/background");
    imageManager.LoadImage("s3c3v1_4_2_family", "Images/S3/C3/V1/_4/_2/family");
  
    // s3c3v1_4_3
    imageManager.LoadImage("s3c3v1_4_3_background", "Images/S3/C3/V1/_4/_3/background")
    imageManager.LoadImage("s3c3v1_4_3_body", "Images/S3/C3/V1/_4/_3/body")
    imageManager.LoadImage("s3c3v1_4_3_head", "Images/S3/C3/V1/_4/_3/head")
    imageManager.LoadImage("s3c3v1_4_3_arm", "Images/S3/C3/V1/_4/_3/arm")
    imageManager.LoadImage("s3c3v1_4_3_mouth1", "Images/S3/C3/V1/_4/_3/mouth1")
    imageManager.LoadImage("s3c3v1_4_3_mouth2", "Images/S3/C3/V1/_4/_3/mouth2")
    imageManager.LoadImage("s3c3v1_4_3_ally", "Images/S3/C3/V1/_4/_3/ally")
    imageManager.LoadImage("s3c3v1_4_3_enemy1", "Images/S3/C3/V1/_4/_3/enemy1")
    imageManager.LoadImage("s3c3v1_4_3_enemy2", "Images/S3/C3/V1/_4/_3/enemy2")
    imageManager.LoadImage("s3c3v1_4_3_enemy3", "Images/S3/C3/V1/_4/_3/enemy3")
    imageManager.LoadImage("s3c3v1_4_3_flag", "Images/S3/C3/V1/_4/_3/flag")
    imageManager.LoadImage("s3c3v1_4_3_text", "Images/S3/C3/V1/_4/_3/text");
  
    // s3c3v2_1_1
    imageManager.LoadImage("s3c3v2_1_1_text", "Images/S3/C3/V2/_1/_1/text");
    imageManager.LoadImage("s3c3v2_1_1_cloud_left", "Images/S3/C3/V2/_1/_1/cloud_left");
    imageManager.LoadImage("s3c3v2_1_1_cloud_right", "Images/S3/C3/V2/_1/_1/cloud_right");
    imageManager.LoadImage("s3c3v2_1_1_cloud_middle", "Images/S3/C3/V2/_1/_1/cloud_middle");
    imageManager.LoadImage("s3c3v2_1_1_lake", "Images/S3/C3/V2/_1/_1/lake");
    imageManager.LoadImage("s3c3v2_1_1_mountains", "Images/S3/C3/V2/_1/_1/mountains");
    imageManager.LoadImage("s3c3v2_1_1_sky", "Images/S3/C3/V2/_1/_1/sky");
    imageManager.LoadImage("s3c3v2_1_1_sun", "Images/S3/C3/V2/_1/_1/sun");
  
    // s3c3v2_1_2
    imageManager.LoadImage("s3c3v2_1_2_background", "Images/S3/C3/V2/_1/_2/background");
    imageManager.LoadImage("s3c3v2_1_2_text", "Images/S3/C3/V2/_1/_2/text");
    imageManager.LoadImage("s3c3v2_1_2_girlbody", "Images/S3/C3/V2/_1/_2/girlbody");
    imageManager.LoadImage("s3c3v2_1_2_girlface", "Images/S3/C3/V2/_1/_2/girlface");
    imageManager.LoadImage("s3c3v2_1_2_girlface2", "Images/S3/C3/V2/_1/_2/girlface2");
    imageManager.LoadImage("s3c3v2_1_2_girlhand", "Images/S3/C3/V2/_1/_2/girlhand");
  
    // s3c3v2_1_3
    imageManager.LoadImage("s3c3v2_1_3_background", "Images/S3/C3/V2/_1/_3/background");
    imageManager.LoadImage("s3c3v2_1_3_hwanwoong_text", "Images/S3/C3/V2/_1/_3/hwanwoong_text");
    imageManager.LoadImage("s3c3v2_1_3_girl_text", "Images/S3/C3/V2/_1/_3/girl_text");
    imageManager.LoadImage("s3c3v2_1_3_girl_body", "Images/S3/C3/V2/_1/_3/girl");
    imageManager.LoadImage("s3c3v2_1_3_girl_eye_1", "Images/S3/C3/V2/_1/_3/girleye1");
    imageManager.LoadImage("s3c3v2_1_3_girl_eye_2", "Images/S3/C3/V2/_1/_3/girleye2");
    imageManager.LoadImage("s3c3v2_1_3_hwan_body", "Images/S3/C3/V2/_1/_3/hwan");
    imageManager.LoadImage("s3c3v2_1_3_hwan_mouse_1", "Images/S3/C3/V2/_1/_3/hwanmouse1");
    imageManager.LoadImage("s3c3v2_1_3_hwan_mouse_2", "Images/S3/C3/V2/_1/_3/hwanmouse2");
    imageManager.LoadImage("s3c3v2_1_3_hwan_shoe_1", "Images/S3/C3/V2/_1/_3/hwanshoe");
    imageManager.LoadImage("s3c3v2_1_3_hwan_shoe_2", "Images/S3/C3/V2/_1/_3/hwanshoe2");
  
    // s3c3v2_2_1
    imageManager.LoadImage("s3c3v2_2_1_background", "Images/S3/C3/V2/_2/_1/background");
    imageManager.LoadImage("s3c3v2_2_1_couple", "Images/S3/C3/V2/_2/_1/couple");
    imageManager.LoadImage("s3c3v2_2_1_extra_left", "Images/S3/C3/V2/_2/_1/extra_left");
    imageManager.LoadImage("s3c3v2_2_1_extra_right", "Images/S3/C3/V2/_2/_1/extra_right");
  
    // s3c3v2_2_2
    imageManager.LoadImage("s3c3v2_2_2_background", "Images/S3/C3/V1/_3/_2/Background");
    imageManager.LoadImage("s3c3v2_2_2_character", "Images/S3/C3/V1/_3/_2/Characters");
  
    // s3c3v2_2_3
    imageManager.LoadImage("s3c3v2_2_3_background", "Images/S3/C3/V2/_2/_3/background");
    imageManager.LoadImage("s3c3v2_2_3_text", "Images/S3/C3/V2/_2/_3/text");
    imageManager.LoadImage("s3c3v2_2_3_dangun", "Images/S3/C3/V2/_2/_3/dangun");
  
    // s3c3v2
    imageManager.LoadImage("s3c3v2_text", "Images/S3/C3/V2/_0/text");
    imageManager.LoadImage("s3c3v2_background", "Images/S3/C3/V2/_0/background");
    imageManager.LoadImage("s3c3v2_bear1", "Images/S3/C3/V2/_0/bear1");
    imageManager.LoadImage("s3c3v2_bear2", "Images/S3/C3/V2/_0/bear2");
    imageManager.LoadImage("s3c3v2_tiger1", "Images/S3/C3/V2/_0/tiger1");
    imageManager.LoadImage("s3c3v2_tiger2", "Images/S3/C3/V2/_0/tiger2");
    imageManager.LoadImage("s3c3v2_tiger3", "Images/S3/C3/V2/_0/tiger3");
    console.log("종료하고")
  }
}
