// Manipulação de Objetos
// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// // valores no console.

// let car = {
//     marca: "Mercedes-",
//     modelo: "SLK 300",
//     ano: 2024,
//     cor: "Vermelho",
// }
// for(let characteristics in car){
//     console.log(characteristics + ": " + car[characteristics] )
// }

// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

// let book = {
//   titulo: "A Guerra dos Tronos",
//   autor: "George R. R. Martin",
//   anoPublicação: "6 de agosto de 1996",
//   genero: "Romance, Quadrinhos, Literatura fantástica",
// };
// let existeEditora = false;
// for (let characteristics in book) {
//   if (characteristics === "editora") {
//     editora = true;
//     break;
//   }
// }
// if (!existeEditora) {
//   book.editora = "Não possui a informação da editora do livro";
// }
// console.log(book);

// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

// function computador(processador, memoria, armazenamento, fonte, gpu) {
//   return {
//     processador,
//     memoria,
//     armazenamento,
//     fonte,
//     gpu,
//   };
// }
// let computador1 = computador(
//   "I9 10th",
//   "32GB",
//   "1TB",
//   "400W",
//   "4080RTX",
//   () => {
//     return "computador";
//   }
// );
// console.log(computador1);
// for (let cpu in computador1) {
//   console.log(`${cpu}: ${computador1[cpu]}`);
// }

// Manipulação de Arrays de Objetos com for of
// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

// let pessoas = [
//   { nome: "Lucas", idade: 35, cidade: "Porto Alegre" },
//   { nome: "Joana", idade: 75, cidade: "Gramado" },
//   { nome: "Lucio", idade: 21, cidade: "Santa Rosa" },
//   { nome: "Juliana", idade: 38, cidade: "Canela" },
// ];

// for (const descricao of pessoas) {
//   console.log(
//     `Nome: ${descricao.nome}, Idade: ${descricao.idade}, Cidade: ${descricao.cidade}.`
//   );
// }

// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

// let alunos = [
//   { nome: "Pedro", nota1: 10, nota2: 10 },
//   { nome: "Julio", nota1: 8, nota2: 7 },
//   { nome: "Jonas", nota1: 4, nota2: 7 },
// ];
// for (const notas of alunos) {
//   let media = (notas.nota1 + notas.nota2) / 2;

//   console.log(`Nome: ${notas.nome}, média: ${media}`);
// }

// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

// let funcionarios = [
//   {nome:"Renato", cargo:"Gestor de pessoas", salario:15000},
//   {nome:"Geromel", cargo:"Gerente Comercial", salario:5000},
//   {nome:"Cristaldo", cargo:"Diretor", salario:4500},
//   {nome:"Dodi", cargo:"Auxiliar de produção", salario:1500},
//   {nome:"Monsalve", cargo:"Gerente de Projeto", salario:7500},

// ]
// for (const chave of funcionarios) {
//   if(chave.salario >= 5000){
//     console.log(`Os funcionário com salários maiores ou iguais a R$5000,00. São: ${chave.nome}`)
//   }

// }

// Manipulação de Arrays de Objetos com forEach
// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.
// let produtos = [
//   { name: "Arroz", preço: 5.25, desconto: 0.1 },
//   { name: "Feijão", preço: 4.25, desconto: 0.1 },
//   { name: "Carne", preço: 37.9, desconto: 0.1 },
//   { name: "Pão", preço: 0.3, desconto: 0.1 },
// ];
// produtos.forEach((chave) => {
//   let valorDesconto = chave.preço * (1 - chave.desconto);
//   console.log(
//     `O valor do produto: ${
//       chave.name
//     }, com desconto de 10% ficará R$${valorDesconto.toFixed(2)}`
//   );
// });
// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

// let filmes = [
//   {
//     titulo: "O Poderoso Chefão",
//     diretor: "Francis Ford Coppola",
//     anoLancamento: 1972,
//   },
//   {
//     titulo: "Um Sonho de Liberdade",
//     diretor: "Frank Darabont",
//     anoLancamento: 1994,
//   },
//   { titulo: "Os Vingadores", diretor: "Joss Whedon", anoLancamento: 2012 },
//   {
//     titulo: "O Senhor dos Anéis, O Retorno do Rei",
//     diretor: "Peter Jackson",
//     anoLancamento: 2003,
//   },
// ];

// let titulosFilmes = [];

// filmes.forEach((chave) => {
//   titulosFilmes.push(chave.titulo);
// });

// console.log(titulosFilmes);

// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

// let cliente = [
//   { nome: "Lucas", idade: 35, cidade: "Porto Alegre" },
//   { nome: "Joana", idade: 15, cidade: "Cachoeirinha" },
//   { nome: "Ines", idade: 27, cidade: "Canoas" },
//   { nome: "Pedro", idade: 72, cidade: "Alvorada" },
//   { nome: "Carlos", idade: 47, cidade: "Viamão" },
//   { nome: "Carol", idade: 53, cidade: "Porto Alegre" },
// ];
// let contador = 0;
// cliente.forEach((chave) => {
//   if (chave.idade > 30) {
//     contador++;
//   }
// });
// console.log(`A quantidade de clientes com mais de 30 anos é ${contador}.`);
// Combinação de Estruturas
// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

// let vendas = [
//   { produto: "Notebook", quantidade: 30, valor: 4999.0 },
//   { produto: "Mouse", quantidade: 100, valor: 180.0 },
//   { produto: "Monitor", quantidade: 15, valor: 650.0 },
//   { produto: "fone", quantidade: 80, valor: 160.0 },
//   { produto: "Teclado", quantidade: 65, valor: 220.0 },
// ];
// let valorTotal = 0;
// vendas.forEach((chave) => {
//   valorTotal += chave.quantidade * chave.valor;
// });
// console.log(`O valor total das vendas é R$${valorTotal.toFixed(2)}.`);

// 11. Agrupando Elementos com forEachc
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

// let pedidos =[
//   {cliente:"Lucas", produto:"Óculos", quantidade: 1},
//   {cliente:"Fábio", produto:"Camisa", quantidade: 4},
//   {cliente:"Maria", produto:"Vestido", quantidade: 3},
//   {cliente:"Gabriela", produto:"Tênis", quantidade: 2},
// ]
// let quantProdutoCliente = []
// pedidos.forEach(chave => {
//   quantProdutoCliente.push(`Cliente: ${chave.cliente}. Quantidade de produtos comprados: ${chave.quantidade}`)

// });
// console.log(quantProdutoCliente)

// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

// let estoque = [
//   { produto: "Martelo", quantidade: 18, minimo: 20 },
//   { produto: "Chave de Fenda", quantidade: 40, minimo: 30 },
//   { produto: "Alicate", quantidade: 8, minimo: 15 },
//   { produto: "Marreta", quantidade: 10, minimo: 5 },
//   { produto: "Estilete", quantidade: 50, minimo: 70 },
// ];
// let produtosRepor = [];
// estoque.forEach((chave) => {
//   if (chave.quantidade < chave.minimo)
//     produtosRepor.push(`${chave.produto} ${chave.quantidade * 2}un`);
// });
// console.log(`Os produtos a serem repostos são: ${produtosRepor.join(", ")}. `);

// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.
// let carrinho = {
//   itens:[
//     {nomeProduto:"Molho de Tomate", quantidade: 2, precoUnitario:2.90 },
//     {nomeProduto:"Arroz", quantidade: 1, precoUnitario:6.50 },
//     {nomeProduto:"Farinha", quantidade: 3, precoUnitario:2.45 },
//     {nomeProduto:"Massa", quantidade: 2, precoUnitario:3.50 },
//     {nomeProduto:"Cerveja", quantidade: 12, precoUnitario:4.99 },
//   ]
// }
// let valorTotalCarr = 0
// carrinho.itens.forEach(chave => {
//   valorTotalCarr += chave.quantidade * chave.precoUnitario}
// )

// console.log(`O valor total das compras é: R$${valorTotalCarr.toFixed(2)}`)
// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.
// const empresa = {
//   departamento: [
//     { nome: "Comercial", funcionario: ["Emerson", "Cristiano", "Joana"] },
//     { nome: "Financeiro", funcionario: ["Lilian", "Cristina", "Ana"] },
//     { nome: "Recursos Humanos", funcionario: ["Ester, Júlio, Bruna"] },
//   ],
// };
// for (const grupo in empresa.departamento) {
//   const departamento = empresa.departamento[grupo];
//   console.log(`Departamento: ${departamento.nome}`);
//   for (const funcionarios of departamento.funcionario) {
//     console.log(`Funcionário: ${funcionarios}`);
//   }
// }

// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.
let transacoes = [
  { tipo: "entrada", valor: 1500.23 },
  { tipo: "entrada", valor: 2600.98 },
  { tipo: "entrada", valor: 700.33 },
  { tipo: "saida", valor: 1500.9 },
  { tipo: "entrada", valor: 15000 },
  { tipo: "saida", valor: 8000 },
  { tipo: "saida", valor: 5000.54 },
  { tipo: "entrada", valor: 600 },
  { tipo: "saida", valor: 1379.92 },
];
let saldo = 0;
transacoes.forEach((transacoes) => {
  if (transacoes.tipo === `entrada`) saldo += transacoes.valor;
  else if (transacoes.tipo === `saida`) saldo -= transacoes.valor;
});
console.log(`O saldo final é: R$${saldo.toFixed(2)}`);
