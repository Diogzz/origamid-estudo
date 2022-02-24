import React from 'react';

const Produto = ({ produto, valorTotal }) => {
  return (
    <div
      id={produto.nome}
      style={{ border: '2px solid', padding: '1rem', margin: '1rem' }}
    >
      <ul style={{ listStyle: 'none' }}>
        <li>Nome: {produto.nome}</li>
        <li>Preco: R${produto.preco}</li>
        <li>Preco Total: R${Number(produto.preco) * valorTotal}</li>
        {/* <li>Preco Total: R${((Number(produto.preco)) * contador)}</li> */}
      </ul>
      <div style={{ display: 'flex' }}>
        {produto.fotos.map(({ src, titulo }) => (
          <img
            key={titulo}
            src={src}
            alt={titulo}
            style={{ width: '200px', marginRight: '1rem' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Produto;
