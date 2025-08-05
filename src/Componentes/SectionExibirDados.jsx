

function ExibirDados({ dados, mes }) {
    const total = dados.reduce((acc, item) => acc + parseFloat(item.valor || 0), 0);
    return (
        <div className="flex flex-col items-center w-full my-2">
            <div className="w-full max-w-[320px] flex bg-stone-300 p-[5px] rounded-sm flex-col mx-2"> 
                <h2 className="text-center">Mês: {mes} </h2>
                {dados.map((dado, index) => (
                    <div key={index} className="flex">
                        <p className="bg-stone-300 p-[5px] w-5/6 mx-2">{dado.item}</p>
                        <p className="bg-stone-300 p-[5px] w-1/6 mx-2">{dado.valor}</p>
                        <p className="bg-stone-300 p-[5px] w-1/6 mx-2">{dado.tipo}</p>
                    </div>
                ))}


                <div>
                    <h3>Total: {total.toFixed(2)}</h3>
                </div>
            </div>            

        </div>
    )
}

export default ExibirDados;