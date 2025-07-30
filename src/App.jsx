import './App.css'
import Header from "./Componentes/Header.jsx";
import InputDados from "./Componentes/SectionInputDados.jsx";
import ExibirDados from './Componentes/SectionExibirDados.jsx';
import React from 'react';

function App() {

  return (
    <div className="w-screen h-screen bg-stone-900">
      <Header />
      <InputDados />
      <ExibirDados />
    </div>
  )
}

export default App;
