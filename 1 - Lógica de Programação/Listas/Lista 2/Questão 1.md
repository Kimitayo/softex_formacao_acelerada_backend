# **Questão 1 - Enunciado**
Faça um programa que declare uma variável inteira, atribua a essa variável o valor 2.97 e mostre na tela o conteúdo da variável. Que valor é mostrado na tela? 
Por que isso acontece? Como pode ser evitado esse tipo de problema?

# **Resposta**
```
let num = 2.97;
let num_int = parseInt(num);
console.log(num_int);
```

- O valor mostrado é 2;
- Como foi colocado a função parseInt, ele converteu o objeto para um valor inteiro.
