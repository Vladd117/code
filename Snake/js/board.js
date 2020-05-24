game.board = {
    game: game,
    size: 15,
    cells: [],
    create() {
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                let cell = this.createCell(row, col);
                this.cells.push(cell);
            }
        }
    },
    createCell(row, col) {
        let cellSize = this.game.sprites.cell.width + 1;
        let offsetX = (this.game.width - cellSize * this.size) / 2;
        let offsetY = (this.game.height - cellSize * this.size) / 2;

        let cell = {
            row: row,
            col: col,
            x: cellSize * col + offsetX,
            y: cellSize * row + offsetY,
        };
        return cell;
    },
    getRandomAvailableCell() {
        let pool = this.cells.filter(cell => {
            return !cell.hasBomb && !cell.hasFood && !this.game.snake.hasCell(cell);
        });
        let index = this.game.random(0, pool.length - 1);
        return pool[index];
    },
    createFood() {
        let cell = this.getRandomAvailableCell();
        cell.hasFood = true;
    },
    createBomb() {
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i].hasBomb = false;
        }
        let cell = this.getRandomAvailableCell();

        cell.hasBomb = true;
    },
    removeFood(cell) {
        cell.hasFood = false;
    },
    getCell(row, col) {
        return this.cells.find(cell => {
            return cell.row === row && cell.col === col;
        });
    },
    isFoodCell(cell) {
        if (cell.hasBomb == true) {
            return true;
        }
    },
    isFoodCell(cell) {
        if (cell.hasFood == true) {
            return true;
        }
    },
    render() {
        this.cells.forEach(cell => {
            this.game.ctx.drawImage(this.game.sprites.cell, cell.x, cell.y);
            if (cell.hasFood) {
                this.game.ctx.drawImage(this.game.sprites.food, cell.x, cell.y);
            }
            if (cell.hasBomb) {
                this.game.ctx.drawImage(this.game.sprites.bomb, cell.x, cell.y);
            }

        });
    },
};