var Car = /** @class */ (function () {
    function Car(name, displacement) {
        var _this = this;
        this.getDetails = function () {
            console.log("Name : " + _this.name + " \n Displacement : " + _this.displacement);
        };
        this.name = name;
        this.displacement = displacement;
    }
    Car.prototype.move = function () {
        throw new Error("Method not implemented.");
    };
    return Car;
}());
var Rapid = new Car('Skoda Rapid', 1600);
Rapid.getDetails();
//# sourceMappingURL=objects.js.map