let person1 = {
    name: 'vasya',
    age: 28,
    job: 'frontend'
};
let person2 = {
    name: 'masha',
    age: 24,
    job: 'SMM'
};

function personLog(person) {
    let logOut = function() {
        console.log(`Persons name: ${this.name}, age is ${this.age}, job is ${this.job}`);
    };
    return logOut.bind(person);
}


let pers1 = personLog(person1);
let pers2 = personLog(person2);



pers1();
pers2();