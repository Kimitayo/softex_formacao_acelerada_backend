# **Instrução do Projeto**
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.


# **Resposta**

### Código em JavaScript

```javascript
function buscarElemento(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return i;
        }
    }
    return -1; 
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementoBuscado = 20;

const j = buscarElemento(array, elementoBuscado);

if (j !== -1) {
    console.log(`O elemento é: ${elementoBuscado}. O indíce é: ${j}.`);
} else {
    console.log(`O elemento ${elementoBuscado} não foi encontrado no array.`);
}


```
