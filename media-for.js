const notas = [10, 6.5, 8, 7.5];
let media = 0;

for (let index = 0; index < notas.length; index++) {
    media += notas[index];
}

console.log(`A media é ${media / notas.length}.`)