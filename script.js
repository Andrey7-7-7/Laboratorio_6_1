```javascript
// LABORATORIO 6.1 - ANDREY ARCINIEGAS
// Variables, datos, arreglos, objetos, decisiones, bucles y funciones.

// 1. Variables y tipos de datos
const btnVariables = document.getElementById("btnVariables");

btnVariables.addEventListener("click", function () {
    let nombre = "Andrey";
    let edad = 27;
    let estudianteActivo = true;
    let valorNoAsignado;

    const resultado = [
        `Nombre: ${nombre} (${typeof nombre})`,
        `Edad: ${edad} (${typeof edad})`,
        `Estudiante activo: ${estudianteActivo} (${typeof estudianteActivo})`,
        `Variable sin asignar: ${typeof valorNoAsignado}`
    ].join("\n");

    document.getElementById("resultadoVariables").textContent = resultado;
    console.log("Variables y tipos de datos:", resultado);
});

// 2. Arreglos y objetos
const btnDatos = document.getElementById("btnDatos");

btnDatos.addEventListener("click", function () {
    const tecnologias = ["HTML", "CSS", "JavaScript", "Bootstrap"];

    const proyecto = {
        nombre: "Laboratorio 6.1",
        autor: "Andrey Arciniegas",
        tecnologiaPrincipal: "JavaScript"
    };

    const resultado =
        `Arreglo: ${tecnologias.join(", ")}\n` +
        `Cantidad de elementos: ${tecnologias.length}\n\n` +
        `Objeto:\n` +
        `Proyecto: ${proyecto.nombre}\n` +
        `Autor: ${proyecto.autor}\n` +
        `Tecnología principal: ${proyecto.tecnologiaPrincipal}`;

    document.getElementById("resultadoDatos").textContent = resultado;
    console.log("Arreglo de tecnologías:", tecnologias);
    console.log("Objeto del proyecto:", proyecto);
});

// 3. Condicionales if, else if y else
document.getElementById("btnNota").addEventListener("click", function () {
    const campoNota = document.getElementById("nota");
    const resultado = document.getElementById("resultadoNota");
    const nota = Number(campoNota.value);

    if (campoNota.value.trim() === "" || !Number.isFinite(nota) || nota < 0 || nota > 100) {
        resultado.textContent = "Ingresa una nota válida entre 0 y 100.";
    } else if (nota >= 90) {
        resultado.textContent = "Excelente: desempeño sobresaliente.";
    } else if (nota >= 70) {
        resultado.textContent = "Aprobado: buen trabajo.";
    } else {
        resultado.textContent = "Debes seguir practicando para mejorar.";
    }

    console.log("Evaluación de la nota:", resultado.textContent);
});

// 4. Bucles for, while, do...while e iteración de arreglos
document.getElementById("btnBucles").addEventListener("click", function () {
    let resultado = "";

    // Bucle for
    resultado += "FOR: ";
    for (let i = 1; i <= 3; i++) {
        resultado += i + " ";
    }

    // Bucle while
    resultado += "\nWHILE: ";
    let contadorWhile = 1;

    while (contadorWhile <= 3) {
        resultado += contadorWhile + " ";
        contadorWhile++;
    }

    // Bucle do...while
    resultado += "\nDO...WHILE: ";
    let contadorDo = 1;

    do {
        resultado += contadorDo + " ";
        contadorDo++;
    } while (contadorDo <= 3);

    // Iteración de un arreglo con forEach
    const lenguajes = ["JavaScript", "Python", "Java"];
    resultado += "\nFOREACH: ";
    lenguajes.forEach(function (lenguaje) {
        resultado += lenguaje + " ";
    });

    document.getElementById("resultadoBucles").textContent = resultado;
    console.log("Resultados de los bucles:", resultado);
});

// 5. Funciones y alcance de variables
function sumar(a, b) {
    return a + b;
}

function demostrarAlcance() {
    const mensajeLocal = "Esta variable existe dentro de la función.";
    return mensajeLocal;
}

document.getElementById("btnFunciones").addEventListener("click", function () {
    const resultado =
        `Función sumar(8, 5): ${sumar(8, 5)}\n` +
        `Alcance local: ${demostrarAlcance()}\n` +
        "Las variables locales pertenecen a su función.";

    document.getElementById("resultadoFunciones").textContent = resultado;
    console.log("Funciones y alcance:", resultado);
});

// 6. Clausura (closure)
// La función interna conserva acceso a la variable contador.
function crearContador() {
    let contador = 0;

    return function () {
        contador++;
        return contador;
    };
}

const incrementarContador = crearContador();

document.getElementById("btnContador").addEventListener("click", function () {
    const nuevoValor = incrementarContador();

    document.getElementById("contador").textContent = nuevoValor;
    console.log("Contador de la clausura:", nuevoValor);
});

// Mensaje inicial para verificar que el archivo se cargó.
console.log("Laboratorio 6.1 cargado correctamente.");
console.log("Autor: Andrey Arciniegas");
```
