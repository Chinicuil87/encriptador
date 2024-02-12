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

    while (incremento <= textoMayusculas.length){

        console.log(incremento + " "+ textoMayusculas[incremento]);
        
        if (textoValidar[incremento] === textoMayusculas[incremento]){
            console.log('No se permiten mayusculas');
        } else{
            console.log("Se puede continuar");
        }

    }
}

function encriptar(){
    let extraer = validar();
    alert(extraer);
}

function desencriptar(){
    alert('Mensaje desencriptado');
}

