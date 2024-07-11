import Cl_contador from "./Cl_contador.js";
import Cl_persona from "./Cl_persona.js";

let persona1 = new Cl_persona("Luisa", "F");
let persona2 = new Cl_persona("Ana", "F");
let persona3 = new Cl_persona("José", "M");
let persona4 = new Cl_persona("Carmen", "F");
let persona5 = new Cl_persona("Rosa", "F");
let persona6 = new Cl_persona("José", "M");
let persona7 = new Cl_persona("María", "F");
let persona8 = new Cl_persona("Luz", "F");
let persona9 = new Cl_persona("Rafael", "M");
let persona10 = new Cl_persona("Liz", "F");
let persona11 = new Cl_persona("Marcos", "M");
let persona12 = new Cl_persona("Leo", "M");

let contador = new Cl_contador();
contador.procesarp(persona1);
contador.procesarp(persona2);
contador.procesarp(persona3);
contador.procesarp(persona4);
contador.procesarp(persona5);
contador.procesarp(persona6);
contador.procesarp(persona7);
contador.procesarp(persona8);
contador.procesarp(persona9);
contador.procesarp(persona10);
contador.procesarp(persona11);
contador.procesarp(persona12);

let salida = document.getElementById("salida");
salida.innerHTML += `<br> Cantidad de personas: ${contador.cantTotal()}`;
salida.innerHTML += `<br> Cantidad de hombres: ${contador.cantidadM()}`;
salida.innerHTML += `<br> Cantidad de mujeres: ${contador.cantidadF()}`;
