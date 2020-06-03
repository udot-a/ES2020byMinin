class Person {
    static type = "HUMAN";

    static #area = "EARTH"

    static getArea() {
        return this.#area === "EARTH" ? "I leave in our planet" : "I am from another space system"
    }
    name = "unknown name";
    #year = 1978;

    // constructor(name) {
    //     this.name = name;
    // }

    get age() {
       return new Date().getFullYear() - this.#year;
    }

    set age(age) {
        if (age >0) {
            this.#year = new Date().getFullYear() - age;
        }
    }
}

const dron = new Person;

console.log(dron.age = 25);

console.log(Person.type);
console.log(Person.getArea());
