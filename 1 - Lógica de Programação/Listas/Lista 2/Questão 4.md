# **Questão 4 - Enunciado**
Faça um programa que leia uma data no formato (dd/mm/aaaa) e mostre a data
fornecida no formato (aaaa/mm/dd).
i. Dica: é possível especificar as barras no formato de entrada na função
scanf().

# **Resposta**
```
let dia, dia_28, mes, mes_00, ano;

dia = parseInt(prompt('Digite uma data no formato dd: '));
mes = parseInt(prompt('Digite uma mês no formato mm: '));
ano = parseInt(prompt('Digite um ano no formato aaaa: '));


if (dia>0 && dia<=30 && (mes==4 || mes==6 || mes==9 || mes==11)){
    if (mes<10){
        mes = '0'+mes;
    } else{
        mes = mes;
    }
    if (dia<10){
        dia = '0'+dia;
    } else{
        dia = dia;
    }
    if (ano>=100 && ano>1000){
        ano = '0'+ano;
    } else if (ano>=10 && ano<100){
        ano = '00'+ano;
    } else if (ano>=0 && ano<10){
        ano = '000'+ano;
    } else{
        ano = ano;
    }
    console.log('A data é ' + ano + '/' + mes + '/' + dia);
} else if (mes==2 && dia==30 || (mes==2 && dia==29 && ano%4!=0) || (dia>0 && dia==31 && (mes==4 || mes==6 || mes==9 || mes==11)) || (mes==2 && dia>=30) || (dia>31 || mes > 12)){
    console.log('Data errada!');
} else if (mes==2 && dia==29 && ano%4==0){
    if (mes<10){
        mes = '0'+mes;
    } else{
        mes = mes;
    }
    if (dia<10){
        dia = '0'+dia;
    } else{
        dia = dia;
    }
    if (ano>=100 && ano>1000){
        ano = '0'+ano;
    } else if (ano>=10 && ano<100){
        ano = '00'+ano;
    } else if (ano>=0 && ano<10){
        ano = '000'+ano;
    } else{
        ano = ano;
    }
    console.log('A data é ' + ano + '/' + mes + '/' + dia);
} else if (dia>0 && dia<=31 && (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12)){
    if (mes<10){
        mes = '0'+mes;
    } else{
        mes = mes;
    }
    if (dia<10){
        dia = '0'+dia;
    } else{
        dia = dia;
    }
    if (ano>=100 && ano>1000){
        ano = '0'+ano;
    } else if (ano>=10 && ano<100){
        ano = '00'+ano;
    } else if (ano>=0 && ano<10){
        ano = '000'+ano;
    } else{
        ano = ano;
    }
    console.log('A data é ' + ano + '/' + mes + '/' + dia);
} else if (dia>0 && dia<=27 && mes==2){
    if (mes<10){
        mes = '0'+mes;
    } else{
        mes = mes;
    }
    if (dia<10){
        dia = '0'+dia;
    } else{
        dia = dia;
    }
    if (ano>=100 && ano>1000){
        ano = '0'+ano;
    } else if (ano>=10 && ano<100){
        ano = '00'+ano;
    } else if (ano>=0 && ano<10){
        ano = '000'+ano;
    } else{
        ano = ano;
    }
    console.log('A data é ' + ano + '/' + mes + '/' + dia);
}
```
