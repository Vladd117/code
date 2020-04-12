//alert('Flappy Bird');
let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");
let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();
bird.src = "./img/flappy_bird_bird.png";
bg.src = "./img/flappy_bird_bg.png";
fg.src = "./img/flappy_bird_fg.png";
pipeUp.src = "./img/flappy_bird_pipeUp.png";
pipeBottom.src = "./img/flappy_bird_pipeBottom.png";

let fly = new Audio();
let scoreAudio = new Audio();
fly.src = "./audio/fly.mp3";
scoreAudio.src = "./audio/score.mp3";
fly.volume = 0.1;
scoreAudio.volume = 0.1;


document.addEventListener("keydown", moveUp);

let gap = 100;
let xPos = 10;
let yPos = 150;
let grav = 0.8;
let score = 0;

function moveUp() {
    yPos -= 30;
    fly.pause();
    fly.currentTime = 0;
    fly.play();
}
let pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0
};

function draw() {
    ctx.drawImage(bg, 0, 0);
    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
        pipe[i].x -= 0.5;
        if (pipe[i].x == 125) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }
        if (
            xPos + bird.width >= pipe[i].x &&
            xPos <= pipe[i].x + pipeUp.width &&
            (yPos <= pipe[i].y + pipeUp.height ||
                yPos + bird.height >= pipe[i].y + pipeUp.height + gap) ||
            yPos + bird.height >= cvs.height - fg.height
        ) {
            location.reload();
        }
        if (pipe[i].x == 5) {
            score++;
            scoreAudio.play();
        }
    }
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);
    yPos += grav;
    ctx.fillStyle = "#ffffff";
    ctx.font = "20px Verdana";
    ctx.fillText("Score: " + score, 10, cvs.height - 10);

    requestAnimationFrame(draw);
}
pipeBottom.onload = draw;