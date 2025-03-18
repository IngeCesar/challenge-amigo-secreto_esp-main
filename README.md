#  Aplicación de Lista de Amigos con Sorteo de Amigo Secreto

Este proyecto permite a los usuarios agregar nombres a una lista de amigos, mostrarlos en pantalla, eliminarlos con un clic y sortear un amigo secreto de manera aleatoria.

---

##  Características
- Agregar amigos a la lista con el botón o presionando **Enter**.
- Validación de entradas para evitar nombres vacíos, caracteres especiales o nombres duplicados.
- Mostrar los amigos en pantalla en una lista interactiva.
- Eliminar amigos haciendo clic en su nombre.
- Realizar un **sorteo de amigo secreto** entre los nombres ingresados.

---

##  Instalación y Uso

1. **Descarga** el código y guárdalo en un archivo `.html` con su respectivo `<script>` de JavaScript.
2. **Agrega un campo de entrada y un botón en tu HTML**:

```html
<input type="text" id="amigo" placeholder="Ingresa un nombre">
<button onclick="agregarAmigo()">Agregar</button>
<ul id="listaAmigos"></ul>
<button onclick="sortearAmigo()">Sortear Amigo Secreto</button>
<p id="resultado"></p>
```

3. **Carga el archivo en tu navegador** y comienza a agregar nombres.
4. **Haz clic en los nombres** para eliminarlos de la lista.
5. **Presiona el botón "Sortear Amigo Secreto"** para seleccionar un amigo al azar.

---

##  Explicación del Código

###  1. **Agregar Amigos**
```javascript
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
```
➡ Permite agregar un amigo a la lista al presionar la tecla **Enter**.

###  2. **Validación de Entrada**
```javascript
let caraterEspecial = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/;
```
➡ Evita la introducción de números y caracteres especiales.

###  3. **Eliminar un Amigo con Clic**
```javascript
item.addEventListener('click', function() {
    eliminarAmigo(i);
});
```
➡ Agrega un evento de **clic** en cada amigo para eliminarlo.

###  4. **Sortear Amigo Secreto**
```javascript
let indiceAleatorio = Math.floor(Math.random() * amigos.length);
let amigoGanador = amigos[indiceAleatorio];
```
➡ Selecciona un nombre aleatorio de la lista.

---

##  Captura de Pantalla (Ejemplo de Uso)

 **Interfaz esperada:**
![ejemplo-funcionamiento](https://github.com/user-attachments/assets/3cd4d6b9-daf6-4328-9aa5-f02b900521ca)
```

- Juan    (clic para eliminar)
- Pedro   (clic para eliminar)
- María   (clic para eliminar)

[SORTEAR AMIGO SECRETO]
"El amigo secreto es: Pedro"
```

---

##  Mejoras Futuras 
✅ Agregar estilos CSS para mejorar la apariencia.  
✅ Crear botones o simbología grafica para eliminar con un click los nombres.  

---


¡Disfruta de tu sorteo de **amigo secreto**! 
