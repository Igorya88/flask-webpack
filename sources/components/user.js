
class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHallo() {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
}

export {User};