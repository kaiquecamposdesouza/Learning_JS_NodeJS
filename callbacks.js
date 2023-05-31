const nomes = ["Evaldo", "Mari", "Camis"];

//Callback origin
nomes.forEach(function (nome) {
    console.log(nome);
});

console.log("----------------------------------------------------------------------");

//Callback arrow-function
nomes.forEach((nome) => {
    console.log(nome);
});

console.log("----------------------------------------------------------------------");

//Callback função declarada
function imprimeNome(nome){
    console.log(nome);
};

nomes.forEach(imprimeNome);
