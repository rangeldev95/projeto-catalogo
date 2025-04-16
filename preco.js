// Dicionário de preços dos produtos
const precos = {
  "lisa": 159.90,
  "infantil": 189.90,
  "barcelona": 259.90
};

// Função para atualizar o preço de um produto
function atualizarPreco(idProduto, elementoPreco) {
  const preco = precos[idProduto];
  if (preco) {
    elementoPreco.innerText = `R$ ${preco.toFixed(2)}`;
  } else {
    elementoPreco.innerText = 'Preço não disponível';
  }
}

// Função para aplicar os preços na página
function aplicarPrecos() {
  const produtos = document.querySelectorAll('.preco');
  
  produtos.forEach((produto) => {
    const idProduto = produto.getAttribute('data-id');
    if (idProduto) {
      atualizarPreco(idProduto, produto);
    }
  });
}

// Chama a função assim que a página é carregada
window.onload = aplicarPrecos;
