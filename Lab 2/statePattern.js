class RedState {
    change(light) {
        console.log("Now Green");
        light.setState(new GreenState());
    }
}
class GreenState {
    change(light) {
        console.log("Now Yellow");
        light.setState(new YellowState());
    }
}
class YellowState {
    change(light) {
        console.log("Now Red");
        light.setState(new RedState());
    }
}

class TrafficLight {
    constructor() { this.state = new RedState(); }
    setState(state) { this.state = state; }
    change() { this.state.change(this); }
}

// Test
const tl = new TrafficLight();
tl.change(); // To Green
tl.change(); // To Yellow