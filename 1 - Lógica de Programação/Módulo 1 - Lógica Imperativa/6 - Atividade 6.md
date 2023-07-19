# **Instruções do Projeto**
Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".

Exemplo:

É terrestre? Sim.

Cabe apenas uma pessoa? Sim.

É pesado? Não.

Tem pedal? Sim.

Então, o transporte escolhido foi a bicicleta.

Para chegar ao resultado de cada uma das opções, use o modelo em anexo.

![unnamed](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/aa0b1543-d464-46f7-a511-e78da30e6671)

# **Resposta**
### Variáveis
var terrestre, espaco, peso, pedal, capacete;

### Início
escreva("O meio de transporte escolhido é terrestre? Sim ou não?")
leia(terrestre)

### Estrutura condicional
se (terrestre=='sim') então

    escreva("Cabe somente 1 pessoa? Sim ou não?")
    
    leia(espaco)
    

se (espaco=='sim') então

    escreva("É pesado? Sim ou não?")
    
    leia(peso)
    
    escreva("Tem pedal? Sim ou não?")
    
    leia(pedal)
    

se (peso=='sim') então

    imprimir("Trator")
    

se (pedal=='sim') então

    imprimir('Bicicleta')
    

se (espaco=='não') então

    escreva("Usa capacete? Sim ou não?")
    leia(capacete)
    se (capacete=='sim') então
    imprimir('Moto')
    
