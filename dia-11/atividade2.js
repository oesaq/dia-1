let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 0;

while (continuar) {
    let modelos = prompt("DIgite o modelo do carro: ")
    modelos[contador] = modelos;
    let ano = prompt("Digite o ano do carro: ");
    anos[contador] = ano;
    let valor = parseInt(prompt("Digite o valor do carro: "));
    valores[contador] = valor;
    contador++;

    let resposta = prompt("Deseja inserir outro carro? (s/n)");
    if (resposta == "n") {
        continuar = false;
    }
}

console.log("Carros cadastrados: ");
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i]);
}

for (let i = 0; i < valores.length; i++) {
    for (let j = 0; j < valores.length - i - 1; j++) {
        if (valores[j] > valores[j + 1]) {

            let modeloMaiorValor = modelos[j];
            modelos[j] = modelos[j + 1];
            modelos[j + 1] = modeloMaiorValor;

            let anoMaiorValor = anos[j];
            anos[j] = anos[j + 1];
            anos[j + 1] = anoMaiorValor;

            let maiorValor = valores[j];
            valores[j] = valores[j + 1];
            valores[j + 1] = maiorValor;
                        
        }
        
    }
    
}

console.log("Carros ordenados pelo preço: ");
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i]);
    }