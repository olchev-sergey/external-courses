//---------------------ElectricalAppliance declarration

function ElectricalAppliance(type = '', name = '', power = 0) {
    this._type = type;
    this._name = name;
    this._power = power;
    this._inSocket = false;
}

ElectricalAppliance.prototype.getType = function () {
    return this._type;
};

ElectricalAppliance.prototype.getPower = function () {
    return this._power;
};

ElectricalAppliance.prototype.getName = function () {
    return this._name;
};

ElectricalAppliance.prototype.setName = function (name) {
    this._name = name;
};

ElectricalAppliance.prototype.isConnectedToSocket = function () {
    return this._inSocket;
};

ElectricalAppliance.prototype.turnOn = function () {
    this._inSocket = true;
};

ElectricalAppliance.prototype.turnOff = function () {
    this._inSocket = false;
};

ElectricalAppliance.prototype.toString = function () {
    return `Type: ${this._type}; Name: ${this._name}; Power: ${this._power}; Turn on: ${this._inSocket}`;
};

//--------------ElectricalAppliance children  declaration

function Television(name, power) {
    const type = 'TV';
    ElectricalAppliance.call(this, type, name, power);
}

Television.prototype = Object.create(ElectricalAppliance.prototype);


function MicroWave(name, power) {
    const type = 'microwave';
    ElectricalAppliance.call(this, type, name, power);
}

MicroWave.prototype = Object.create(ElectricalAppliance.prototype);

function Room(name = '', ...electricalAppliance) {
    this._name = name;
    this._connectedDevices = electricalAppliance || [];
    this._consumedPower = 0;
    this.calculatePower();
}

//---------------Room declaration

Room.prototype.calculatePower = function () {
    this._consumedPower = this._connectedDevices.reduce((sum, item) => {
        return sum + item.getPower();
    }, 0);
};

Room.prototype.addDevice = function (device) {
    this._connectedDevices.push(device);
    this.calculatePower();
};

Room.prototype.printRoomDevices = function () {
    this._connectedDevices.forEach((device, i) => {
        console.log(`${i + 1}) ` + device.toString());
    });
};

Room.prototype.getPower = function () {
    return this._consumedPower;
};

Room.prototype.findDeviceByName = function (name) {
    return this._connectedDevices.find((item) => item.getName() === name);
};
