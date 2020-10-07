'use strict';

const ContactBook = function(selector) {
    this.root = document.querySelector(selector);
    this.contacts = [];
}

ContactBook.prototype.init = function() {
    this.contacts = CONTACTS;
    this.display();

    const that = this;
    this.root.children[0].addEventListener('keyup', function(){
        const found = that.contacts.filter(c => {
            const lowerValue = this.value.toLowerCase();

            return -1 < c.name.toLowerCase().indexOf(lowerValue)
            || -1 < c.email.toLowerCase().indexOf(lowerValue)
        });

        const nextElement = this.nextElementSibling

        // 'UL' si le doc est en HTML, 'ul' si autre XML
        if ('UL' === nextElement.tagName) {
            nextElement.remove();
        }

        const list1 = document.createElement('ul');

        for (const contactFound of found) {
            const li = document.createElement('li');
            li.textContent = contactFound.name;
            list1.appendChild(li);
        }
        this.after(list1);

    })
}

ContactBook.prototype.display = function() {
    this.root.innerHTML = `
    <input>
    <output></output>
    `
}

const myBook = new ContactBook('#book');
myBook.init();
