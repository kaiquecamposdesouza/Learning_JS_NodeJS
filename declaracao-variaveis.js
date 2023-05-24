//Declaração de VAR
var alturaVar = 6;
var comprimentoVar = 5;

areaVar = alturaVar * comprimentoVar;
console.log(areaVar);
var areaVar;

//Declaração de LET
let formaLet = 'quadrado';
let alturaLet = 5;
let comprimentoLet = 6;
let areaLet;

if(formaLet === 'quadrado'){
    areaLet = comprimentoLet * alturaLet;
}else{
    areaLet = (comprimentoLet * alturaLet) / 2
}

console.log(areaLet);

//Declaração de CONST
const forma = 'quadrado';
const altura = 5;
const comprimento = 6;
let area = 0;

if(forma === 'quadrado'){
    area = comprimento * altura;
}else{
    area = (comprimento * altura) / 2
}

console.log(area);



