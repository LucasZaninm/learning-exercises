const prompt = require("data-sync"); //deixei pronto a opção caso utilize o prompt em algum exercício

//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

// let i = Number()
//     if( i % 2 === 0) {
//         console.log(`${i} é um número par!`)
//     } else{
//         console.log(`${i} é um número impar!`)
//     }

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

// let age = Number(37)
// if( age == 0 || age <= 12 ){
//     console.log(`${age} anos é uma criança`)
// } else if( age == 13 || age <=17){
//     console.log(`${age} anos é um adolescente`)
// }else if (age == 18 || age <=58){
//         console.log(`${age} anos é um adulto`)
// } else if (age >=59)
//     console.log(`${age} anos é um idoso`)

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// let nota = Number(10);
// if (nota == 0 || nota <= 5) {
//   console.log(`${nota} Recuperação/Reprovado`);
// } else if (nota == 6 || nota <= 10) {
//   console.log(`${nota} Aprovado`);
// } else if ((nota < 0 || nota > 10)) { //preciso verificar caso o infeliz coloque um número menor que zero (erro de usuário)
//   console.log("Valor invalido");
// }

//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

// let paymentMethod = 2
// let payment;

// switch (paymentMethod) {
//   case 1:
//     payment = "Credit";
//     break;
//   case 2:
//     payment = "Debit";
//     break;
//   case 3:
//     payment = "Bank Transfer";
//     break;
//   default:
//     payment = "Invalid Method";
// }
// console.log(payment);

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// let weight = Number(); //peso
// let height = Number(); //altura
// let IMC = weight / (height * height);
// if (IMC <= 18.5) {
//   console.log(`${IMC} Low Weight`);
// } else if (IMC > 18.5 && IMC <= 24.99) {
//   console.log(`${IMC} Normal weight`);
// } else if (IMC >= 25 && IMC <= 29.99) {
//   console.log(`${IMC} Overweight`);
// } else if (IMC > 29.99) {
//   console.log(`${IMC} Obesity`);
// }

//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

// let sideA = Number()
// let sideB = Number()
// let sideC = Number()

// if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
//   console.log(
//     `medida do lado A = ${sideA}, medida do lado B = ${sideB} e medida lado C = ${sideC} .`
//   );
//   if (sideA === sideB && sideB === sideC) {
//     console.log("Os dados fornecidos formam um Triângulo equilátero");
//   } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
//     console.log("Os lados fornecidos formam um Triângulo isósceles");
//   } else {
//     console.log("Os dados fornecidos formam um Triângulo escaleneo");
//   }
// } else {
//   console.log("Os lados fornecidos não formam um triângulo");
// }

//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

function purchasingApples() {
  let buyApples = Number(prompt("Digite a quantidade de maçãs que deseja comprar")
  );
  let valueApple;

  if (buyApples <= 12) {
    let valueApple = 0.30;
  } else {
    let valueApple = 0.25;
  }
  let purchasedValue = valueApple * buyApples;
  console.log(`o valor total da compra é R$:${purchasedValue}`);
  return purchasedValue;
}
purchasingApples()
