'use strict';

const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}
function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(function() {
        event.target.classList.add('hide');
    }, 0);

    event.target.style.opacity = 1;
}
function dragend(event) {
    event.target.className = 'item';       
}

function dragover(event) {
    event.preventDefault();
}
function dragenter(event) {
    event.target.classList.add('hovered');
}
function dragleave(event) {
    event.target.classList.remove('hovered');
}
function dragdrop(event) {
    event.target.append(item)
    event.target.classList.remove('hovered');
}