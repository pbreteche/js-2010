'use strict';

/**
 * rootElement doit être une élément du DOM
 */
const Agenda = function(rootElement) {
    this.root = rootElement;
    this.concerts = [];
}

Agenda.prototype.init = function() {
    this.concerts.push(new Concert('Concert 1', 'Rock'));
    this.concerts.push(new Concert('Concert 2', 'Jazz'));
    this.concerts.push(new Concert('Concert 3', 'Rap'));
    this.concerts.push(new Concert('Concert 4', 'Rap'));
    this.concerts.push(new Concert('Concert 5', 'Rock'));
    this.root.innerHTML = '<h1>Agenda</h1>';
}

const Concert = function(title, style) {
    this.title = title;
    this.style = style;
}

const myAgenda = new Agenda(document.querySelector('#agenda'));
console.log(myAgenda);
myAgenda.init();
console.log(myAgenda);