type aluno = {
    nome: string;
    cursos?: string[]; // ? : transforma mais flexivel
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Phyton"],
        idade: 29,
    },
]

alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
})

const novoAluno: aluno = {
    nome: "Marcelo",
    idade: 32,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}