const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota, indice){
    somaDasNotas += nota;
    console.log(indice);
    //não tem retorno necessariamente pois o forEach modifica o proprio array
});

const media = somaDasNotas / notas.length;

console.log(media);