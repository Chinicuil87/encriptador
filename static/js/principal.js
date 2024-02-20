// funcion que extra el texto del html
function mostrar(){
    let texto = document.getElementById('texto').value;
    return texto;
}

// convierte el texto en mayusculas
function convertir(){
    let textoLista = ((mostrar()).toUpperCase());
    return textoLista;
}

// valida que el texto no contenga mayusculas ni acentos.

function validar(){

    let textoValidar = mostrar();
    let textoMayusculas = convertir();
    let incremento = 0;
    
    console.log(incremento);
    console.log(textoValidar[incremento]);
    console.log(textoMayusculas);
    console.log(textoMayusculas.length);
}

function encriptar() {
    var texto = document.getElementById("texto").value;
    var textoCifrado = texto.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("resultado").innerHTML = textoCifrado;
  }
  
  function desencriptar() {
    var texto = document.getElementById("texto").value;
    var textoDescifrado = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("resultado").innerHTML = textoDescifrado;
  }
  