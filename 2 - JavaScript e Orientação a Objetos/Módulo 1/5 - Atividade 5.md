# **Instrução do Projeto**
Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o código utilizando exemplos para cada variável que respeitem os tipos identificados. Certifiquem-se de que os valores correspondam aos tipos de dados corretos.


# **Resposta**

### Código em JavaScript

```javascript
let nome, salario, idade, diploma;

nome = prompt("Digite o nome: "); //string
salario = Number(prompt("Digite o salário: ")); //number
idade = Number(prompt("Digite a idade: ")); //number
diploma = prompt("Possui diploma? "); //string

console.log("Nome: ", nome);
console.log("Salário: ", salario);
console.log("Idade: ", idade);
console.log("Tem diploma? ", diploma);

console.log("Nome: ", typeof(nome));
console.log("Salário: ", typeof(salario));
console.log("Idade: ", typeof(idade));
console.log("Tem diploma? ", typeof(diploma));

```
