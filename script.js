'use strict'

// // 1 задание

// const board = {
//     rowCount: 8,
//     colCount: 8,
//     containerElement: '',
//     cellElement: [],

//     initCells() {
//         // this.containerElement = document.getElementById('game');
//         // this.containerElement.innerHTML = '';
//         this.cellElement = [];
    
//         for (let row = 0; row < this.rowCount; row++) {
//             const trElem = document.createElement('tr');
//             this.containerElement.appendChild(trElem);

//             for (let col = 0; col < this.colCount; col++) {
//                 const td = document.createElement('td');
//                 trElem.appendChild(td);

//                 this.cellElements.push(td);
//             }
//         }
//     }

// }

// board.initCells()


var board = document.createElement('table');
for (var i = 1; i < 9; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j < 9; j++) {
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.className = "white";
        } else {
            td.className = "black";
        }
        tr.appendChild(td);
    }
    board.appendChild(tr);
}
document.body.appendChild(table);