import { useState } from 'react';
import './App.css'
import Header from "./Componentes/Header.jsx";
import InputDados from "./Componentes/SectionFormulario.jsx";
import ExibirDados from './Componentes/SectionExibirDados.jsx';

function App() {
  const [dados, setDados] = useState([]);
  const [mes, setMes] = useState('');

  const adicionarDados = (novoItem) => {
    setDados([...dados, novoItem]);
    setMes(novoItem.mes);
  };

  return (
    <div className="App w-screen h-screen bg-stone-900">
      <Header />
      <InputDados onAdicionar={adicionarDados} />
      <ExibirDados mes={mes} dados={dados}/>
    </div>
  )
}

export default App;
