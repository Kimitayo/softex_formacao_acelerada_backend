# **Instrução do Projeto**
Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 

# **Resposta**

### Código em JavaScript

```
let candidato, candidato_x, candidato_y, candidato_z;
let voto = "sim";
candidato_x = 0;
candidato_y = 0;
candidato_z = 0;


while (voto == "sim"){
    while(true){
        try{
            candidato = prompt("Qual candidato você deseja votar? Digite com o número referente. "); 
            if (isNaN(candidato)){
                throw new Error("Isso não é válido. Tente novamente");
            } 
            break;
        } catch(erro){
            alert(erro.message);
        }
    }

    if (candidato == 889){
        candidato_x += 1;
        console.log("Você votou no candidato_x.");
    } else if (candidato == 847){
        candidato_y += 1;
        console.log("Você votou no candidato_y.");
    } else if (candidato == 515){
        candidato_z += 1;
        console.log("Você votou no candidato_z.");
    } else if (voto == 0){
        console.log("Você votou em branco!");
    }
    
    if (voto == "sim"){
        voto = prompt("Se deseja continuar a votação, digite sim. ")
    } else{
        break;
    }
}

if (candidato_x>candidato_y && candidato_x>candidato_z){
    console.log(`O candidato vencedor é o candidato_x, com total de ${candidato_x} pontos.`);
} else if (candidato_y>candidato_x && candidato_y>candidato_z){
    console.log(`O candidato vencedor é o candidato_y, com total de ${candidato_y} pontos.`);
} else if (candidato_z>candidato_x && candidato_z>candidato_y){
    console.log(`O candidato vencedor é o candidato_z, com total de ${candidato_z} pontos.`);
} else{
    console.log("Empate!");
}

```
