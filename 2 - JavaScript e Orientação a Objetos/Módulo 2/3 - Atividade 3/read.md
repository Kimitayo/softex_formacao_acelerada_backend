# **Instrução do Projeto**
Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.

# **Resposta**

### Código em JavaScript

#### Código 1
```javascript
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

let resultado = media >= 7 ? "Aprovado" : "Reprovado";

console.log(`Média: ${media}\nSituação: ${resultado}`);
```

#### Código 2
```javascript
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));

let mediaAtual = (nota1 + nota2) / 2;

let notaMinima = 7 * 2 - (nota1 + nota2);

console.log(`Nota mínima: ${notaMinima}`);

```
