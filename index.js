

// Part 1: SOLID Principles

// 1. Single Responsibility Principle (SRP)


class Report {
  constructor(data) {
    this.data = data;
  }

  generateReport() {
    return `Report Data: ${this.data}`;
  }
}

class PDFExporter {
  save(reportContent) {
    console.log("Saving to PDF:", reportContent);
  }
}

const report = new Report("Sales Data");
const exporter = new PDFExporter();
exporter.save(report);

///////////////////////////////////////////////////

// 2. Open/Closed Principle (OCP)

class Shape {
  draw() {
    throw new Error("draw() must be implemented");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing Circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing Square");
  }
}

class ShapeDrawer {
  draw(shape) {
    shape.draw();
  }
}

////////////////////////////////////////

// 3. Liskov Substitution Principle (LSP)

class Vehicle {}

class EngineVehicle extends Vehicle {
  startEngine() {
    console.log("Engine started");
  }
}

class Car extends EngineVehicle {}

class Bicycle extends Vehicle {}

///////////////////////////////

// 4. Interface Segregation Principle (ISP)

class Printer {
  print() {}
}

class Scanner {
  scan() {}
}

class Fax {
  fax() {}
}

class BasicPrinter extends Printer {
  print() {
    console.log("Printing...");
  }
}


//////////////////////////////////

// 5. Dependency Inversion Principle (DIP)

class Logger {
  log(msg) {
    throw new Error("Must implement log method");
  }
}

class FileLogger extends Logger {
  log(msg) {
    console.log("Log to file:", msg);
  }
}

class ConsoleLogger extends Logger {
  log(msg) {
    console.log("Console log:", msg);
  }
}

class App {
  constructor(logger) {
    this.logger = logger;
  }

  run() {
    this.logger.log("Running...");
  }
}

const logger = new ConsoleLogger();
const app = new App(logger);
app.run();

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////

// Part 2: Creational Design Patterns Lab

// ### 1. Singleton Pattern

class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance;
    }

    this.settings = { env: "development" };
    Config.instance = this;
  }

  static getInstance() {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}


const config1 = Config.getInstance();
const config2 = Config.getInstance();

console.log(config1 === config2); // true


////////////////////////////////////////////

// ### 2. Factory Pattern

class EmailNotification {
  send(msg) {
    console.log("Email:", msg);
  }
}

class SMSNotification {
  send(msg) {
    console.log("SMS:", msg);
  }
}

class PushNotification {
  send(msg) {
    console.log("Push:", msg);
  }
}

class NotificationFactory {
  static create(type) {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        throw new Error("Invalid type");
    }
  }
}

// usage
const notification = NotificationFactory.create("email");
notification.send("Hello!");

//////////////////////////////////////

// ### 3. Builder Pattern

class HTMLBuilder {
  constructor() {
    this.card = {};
  }

  setTitle(title) {
    this.card.title = title;
    return this;
  }

  setImage(image) {
    this.card.image = image;
    return this;
  }

  setDescription(desc) {
    this.card.description = desc;
    return this;
  }

  build() {
    return this.card;
  }
}

// usage
const card = new HTMLBuilder()
  .setTitle("My Card")
  .setImage("url.jpg")
  .setDescription("This is a card.")
  .build();

console.log(card);


