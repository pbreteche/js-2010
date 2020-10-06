'use strict';

/**
 * rootElement doit être une élément du DOM
 */
const Agenda = function(rootElement) {
    this.root = rootElement;
    this.concerts = [];
    this.filters = ['Rock', 'Jazz', 'Rap'];
}

Agenda.prototype.init = function() {
    this.concerts.push(new Concert('Concert 1', 'Rock'));
    this.concerts.push(new Concert('Concert 2', 'Jazz'));
    this.concerts.push(new Concert('Concert 3', 'Rap'));
    this.concerts.push(new Concert('Concert 4', 'Rap'));
    this.concerts.push(new Concert('Concert 5', 'Rock'));
    this.root.innerHTML = `<h1>Agenda</h1>
<form>
<div><label><input type="checkbox" checked value="Rock">Rock</label>
<div><label><input type="checkbox" checked value="Jazz">Jazz</label>
<div><label><input type="checkbox" checked value="Rap">Rap</label>
</form><ul></ul>`;
    this.listHTML = this.root.querySelector('ul');
    this.displayList();

    // capture de l'objet Agenda "this" dans une variable
    // pour être récupéré dans la fonction lié à l'événement
    const that = this;
    this.root.querySelector('form').addEventListener('input', function() {
        that.filters = [];
        for (const input of this.elements) {
            if (input.checked) {
                that.filters.push(input.value);
            }
        }
        that.displayList();
    });
}

Agenda.prototype.displayList = function() {
    let concertsHTML = '';

    for (const concert of this.concerts) {
        if (-1 !== this.filters.indexOf(concert.style)) {
            concertsHTML += `<li>${concert.title}</li>`;
        }
    }

    this.listHTML.innerHTML = concertsHTML;
}

const Concert = function(title, style) {
    this.title = title;
    this.style = style;
}

const myAgenda = new Agenda(document.querySelector('#agenda'));
myAgenda.init();
