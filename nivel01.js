// 1. Criando um objeto
const aluno1 = {
  nome: "Ana",
  idade: 17,
  curso: "Desenvolvimento de Sistemas"
};

console.log(aluno1);

// 2. Acessando propriedades 
const produto = {
  nome: "Teclado",
  preco: 150,
  marca: "Logitech"
};

console.log(produto);

// 3. Template Literal
const nome = "Carlos";
const idade = 18;

console.log(`Carlos tem ${idade} anos.`);

// 4. Template Literal com objeto
const jogo1 = {
  nome: "Minecraft",
  preco: 99
};

console.log(`O jogo ${jogo1.nome} custá R$${jogo1.preco}.`);

// 5. Primeira Arrow Function
const dobro = (numero) => numero * 2;

console.log(dobro(5));

// 6. Soma com Arrow Function
const somar = (numero) => numero + 20;

console.log(somar(10, 20));

// 7. Criando uma mmensagem 
const apresentar = {
    nome1: "Pamela",
    curso1: "Densenvolvimento de Sistemas"
};

console.log(`Meu nome é ${nome1}, e faço curso de ${curso1}.`);