// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

var amig = document.getElementById("amigo").value;

if(amig.trim() === ""){

alert("por favor, inserta un nombre");

}else{

amigos.push(amig);

document.getElementById("amigo").value = "";

var listamg = document.getElementById('listaAmigos');

listamg.innerHTML = "";

for (var i = 0; i < amigos.length; i++) {
    var item = document.createElement('li');
    item.textContent = amigos[i];
    listamg.appendChild(item);
  }


}

}



function sortearAmigo(){

  if (amigos.length === 0) {
    alert("No hay amigos disponibles para el sorteo.");
  } else {
    let ganador = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = "El ganador del sorteo es: " + ganador;
  }

}