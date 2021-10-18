import React, {useState} from 'react'

function TitleForm(props) {

    const [inputText, setInput] = useState("");
    const [validacion, setValidacion] = useState(true);

    const manejarFormulario = (event) => {
        setInput(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        if(inputText.trim() !== ""){
            props.addNewTitle(inputText);
            setInput("");
            setValidacion(true);
        }else{
            setValidacion(false);
        }
    }

    return (
        <div>
            <form className="Titleform">
                <span>Título:</span>{' '}
                <input 
                    type="text"
                    placeholder='Agregar un título'
                    value={inputText} 
                    onChange={manejarFormulario}
                />{" "}
                <button onClick={submit}>Añadir</button>
            </form>
            {
                !validacion &&
                <div className="validacion">Añada un título por favor</div>
            }
        </div>
    )
}

export default TitleForm
