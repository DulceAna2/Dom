//20-5
function Modificacion() {
    let primerParrafo = document.getElementById("otro_parafo");
    primerParrafo.textContent = "Este parrafo es un ejemplo del uso de textContent";
    let segundoParrafo = document.getElementById("otro_parafo2");
    segundoParrafo.innerHTML = "Este parrafo es OTRO ejemplo, uso de innerHTML";
    let tercerParrafo = document.getElementById("otro_parafo3");
    tercerParrafo.innerText = "Este es el ultimo ejemplo, uso de innerText";
}
/*lo mismo pero mas corto
document.getElementById("otro_parafo").textContent= "Este parrafo es un ejemplo del uso de textContent";
*/
function Modificacion2() {
    //nombre de la clase
    let parrafo = document.getElementsByClassName("parrafos");
    parrafo[0].textContent = "HTML";
    parrafo[0].style.background = "black";
    parrafo[0].style.color = "white";
    parrafo[0].style.borderRadius = "8px";
    parrafo[0].style.textAlign = "center";
    //nombre etiqueta
    let parrafo2 = document.getElementsByTagName("p");
    parrafo2[1].textContent = "CSS";
    parrafo2[1].style.background = "red";
    parrafo2[1].style.color = "white";
    parrafo2[1].style.borderRadius = "8px";
    parrafo2[1].style.textAlign = "center";
    //por 
    let parrafo3 = document.querySelector('#parrafo3');
    parrafo3.textContent = "JS";
    parrafo3.style.background = "blue";
    parrafo3.style.color = "white";
    parrafo3.style.borderRadius = "8px";
    parrafo3.style.textAlign = "center";

    console.log(parrafo)
}
function Modificacion3(){
    //lectura de Nodos
    //Por ID
    let elementosPorId=document.querySelector('#parrafo1');
    elementosPorId.innerHTML="agunte la programacion";
    //por clase
    let elementosPorClase=document.querySelectorAll('.parrafos');
    elementosPorClase[1].innerHTML="programacion 1";
    //por equiqueta
    let elementosPorEtiqueta=document.querySelectorAll('p');
    elementosPorEtiqueta[2].innerHTML="java";
}
function Modificacion4(){
    //Crear parrafo 4 
    //CREAR NODOS
    const parrafoCuatro= document.createElement('p');
    const textParrafoCuatro=document.createTextNode("Parrafo 4");
    //seleccionar elemento padre
    const elementoPadre= document.querySelector(".padre");
    //AGREGAR NODOS
    //elementoPadre.appendChild(parrafoCuatro);
    parrafoCuatro.appendChild(textParrafoCuatro);

    //CREAR PARRAFO 5
    //CREAR NODO
    const parrafoCinco=document.createElement('p');
    parrafoCinco.innerHTML='Parrafo 5';
    //Seleccionar elemento padre(ya esta hecho)
    //agregar nodos
    //elementoPadre.appendChild(parrafoCinco)
    elementoPadre.append(parrafoCuatro,parrafoCinco)
}
function Modificacion5(){
    //en este caso vamos a eliminar el parrafo 2 y 3
    //utilizando remove y eliminando el elemento
    document.getElementById("parrafo2").remove()//elimina el parrafo2
    //utilizando remove child, eliminando el hijo del padre
    document.getElementById("padre").removeChild(document.getElementById("parrafo3"))
}