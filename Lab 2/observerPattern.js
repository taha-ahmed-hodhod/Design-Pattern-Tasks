class Device {
    constructor(name) { this.name = name; }
    update(temp, humidity) {
        console.log(`${this.name} update: Temp ${temp}, Humidity ${humidity}`);
    }
}

class WeatherStation {
    constructor() { this.devices = []; }
    subscribe(device) { this.devices.push(device); }
    notify(temp, humidity) {
        this.devices.forEach(d => d.update(temp, humidity));
    }
    setWeatherData(temp, humidity) {
        this.notify(temp, humidity);
    }
}

// Test
const station = new WeatherStation();
station.subscribe(new Device("Phone"));
station.setWeatherData(30, 60);