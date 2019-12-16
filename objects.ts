interface vehicle {
    move();
}

class Car implements vehicle{
    move() {
        throw new Error("Method not implemented.");
    }
    name:String;
    displacement:number;
    constructor(name:string,displacement:number){
        this.name  = name;
        this.displacement = displacement;
    }
    getDetails = () => {
        console.log(`Name : ${this.name} \n Displacement : ${this.displacement}`)
    }
}

const Rapid:Car = new Car('Skoda Rapid', 1600);

Rapid.getDetails();