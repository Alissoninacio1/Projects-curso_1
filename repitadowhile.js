/*uso do do-while para saber se a pessoa quer permanecer com as respectivas ações ou  não*/
function acaoBotao() {
    var sairLoop, valor01, valor02
    do{
        valor01 = prompt("Digite o primeiro valor: ")
        valor02 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(valor01) + parseInt(valor02))
        sairLoop = prompt("Deseja sair? S/N")

    }while(sairLoop == "N")
}

       