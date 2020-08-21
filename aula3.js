var nome, nota1,nota2;

nome = prompt("Digite o nome do aluno:")
nota1 = prompt("DIgite a nota 1 do aluno:")
nota2 = prompt("DIgite a nota 2 do aluno:")

media = (nota1 + nota2) / 2
if(media >=5) {
    alert("Aprovado!" + nome)
}
else {
    alert("reprovado" + nome)
}