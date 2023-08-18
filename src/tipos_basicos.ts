//tipos : BOOLEAM, NUMBER E STRING
let estaChovendo: boolean = false
estaChovendo = true

let idade: number = 27 
let altura: number = 1.75
const nacionalidade: string = 'brasileria'

//array : nao se pode ter um array com dois tipos
const colegas: string[] = ['lucas', 'fernanda']
const tecnologias: Array<string> = ['html', 'css', 'js']
//array de leitura : nao permite fazer o push :
const notas: ReadonlyArray<number> = [7,9,5,10];

//const lista: [string, boolean, number] = ['gian', true, 22]
const lista: [nomde: string, estaEstudando: boolean, idade: number] = ['gian', true, 22]

// "|", possibilita aceitar outros tipos na variavel:
let idadeDaAna: number | string = 25


//tipo que aceita qualquer coisa "any":
let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = 'string'
dadosDaApi = [1,2,3]

//Tipagens em funções
//Tipagem implicita: o ts entende o tipo mesmo sem informar.
let curso = 'front-end'
curso = 'olá'