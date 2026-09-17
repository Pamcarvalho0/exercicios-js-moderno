// Desafio Final

const notebook = {
  marca: "Dell",
  modelo: "Inspiron",
  preco: 3500,
  desconto: 500
};

const calcularPrecoFinal = (preco, desconto) => {
  return preco - desconto;
};

const {
  marca: marcaNotebook,
  modelo: modeloNotebook,
  preco: precoNotebook,
  desconto: descontoNotebook
} = notebook;

const precoFinal = calcularPrecoFinal(
  precoNotebook,
  descontoNotebook
);

console.log(`Notebook ${marcaNotebook} ${modeloNotebook}`);
console.log(`Preço original: R$ ${precoNotebook}`);
console.log(`Desconto: R$ ${descontoNotebook}`);
console.log(`Preço final: R$ ${precoFinal}`);
