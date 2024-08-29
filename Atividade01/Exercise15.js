// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let numberA = 0;
let numberB = 1;
console.log(
  "Os primeiros dez primeiros números da sequência de Fibonacci são:"
);
for (let i = 0; i < 10; i++) {
  console.log(numberA);
  numberC = numberA + numberB;
  numberA = numberB;
  numberB = numberC;
}
