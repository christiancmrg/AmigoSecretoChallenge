// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Documentar: Se declara el array que guardará los nombres de la lista de amigos
let NombreAmigos= [];


//Creamos la funcion para agregar nombres
function AgregarNombres() {
    let nombre = document.getElementById("amigo").value.trim();

    //Verificamos que el input no se encuentre vacio
    if (nombre === "") {
        alert("⚠️ Por favor, inserte un nombre.");
        return;
    }
      // Realice un ciclo para reccorer cada una de los caracteres y ver si no hay un numero o caracter especial
      for (let i = 0; i < nombre.length; i++) {
        if (!((nombre[i] >= "A" && nombre[i] <= "Z") || (nombre[i] >= "a" && nombre[i] <= "z") || nombre[i] === " ")) {
            alert("⛔ No se permiten números o caracteres especiales, ingresa solo letras.");
            return;
        }
    }

    //Si todo esta correcto se agrega el nombre a la lista y vacimos el input
    NombreAmigos.push(nombre);
    document.getElementById("amigo").value = "";
    ActualizarLista();
}

function ActualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    //Se crea un ciclo for para reccorer el array y lo vamos mostrando al agregarlo a un li
    for (let i = 0; i < NombreAmigos.length; i++)
        lista.appendChild(Object.assign(document.createElement("li"), { textContent: NombreAmigos[i] }));   
}

function SortearAmigo() {

    //Se realizo una validacion para que no intenten iniciar el sorte si hay un nombre que no se a añadido en el input
    if (document.getElementById("amigo").value.trim() !== "") {
        alert("⚠️ Antes de sortear, agrega el amigo que está en la caja de texto.");
        return;
    }

    //Se realizo validacion para que al sortear haya por lo menos un nombre en la lista
    if (NombreAmigos.length === 0) {
        alert("🚫 Agrega al menos un amigo antes de Sortear");
        return;
    }
    
    //Se sortea el amigo secreto
    let amigoSeleccionado = NombreAmigos[Math.floor(Math.random() * NombreAmigos.length)];
    
        document.getElementById("listaAmigos").innerHTML = "";

        //Se deshabilitan el boton añadir y el input para evitar que se metan mas nombres
        document.getElementById("amigo").disabled = true;
        document.getElementById("BtnAñadir").disabled = true;
        return document.getElementById("resultado").innerHTML = `<li> ¡El amigo secreto sorteado es: ${amigoSeleccionado}! 🎉</li>`;
    
}