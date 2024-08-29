//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

let age = parseInt(); //insira a idade que deseja checar dentro do parênteses e a mesma será avaliada.
if (age == 0 || age <= 12) {
  console.log(`${age} anos é uma criança`);
} else if (age == 13 || age <= 17) {
  console.log(`${age} anos é um adolescente`);
} else if (age == 18 || age <= 58) {
  console.log(`${age} anos é um adulto`);
} else if (age >= 59) console.log(`${age} anos é um idoso`);
