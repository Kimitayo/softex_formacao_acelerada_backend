# **Questão 28 - Enunciado**
Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra. Escreva um programa que leia o total de horas normais e o total de horas extras
trabalhadas por um empregado em um ano e calcule o salário anual deste trabalhador.

# **Resposta**
```
let horaNormal, horaExtra, salarioAnual;

horaNormal=Number(prompt('Digite a quantidade de horas trabalhadas em um ano: '));
horaExtra=Number(prompt('Digite a quantidade de horas extras trablhadas em um ano: '));

salarioAnual=(10*horaNormal+15*horaExtra);

console.log(`Salário anual: ${salarioAnual}`);
```
