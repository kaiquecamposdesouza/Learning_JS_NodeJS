//função com parametros
function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplicacao(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));
console.log(soma(3.5, 10.55));
console.log(multiplicacao(soma(4,5), soma(1,3)));