# **Instrução do Projeto**
Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 


# **Resposta**

### Código em JavaScript

```
console.log("0: Sair\n1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n");
 
let calculadora = NaN;
let a, b;
let soma, subtracao, multiplicacao, divisao;
 
 while (calculadora != 0){
   calculadora = Number(prompt("Insira um valor: "))
   
   switch (calculadora){
     case 0:
       console.log("0: Sair");
       break;
     case 1:
       console.log("1: Soma");
       a = Number(prompt("Digite o valor de a: "));
       b = Number(prompt("Digite o valor de b: "));
       soma = a + b;
       console.log(soma);
       break;
     case 2:
       console.log("2: Subtração");
       a = Number(prompt("Digite o valor de a: "));
       b = Number(prompt("Digite o valor de b: "));
       subtracao = a - b;
       console.log(subtracao);
       break;
     case 3:
       console.log("3: Multiplicação");
       a = Number(prompt("Digite o valor de a: "));
       b = Number(prompt("Digite o valor de b: "));
       multiplicacao = a * b;
       console.log(multiplicacao);
       break;
     case 4:
       console.log("4: Divisão");
       a = Number(prompt("Digite o valor de a: "));
       b = Number(prompt("Digite o valor de b: "));
       divisao = a / b;
       console.log(divisao);
       break;
     default:
        console.log("Essa opção não existe!");
   }
}

console.log("Calculadora finalizada!");

```
