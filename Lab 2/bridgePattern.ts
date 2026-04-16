interface ControlMethod {
    drive(): string;
}

class ManualControl implements ControlMethod {
    drive(): string { return "Manual Control"; }
}

class AutomaticControl implements ControlMethod {
    drive(): string { return "Automatic Control"; }
}

abstract class Vehicle {
    constructor(protected controlMethod: ControlMethod) {}
    abstract drive(): void;
}

class Car extends Vehicle {
    drive(): void {
        console.log(`Car is driving with ${this.controlMethod.drive()}`);
    }
}

// Test
const manualCar = new Car(new ManualControl());
manualCar.drive();