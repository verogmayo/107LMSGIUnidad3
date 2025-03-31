/*> Acceso a elementos del DOM
-  Seleccionar la clase .container*/
/* ----document.getElementsByClassName("container")
Devuelve: Una colección HTMLCollection con todos 
los elementos que tengan la clase "container".
No devuelve un array real, pero se puede recorrer 
con for o Array.from()pero no se puede usar .forEach() 
directamente, porque HTMLCollection no es un array.
Es dinámico: si el DOM cambia y se añaden más elementos 
con la clase "container", la colección se actualiza automáticamente.
------console.log(containers[0]); // Accede al primer elemento con la clase "container"
*/
var contenedor=document.querySelector('.container')
/*  Devuelve: Solo el primer elemento que coincida con la clase "container".
Devuelve null si no encuentra ningún elemento.
Es estático: si después de ejecutarlo se añaden más elementos con la clase "container", no los detectará a menos que vuelvas a llamar a querySelector().
Admite cualquier selector CSS (.clase, #id, div p, etc.).*/


// -  Seleccionar la etiqueta strong
var negrita=document.querySelector('strong')

// -  Seleccionar la etiqueta mark
var resaltado=document.querySelector('mark')

// -  Seleccionar los parrafos con atributo hidden
var escondido=document.querySelector('p[hidden]')

// -  Seleccionar los details
var despleglable=document.querySelector('details')



/*> Modificar elementos del DOM
-  Cambiar el texto del primer nodo del container.*/
contenedor.firstChild.textContent="Adios a todos. Soy Manz";

// -  Añadir un nuevo parrafo en el último nodo del container. 
// Con + te añade el parafo
contenedor.lastElementChild.innerHTML+="<p>Saludos a todos<p>"

// - Cambiar el texto de la etiqueta strong
negrita.textContent="Manzano"
// - Cambiar el estilo de de mark a display='block'
resaltado.style.display='block'
// - Borrar el atributo hidden , removeAttribute("hidden")
escondido.removeAttribute("hidden")
// -  Detail este desplegado, details.open = true,
despleglable.open=true;