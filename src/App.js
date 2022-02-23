import React from 'react';
import Button from './Button/Button';
import Produto from './Produto/Produto';

const App = () => {
  //começa com o produto vindo vazio
  const [linkProduto, setLinkProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);
  const [produto, setProduto] = React.useState(null);
  const [contador, setContador] = React.useState(0);

  function handleClick(e) {
    setLinkProduto(e.target.id);
  }

  React.useEffect(() => {
    setCarregando(true);
    fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${
        linkProduto ? linkProduto : `smartphone`
      }`,
    )
      .then((response) => response.json())
      .then((json) => setProduto(json));
    setCarregando(false);
    setContador(0);
  }, [linkProduto]);

  return (
    <>
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
      <section>
        <Button handleClick={() => setContador(contador + 1)}>
          {contador}
        </Button>
        {carregando && <p>Carregando...</p>}
        {!carregando && produto && <Produto valorTotal={contador} produto={produto} />}
      </section>
    </>
  );
};
export default App;
