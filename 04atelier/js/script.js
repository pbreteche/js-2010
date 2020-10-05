'use strict';

const button = document.querySelector('button');
const p = document.querySelector('p');

button.addEventListener('click', function(){
    p.hidden = !p.hidden;
});

/*
const button2 = document.querySelector('button');
const p2 = document.querySelector('p');
p2.dataset.display = p2.style.display;

button2.addEventListener('click', function(){
    if ('none' === p.style.display) {
        p.style.display = p.dataset.display;
    } else {
        p.style.display = 'none';
    }
});
*/