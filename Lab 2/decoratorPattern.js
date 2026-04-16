class Pizza {
    getDescription() { return "Pizza"; }
    cost() { return 0; }
}

class Margherita extends Pizza {
    getDescription() { return "Margherita"; }
    cost() { return 8; }
}

class PizzaDecorator extends Pizza {
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }
}

class Cheese extends PizzaDecorator {
    getDescription() { return this.pizza.getDescription() + ", Cheese"; }
    cost() { return this.pizza.cost() + 2; }
}

// Test
let myPizza = new Margherita();
myPizza = new Cheese(myPizza);
console.log(`${myPizza.getDescription()} : $${myPizza.cost()}`);