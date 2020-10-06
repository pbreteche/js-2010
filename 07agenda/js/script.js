'use strict';

/**
 * rootElement doit être une élément du DOM
 */
const Agenda = function(rootElement) {
    this.root = rootElement;
}

Agenda.prototype.init = function() {
    this.root.innerHTML = '<h1>Agenda</h1>';
}

const myAgenda = new Agenda(document.querySelector('#agenda'));
console.log(myAgenda);
myAgenda.init();