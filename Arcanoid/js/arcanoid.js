const KEYS = {
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
}
let game = {
    platform: null,
    ball: null,
    blocks: [],
    rows: 4,
    cols: 8,
    width: 640,
    height: 360,
    ctx: null,
    gameGoOn: true,
    score: 0,
    sprites: { //Объявление переменных спрайтов в объекте
        background: null,
        ball: null,
        platform: null,
        block: null
    },

    init: function() {
        //Инициализация API
        this.ctx = document.getElementById("arcanoid").getContext("2d");
        this.setEvents();
    },
    setEvents() {
        window.addEventListener("keydown", e => {
            //console.log(e.keyCode);
            if (e.keyCode === KEYS.LEFT) {
                this.platform.start(e.keyCode);
            };
            if (e.keyCode === KEYS.RIGHT) {
                this.platform.start(e.keyCode);
            };
            if (e.keyCode === KEYS.SPACE) {

                this.platform.fire(e.keyCode);
            }
        });
        window.addEventListener("keyup", e => {
            this.platform.stop();

        });
    },
    preload: function(callback) {
        //Прелоад спрайтов
        let loaded = 0;
        let required = Object.keys(this.sprites).length; //проверка кол-ва объектов

        for (let key in this.sprites) { //Цикл загрузки спрайтов
            this.sprites[key] = new Image();
            this.sprites[key].src = "./img/" + key + ".png";

            this.sprites[key].addEventListener("load", () => {
                ++loaded;
                if (loaded >= required) {
                    callback();

                }

            });


        };


    },

    render: function() {
        //Рендер изображений
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.sprites.background, 0, 0);
        this.ctx.drawImage(this.sprites.ball, 0, 0, this.ball.width, this.ball.height, this.ball.x, this.ball.y, this.ball.width, this.ball.height);
        this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
        this.renderBlocks();
    },
    renderBlocks() {
        for (block of this.blocks) {
            if (block.active) {
                this.ctx.drawImage(this.sprites.block, block.x, block.y);
            }
        }
    },


    createBlocks() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.blocks.push({
                    width: 60,
                    height: 20,
                    active: true,
                    x: 64 * col + 65,
                    y: 24 * row + 35
                });
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
    gameOver(massage) {
        block.active = false;
        alert(massage);
        window.location.reload(true);
    },
    collide() {
        for (let block of this.blocks) {
            if (this.ball.collide(block) && block.active == true) {
                this.ball.bumpBlock(block);
                this.addScore();
            }
        };
        if (this.ball.collide(this.platform)) {
            this.ball.bumpPlatform(this.platform);

        };

    },
    addScore() {
        ++this.score;
        if (this.score >= this.blocks.length) {
            this.gameOver('YOU WIN!');
        }
    },
    run: function() {
        //Запуск отрисовки
        if (this.gameGoOn) {
            window.requestAnimationFrame(() => {
                this.update();
                this.render();
                this.run();
            });
        } else this.gameOver();
    },


    start: function() {
        this.init();
        this.preload(() => {
            this.createBlocks();
            this.run();
        });

        console.log('Game started');
    },
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
};
game.platform = {
    x: 270,
    y: 330,
    width: 100,
    height: 14,
    velocity: 5,
    dx: 0,
    ball: true,
    fire() {

        if (this.ball != false) {
            console.log('Start the ball');
            game.ball.start();
            this.ball = false;
        };
    },
    start(direct) {

        if (direct === KEYS.LEFT) {
            this.dx = -this.velocity
        };
        if (direct === KEYS.RIGHT) {
            this.dx = this.velocity
        };

    },
    stop() {
        this.dx = 0;
    },
    move() {
        if (this.dx) {
            this.x += this.dx;
            if (this.ball != false) {
                game.ball.x += this.dx;
            };
        };

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
        };

    }
};
game.ball = {
    x: 310,
    y: 310,
    width: 20,
    height: 20,
    velocity: 3,
    dx: 0,
    dy: 0,
    start() {
        this.dy = -this.velocity
        this.dx = game.random(-this.velocity, this.velocity);
    },
    move() {
        if (this.dy) {
            this.y += this.dy;
        };
        if (this.dx) {
            this.x += this.dx;
        };
    },
    collide(element) {
        let x = this.x + this.dx;
        let y = this.y + this.dy;
        if (x + this.width > element.x &&
            x < element.x + element.width &&
            y + this.height > element.y &&
            y < element.y + element.height) {
            return true;
        } else return false;
    },
    collideCanvas() {
        let x = this.x + this.dx;
        let y = this.y + this.dy;
        if (x + this.width > game.width) {
            this.dx *= -1
        };
        if (x < 0) {
            this.dx *= -1
        };
        if (y < 0) {
            this.dy *= -1
        };
        if (y + this.height > game.height + 30) {
            game.gameOver("GAME OVER");
        };

    },
    bumpBlock(block) {
        //this.dx *= -1;
        this.dy *= -1;
        block.active = false;
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
window.addEventListener('load', () => {
    game.start();
});