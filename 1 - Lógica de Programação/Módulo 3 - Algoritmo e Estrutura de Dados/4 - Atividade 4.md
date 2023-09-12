# **Instrução do Projeto**
Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.


# **Resposta**

### Código em JavaScript

```
class Pessoa {
    constructor(nome, idade, filho = null) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}

class ListaPessoas {
    constructor() {
        this.cabeca = null; 
        this.tamanho = 0; 
    }


    adicionar(nome, idade) {
        const novaPessoa = new Pessoa(nome, idade);

        if (!this.cabeca) {
            this.cabeca = novaPessoa;
        } else {
            let atual = this.cabeca;
            while (atual.filho) {
                atual = atual.filho;
            }
            atual.filho = novaPessoa;
        }

        this.tamanho++;
    }

    
    exibir() {
        let atual = this.cabeca;
        while (atual) {
            console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
            atual = atual.filho;
        }
    }
}

const listaPessoas = new ListaPessoas();
listaPessoas.adicionar("Clara", 24);
listaPessoas.adicionar("Caio", 20);
listaPessoas.adicionar("Isabela", 27);
listaPessoas.exibir();

```
