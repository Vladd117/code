const KEYS = {
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
};

let game = {
    //platform: null,
    level: 1,
    arr: 0,
    ball: null,
    blocks: [],
    rows: 4,
    cols: 8,
    width: 1024,
    height: 576,
    ctx: null,
    pause: 0,
    //gameGoOn: true,
    score: 0,
    gameMassage: " ",
    i: 0,
    k: 0,
    sprites: { //Объявление переменных спрайтов в объекте
        background: null,
        ball: null,
        platform: null,
        //block: null
    },
    sounds: {
        bump01: null,
        bump02: null,
        bump03: null,
    },
    getLevel() {
        let lev = JSON.parse(localStorage.getItem("levelUp"));
        if (lev) { this.level = lev; } else { this.level = 1; }
        console.log(this.level);
        localStorage.setItem("levelUp", JSON.stringify(1));
    },
    init() {
        this.getLevel();
        //this.level += arr;
        //Инициализация API
        this.ctx = document.getElementById("arcanoid").getContext("2d");
        this.setEvents();
        this.setTextFont();
    },
    setTextFont() {
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "#FFFFFF";
    },

    setEvents() {
        window.addEventListener("keydown", e => {
            //console.log(e.keyCode);

            if (e.keyCode === KEYS.LEFT) {
                this.platform.start(e.keyCode);
            }
            if (e.keyCode === KEYS.RIGHT) {
                this.platform.start(e.keyCode);
            }
            if (e.keyCode === KEYS.SPACE && this.platform.ball === true) {

                this.platform.fire(e.keyCode);
            }
            if (e.keyCode === KEYS.SPACE && this.platform.ball === false) {
                this.pause *= -1;
            }

            console.log(this.pause + '   ' + this.platform.ball);

        });
        window.addEventListener("keyup", e => {
            this.platform.stop();

        });

    },

    preload(callback) {
        //Прелоад спрайтов
        let loaded = 0;
        let required = Object.keys(this.sprites).length;
        required += Object.keys(this.sounds).length; //проверка кол-ва объектов

        let onResourceLoad = () => {
            ++loaded;
            if (loaded >= required) {
                callback();
            }
        };
        this.prloadSprites(onResourceLoad);
        this.prloadSounds(onResourceLoad);
    },

    prloadSprites(onResourceLoad) {
        for (let key in this.sprites) { //Цикл загрузки спрайтов
            this.sprites[key] = new Image();
            this.sprites[key].src = "./img/" + key + ".png";

            this.sprites[key].addEventListener("load", onResourceLoad);

        }
    },
    prloadSounds(onResourceLoad) {
        for (let key in this.sounds) { //Цикл загрузки спрайтов
            this.sounds[key] = new Audio("./sounds/" + key + ".mp3");
            this.sounds[key].addEventListener("canplaythrough", onResourceLoad, { once: true });
            this.sounds[key].volume = 0.1;

        }
    },

    render() {
        //Рендер изображений
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.sprites.background, 0, 0);
        this.ctx.drawImage(this.sprites.ball, this.ball.frame * this.ball.width,
            0, this.ball.width, this.ball.height, this.ball.x, this.ball.y,
            this.ball.width, this.ball.height);
        this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
        //this.ctx.drawImage(this.sprites.block, 0, 0);
        //console.log(this.block.blocks);
        this.renderBlocks();
        this.ctx.font = "18px sans-serif";
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillText("Level: " + this.level + "   Destroyed blocks: " + this.score +
            "/" + this.block.blocks.length, 25, 35);

        this.ctx.font = "bold 30px sans-serif";
        this.ctx.fillStyle = "#FF4444";
        this.ctx.fillText(this.gameMassage, 460, 300);


    },
    renderBlocks() {
        for (let block of this.block.blocks) {
            //this.sprites.block.src = "./img/block3.png"
            let blockOne = new Image();
            blockOne.src = "./img/block" + block.power + ".png";
            //console.log(this.sprites.block);
            //this.sprites.block.src = "./img/block2.png";
            if (block.active) {
                //console.log(blockOne);
                this.ctx.drawImage(blockOne, block.x, block.y);
                //this.ctx.drawImage(this.sprites.block, 0, 0);
            }
        }
    },
    update() {

        this.collide();
        this.ball.collideCanvas();
        this.platform.collideCanvas();
        this.platform.move();
        this.ball.move();


    },
    restart() {
        //alert(this.i);
        localStorage.setItem("levelUp", JSON.stringify(this.level));
        window.location.reload(true);

    },
    gameOver(massage) {
        this.k = 1;
        if (massage) {
            this.level += 1;
            this.gameMassage = "Next level";
        } else {
            this.gameMassage = "You lost";
            if (this.level > 1) {
                this.level -= 1;
            }
        }
        this.ball.dx = 0;
        this.ball.dy = 0;




    },
    collide() {
        for (let block of this.block.blocks) {
            //console.log(block);
            if (this.ball.collide(block) == "dx" && block.active == true) {
                this.ball.bumpBlock(block, "dx");
                this.sounds.bump02.play();

            } else if (this.ball.collide(block) == "dy" && block.active == true) {
                this.ball.bumpBlock(block, "dy");
                this.sounds.bump02.play();
            }
        }
        if (this.ball.collide(this.platform)) {
            this.ball.bumpPlatform(this.platform);
            this.sounds.bump01.play();
        }
    },
    addScore() {
        this.block.blocks.active = false;
        ++this.score;
        if (this.score >= this.block.blocks.length) {
            this.gameOver(true);
        }
    },
    run() {
        this.i += this.k;
        //Запуск отрисовки
        if (this.i < 100) {
            //if (this.gameGoOn) {
            window.requestAnimationFrame(() => {
                if (this.pause != 1) {
                    this.update();
                    this.render();
                }
                this.run();
            });
            //} else this.restart();
        } else { this.restart(); }
        //console.log(this.i);
    },


    start() {
        this.init();
        this.preload(() => {
            this.block.createBlocks();
            this.run();
        });

        console.log('Game started');
    },
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

};
game.platform = {
    x: 432,
    y: 528,
    width: 160,
    height: 22,
    velocity: 8,
    dx: 0,
    ball: true,
    fire() {

        if (this.ball != false) {
            this.ball = false;
            game.pause = 1;
            console.log('Start the ball');
            game.ball.start();

        }
    },
    start(direct) {

        if (direct === KEYS.LEFT) {
            this.dx = -this.velocity;
        }
        if (direct === KEYS.RIGHT) {
            this.dx = this.velocity;
        }

    },
    stop() {
        this.dx = 0;
    },
    move() {
        if (this.dx) {
            this.x += this.dx;
            if (this.ball != false) {
                game.ball.x += this.dx;
            }
        }
        //this.x = game.ball.x - this.width * Math.random();

    },
    getTouchOffset(touchX) {
        let diff = (this.x + this.width) - touchX;
        let offset = this.width - diff;
        let result = offset * 2 / this.width;

        return result - 1;
    },
    collideCanvas() {
        let x = this.x + this.dx;
        let rx = x + this.width;
        let lx = x;

        if (rx > game.width || lx < 0) {
            this.dx = 0;
        }

    },

};
game.ball = {
    x: 496,
    y: 496,
    width: 32,
    height: 32,
    velocity: 3,
    dx: 0,
    dy: 0,
    frame: 0,
    start() {
        this.velocity += game.level / 2;
        this.dy = -this.velocity;
        this.dx = game.random(-this.velocity, this.velocity);
        this.animate();
    },
    animate() {
        setInterval(() => {
            this.frame += 1;
            if (this.frame > 8) { this.frame = 0; }
        }, 40);
    },
    move() {
        if (this.dy) {
            this.y += this.dy;
        }
        if (this.dx) {
            this.x += this.dx;
        }
    },
    collide(element) {
        let x = this.x + this.dx;
        let y = this.y + this.dy;
        //console.log(element);

        if (x + this.width > element.x &&
            x < element.x + element.width &&
            y + this.height > element.y &&
            y < element.y + element.height) {
            if (x + this.width - element.x < this.velocity * 2 ||
                element.x + element.width - x < this.velocity * 2) {
                //console.log((x - element.x + element.width) + "--" + (x + this.width - element.x))
                return "dx";
            } else

            { return "dy"; }
        } else { return false; }

    },
    collideCanvas() {
        let x = this.x + this.dx;
        let y = this.y + this.dy;
        if (x + this.width > game.width) {
            this.dx *= -1;
            game.sounds.bump03.play();
        }
        if (x < 0) {
            this.dx *= -1;
            game.sounds.bump03.play();
        }
        if (y < 0) {
            this.dy *= -1;
            game.sounds.bump03.play();
        }
        if (y + this.height > game.height + 34) {

            game.gameOver(false);
        }


    },

    bumpBlock(block, dxy) {
        //this.dx *= -1;
        this[dxy] *= -1;

        if (block.power > 1) { block.power -= 1; } else {
            block.active = false;
            game.addScore();
        }
    },
    bumpPlatform(platform) {
        if (platform.dx) {
            this.x += platform.dx;
        }
        if (this.dy > 0) {
            this.dy = -this.velocity;
            let touchX = this.x + this.width / 2;
            this.dx = this.velocity * platform.getTouchOffset(touchX);
        }
    },

};
game.block = {
    power: 1,
    x: 104,
    y: 56,
    blocks: [],
    width: 96,
    height: 32,
    createBlocks() {
        game.rows = Math.floor(2 + game.level / 2);
        for (let row = 0; row < game.rows; row++) {
            for (let col = 0; col < game.cols; col++) {
                //console.log("yyyu");
                this.power = Math.floor(-row / 2 + game.level / 1.5);
                if (this.power < 1) { this.power = 1; }
                if (this.power > 3) { this.power = 3; }
                this.blocks.push({
                    width: this.width,
                    height: this.height,
                    power: this.power,
                    active: true,
                    x: (this.width + 7) * col + this.x,
                    y: (this.height + 7) * row + this.y,
                });

            }
        }
    },
};
window.addEventListener('load', () => {
    game.start();
});