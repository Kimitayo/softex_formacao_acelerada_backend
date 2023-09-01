# **Instrução do Projeto**
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

# **Resposta**

### Código em JavaScript

```
let nome, anoNascimento;

nome = prompt("Digite seu nome completo: ");

while (true){
  try{
    anoNascimento = parseInt(prompt("Digite seu ano de nascimento: "));
    if (isNaN(anoNascimento) || anoNascimento<=1922 || anoNascimento>=2021){
      throw new Error("Isso não é um ano válido. Tente novamente.");
    }
    break;
  }  catch(erro){
    alert(erro.message);
  }
}

console.log(`Você digitou o nome ${nome} e o ano de nascimento ${anoNascimento}`);

```
