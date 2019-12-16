var Person = /** @class */ (function () {
    function Person(name, sex, children, siblings, partner) {
        if (children === void 0) { children = []; }
        if (siblings === void 0) { siblings = []; }
        if (partner === void 0) { partner = null; }
        this.name = name;
        this.sex = sex;
        this.children = children;
        this.siblings = siblings;
        this.partner = partner;
    }
    Object.defineProperty(Person.prototype, "details", {
        get: function () {
            return "\n                NAME : " + this.name + "\n                SEX : " + this.sex + "\n                Children : " + this.children + "\n                Siblings : " + this.siblings + "\n                Partner : " + (this.partner ? this.partner.details : null) + "\n        ";
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var QueenAnga = new Person('Queen Anga', 'F');
var kingShan = new Person('King Shan', 'M', [], [], QueenAnga);
console.log(kingShan.details);
//# sourceMappingURL=lengaburu.js.map