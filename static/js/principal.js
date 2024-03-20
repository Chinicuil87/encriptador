// funcion que extra el texto del html
function mostrar(){
    let texto = document.getElementById('texto').value;
    // console.log(texto);
    return texto;
}

// convierte el texto en minusculas
function convertir(){
    let textoMinusculas = ((mostrar()).toLowerCase());
    // console.log(textoMinusculas);
    return textoMinusculas;
}

// Cambia el stylo del display para mostrar en texto cambiado y ocultar imagen
function cambiosStyle(){
    document.getElementById("tex-retorno").style.display="";
    document.getElementById("mostrar").style.display='none';
}

// Funcion para encriptar
function encriptar(){

    let textoEncriptado = convertir()

                                    .replace(/e/img, "enter")
                                    .replace(/o/img, "ober")
                                    .replace(/i/img, "imes")
                                    .replace(/a/img, "ai")
                                    .replace(/u/img, "ufat");
   
   if(textoEncriptado.length > 0){

        console.log(textoEncriptado);
        cambiosStyle();
        document.getElementById('nuevo-texto').value=textoEncriptado;
        
   } else{

    alert("Coloca el texto a Encriptar");

   }

}

// Funcion de Desencriptar
function desencriptar(){

    let textoDesencriptar = convertir()
                                    .replace(/enter/gi, "e")
                                    .replace(/ober/gi, "o")
                                    .replace(/imes/img, "i")
                                    .replace(/ai/img, "a")
                                    .replace(/ufat/img, "u");
    
    if(textoDesencriptar.length > 0){

        console.log(textoDesencriptar);
        cambiosStyle();
        document.getElementById('nuevo-texto').value=textoDesencriptar;
                                        
    } else{

        alert("Coloca el texto a Desencriptar");
    }

}

// Funcion copiar.
function copiar(){
    let textCopia = document.getElementById('nuevo-texto').value;
    navigator.clipboard.writeText(textCopia)
    alert("Texto copiado con exito.");
    inicial();
}

// Funcion que que reinicia para poder volver encriptar o desencriptar.
function inicial(){
    document.getElementById('texto').value='';
    document.getElementById("tex-retorno").style.display="none";
    document.getElementById("mostrar").style.display='';
}