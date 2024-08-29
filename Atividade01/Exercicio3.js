//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

//como não sabia se haveria um segundo teste para os alunos e não está especificado a nota que seria para entrar 
//em recuperação, coloquei as duas em uma opção só "recuperação/reprovado"

let score = parseFloat(); //adicione a nota desejada dentro do parênteses.
if (score >= 0 && score <= 5) {
  console.log(`${score} Recuperação/Reprovado`);
} else if (score >= 6 && score <= 10) {
  console.log(`${score} Aprovado`);
} else {
  console.log("Adicione um valor válido");
}