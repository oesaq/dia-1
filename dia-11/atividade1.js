let nomes = [];
let notas = [];
let continuar = true;
let contador = 0;

while (continuar) {
    let aluno = prompt(`Digite o nome do ${contador + 1}º aluno: `);
    let nota = parseInt(prompt("Digite a nota do aluno: "));
    nomes[contador] = aluno;
    notas[contador] = nota;
    contador++;
    let resposta = prompt("Deseja inserir informações sobre outros alunos? (s/n)")
    if (resposta == "n") {
        continuar = false;        
    }
}

console.log("Notas dos alunos: ");

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + " - " + notas[i]);
}

let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

let media = somaNotas / nomes.length;

console.log(`A soma das notas é: ${somaNotas}`);
console.log(`A média geral da turma é: ${media}`);