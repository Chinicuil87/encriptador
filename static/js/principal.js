// funcion que extra el texto del html
function mostrar(){
    let texto = document.getElementById('texto').value;
    return texto;
}

// convierte el texto extraifo del html en una lista
function convertir(){
    let textoLista = (mostrar()).split("");
    return textoLista;
}

// valida que el texto no contenga mayusculas ni acentos.
function validar(){

}

function encriptar(){
    let extraer = convertir();
    alert(extraer);
}

function desencriptar(){
    alert('Mensaje desencriptado');
}

