const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

/*Quando a função callback retorna verdadeiro, ou true, 
o elemento é adicionado no array de retorno, 
e quando ela retorna falso, ou false, o elemento é descartado.*/
const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);
