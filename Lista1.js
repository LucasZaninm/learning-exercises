const prompt = require("prompt-sync")(); //deixei pronto a opção caso utilize o prompt em algum exercício

//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

// let i = parseInt()
//     if( i % 2 === 0) {
//         console.log(`${i} é um número par!`)
//     } else{
//         console.log(`${i} é um número impar!`)
//     }

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

//let age = parseInt(37)
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

//let nota = parseInt(10);
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

// let weight = parseFloat(); //peso
// let height = parseFloat(); //altura
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

// let sideA = parseInt()
// let sideB = parseInt()
// let sideC = parseInt()

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

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

// function purchasingApples() {
// let buyApples = parseInt(prompt("Digite a quantidade de maçãs que deseja comprar")
//   );
//   let valueApple;

//   if (buyApples <= 12) {
//     let valueApple = 0.30;
//   } else {
//     let valueApple = 0.25;
//   }
//   let purchasedValue = valueApple * buyApples;
//   console.log(`o valor total da compra é R$:${purchasedValue}`);
//   return purchasedValue;
// }
// purchasingApples()

//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

// let Value1 = parseFloat(prompt("Escolha um número"))
// let Value2 = parseFloat(prompt("Escolha um número"))
// while (Value1 === Value2) {
//   console.log("Os números escolhidos não podem ser iguais")
// }

// if( Value1 < Value2){
//   console.log(`valores em ordem crescente: ${Value1}, ${Value2}`)
// } else{
//   console.log(`Valores em ordem decrescente: ${Value2}, ${Value1}`)
// }

//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
//utilizando um loop for.
// for (let i = 10; i >=1; i --){
//   console.log(i)
// }

//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
// let numInt = parseInt(prompt("insira um número para repetilo dez vezes"))
// for (let i = 0; i < 10; i ++ ){
//   console.log(numInt)
// }
//
//Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.
// let sumTotal = 0;
// for (i = 1; i <= 5; i++) {
//   let number = parseFloat(prompt(`Insira um valor: ${i}:`));

//   while (isNaN(number)) {
//     console.log("Erro, insira um número válido, por favor");
//     number = parseFloat(prompt(`Insira um valor: ${i}`));
//   }

//   sumTotal += number;
// }

// console.log("Soma total:" + sumTotal);

//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//10) utilizando um loop for.

// let multiplier = Number(prompt('Informe qual nº da tabuada: '));

// if (isNaN(multiplier)) {
//     console.log(`Por favor, insira um número válido entre 1 e 10.`);
// } else if (multiplier < 1 || multiplier > 10) {
//     console.log("Insira um valor entre 1 e 10.");
// } else {
//     for (let counter = 1; counter <= 10; counter++) {
//         console.log(`${multiplier} * ${counter} =`, multiplier * counter);
//     }
// }

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

// let entranceNumber = parseFloat(prompt("Digite um número ou digite 0 para sair: "))
// let totalNumber = 0
// let sumNumber = 0

// while(entranceNumber !== 0){
//        sumNumber += entranceNumber
//    totalNumber++
//    entranceNumber = parseFloat(prompt(`Digite o próximo número: `))
// }
// if (totalNumber  > 0){
//    console.log( `Média aritmética: `, sumNumber / totalNumber)

// }else {
//    console.log(`Insira um número.`)
// }

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.
// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.
// let factorialNumber = parseFloat(
//   prompt("Insira um número para calculo do seu fatorial:")
// );
// let factorial = 1;
// if (factorialNumber < 0) {
//   console.log("O número inserido é invalido");
// } else {
//   for (let i = 1; i <= factorialNumber; i++) {
//     factorial *= i;
//   }
//   console.log(`O fatorial de ${factorialNumber} é ${factorial}.`);
// }
// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

// let numberA = 0
// let numberB = 1
// console.log("Os primeiros dez primeiros números da sequência de Fibonacci são:")
// for (let i = 0; i < 10; i++){
//    console.log(numberA)
//   numberC = numberA + numberB
//    numberA = numberB
//    numberB = numberC
// }


// let numberA = 0;
// let numberB = 1;
// let fibs = [];

// for (let i = 0; i < 10; i++) {
//     fibs.push(numberA);
//     let numberC = numberA + numberB;
//     numberA = numberB;
//     numberB = numberC;
// }
// console.log(`Os primeiros dez números da sequência de Fibonacci são: ${fibs.join(', ')}`);