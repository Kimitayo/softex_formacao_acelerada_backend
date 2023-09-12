# **Instrução do Projeto**
Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.


# **Resposta**

### Código em JavaScript

```
let animais = [];

let quantosAnimais = prompt("Quantos animais deseja listar? ");

for (let i=0;i<quantosAnimais;i++){
    let animal = prompt("Digite o tipo de animal: "); // 0 = gato   1 = cachorro
    let nome = prompt("Digite o nome do animal: ");
    let especie = prompt("Digite a espécie do animal: ");
    let idade = prompt("Digite a idade do animal: ");
    animais.push([animal, nome, especie, idade]);
}

for (let i=0;i<animais.length;i++){
    console.log(animais[i]);
}

```
