let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

let resultado = media >= 7 ? "Aprovado" : "Reprovado";

console.log(`Média: ${media}\nSituação: ${resultado}`);
