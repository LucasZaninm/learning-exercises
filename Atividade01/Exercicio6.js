//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let sideA = parseFloat(); //inserir o valor desejado.
let sideB = parseFloat(); //inserir o valor desejado.
let sideC = parseFloat(); //inserir o valor desejado.

if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
  console.log(
    `Medida do lado A = ${sideA}, Medida do lado B = ${sideB}, Medida do lado C = ${sideC} .`
  );
  if (sideA === sideB && sideB === sideC) {
    console.log("Os dados fornecidos formam um Triângulo equilátero.");
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log("Os lados fornecidos formam um Triângulo isósceles.");
  } else {
    console.log("Os dados fornecidos formam um Triângulo escaleneo.");
  }
} else {
  console.log("Os lados fornecidos não formam um triângulo.");
}
