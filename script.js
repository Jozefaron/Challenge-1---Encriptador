function encriptar() {

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("areatxt").innerHTML = textoEncriptado;
    document.getElementById("muñeco").style.display = 'none';
    document.getElementById("area1").style.display = 'none';
    document.getElementById("area2").style.display = 'none';
    document.getElementById("boton-Copiar").style.display = '';
    document.getElementById("areatxt").style.display = '';
}

function desencriptar() {

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("areatxt").innerHTML = textoEncriptado;
    document.getElementById("areatxt").innerHTML = textoEncriptado;
    document.getElementById("muñeco").style.display = 'none';
    document.getElementById("area1").style.display = 'none';
    document.getElementById("area2").style.display = 'none';
    document.getElementById("boton-Copiar").style.display = '';
    document.getElementById("areatxt").style.display = '';
}

function Copiar() {

    var copyText = document.getElementById("areatxt");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Texto copiado..!!");
}
