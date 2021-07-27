'use strict'

// // 1 задание
// Первый вариант
const board = {
    rowCount: 8,
    colCount: 8,
    containerElement: '',
    cellElement: [],

    initCells() {
        this.cellElement = [];
    
        for (let row = 0; row < this.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < this.colCount; col++) {
                const td = document.createElement('td');
                trElem.appendChild(td);

                this.cellElements.push(td);
            }
        }
    }

}

board.initCells()

// Второй вариант

const desk = {
    create: document.getElementById('game'),

    createDesk() {
        for (let i = 1; i < 9; i++) {
            let tr = document.createElement('tr');
            for (let j = 1; j < 9; j++) {
                let td = document.createElement('td');
                if (i%2 == j%2) {
                    td.className = "white";
                } else {
                    td.className = "black";
                }
                tr.appendChild(td);
            }
            this.create.appendChild(tr);
        }
    }
}
 desk.createDesk();


