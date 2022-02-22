import React from 'react';
import Button from './Button/Button';
import Produto from './Produto/Produto';

const App = () => {
  //começa com o produto vindo vazio
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  // função de click do button já alterando o estado do produto
  async function handleClick(e) {
    let urlProduto = `https://ranekapi.origamid.dev/json/api/produto/${e.target.id}`;
    // setProduto(valueButton);

    const response = await fetch(urlProduto);
    const json = await response.json();
    setProduto(json);
    setCarregando(false);
  }
  // console.log(fetchProdutos(`https://ranekapi.origamid.dev/json/api/produto/${produto}`));

  return (
    <>
      <section>
        {carregando && <p>Carregando...</p>}
        {!carregando && produto && <Produto produto={produto} />}
      </section>
      <section style={{ display: 'flex', marginTop: '50px' }}>
        <Button id="smartphone" handleClick={handleClick}>
          SmartPhone
        </Button>
        <Button id="tablet" handleClick={handleClick}>
          Tablet
        </Button>
        <Button id="notebook" handleClick={handleClick}>
          Notebook
        </Button>
      </section>
    </>
  );
};
export default App;
