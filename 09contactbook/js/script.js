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
            li.setAttribute('tabindex', '-1')
            list1.appendChild(li);
        }
        this.after(list1);
    })

    this.root.addEventListener('keyup', function(event){
        const list = this.querySelector('ul');
        if (!list) {
            return;
        }

        const focusElt = list.querySelector(':focus');
            
        if (event.code === 'ArrowDown') {
            if(!focusElt) {
                list.children[0].focus();
            }
            else if (focusElt.nextElementSibling) {
                    focusElt.nextElementSibling.focus();
            }
        }
        if (event.code === 'ArrowUp') {
            if(!focusElt) {
                list.children[list.children.length-1].focus();
            }
            else if (focusElt.previousElementSibling) {
                    focusElt.previousElementSibling.focus();
            }
        }
        if (event.code === 'Enter') {
            if(focusElt) {
                list.nextElementSibling.textContent += focusElt.textContent;
            }
        }
    });
}

ContactBook.prototype.display = function() {
    this.root.innerHTML = `
    <input>
    <output></output>
    `
}

const myBook = new ContactBook('#book');
myBook.init();
