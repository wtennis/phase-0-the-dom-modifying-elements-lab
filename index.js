// Write your code here!

const mainMain = document.getElementById('main');
mainMain.remove();

const newHeader = document.createElement('h1');

document.body.appendChild(newHeader);

newHeader.setAttribute('id', "victory");

newHeader.innerHTML = "Whiting is the champion";
