
function mudaPosicao(tipo){

    var numero = new Object;
    numero = document.getElementById("num").value

    if ((numero == 12) || (numero == 1) || (numero == 2) || (numero == "dezembro") || (numero == "janeiro") || (numero == "fevereiro")) {
    
        document.getElementById("verao").style.display="block"
        document.getElementById("outono").style.display="none"
        document.getElementById("inverno").style.display="none"
        document.getElementById("primavera").style.display="none"
        document.getElementById("opcao").innerHTML = "A estação deste mês é VERÃO!"        

    } else if ((numero == 3) || (numero == 4) || (numero == 5) || (numero == "março") || (numero == "abril") || (numero == "maio")) {
    
        document.getElementById("outono").style.display="block"
        document.getElementById("verao").style.display="none"
        document.getElementById("inverno").style.display="none"
        document.getElementById("primavera").style.display="none"
        document.getElementById("opcao").innerHTML = "A estação deste mês é OUTONO!"        

    } else if ((numero == 6) || (numero == 7) || (numero == 8) || (numero == "junho") || (numero == "julho") || (numero == "agosto")) {
    
        document.getElementById("inverno").style.display="block"
        document.getElementById("outono").style.display="none"
        document.getElementById("verao").style.display="none"
        document.getElementById("primavera").style.display="none"
        document.getElementById("opcao").innerHTML = "A estação deste mês é INVERNO!"        

    } else if ((numero == 9) || (numero == 10) || (numero == 11) || (numero == "setembro") || (numero == "outubro") || (numero == "novembro")) {
        
        document.getElementById("primavera").style.display="block"
        document.getElementById("inverno").style.display="none"
        document.getElementById("outono").style.display="none"
        document.getElementById("verao").style.display="none"
        document.getElementById("opcao").innerHTML = "A estação deste mês é PRIMAVERA!"        

    } else {

        alert("Digite corretamente o nome ou número do mês desejado!");  

    }

}