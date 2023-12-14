
var btn_add = document.getElementById('add');
var form = document.getElementById('form');
var box = document.getElementById('box');


var contador = 1;


btn_add.addEventListener('click', function(){
    contador++;
    br();
    createInput1();
    createLabel1();
    
    br();

    createInput2();
    createLabel2();

    br();
});

function createInput1(){
    var elemento = document.createElement('input');
    elemento.setAttribute('type', 'text');
    elemento.setAttribute('name', 'pessoa' + contador);
    elemento.setAttribute('id', 'pessoa' + contador);
    elemento.setAttribute('autocomplete', 'off');
    elemento.setAttribute('class', 'input');

    box.appendChild(elemento);
}

function createLabel1(){
    var elemento = document.createElement('label');
    elemento.textContent = ' Nome e sobrenome '

    box.appendChild(elemento);
}

function createInput2(){
    var elemento = document.createElement('input');
    elemento.setAttribute('type', 'number');
    elemento.setAttribute('name', 'pessoa' + contador);
    elemento.setAttribute('id', 'nome');
    elemento.setAttribute('autocomplete', 'off');
    elemento.setAttribute('class', 'input');

    box.appendChild(elemento);
}


function createLabel2(){
    var elemento = document.createElement('label');
    elemento.textContent = ' Idade '

    box.appendChild(elemento);
}


function br(){
    var elemento = document.createElement('br');

    box.appendChild(elemento);
}