class ElectricalAppliance {
    #type = '';
    #power = 0;
    #inSocket = false;
    #name = '';

    constructor(type, name, power) {
        this.#type = type || '';
        this.#name = name || '';
        this.#power = power || 0;
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
        return this.#connectedDevices.find((item) => item.ge)
    }
}

const tv1 = new Television('SAMSUNG UE50', 20);
const tv2 = new Television('XIAOMI MI TV 4A', 40);

const mw1 = new MicroWave('SAMSUNG ME-88', 800);
const mw2 = new MicroWave('LG cono M52', 800);
mw2.turnOn();

const bedRoom = new Room('bedroom 1', tv1, tv2, mw1, mw2);
bedRoom.printRoomDevices();