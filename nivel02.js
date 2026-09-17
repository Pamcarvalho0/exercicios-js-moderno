// 8. Primeira desestruturação
const aluno = {
    nome: 'Maria',
    idade: 17,
    turma: '2TDS',
};


console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Curso: ${aluno.turma}`);

// 9. Pegando apenas algumas propriedades

const usuario = {
  nome: "Pedro",
  idade: 20,
  email: "pedro@email.com",
  cidade: "São Paulo"
};

console.log(`Nome: ${usuario.nome}`);
console.log(`Email: ${usuario.email}`);

// 10. Desestruturação + Template Literal

const filme = {
  titulo: "Interestelar",
  ano: 2014,
  diretor: "Christopher Nolan"
};


console.log(`${filme.titulo} foi lançado em ${filme.ano} e dirigido por ${filme.diretor}.`);

// 11. Informações de um carro

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024
};

const { marca, modelo, ano: anoCarro } = carro;

console.log(`${marca} ${modelo} - Ano ${anoCarro}`);

// 12. Produto dentro de uma função

const produto = {
  nome: "Mouse",
  preco: 80
};

console.log(`Produto: ${produto.nome} - Preço R$ ${produto.preco}`);

// 13. Desestruturação diretamente na função
const mostrarProdutoDesestruturado = ({ nome, preco }) => {
  return (`Produto: ${nome} - Preço: R$ ${preco}`);
};

console.log(mostrarProdutoDesestruturado(produto));

// 14. Apresentando uma pessoa

const pessoa = {
  nome: "Mariana",
  idade: 25,
  profissao: "Desenvolvedora"
};

console.log(`${pessoa.nome} tem ${pessoa.idade} e trabalha como ${pessoa.profissao}.`);
