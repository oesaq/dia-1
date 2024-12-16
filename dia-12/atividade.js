// nomes e senhas

let nomes = [];
let senhas = [];
let contador = 0;

let continuar = true;

while(continuar) {
    let opcao = prompt("O que deseja fazer? 1 - Cadastro; 2 - Login; 3 - Excluir; 4 - Encerrar");

    switch (opcao) {
        case "1":
            nomes[contador] = prompt("qual o seu nome? ");
            senhas[contador] = prompt("Qual a sua senha: ");
            contador++;
            break;
        
        case "2":
            let nome = prompt('Qual o seu nome? ');
            let senha = prompt('Qual sua senha? ');
            let loginInvalido = false;

            for (let i = 0; i < nomes.length; i++) {
                if (nome == nomes[1] && senha == senhas[1]) {
                    loginInvalido = true;

                }
                
            }

            if (loginInvalido) {
                alert(`Login feito com sucesso. Bem-vindo(a) ${nomes}`);
                } else {
                    alert(`Login ou senha incorretos, tente novamente!`)
                }
        break;

        case "3":
        
                let nomeExcluir = prompt("Qual o nome usuário que deseja excluir?");
                let nomesAux = [];
                let senhasAux = [];
                let contadorAux = 0;

                for (let i = 0; i < contador; i++) {
                    if (nomeExcluir == nomes[i]) {
                        alert("Usuário excluído com sucesso!");
                    } else {
                        nomesAux[contadorAux] = nomes[i];
                        senhasAux[contadorAux] = senhas[i];
                        contadorAux++;
                    }
                    
                }

                nomes = nomesAux;
                senhas = senhasAux;
                contador--;
        break;

        
        case "4":
                continuar = false;
        break;

        default:
            console.log("Opão inválida, escolha outra opção válida!");
            break;
    }
}