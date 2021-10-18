import React, {useState} from 'react'

function TIForm(props) {

    const [inputText, setInput] = useState("");
    const [validacion, setValidacion] = useState(true);

    const manejarFormulario = (event) => {
        setInput(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        if(inputText.trim() !== ""){
            props.addNewLenguaje(inputText);
            setInput("");
            setValidacion(true);
        }else{
            setValidacion(false);
        }
    }

    return (
        <div>
            <form className="Lenguajeform">
                <span>Lenguaje de programación:</span>{' '}
                <input 
                    type="text"
                    placeholder='Agregar un lenguaje'
                    value={inputText} 
                    onChange={manejarFormulario}
                />{" "}
                <button onClick={submit}>Añadir</button>
            </form>
            {
                !validacion &&
                <div className="validacion">Añada un lenguaje por favor</div>
            }
        </div>
    )
}

export default TIForm