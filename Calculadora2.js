
let continuar = true
// Aqui mostramos o primeiro menu para o usuário.

while (continuar) {
    let opcao1 = Number(prompt("Olá estimado usuário, digite um dos numeros amostrados: \n \n 1) Sair \n 2)Calcular"));
    switch (opcao1) { // Aqui no switch case, permitira o usuário escolher uma das duas opções
        case 1:
            alert("Obrigada por usar nosso programa!");
            sair()
            break;
        case 2:
            Calcular();
            break;
        default:
            alert("Tente novamente");
            break;
    }

    // Aqui mostramos o segundo menu para o usuário, e a condição "continuar" que é verdadeira permite o loop continuar, até que for escrito o número 1 ou sair, aí a condição será falsa, e o programa vai fechar.

    function Calcular() {
        let opcoesAritmeticas = prompt("Digite o tipo de operação que gostaria de fazer: \n \n + \n - \n * \n / \n % \n \n Caso quiser sair digite: SAIR ").toLocaleUpperCase()
        switch (opcoesAritmeticas) {
            case "+":
                let somaResultado = soma();
                alert(" O resultado é: " + somaResultado);
                break;
            case "-":
                let subtracaoResultado = subtracao();
                alert(" O resultado é: " + subtracaoResultado);
                break;
            case "*":
                let multiplicarResultado = multiplicar()
                alert(" O resultado é: " + multiplicarResultado);
                break;
            case "/":
                let dividirResultado = dividir()
                alert(" O resultado é: " + dividirResultado);
                break;
            case "%":
                let modResultado = mod()
                alert(" O resultado é: " + modResultado)
                break;
            case "SAIR":
                alert("Obrigada por usar nosso programa!")
                sair()
                break;
            default:
                alert("Tente novamente");
                break;
        }
    }
}

// Esse aqui é outro menu que será amostrado para o usuário, dependendo de que operação o usuário quiser fazer, será realizada. Se o usuário digitar uma letra ou palavra que não seja "SAIR" ou um número, será invalidado, e pedirá para tentar novamente.

function soma() {
    let num1 = Number(prompt("Digite um número:"))
    let num2 = Number(prompt("Digite o outro número:"))
    let resultado = num1 + num2
    return resultado;
}

function subtracao() {
    let num1 = Number(prompt("Digite um número:"))
    let num2 = Number(prompt("Digite o outro número:"))
    let resultado = num1 - num2
    return resultado;
}

function multiplicar() {
    let num1 = Number(prompt("Digite um número:"))
    let num2 = Number(prompt("Digite o outro número:"))
    let resultado = num1 * num2
    return resultado;
}

function dividir() {
    let num1 = Number(prompt("Digite um número:"))
    let num2 = Number(prompt("Digite o outro número:"))
    let resultado = num1 / num2
    return resultado;
}

function mod() {
    let num1 = Number(prompt("Digite um número:"))
    let num2 = Number(prompt("Digite o outro número:"))
    let resultado = num1 % num2
    return resultado;
}
// Essas funções aqui são as que armazenam as informações fornecidas pelos usuários, e essas informações serão utilizadas para fazer a operação pedida pelo usuário. Retornamos o resultado lá no menu das operações.
Calcular()



