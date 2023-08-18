// converter tipos no typescritp, REST 

namespace casting { // criando uma pasta virtual 
    let idade: any = 25;
    (idade as number).toFixed();
    //toFixed() //adiciona casas decimais 
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })


     // forçando a identifar um numero com string
    let nome: string = 35 as unknown as string;
    // tambem podemos converter esses dados usando o 'parseInt, parseFloat, toString'
}