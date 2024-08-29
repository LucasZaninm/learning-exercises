// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
const prompt = require("prompt-sync")()

let entranceNumber = parseFloat(prompt("Digite um número ou digite 0 para sair: "))
let totalNumber = 0
let sumNumber = 0

while(entranceNumber !== 0){
       sumNumber += entranceNumber
   totalNumber++
   entranceNumber = parseFloat(prompt(`Digite o próximo número: `))
}
if (totalNumber  > 0){
   console.log( `Média aritmética: `, sumNumber / totalNumber)

}else {
   console.log(`Insira um número.`)
}
