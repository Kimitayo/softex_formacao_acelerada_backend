# **Questão 30 - Enunciado**
Faça um programa que solicite ao usuário informar um valor positivo. O programa deverá repetir a solicitação caso o usuário forneça um valor inválido (negativo).
Quando o usuário fornece um valor válido, mostre uma mensagem de texto confirmando o valor entrado. Faça três versões desse programa, cada uma usando uma 
estrutura de repetição diferente (for, while, do-while). 

# **Resposta**
### For
```
let k;

k = prompt('Digite um valor: ');

for (k==true; k<0; k=prompt('Digite um novo valor: ')){
    console.log('Valor inválido!');
}

console.log('Valor confirmado!');
```

### While
```
let j;

j = prompt('Digite um valor: ');


while (j<0){
        console.log('Valor inválido');
        j = prompt('Digite um novo valor: ');
}

console.log('Valor confirmado!');
```

### Do While
```
let i;

do {
    i = prompt('Digite um valor: ');
    console.log('Valor inválido!');
} while (i<0);

console.log('Valor confirmado!');
```


