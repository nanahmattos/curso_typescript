const multiplica = (numero1:number, numero2:number):number => numero1 * numero2;
const resultado: number = multiplica(10, 5);
console.log(resultado);


function saudacao(nome: string) {
    return `Olá ${nome}!`
}
const resultadoSaudacao = saudacao('Maria')
console.log(resultadoSaudacao)