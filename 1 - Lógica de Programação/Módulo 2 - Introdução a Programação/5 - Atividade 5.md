# **Instrução do Projeto**
Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.


# **Resposta**



### Código em JavaScript

```
var i;


i = 5;
for (i = 5; i >= 0; i--) {
  if (i == 5) {
    window.alert('Iniciando contagem regressiva');
  } else if (i == 0) {
    window.alert('"BUM!"');
  } else {
    window.alert(['Se passaram ',i,'s'].join(''));
  }
}
```
