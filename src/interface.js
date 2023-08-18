"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.TaxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.TaxaTransferencia);
        return true;
    }
}
//ADICIONANDO VARIAS INTERFACES
// interface IExemplo2 {
//     cnpj: number;
// }
// interface IExemplo3 extends IExemplo2 {
//     telefone: number;
// }
// class ContaCorrente extends Conta implements ITtransacional, IExemplo3 {
//     transferir(valor: number, destinatario: Conta) {
//         destinatario.saldo += (valor - this.TaxaTransferencia);
//         return true;
//     }
//     TaxaTransferencia: number = 0;
//     telefone: number = 0;
//     cnpj: number = 0;
// }
