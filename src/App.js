import React from "react";
import useFetch from "./useFetch";


const App = () => {
  const {request, data, loading} = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto')
    }
    fetchData();
  }, [])

  if(loading === true) return <p>Loading...</p>
  if (data)
  return (
      <section>
        {data.map((produto) => (
          <div key={produto.id}><h2>{produto.nome}</h2></div>
        ))}
      </section>
  );
  else return null
};
export default App;
