# **Questão 7 - Enunciado**
Faça um programa para ler uma temperatura em graus Celsius e mostrar seu valor convertido para graus Fahrenheit e graus Kelvin.

# **Resposta**
```
let temp, temp_f, temp_k;

temp = Number(prompt('Digite a temperatura em Celsius: '));

temp_f = temp * 1.8 + 32;
temp_k = temp + 273.15;

console.log(`Temperatura Fahrenheit: ${temp_f}\nTemperatura Kelvin: ${temp_k}`);
```
