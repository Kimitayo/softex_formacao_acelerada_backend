# **Questão 29 - Enunciado**
Faça um programa que mostre na tela os números naturais entre 0 (zero) e 100. Faça três versões desse programa, 
cada uma usando uma estrutura de repetição diferente (for, while, do-while). Qual das três estruturas é a mais 
adequada para este programa? Por que?

# **Resposta**
### For
```
let i;

for (i=1; i<=100; i++){
    console.log(i);
}
```

### While
```
let j=1; 

while (j<=100){
    console.log(j);
    j++;
}
```

### Do While
```
let k=1;

do{
    console.log(k);
    k++;
} while (k<=100);
```

Dos 3 usos, a estrutura mais adequada é o for, já que não tem chances de entrar em um loop, como o while, 
e também testa o valor antes de começar a repetição, diferente do do-while.
