class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}
//parecido com o type
//uma classe pode herdar apenas de uma outra classe, porem pode-se iclementar quantas interfaces possiveis.
//não se pode criar instâncias como interfaces
interface ITtransacional {
    transferir: (valor:number, destinatario: Conta) => boolean;
    TaxaTransferencia: number;
}

class ContaCorrente extends Conta implements ITtransacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.TaxaTransferencia);
        return true;
    }
    TaxaTransferencia: number = 0;
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
