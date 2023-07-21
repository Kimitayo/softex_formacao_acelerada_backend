# **Instrução do Projeto**
No hipertexto anterior, temos um exemplo de um fluxograma que realiza o cálculo da média de duas notas de um aluno. O fluxograma solicita duas notas que serão somadas, 
e logo em seguida a média dessas notas é calculada. Dessa forma o resultado da média quando é maior ou igual a 7 o aluno está APROVADO, quando menor que 7 o aluno 
está REPROVADO.

Utilizando o Google Blockly construa o algoritmos que realiza esse processamento.


![1 1](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/84c61595-9951-45ec-9273-40de4248a9ff)


# **Resposta**

![1](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/095b311c-9860-4e03-b21d-47507d7ddcb1)

![1-2](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/f1cd5769-6067-435f-8135-34262e839ec5)

### Código em JavaScript

```
var nota1, nota2, soma, media;


nota1 = Number(window.prompt('Digite a 1º nota: '));
nota2 = Number(window.prompt('Digite a 2º nota: '));
soma = nota1 + nota2;
media = soma / 2;
if (media >= 7) {
  window.alert('Aprovado');
} else {
  window.alert('Reprovado');
}
```


