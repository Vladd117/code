function hello() {
    console.log('Hello!', this);
}

let person2 = {
    name: 'Petr',
    age: 35,
    sayHello: hello,
};

let person = {
    name: 'Vasiliy',
    age: 32,
    sayHello: hello,
    sayHalloWin: hello.bind(Window),
    sayHelloPerson2: hello.bind(person2),
    say() {
        person2.sayHello();
    },
    logInfo() {
        console.log(`Name is ${this.name}, age is ${this.age}`);
    }
};


hello();
person.sayHello();
person.sayHalloWin();
person.sayHelloPerson2();
person.say();
person.logInfo.call(person2);