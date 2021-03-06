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

let disp = document.querySelector('.cont');

let foo = function(n) {
    let c = n * 9;
    let d = 0;
    for (let i = 0; i < c; i++) {
        d += c;
    }
    return d;
};
console.log(foo.prototype);
disp.innerHTML = (`Result of function 
${foo(5)}, function prototype: ${foo.prototype} <br><br><br>`);


let a = 8;
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (a > j) {
            disp.innerHTML += "&nbsp;";
        } else {
            disp.innerHTML += "* ";
        }
    }
    a -= 1;
    disp.innerHTML += "<br>";
}