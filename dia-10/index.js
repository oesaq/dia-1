let nomes = [];
let continuar = true;
let posicaoArray = 0;

while (continuar) {
    let nomeInserido = prompt('Insira um novo nome');
    nomes[posicaoArray] = nomeInserido;


    let desejaContinuar = prompt('Insira 1 caso nao queira inserir um novo nome');
    if (desejaContinuar != '1') {
        continuar = false;
        continue;
    }
    posicaoArray++;
}