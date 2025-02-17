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
            listaAmigos.appendChild(nuevoAmigo); // con el atributo se añade el elemento al final de la lista principal
        }
        document.getElementById('amigo').value = ''; // se coloca la textbox vacía
        // console.log (arrJugadores);
        }
    }

document.getElementById('amigo').addEventListener('keydown', function (event ){
    if (event.key === 'Enter'){
        agregarAmigo();
    }
});


function sortearAmigo() {
    // Comprobar que el array tenga dos o más personas para jugar
    if (arrJugadores.length <= 1) {
        alert(`Lo siento, ${arrJugadores.length} ${arrJugadores.length == 0 ? 'personas' : 'persona'} no es suficiente para realizar un sorteo.\n¡Agrega más amigos para que sea más divertido!`);
    } else {
        alert(`A continuación se va a proceder a sortear los amigos secretos.`);

        // Crear una copia del array de jugadores para no modificar el original
        let jugadoresRestantes = [...arrJugadores];
        let arrAsignacionAmigo = [];

        // Asignar amigos secretos
        for (let i = 0; i < arrJugadores.length; i++) {
            // Filtrar los jugadores que no sean el mismo y que no hayan sido asignados
            let posiblesAmigos = jugadoresRestantes.filter(jugador => jugador !== arrJugadores[i]);

            // Elegir un amigo secreto aleatorio
            let amigoElegido = posiblesAmigos[Math.floor(Math.random() * posiblesAmigos.length)];

            // Guardar la asignación
            arrAsignacionAmigo.push({ jugador: arrJugadores[i], amigoSecreto: amigoElegido });

            // Eliminar el amigo elegido de la lista de jugadores restantes
            jugadoresRestantes = jugadoresRestantes.filter(jugador => jugador !== amigoElegido);
        }

        // Mostrar los resultados
        
        arrAsignacionAmigo.forEach(asignacion => {
            alert(`Para ${asignacion.jugador}`);
            alert(`El amigo secreto de ${asignacion.jugador} es ${asignacion.amigoSecreto}`);
        });
    }
}