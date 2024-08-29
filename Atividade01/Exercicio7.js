// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")() //utilizaremos o prompt para interação com o terminal 

let buyApples = parseInt(prompt("Digite a quantidade de maçãs que deseja comprar: "));
let value

if(buyApples > 12){
    value = 0.25
}
else{
    value = 0.30
}
let totalValue = buyApples * value
console.log(`Adquiriu-se a quantidade de: ${buyApples} maçãs no valor total de R$${totalValue.toFixed(2)}`) 
//usei .toFixed(2) para ficar condizente com o valor final em reais.
   
  
