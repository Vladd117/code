game.snake = {
    game: game,
    cells: [],
    moving: false,
    direction: false,
    directions: {
        up: {
            row: -1,
            col: 0,
        },
        down: {
            row: 1,
            col: 0,
        },
        left: {
            row: 0,
            col: -1,
        },
        right: {
            row: 0,
            col: 1,
        },

    },
    create() {
        this.direction = this.directions.up;
        let startCells = [{ row: 7, col: 7 }, { row: 8, col: 7 }];
        for (let startCell of startCells) {
            let cell = game.board.getCell(startCell.row, startCell.col);
            this.cells.push(cell);
        }

    },

    render() {
        this.cells.forEach(cell => {
            this.game.ctx.drawImage(this.game.sprites.body, cell.x, cell.y);
        });
    },
    start(keyCode) {
        console.log(keyCode);
        switch (keyCode) {
            case 38:
            case 87:
                this.direction = this.directions.up;
                break;
            case 37:
            case 65:
                this.direction = this.directions.left;
                break;
            case 39:
            case 68:
                this.direction = this.directions.right;
                break;
            case 40:
            case 83:
                this.direction = this.directions.down;
                break;
        }
        this.moving = true;
    },
    move() {
        if (!this.moving) { return; }
        let cell = this.getNextCell();
        if (cell) {
            this.cells.unshift(cell);
            this.cells.pop();
        }

    },
    getNextCell() {
        let head = this.cells[0];



        let row = head.row + this.direction.row;
        let col = head.col + this.direction.col;
        return game.board.getCell(row, col);
    },
};