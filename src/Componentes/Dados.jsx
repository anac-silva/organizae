function InputDados () {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-stone-50 text-2xl my-6"> Contas do mês</h1>
            <form>
                <input type="text" placeholder="Descrição" className="bg-stone-50 p-[5px] w-[300px] rounded-sm"/>
                <input type="number" placeholder="Valor" className="bg-stone-50 p-[5px] w-[100px] mx-2 rounded-sm"/>
                <button className="bg-green-600 p-[5px] w-[80px] rounded-sm">Adicionar</button>
            </form>
            
        </div>
    )
}

export default InputDados;