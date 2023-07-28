# **Instrução do Projeto**
Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

# **Resposta**

![image](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/0b017552-48ef-4617-9675-381f1a105764)


### Código em JavaScript

```
var a, b, operacao, resultado;

// Describe this function...
function calculadora(a, b, operacao) {
  if (operacao == 'soma') {
    return a + b;
  }
  if (operacao == 'subtração') {
    return a - b;
  }
  if (operacao == 'multiplicação') {
    return a * b;
  }
  if (operacao == 'divisão') {
    return a / b;
  }
  return 0;
}


operacao = window.prompt('Soma, subtração, multiplicação ou divisão: ');
a = Number(window.prompt('Valor de a: '));
b = Number(window.prompt('Valor de b: '));
resultado = calculadora(a, b, operacao);
window.alert(resultado);
```
