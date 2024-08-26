// Selección de elementos del DOM
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const botonCopiar = document.querySelector(".btn-copiar");
const munieco = document.getElementById("viñeta");
const contenedorparrafo = document.getElementById("mensaje-encriptado");
const resultado = document.querySelector(".texto-resultado");

// Asignación de eventos
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");

    if (texto.length != 0) {
        const textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        ocultarAdelante();
        resultado.textContent = textoCifrado; // Muestra el texto encriptado
    } else {
        munieco.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto para encriptar", "warning");
    }
}

function desencriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    if (texto.length != 0) {
        const textoCifrado = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

        ocultarAdelante();
        resultado.textContent = textoCifrado; // Muestra el texto desencriptado
    } else {
        munieco.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado!";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto para desencriptar", "warning");
    }
}

function ocultarAdelante() {
    botonCopiar.classList.remove("ocultar"); // Asegúrate de que el botón no esté oculto
    munieco.classList.add("ocultar");
    contenedorparrafo.classList.add("ocultar");
}

// Inicialmente oculta el botón de copiar
botonCopiar.classList.add("ocultar");

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
    const contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado al portapapeles");
});