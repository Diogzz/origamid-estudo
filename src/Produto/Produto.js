import React from 'react';
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produto = () => {
  return produtos.map((produto) => (
    <div
      style={{ border: '1px solid black', padding: '25px', margin: '25px' }}
      key={produto.nome}
    >
      <h2>{produto.nome}</h2>
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {produtos.map((detalhes) => (
          <li key={detalhes.propriedades}>{detalhes.propriedades}</li>
        ))}
      </ul>
    </div>
  ));
};

export default Produto;
