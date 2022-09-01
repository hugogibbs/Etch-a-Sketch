
function populateContainer(size) {

let amount = size*size;

for (let i = 0; i < amount; i++){

const square = document.createElement('div');
square.className = 'square';
square.id = 'square';
document.getElementById('container').appendChild(square);
document.getElementById('container').style.gridTemplateColumns = `repeat(${size}, 1fr)`;
document.getElementById('container').style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

const square = document.querySelector('square');

container.addEventListener('mouseover', e => {
   e.target.style.background = 'black';
})

}

populateContainer(16);

button.addEventListener('click', e => {
    let size = prompt('Insert the number of grids:');
    if (size < 2 || size > 100){
        alert('Size should be between 2 and 100');
    }
    else {
        populateContainer(size);
    }
})

let board = document.querySelector('board');

btn2.addEventListener('click', e => {
    container.style.background = 'random';
})


