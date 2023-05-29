//tipo de dados e como trabalhar com boolean
//conversão implícita
const nuemro = 456;
const numeroString = "456";

console.log(nuemro == numeroString);
console.log(nuemro === numeroString);
/*Em JS existem três formas de utilizar o sinal de '='.
 1 - Podemos utilizar como atribuição: var1 = 1 (a variavel 'var1' vai receber o valor '1').
 2 - Podemos utilizar como comparaçõa de valor: 456 == "456",
  nesse caso comparamos somente o valar, ouseja não importa para o JS o tipo da variavel. Nesse caso essa comparação retornaria TRUE.
 3 - Podemos utilizar para comparar atributos: 456 == "456",
  nesse caso comparamos não só o valor mas tambem o tipo de dados, 
  ou seja dizemos ao JS que queremos comparar o valor 456 e o tipo das variaveis, no caso um int e uma string.
  Nesse caso essa comparação retornaria FALSE.*/
  console.log(nuemro + numeroString);

  //Conversão explicita
  //Number() e '+'
  console.log(nuemro + Number(numeroString));
  console.log(nuemro + Number("123EDD123"));
  let largura = "10";
  let altura = "5";
  console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

  //String() e .toString()
  let telefone = 123456789;
  console.log("O telefone é " + String(telefone));
  console.log("O telefone é " + telefone.toString());
  console.log(typeof String(telefone));
  console.log(typeof telefone.toString());