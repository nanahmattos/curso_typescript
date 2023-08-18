
//CRIANDO OBJETO NO JS CONVENCIONAL 
// class Pessoa {
//     constructor(nome) {
//         this.nome = nome;
//     }
// }
//CLASSE NO TYPESCRIPT: Apresenta propriedades definidas antes do construtor. 
class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome:string, renda?: number){
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse olá;`
    }
}

//MODIFICADORES, ENCAPSULAMENTO 

class ContaBancaria {
//niveis de acesso: 
//PRIVATE: disponivel apenas na classe 
//PROTECTED: disponivel na classe e é possivel acessar atraves de uma HERANÇA.
// PUBLIC: acessivel em todos os niveis, classe, herança..
//STATIC: acessivel apenas pelo nome da classe - nao na instancia.nao precisar adicionar um new para chamar. 
    protected saldo: number = 0;
    public numeroConta: number;

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco(){
        return 125;
    }

    private getSaldo() {
        return this.saldo;
    }
    //polimorfismo
    depositar(valor: number) {
        this.saldo += valor;
    }
}

//HERANÇA
class ContaBancariaPessoaFisica extends ContaBancaria {
    //encapsulamento
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456)
//contaPedro
ContaBancaria.retornaNumeroDoBanco()
