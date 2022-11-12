
function mudaPosicao(tipo){

    var numero = new Object;
    numero = document.getElementById("num").value

    if(numero % 2 === 0) {
        
        document.getElementById("parimpar").style.display="none"
        document.getElementById("par").style.display="block"
        document.getElementById("impar").style.display="none"
        

    } else {
        
        document.getElementById("parimpar").style.display="none"
        document.getElementById("impar").style.display="block"
        document.getElementById("par").style.display="none"
        

    }

}