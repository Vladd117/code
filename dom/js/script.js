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
div2.textContent = "Hello!";

div2.classList.add('black');
div3.classList.add('black');
let wrapper = document.querySelector('.wrapper');
wrapper.insertBefore(div3, circle[0]);
wrapper.appendChild(div2);
wrapper.removeChild(circle[3]);

//-------------------------------------------------------------------

let button = document.querySelectorAll('#abtn');
// button[0].onclick = function() {
//     alert('Don`t touch the button!');
// };

// button[item].addEventListener('click', (event) => {
// 	let target = event.target;
// 	console.log('Событие: ' + event.type + ' с элементом: ' + event.target);
// });

// button[item].addEventListener('mouseover', () => {
// 	button[0].style.backgroundColor = "rgb(220, 150, 0)";
// 	button[0].style.transform = "scale(1.2)";
// 	button[0].style.transition = "0.5s";

// });
// button[item].addEventListener('mouseout', () => {
// 	button[0].style.backgroundColor = "rgb(202, 74, 0)";
// 	button[0].style.transform = "scale(1)";

// });

//-------------------------------------------------------------------

button.forEach((item) => {
    item.addEventListener('click', (event) => {
        //let target = event.target;
        console.log('Событие: ' + event.type + ' с элементом: ' + event.target);
    });

    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "rgb(220, 150, 0)";
        item.style.transform = "scale(1.2)";
        item.style.transform = "rotate(5deg)";
        item.style.transition = "0.5s";

    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = "rgb(202, 74, 0)";
        item.style.transform = "scale(1)";
        item.style.transform = "rotate(0deg)";

    });
});
let link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Событие: ' + event.type + ' с элементом: ' + event.target);
});

//console.log(button)