class ElectricalAppliance {
    #type = '';
    #power = 0;
    #inSocket = false;
    #name = '';

    constructor(type = '', name = '', power = 0) {
        this.#type = type;
        this.#name = name;
        this.#power = power;
    }

    getType() {
        return this.#type;
    }

    getPower() {
        return this.#power;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    isConnectedToSocket() {
        return this.#inSocket;
    }

    turnOn() {
        this.#inSocket = true;
    }

    turnOff() {
        this.#inSocket = false;
    }

    toString() {
        return `Type: ${this.#type}; Name: ${this.#name}; Power: ${this.#power}; Turn on: ${this.#inSocket}`;
    }
}

class Television extends ElectricalAppliance {

    constructor(name, power) {
        const type = 'TV';

        super(type, name, power);
    }
}

class MicroWave extends ElectricalAppliance {

    constructor(name, power) {
        const type = 'microwave';

        super(type, name, power);
    }
}

class Room {

    #name = '';
    #connectedDevices = [];
    #consumedPower = 0;

    constructor(name, ...electricalAppliance) {
        this.#name = name;
        this.#connectedDevices = electricalAppliance;

        this.calculatePower();
    }

    addDevice(device) {
        this.#connectedDevices.push(device);
        this.calculatePower();
    }

    printRoomDevices() {
        this.#connectedDevices.forEach((device, i) => {
            console.log(`${i + 1}) ` + device.toString());
        });
    }

    calculatePower() {
        this.#consumedPower = this.#connectedDevices.reduce((sum, item) => {
            return sum + item.getPower();
        }, 0);
    }

    getPower() {
        return this.#consumedPower;
    }

    findDeviceByName(name) {
        return this.#connectedDevices.find((item) => item.getName() === name);
    }
}
