// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const valorTotal = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);
  // console.log(valorTotal);

  return (
    <>
      <p>nome: {dados.cliente}</p>
      <p>idade: {dados.idade}</p>
      <p>
        situação:{' '}
        {dados.ativa ? (
          <span style={{ color: 'green' }}>Ativa</span>
        ) : (
          <span style={{ color: 'red' }}>Inativa</span>
        )}
      </p>
      <ul>
        {dados.compras.map((item) => (
          <li key={item.nome}>
            {item.nome}: {item.preco}
          </li>
        ))}
      </ul>
      <p>Valor Total:{valorTotal}</p>
      {valorTotal > 10000 && <p>Você está gastando muito</p>}
    </>
  );
};
export default App;
