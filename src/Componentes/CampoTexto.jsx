function CampoTexto({ label, placeholder, value, onChange }) {
    return (
    <div className="flex flex-col w-full px-4 py-1">
        <label>{label}</label>
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="bg-stone-300 p-[5px] rounded"
        />
        </div>
    );
}

export default CampoTexto;