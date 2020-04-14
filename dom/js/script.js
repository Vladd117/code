let button1 = {
    beckColor: 'black',
    textColor: 'burlywood'
};
let newColor = function(color) {
    let element = document.getElementById("btn01");
    element.style.backgroundColor = color;
};
let nColor = function(color) {
    let element = document.getElementById("btn02");
    element.style.backgroundColor = color;
    element.innerHTML = color;
};

function validateForm() {
    let element = document.forms.form01.fname.value;
    if (element == "") {
        alert("Name is empty");
        return false;
    }

}
let red = 1;
let redText = 254;
let i = 1;

let box = document.querySelectorAll('.box');
console.log(box);
let color = window.setInterval(() => {
    red += i;
    redText -= i;
    box[0].style.backgroundColor = 'rgb(' + red + ',0,0)';
    box[0].style.color = 'rgb(' + redText + ',0,0)';
    if (red > 254 || red < 1) {
        console.log(i);
        i *= -1;

        //red = 0;
    }
}, 30);

let circle = document.querySelectorAll('.circle');
circle.forEach((item, i, cir) => {
    item.style.backgroundColor = "blue";
});

let div = document.createElement('div'),
    div2 = document.createElement('div'),
    div3 = document.createElement('div'),
    text = document.createTextNode('Some Text...');

div.classList.add('black');
document.body.appendChild(div);

div.innerHTML = '<h1>Hello, my Friend!</h1>';
div2.textContent = "Hello!"

div2.classList.add('black');
div3.classList.add('black');
let wrapper = document.querySelector('.wrapper');
wrapper.insertBefore(div3, circle[0]);
wrapper.appendChild(div2);
wrapper.removeChild(circle[3]);


console.log(div);


//console.log(red);