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

let button = document.querySelectorAll('.action-button');
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
        let deg = Math.floor(Math.random() * 12 - 7);
        console.log(deg);
        item.style.backgroundColor = "rgb(220, 150, 0)";
        item.style.transform = "scale(1.2)";
        item.style.transform = "rotate(" + deg + "deg)";
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

let anbtn = document.querySelector('#anbtn'),
    elem = document.querySelector('#elem'),
    animBox = document.querySelector('.anim-box');


function animat() {
    let pos = 0;
    console.log('go' + animBox.clientWidth);
    let timerID = setInterval(frame, 10);

    function frame() {
        if (pos == animBox.clientWidth - elem.clientWidth) {
            clearInterval(timerID);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';

        }
    }

}
anbtn.addEventListener('click', () => {
    // console.log(animBox.clientHeight - elem.clientHeight + "px");
    // console.log(elem.style.top);
    //anbtn.style.backgroundColor = "black";
    if (elem.style.top == 0 || elem.style.top == animBox.clientHeight - elem.clientHeight + "px") {
        animat();
    }


});

let btnBlock = document.querySelector('.button-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', (event) => {
    // if (event.target && event.target.tagName == 'BUTTON' &&
    //     event.target.classList.contains('frst')
    if (event.target && event.target.matches('button.frst')) {
        console.log('ok');
        console.log(event.target.classList.value);
    } else { console.log(event.target.classList); }
});

//console.log(button)

let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#ffffff',
    }
};
console.log(JSON.stringify(options));
console.log(JSON.parse(JSON.stringify(options)));

let scopeInf = function() {
    console.log('This scope is: ' + this);
    console.log(this);
};
let obj = {
    name: 'Vladd',
};
let scopeObj = {
    scp: scopeInf.bind(obj),
    scopeInfo() {
        console.log('This scope is: ' + this);
        console.log(this);
    },
    mouseEvent() {
        let btn = document.querySelector('.action-button1');
        this.btn = btn;
        let overColor = 'red';
        let outColor = 'rgb(202, 74, 0)';

        function over() {
            this.style.backgroundColor = overColor;
            this.style.transform = 'translate(2px, 2px)';
            this.style.color = 'rgb(255, 208, 0)';
            console.log(this);
        }

        function out() {
            this.style.backgroundColor = outColor;
            this.style.transform = 'translate(0px, 0px)';
            this.style.color = 'white';
        }
        return { over: over, out: out };
    },
};


scopeObj.scp();
scopeObj.scopeInfo.bind(obj);
scopeInf.bind(this);
let scopeBtn = scopeObj.mouseEvent();
scopeObj.btn.addEventListener('mouseover', scopeBtn.over);
scopeObj.btn.addEventListener('mouseout', scopeBtn.out);