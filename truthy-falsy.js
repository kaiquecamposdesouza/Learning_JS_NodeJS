//boolean
const usuarioLogado = true;
const conataPaga = false;

//Dados que podem assumir papel de verdadeiro(truthy) e falso(falsy)
console.log(0 == false);// utilizando o == podemos comparar os valores, assim o JS reconhece 0 como falso
console.log("" == false);// utilizando o == podemos comparar os valores, assim o JS reconhece uma string vazia "" como falso
console.log(1 == true);// utilizando o ==, para comparar o tipo, podemos comparar os valores, assim o JS reconhece 1 como verdadeiro
console.log(0 === false);// para utilizarmos a comparação do valor e não do tipo de dados utilizamos o ===

let minhaVar;//undefined
let varNull = null;//null

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);//typeof nos permite perguntar ao JS qual o tipo de dados aquela variavel esta armazenado
console.log(typeof minhaVar);
console.log(typeof varNull);