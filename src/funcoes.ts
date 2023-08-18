function calculaArea(base: number, altura: number): number {
    return base * altura;
}

//Reescrevendo a função de modo simplificado
const calculaArea2 = (base: number, altura: number): number => base * altura 

function somar(...numeros:number[]):void { //void :vazio, aparece quando nao utilzamos o retorn dentro de um função.
    //numeros.reduce()
    console.log(numeros)
}

function teste(): string | number {
    if (10 > 5) {
        return 'dez maior que cinco'
    } else {
        return 5
    }
}

const resultadoDeTeste = teste()