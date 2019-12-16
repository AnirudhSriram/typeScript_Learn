class Person {
    name: string;
    sex: string;
    Parents: Person[];
    children: Person[];
    siblings: Person[];
    partner: Person;

    constructor(name: string, sex: string, parents: Person[] = null, children: Person[] = [], siblings: Person[] = [], partner: Person = null) {
        this.name = name;
        this.sex = sex;
        this.children = partner ? partner.children : children;
        this.siblings = siblings;
        this.partner = partner;
    }


    public get details(): string {
        return `
                NAME : ${this.name}
                SEX : ${this.sex}
                Children : ${this.children}
                Siblings : ${this.siblings}
                Partner : ${this.partner ? this.partner.details : null}
        `
    }

}
const Chit = new Person()
const QueenAnga = new Person('Queen Anga', 'F');

const kingShan = new Person('King Shan', 'M', [], [], [], QueenAnga);

console.log(kingShan.details);

