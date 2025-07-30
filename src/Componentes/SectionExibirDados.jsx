function ExibirDados() {

    return (
        <div className="flex flex-col items-center w-full my-2">
            <div className="w-full max-w-[700px] flex bg-stone-300 p-[5px] rounded-sm flex-col mx-2"> 
                <h2>Mês: </h2>
                <div className="w-full max-w-[700px] flex">
                    <p className="bg-stone-300 p-[5px]  w-5/6 mx-2">Item 1</p>
                    <p className="bg-stone-300 p-[5px]  w-1/6 mx-2">Valor</p>
                    <p className="bg-stone-300 p-[5px]  w-1/6 mx-2">Tipo</p>
                </div>
                <div className="w-full max-w-[700px] flex">
                    <p className="bg-stone-300 p-[5px]  w-5/6 mx-2">Item 1</p>
                    <p className="bg-stone-300 p-[5px]  w-1/6 mx-2">Valor</p>
                    <p className="bg-stone-300 p-[5px]  w-1/6 mx-2">Tipo</p>
                </div>
            </div>
            
            

        </div>
    )
}

export default ExibirDados;