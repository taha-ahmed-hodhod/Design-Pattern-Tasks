class PaymentService { process() { console.log("Payment Processed"); } }
class InventoryService { update() { console.log("Inventory Updated"); } }

class CheckoutService {
    constructor() {
        this.payment = new PaymentService();
        this.inventory = new InventoryService();
    }
    checkout() {
        this.payment.process();
        this.inventory.update();
        console.log("Order Finished");
    }
}

// Test
new CheckoutService().checkout();