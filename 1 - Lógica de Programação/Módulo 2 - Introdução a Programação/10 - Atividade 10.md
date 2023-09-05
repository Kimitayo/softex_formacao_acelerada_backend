# **Instrução do Projeto**
Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.


# **Resposta**

### Código em JavaScript

```
let nomes = ["Clara", "Caio", "Giovana"];
let idades = [24, 20, 25];
let cores = ["azul", "preto", "roxo"];

console.log(`Nomes: ${nomes},\nIdades: ${idades},\nCores: ${cores}\n`);

let novaCor = cores.splice(1, 1, "vermelho");
let novaIdade = idades.splice(2, 1, 35);

console.log(`Nomes: ${nomes},\nIdades: ${idades},\nCores: ${cores}`);

```
