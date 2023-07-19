# **Questão 25 - Enunciado**
Ler o salário-base de um funcionário, calcular e mostrar o salário a receber, sabendo-se que esse funcionário tem gratificação de 5% sobre o salário-base, e
paga imposto de 7% sobre o salário-base.

# **Resposta**
```
let salarioBase, salarioReceber;

salarioBase = Number(prompt('Digite o valor de seu salário-base: '));

salarioReceber = ((0.05*salarioBase)+salarioBase) - (0.07*salarioBase);

console.log(`O salário a receber será de ${salarioReceber}`);
```
