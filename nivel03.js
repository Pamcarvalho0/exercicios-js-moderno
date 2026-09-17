// 15. Calculando desconto

const calcularDesconto = (preco, desconto) => {
  return preco - desconto;
};

console.log(calcularDesconto(200, 20));

// 16. Produto com desconto

const produto3 = {
  nome: "Headset",
  preco: 200,
  desconto: 20
};

const {
  nome: nomeProduto,
  preco: precoProduto,
  desconto
} = produto3;

const novoPreco = precoProduto - desconto;

console.log(`
  ${nomeProduto} custava R$ ${precoProduto} e agora custa R$ ${novoPreco}.
`);

// 17. Média de um aluno

const aluno3 = {
  nome: "Lucas",
  nota1: 8,
  nota2: 6
};

const calcularMedia = (nota1, nota2) => {
  return (nota1 + nota2) / 2;
};

const {
  nome: nomeAlunoMedia,
  nota1,
  nota2
} = aluno3;

const media = calcularMedia(nota1, nota2);

console.log(`${nomeAlunoMedia} ficou com média ${media}.`);

// 18. Verificando idade

const verificarIdade = (idade) => {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
};

console.log(verificarIdade(17));

// 19. Cadastro de jogo

const jogo2 = {
  titulo: "Minecraft",
  genero: "Sandbox",
  preco: 99
};

const exibirJogo = ({ titulo, genero, preco }) => {
  return (`${titulo} é um jogo do gênero ${genero} e custa R$ ${preco}.`);
};

console.log(exibirJogo(jogo2));

// 20. Pedido de uma loja

const pedido = {
  produto: "Teclado Mecânico",
  preco: 250,
  quantidade: 2
};

const calcularTotal = (preco, quantidade) => {
  return preco * quantidade;
};

const {
  produto: nomePedido,
  preco: precoPedido,
  quantidade
} = pedido;

const total = calcularTotal(precoPedido, quantidade);

console.log(`Produto: ${nomePedido}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Valor unitário: R$ ${precoPedido}`);
console.log(`Total: R$ ${total}`);
