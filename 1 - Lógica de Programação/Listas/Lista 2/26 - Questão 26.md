# **Questão 26 - Enunciado**
Faça um programa para ler as dimensões de um terreno (comprimento e largura), o preço do metro de arame e calcular o custo total para cercar o terreno. 
O programa também deve informar quantos metros de cerca devem ser comprados.

# **Resposta**
```
let comprimento, largura, precoArame, custoTotal, perimetro;

comprimento = Number(prompt('Digite o comprimento do terreno: '));
largura = Number(prompt('Digite a largura do terreno: '));
precoArame = Number(prompt('Digite o valor em reais do arame por metro: '));

perimetro = 2*(comprimento+largura);
custoTotal = precoArame*perimetro;

console.log(`Custo total: ${custoTotal}\nQuantidade a ser comprado em metros: ${perimetro}`)
```
