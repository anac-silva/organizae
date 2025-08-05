import React, { useState } from "react";
import CampoTexto from "./CampoTexto";

function InputDados({ onAdicionar }) {
    const [item, setItem] = useState("");
    const [valor, setValor] = useState("");
    const [tipo, setTipo] = useState("");
    const [mes, setMes] = useState("");

    const handleAdicionar = () => {
        if (item && valor && tipo && mes) {
        onAdicionar({ item, valor, tipo, mes });
        setItem("");
        setValor("");
        setTipo("");
        setMes("");
        }
    };

    return (
    <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center bg-stone-50 w-[320px] rounded-sm">
            <h1 className="text-black text-2xl my-6">Gastos mensais</h1>
            <CampoTexto label="Item" placeholder="Digite o item" value={item} onChange={e => setItem(e.target.value)} />
            <CampoTexto label="Valor" placeholder="Digite o valor" value={valor} onChange={e => setValor(e.target.value)} />
            <CampoTexto label="Tipo" placeholder="Digite o tipo" value={tipo} onChange={e => setTipo(e.target.value)} />
            <CampoTexto label="Mês" placeholder="Digite o mês" value={mes} onChange={e => setMes(e.target.value)} />

            <button onClick={handleAdicionar} className="bg-green-600 p-[5px] w-[120px] rounded-sm my-2">
                Adicionar
            </button>
        </div>
    </div>
    );
}

export default InputDados;