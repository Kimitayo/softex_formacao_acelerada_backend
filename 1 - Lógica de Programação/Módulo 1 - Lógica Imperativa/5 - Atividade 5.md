# **Instruções do Projeto**
Na tabela em anexo, encontramos dados de 4 jogadores de um game que contemplam os pontos e moedas obtidos durante as partidas e se conseguiram 
lutar ou não com o chefe.

Baseado nos dados desses jogadores, foram construídas algumas expressões. Avalie cada expressão abaixo, observando as condições de cada jogador, 
descrito na tabela acima. Marque com V( Verdadeiro) ou F(Falso) o resultado de cada expressão.

Dica: Lembre-se de substituir as variáveis "pontos", "moedas" e "enfrentou_chefe" pelos valores correspondentes para cada jogador.

Expressões:
(   )Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim)

(   )Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não)

(   ) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim)

(   ) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não)


![PeerTutoringExtra_LogicaImperativa_01](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/2d1b0338-ffe3-4aac-b85f-69ef86a37732)


# **Resposta**
- Jogador 1: V V V, logo é **V**
- Jogador 2: F V V, logo é **F**
- Jogador 3: F F V, logo é **V**
- Jogador 4: V V F, logo é **V**

(V)Jogador 1: (pontos <sup>V</sup>= 100) and (moedas <sup>V</sup>>= 5) and (enfrentou_chefe <sup>V</sup>== Sim)

(F)Jogador 2: (pontos <sup>F</sup>>= 100) and (moedas <sup>V</sup>>= 5) and (enfrentou_chefe <sup>V</sup>== Não)

(V) Jogador 3: (pontos <sup>F</sup>< 100) or (moedas <sup>F</sup>< 5) or (enfrentou_chefe <sup>V</sup>== Sim)

(V) Jogador 4: (pontos <sup>V</sup>!= 100) or (moedas <sup>V</sup>!= 5) or not(enfrentou_chefe <sup>F</sup>== Não) 
