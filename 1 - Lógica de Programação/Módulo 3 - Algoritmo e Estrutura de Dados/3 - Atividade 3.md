# **Instrução do Projeto**
Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?



# **Resposta**

### Código em JavaScript

```
// Fila: utiliza shift, e assim consegue remover o primeiro valor do array
let array = [3, 7, 9, 1, 0];
console.log(array);

while (array.length > 0) {
    array.shift();
    console.log(array);
}

// Lista: utiliza splice, e assim consegue remover em qualquer ordem.

// Pilha: utiliza pop, e assim consegue remover o último valor do array.

```
