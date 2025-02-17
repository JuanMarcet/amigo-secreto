// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreJugador = "";
let arrJugadores = [];




function agregarAmigo(){
    nombreJugador = document.getElementById('amigo').value;
    // se comprueba que la textbox no esté vacía, con el metodo .trim() se eliminan los espacios en blanco al inicio y al final de la cadena de texto
    if (nombreJugador.trim() == ""){ 
        alert('No se la ingresado un nombre en la caja de texto.');
    } else{
        if (arrJugadores.includes(nombreJugador)){
            alert(`${nombreJugador} ya se encuentra registrado, si es una persona distinta añada el apellido.`);
        }else{
            // agrega el nuevo nombre al arrar de jugadores
            arrJugadores.push(nombreJugador.trim());

            let listaAmigos = document.getElementById('listaAmigos'); // se selecciona la lista por el ID
            let  nuevoAmigo = document.createElement('li'); // se crea un nuevo elemento a la lista 
            nuevoAmigo.textContent = nombreJugador; //  se le añade el valor o texto al nuevo elemento de la lista
            listaAmigos.appendChild(nuevoAmigo); // con el atributo se añade el elemento a la lista principal
        }
        document.getElementById('amigo').value = ''; // se coloca la textbox vacía
        console.log (arrJugadores);
        }
    }

document.getElementById('amigo').addEventListener('keydown', function (event ){
    if (event.key === 'Enter'){
        agregarAmigo();
    }
});

