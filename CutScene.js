class Dialog {
  constructor() {
    this.elementList = [];
  }
}

class DialogElement {
  constructor() {
    this.result = null;
  }

  Setup() {
    // Abstract method to be overridden
  }

  Draw() {
    // Abstract method to be overridden
  }

  Release() {
    // Abstract method to be overridden
  }

  isRunning() {
    // Abstract method to be overridden
    return false;
  }
}

class TextBox extends DialogElement {
  constructor() {
    super();
    this.text = "";
  }

  Setup() {
    // Setup TextBox
  }

  Draw() {
    // Draw TextBox
    textSize(32);
    fill(0);
    text(this.text, 50, 50);
  }

  Release() {
    // Release TextBox
  }

  isRunning() {
    return true;
  }
}

class ButtonBox extends DialogElement {
  constructor() {
    super();
    this.text = "";
  }

  Setup() {
    // Setup ButtonBox
  }

  Draw() {
    // Draw ButtonBox
    textSize(32);
    fill(0);
    rect(100, 100, 200, 50);
    fill(255);
    textAlign(CENTER, CENTER);
    text(this.text, 200, 125);
  }

  Release() {
    // Release ButtonBox
  }

  isRunning() {
    return true;
  }
}
let dialog;
let textBox;
let buttonBox;

function setup() {
  createCanvas(400, 400);
  dialog = new Dialog();
  textBox = new TextBox();
  textBox.text = "Hello, World!";
  buttonBox = new ButtonBox();
  buttonBox.text = "Click Me";

  dialog.elementList.push(textBox);
  dialog.elementList.push(buttonBox);

  for (let element of dialog.elementList) {
    element.Setup();
  }
}

function draw() {
  background(220);
  for (let element of dialog.elementList) {
    element.Draw();
  }
}
