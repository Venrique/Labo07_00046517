var container = document.getElementById("c1");
container.innerText = "¡Hola Mundo!";
container.style.backgroundColor = "#000000";
container.style.color = "#1cb723";
container.style.width = "200px";
container.style.height = "200px";
container.innerHTML = "<input type='text' placeholder='escriba su texto'>";

container = document.getElementsByClassName("c2");

for(let i of container){
    i.style.backgroundColor = "#009999"
    i.innerHTML = "<input type='text' placeholder='Escriba su texto'>";
}

var boton = document.getElementById("btn-click");
boton.addEventListener('click',eventClick,false)
function eventClick(evt) { 
alert("Hola mundo"); 
}

var btnCopy = document.getElementById("btnCopy");
btnCopy.addEventListener('click',eventCopiar,false)
function eventCopiar(evt) { 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}
