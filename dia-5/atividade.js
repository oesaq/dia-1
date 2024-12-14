// primeira atividade:

/*

let num1 = Number(prompt('Escolha o primeiro número: '));
let operacao = Number(prompt('Escolha uma operação: 0 - Soma, 1 - Subtração, 2 - Multiplicação ou 3 - Divisão'))
let num2 = Number(prompt('Escolha o segundo número: '));



switch (operacao) {
    case 0:
        console.log(num1 + num2);
        break;

    case 1:
        console.log(num1 - num2);
        break;

    case 2:
        console.log(num1 * num2);
        break;

    case 3:
        console.log(num1 / num2);
        break;

    default:
        console.log('Reinicie o programa');
        break;
} */

// segunda atividade

let valor
let quantidade
let opcao = Number(prompt('Escolha uma das 3 opções a seguir: 1 - Gasolina; 2 - Etanol; 3 - Calibrar Pneu;'));

switch (opcao) {
    case 1:
        valor = parseInt(prompt('Digite o valor desejado para abastecer: '));
        quantidade = valor / 5;
        console.log("Foram abastecidos " + quantidade + " litros de Gasolina")
        break;
        
    case 2:
        valor = parseInt(prompt('Digite o valor desejado para abastecer: '));
        quantidade = valor / 3;
        console.log("Foram abastecidos " + quantidade + " litros de Etanol")
        break;

    default:
        console.log('Pneus calibrados com sucesso!')
        break;
}
