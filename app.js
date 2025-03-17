let amigos = []; //Array donde se alamacenan los nombres de amigos

//Evento para agregar los nombres de amigos solo con apretar enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

//funcion para formatear los nombres de los amigos
function formatearNombres(nombreNuevo) {
    return nombreNuevo.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ""); //convierte toda letra a minuscula,
                                                                                    //separa las tildes de las letras
                                                                                    //elimina las tildes de las letras
}

//funcion donde se almacenan los nombres de los amigos en el array
function agregarAmigo(){
    let escribeUnAmigo = document.getElementById('amigo').value.trim();//variable local para almacenar el 
                                                                    // nombre del amigo, el trim elimina los 
                                                                    // espacios en blanco por delante y detras
    let caraterEspecial = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/;//variable local para almacenar los caracteres especiales
                                                    //y numeros
    let nombreFormateado = formatearNombres(escribeUnAmigo);//variable local para almacenar el nombre formateado

    //condicion para validar que el nombre no este vacio o tenga caracteres especiales
    if (escribeUnAmigo === '' || caraterEspecial.test(escribeUnAmigo)) {
        alert ("Ingrese un nombre, evite usar números o caracteres especiales");
        limpiar();
        return;
    }
    //condicion para guardar el nombre en el array
    else {
        //revisar si un nombre esta repetido en el array
        for (let i = 0; i < amigos.length; i++) {
            if (nombreFormateado === amigos[i]) {
                alert('El nombre ya existe');
                limpiar();
                return;
            }
        }
        amigos.push(escribeUnAmigo);
        limpiar();
        enseñarAmigosPantalla(); 
        console.log(amigos);
    }    
}

//funcion para limpiar el input
function limpiar(){
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}

//funcion para mostrar los nombres ingresados de los amigos en pantalla
function enseñarAmigosPantalla(){
    let listaNombres = document.getElementById('listaAmigos');
    listaNombres.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        //Agregar evento de click para eliminar un amigo
        item.addEventListener('click', function() {
            eliminarAmigo(i); //llama a la funcion para eliminar un amigo
        });
        listaNombres.appendChild(item); //agrega el nombre a la lista
    }
}

//funcion para eliminar un amigo de la lista
function eliminarAmigo(j) {
    let confimarEliminar = confirm(`¿Estás seguro de eliminar a ${amigos[j]}?`);
    if (confimarEliminar) {
        amigos.splice(j, 1); //Elimina el amigo de la lista
        enseñarAmigosPantalla(); //actualiza la lista de amigos en pantalla
        return;
    }
    else {
        return;
    }
}

//funcion para sortear el amigo secreto
function sortearAmigo()  {
    if (amigos.length <= 2) {
        alert('Agrega al menos tres amigos para comenzar el sorteo');
        return;
    }
    else{
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoGanador = amigos[indiceAleatorio];
    let resultados = document.getElementById('resultado');
    resultados.innerHTML = `El amigo secreto es ${amigoGanador}`;
    }
}