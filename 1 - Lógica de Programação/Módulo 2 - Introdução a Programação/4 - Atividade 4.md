# **Instrução do Projeto**
Desenvolva um código, utilizando o Google Blockly, que utilize as seguintes características de um veículo:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
A: Veículos com duas ou três rodas;
B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
E: Veículos com quatro rodas ou mais e com mais de 6000 kg.

# **Resposta**

![4](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/eba21aba-83c4-479e-ad79-74ea3db9dd36)


![4 1](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/c8648c9d-4e67-4e2d-85f6-2c59704111c7)


![4 2](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/091befe0-9075-4589-bbf8-4ee6fd6c2555)


![4 3](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/35926517-5977-4fe8-a4aa-91cd409eb33d)


### Código em JavaScript

```
var rodas, peso, pessoas;


rodas = Number(window.prompt('Quantidade de rodas: '));
peso = Number(window.prompt('Peso que suporta: '));
pessoas = Number(window.prompt('Quantidade de pessoas: '));
if (rodas == 2 || rodas == 3) {
  window.alert('Categoria A');
} else if (rodas == 4 && pessoas <= 8 && peso < 3500) {
  window.alert('Categoria B');
} else if (rodas >= 4 && peso >= 3500 && peso < 6000) {
  window.alert('Categoria C');
} else if (rodas >= 4 && pessoas >= 8) {
  window.alert('Categoria D');
} else if (rodas >= 4 && peso >= 6000) {
  window.alert('Categoria E');
}
```

