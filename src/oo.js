"use strict";
//CRIANDO OBJETO NO JS CONVENCIONAL 
// class Pessoa {
//     constructor(nome) {
//         this.nome = nome;
//     }
// }
//CLASSE NO TYPESCRIPT: Apresenta propriedades definidas antes do construtor. 
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse olá;`;
    }
}
//MODIFICADORES, ENCAPSULAMENTO 
class ContaBancaria {
    constructor(numeroDaConta) {
        //niveis de acesso: 
        //PRIVATE: disponivel apenas na classe 
        //PROTECTED: disponivel na classe e é possivel acessar atraves de uma HERANÇA.
        // PUBLIC: acessivel em todos os niveis, classe, herança..
        //STATIC: acessivel apenas pelo nome da classe - nao na instancia.nao precisar adicionar um new para chamar. 
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    //polimorfismo
    depositar(valor) {
        this.saldo += valor;
    }
}
//HERANÇA
class ContaBancariaPessoaFisica extends ContaBancaria {
    //encapsulamento
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
//contaPedro
ContaBancaria.retornaNumeroDoBanco();
