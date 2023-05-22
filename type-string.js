//Declaração de variaveis do tipo texto
const texto1 = "Olá Mundo!";
const texto2 = 'Seja bem vindo!';
const senha = "SenhaSupersegura1234!";
const stringNumero = "43213455";

//Utilização de aspas para serem inseriadas como parte de um texto, assim como em citações 
const citacao = 'E Deus disse: "Que se faça a luz", e assim se fez.'
console.log(citacao);

//concatenação de variaveis
const citacao2 = "Meu nome é ";
const meuNome = "Kaique";
console.log(citacao2 + meuNome)

//unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//utilizando função para deixar todos os caracteres minudculos
const cidade = "belo horizonte";
const input = "Belo Horizonte";
console.log(cidade === input);
const inputMinusculo = input.toLowerCase();
//para compararmos duas coisas em JS utilizamos '==='
console.log(cidade === inputMinusculo);

//toLowerCase
const letraMaiuscula = "MEU NOME É KAIQUE CAMPOS DE SOUZA";
console.log(letraMaiuscula.toLocaleLowerCase());

//Length
const tamanhoDoTexto = "Quero saber quantos caracteres tem esse texto!";
console.log(tamanhoDoTexto.length);