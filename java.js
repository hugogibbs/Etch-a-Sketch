

for (let i = 0; i < 256; i++){

const square = document.createElement('div');
square.className = 'square';
square.id = 'square';
document.getElementById('container').appendChild(square);

}

const square = document.querySelector('square');

container.addEventListener('mouseover', e => {
   e.target.style.background = 'black';
})

const button = document.querySelector('button');

document.addEventListener('click', e => {
    let grid = prompt('Insert the number of grids:');
})