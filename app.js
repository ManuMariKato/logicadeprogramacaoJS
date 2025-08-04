alert("Boas vindas ao jogo do número secreto!"); //aparece uma mensagem na tela
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //criando uma variável, A função Math.random em JavaScript gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo) de forma pseudo aleatória, com uma precisão de até 16 casas decimais.
console.log(numeroSecreto);//ferramenta do desenvolvedor
let chute;
let tentativas = 1;

//enquanto
while(chute != numeroSecreto){
    chute =  prompt(`Escreva um número entre 1 e ${numeroMaximo}`); //cria uma box para responder, como se fosse um input
    //se o chute for igual ao número secreto, executa uma mensagem no console
    if(chute == numeroSecreto ){ //condicional
        break;    
    }
    else{
        if (chute > numeroSecreto){
            console.log(chute);
            alert(`O número secreto é menor que ${chute}`);
        }
        else{
            console.log(chute);
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas ++; // tentativas = tentativas + 1;
   
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' //operador ternário
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`); 

// é a mesma coisa que:

//if(tentativas > 1){
//    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`); //${} deixa a variável visível dentro de uma mensagem
//}
//else{
//   alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`); //${} deixa a variável visível dentro de uma mensagem
//}
