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
    let numeroRepeticiones = textoValidar.length;
    let incremento = 0;
    
    while (textoMayusculas.includes(textoValidar[incremento]) && incremento < numeroRepeticiones){
        incremento ++;
    } 
    
    alert('Procedemos a encriptar')
    

}

function encriptar(){
    let extraer = validar();
    alert(extraer);
}

function desencriptar(){
    alert('Mensaje desencriptado');
}

