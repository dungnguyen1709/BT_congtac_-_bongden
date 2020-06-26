let SwitchButton = function () {
    this.connectToLamp = function (ElectricLamp) {
        this.lamp = ElectricLamp;
    }

    this.switchOff = function () {
        this.status = false;
        this.lamp.turnOff();
        alert(" Not lighting ")

    }

    this.switchOn = function () {
        this.status = true;
        this.lamp.turnOn();
        alert(" Lighting ");

    }

}