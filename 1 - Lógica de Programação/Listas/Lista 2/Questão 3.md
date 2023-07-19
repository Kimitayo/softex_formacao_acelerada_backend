# **Questão 3 - Enunciado**
Faça um programa que leia um valor inteiro e mostre este mesmo valor nas bases hexadecimal, octal e o caractere correlacionado a esse inteiro.
Dica: a função printf() possui opções de formatação que fazem isso.

# **Resposta**
```
let num_int, hexadec, octa, caractere;

num_int = parseInt(prompt("Digite um número: "));
hexadec = num_int.toString(16);
octa = num_int.toString(8);
caractere = String.fromCharCode(num_int);


console.log('Na base hexadecimal é ' + hexadec);
console.log('Na base octal é ' + octa);
console.log('O caractere correlacionado é ' + caractere);
```
