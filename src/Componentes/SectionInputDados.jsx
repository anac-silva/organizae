function InputDados() {
    return (
    <div className="flex flex-col items-center w-full ">
        <div className="flex flex-col items-center bg-stone-50 max-w-[700px] rounded-sm ">
            <h1 className="text-black text-2xl my-6">Gastos mensais</h1>
    
            <form className="w-full max-w-[700px] flex">
                <input
                    type="text"
                    placeholder="Descrição"
                    className="bg-stone-300 p-[5px] rounded-sm flex-grow mx-2"
                    id="descricao-item"
                />
                <input
                    type="number"
                    placeholder="Valor"
                    className="bg-stone-300 p-[5px] rounded-sm w-1/6 mx-2"
                    id="valor-item"
                />

                <input
                    type="text"
                    placeholder="Mês"
                    className="bg-stone-300 p-[5px] rounded-sm w-1/6 mx-2"
                    id="mes-item"
                />

                <input
                    type="text"
                    placeholder="Tipo"
                    className="bg-stone-300 p-[5px] rounded-sm w-1/6 mx-2"
                    id="tipo-item"
                />
            </form>

        <button className="bg-green-600 p-[5px] w-[100px] rounded-sm my-2">Adicionar</button>
        </div>
        
    </div>
    );
}
export default InputDados;