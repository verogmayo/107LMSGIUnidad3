
/*
## Ejemplo 5 Manipulando el DOM
1.  Seleccionar el elemento header (querySelector)*/
const cabecera=document.querySelector("header")

//2. Añadir al header, ```<h1>Esto es un título</h1>```
const h1=document.createElement('h1');
h1.textContent="Esto es un titulo"
cabecera.appendChild(h1);

//3. Añadir al elemento anterior, ```<p>Esto es un parrafo</p>```
const parrafo=document.createElement('p');
parrafo.textContent="Esto es un parrafo";
cabecera.appendChild(parrafo);

//4. Añadir los styles: ```background-color:#f0f0f0 y padding de 10px.```
cabecera.style.backgroundColor="#f0f0f0";
cabecera.style.padding="10px" ;

