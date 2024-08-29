//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require("prompt-sync")();

let paymentOption = parseInt(
  prompt(
    "Selecione a forma de pagamento que deseja utilizar: opção 1 = crédito, opção 2 = débito ou opção 3 = Pix. Digite uma das opções: "
  )
);
let payment;

while (paymentOption < 1 || paymentOption >= 4) {
  console.log("Opção Inválida");
  paymentOption = parseInt(
    prompt(
      "Selecione a forma de pagamento que deseja utilizar: opção 1 = crédito, opção 2 = débito ou opção 3 = Pix. Digite uma das opções: "
    )
  );
}
switch (paymentOption) {
  case 1:
    payment = "O pagamento será realizado no cartão de crédito";
    break;
  case 2:
    payment = "O pagamento será realizado no cartão de débito";
    break;
  case 3:
    payment = "O pagamento será via Pix";
    break;
  default:
    payment = "Escolha um método de pagamento válido";
}
console.log(payment);
