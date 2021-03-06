game.snake = {
    game: game,
    cells: [],
    moving: false,
    direction: false,
    directions: {
        up: {
            row: -1,
            col: 0,
            angle: 0,
        },
        down: {
            row: 1,
            col: 0,
            angle: 180,
        },
        left: {
            row: 0,
            col: -1,
            angle: 270,
        },
        right: {
            row: 0,
            col: 1,
            angle: 90,
        },

    },
    create() {
        this.direction = this.directions.up;
        let startCells = [{ row: 7, col: 7 }, { row: 8, col: 7 }];
        for (let startCell of startCells) {
            let cell = this.game.board.getCell(startCell.row, startCell.col);
            this.cells.push(cell);
        }

    },
    renderHead() {
        let head = this.cells[0];
        let halfSize = this.game.sprites.head.width / 2;
        this.game.ctx.save();
        this.game.ctx.translate(head.x, head.y);
        this.game.ctx.translate(halfSize, halfSize);
        this.game.ctx.rotate(this.direction.angle * Math.PI / 180);
        this.game.ctx.drawImage(this.game.sprites.head, -halfSize, -halfSize);
        this.game.ctx.restore();
    },
    renderBody() {
        for (let i = 1; i < this.cells.length; i++) {
            this.game.ctx.drawImage(this.game.sprites.body, this.cells[i].x, this.cells[i].y);
        }
    },
    render() {

        this.renderHead();
        this.renderBody();
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
        if (cell && !this.hasCell(cell) && !cell.hasBomb) {
            this.cells.unshift(cell);
            if (!this.game.board.isFoodCell(cell)) {
                this.cells.pop();
            } else {
                this.game.board.removeFood(cell);
                this.game.board.createFood();
            }
        } else { location.reload(); }

    },
    hasCell(cell) {
        return this.cells.find(part => part === cell);
    },
    getNextCell() {
        let head = this.cells[0];



        let row = head.row + this.direction.row;
        let col = head.col + this.direction.col;
        return this.game.board.getCell(row, col);
    },
};