import React from 'react';
import Button from './Button/Button';
import Produto from './Produto/Produto';

const App = () => {
  //começa com o produto vindo vazio
  const [linkProduto, setLinkProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);
  const [produto, setProduto] = React.useState(null);
  const [contador, setContador] = React.useState(1);

  function handleClick(e) {
    setLinkProduto(e.target.id);
  }

  // let setLocalStorage = (key, value) => {
  //   const sessionKey = key;
  //   const sessionValue = value;
  //   window.localStorage.setItem(sessionKey, sessionValue);
  // };

  // let getLocalStorage = (key, value) => {
  //   const sessionKey = key;
  //   const sessionValue = value;
  //   return window.localStorage.getItem(sessionKey, sessionValue);
  // };

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
  }, [linkProduto]);

  React.useEffect(() => {
    const getProduto = JSON.parse(window.localStorage.getItem('itemProduto'));
    setLinkProduto(getProduto.item.id);
    setContador(getProduto.quantidade);
  }, []);

  React.useEffect(() => {
    const itemProduto = {
      item: produto,
      quantidade: contador,
    };

    produto &&
      window.localStorage.setItem('itemProduto', JSON.stringify(itemProduto));
  }, [produto, contador]);

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
        {!carregando && produto && (
          <Produto valorTotal={contador} produto={produto} />
        )}
      </section>
    </>
  );
};
export default App;
