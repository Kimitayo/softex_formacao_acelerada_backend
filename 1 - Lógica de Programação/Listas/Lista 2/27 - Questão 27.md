# **Questão 27 - Enunciado**
Faça um programa que gere três valores aleatórios inteiros.
i. Dica: use as funções rand() e srand(), ambas definidas na biblioteca stdlib.h.

# **Resposta**
```
let valorAleatorio1, valorAleatorio2, valorAleatorio3, min, max;

min = Number(prompt('Digite o menor valor neste intervalo: '));
max = Number(prompt('Digite o maior valor neste intervalo: '));

valorAleatorio1 = Math.floor(Math.random()*(max-min+1))+min;
valorAleatorio2 = Math.floor(Math.random()*(max-min+1))+min;
valorAleatorio3 = Math.floor(Math.random()*(max-min+1))+min;

console.log(`1º valor: ${valorAleatorio1}\n2º valor: ${valorAleatorio2}\n3º valor: ${valorAleatorio3}`);
```
