// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

import Home from './Home';
import Links from './Produto/Links';
import Produto from './Produto/Produto';

const { pathname } = window.location;

let Component;
if (pathname === '/produto') {
  Component = Produto;
} else {
  Component = Home;
}


const App = () => {
  return (
    <>
      <section>
        <ul style={{ display: 'flex' }}>
          <Links link="/">Home</Links>
          <Links link="/produto">Produtos</Links>
        </ul>
        <Component />
      </section>
    </>
  );
};

export default App;
