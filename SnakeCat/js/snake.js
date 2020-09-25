let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i = 0; i < 100; i++) {
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}

let excel = document.getElementsByClassName('excel');
//console.log(excel);

let x = 1,
    y = 10;

for (let i = 0; i < excel.length; i++) {
    if (x > 10) {
        x = 1;
        y--;
    }
    excel[i].setAttribute('posX', x);
    excel[i].setAttribute('posY', y);
    x++;
}
//excel[56].classList.add('snakeBody');
//excel[57].classList.add('snakeHead');
function generateSnake() {
    let posX = Math.round(Math.random() * (8 - 3) + 3);
    let posY = Math.round(Math.random() * (10 - 1) + 1);
    return [posX, posY];
}
let coordinats = generateSnake();
let snakeBody = [
    document.querySelector('[posX = "' + coordinats[0] +
        '"][posY = "' + coordinats[1] + '"'),
    document.querySelector('[posX = "' + (coordinats[0] - 1) +
        '"][posY = "' + coordinats[1] + '"'),
    document.querySelector('[posX = "' + (coordinats[0] - 2) +
        '"][posY = "' + coordinats[1] + '"')
];
//console.log(coordinats);

for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
}
snakeBody[0].classList.add('snakeHead');

let mouse;

function createMouse() {
    function generateMouse() {
        let posX = Math.round(Math.random() * (10 - 1) + 1);
        let posY = Math.round(Math.random() * (10 - 1) + 1);
        return [posX, posY];
    }

    let x = generateMouse()[0];
    let y = generateMouse()[1];


    mouse = document.querySelector('[posX = "' + x + '"][posY = "' + y + '"');


    while (mouse.classList.contains('snakeBody') || mouse.classList.contains('snakeHead')) {
        mouse = document.querySelector('[posX = "' + x +
            '"][posY = "' + y + '"');
    }
    mouse.classList.add('mouse');

}
createMouse();

let direction = 'right';
let steps = false;

let input = document.createElement('input');
input.classList.add('input');
document.body.appendChild(input);

let score = 0;
input.value = `Your score: ${score}`;

function move() {
    let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
    //console.log(snakeCoordinates);
    snakeBody[0].classList.remove('snakeHead');
    snakeBody[(snakeBody.length - 1)].classList.remove('snakeBody');
    snakeBody.pop();

    if (direction == 'right') {
        if (snakeCoordinates[0] < 10) {
            snakeBody.unshift(document.querySelector('[posX = "' +
                (+snakeCoordinates[0] + 1) + '"][posY = "' + snakeCoordinates[1] + '"'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + (+1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
        }
    } else if (direction == 'left') {
        if (snakeCoordinates[0] > 1) {
            snakeBody.unshift(document.querySelector('[posX = "' +
                (+snakeCoordinates[0] - 1) + '"][posY = "' + snakeCoordinates[1] + '"'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "10"][posY = "' + snakeCoordinates[1] + '"]'));
        }
    } else if (direction == 'up') {
        if (snakeCoordinates[1] < 10) {
            snakeBody.unshift(document.querySelector('[posX = "' +
                (+snakeCoordinates[0]) + '"][posY = "' + (+snakeCoordinates[1] + 1) + '"'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "1"]'));
        }
    } else if (direction == 'down') {
        if (snakeCoordinates[1] > 1) {
            snakeBody.unshift(document.querySelector('[posX = "' +
                (+snakeCoordinates[0]) + '"][posY = "' + (+snakeCoordinates[1] - 1) + '"'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "10"]'));
        }
    }

    if (snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') &&
        snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY')) {
        mouse.classList.remove('mouse');
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        score++;
        input.value = `Your score: ${score}`;
        createMouse();
    }

    if (snakeBody[0].classList.contains('snakeBody')) {
        alert('Game Over');
        clearInterval(interval);
    }

    for (let i = 1; i < snakeBody.length; i++) {
        //console.log(i);
        snakeBody[i].classList.add('snakeBody');
        snakeBody[0].classList.remove('snakeBody');
        snakeBody[0].classList.add('snakeHead');
    }
    steps = true;

}
let interval = setInterval(move, 300);

window.addEventListener('keydown', function(e) {
    if (steps == true) {
        if (e.keyCode == 37 && direction != 'right') {
            steps = false;
            direction = 'left';
        } else if (e.keyCode == 38 && direction != 'down') {
            steps = false;
            direction = 'up';
        } else if (e.keyCode == 39 && direction != 'left') {
            steps = false;
            direction = 'right';
        } else if (e.keyCode == 40 && direction != 'up') {
            steps = false;
            direction = 'down';
        }
    }
    //console.log(direction);
});
//console.log(mouse);
//console.log(snakeBody);