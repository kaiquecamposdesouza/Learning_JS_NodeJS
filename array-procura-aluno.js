const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias];

function exibeAlunoMedia(aluno){
    if (listaAlunosMedias[0].includes(aluno)) {
        // const alunos = listaAlunosMedias[0];
        // const medias = listaAlunosMedias[1];

        const [alunos, medias] = listaAlunosMedias;

        const index = alunos.indexOf(aluno);
        const mediaAluno = medias[index];

        console.log(`O(a) aluno(a) ${aluno} tem a média ${mediaAluno}.`);
    } else{
        console.log("Aluno não cadastrado!")
    }
}

exibeAlunoMedia("Caio");