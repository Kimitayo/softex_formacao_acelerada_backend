# **Instrução do Projeto**
Desenvolva, utilizando o Google Blockly, um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. Conclua se o aluno está 
aprovado ou reprovado de acordo com as especificações:
 
- Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
- Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.

No sistema, todos os valores devem estar armazenados em variáveis.

# **Resposta**

![3](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/c5e9f751-b949-413d-94a6-d99dddc5f77d)


![3 1](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/a7306e9b-1026-4586-b419-baac9892b0ed)


![3 2](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/aea19086-fed9-4d35-a672-dfe8fc5f52af)


### Código em JavaScript

```
var nome, nota1, nota2, faltas, soma, media;


nome = window.prompt('Digite seu nome: ');
nota1 = Number(window.prompt('Digite sua 1º nota: '));
nota2 = Number(window.prompt('Digite sua 2º nota: '));
faltas = Number(window.prompt('Digite a quantidade de faltas: '));
soma = nota1 + nota2;
media = soma / 2;
if (media < 7) {
  window.alert('Nome do aluno: ' + String(nome));
  window.alert('Reprovado!');
} else if (faltas > 3) {
  window.alert('Nome do aluno: ' + String(nome));
  window.alert('Reprovado!');
} else if (media >= 7) {
  window.alert('Nome do aluno: ' + String(nome));
  window.alert('Aprovado!');
}
```

