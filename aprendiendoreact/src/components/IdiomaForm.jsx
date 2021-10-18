import React, {useState} from 'react'

function IdiomaForm(props) {

    const [inputText, setInput] = useState("");
    const [validacion, setValidacion] = useState(true);
    const [nivel, setNivel] = useState("Basico");

    const manejarFormulario = (event) => {
        setInput(event.target.value);
    }

    const manejarNivel = (event) => {
        setNivel(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        if(inputText.trim() !== ""){
            props.addNewIdioma([inputText, nivel]);
            setInput("");
            setValidacion(true);
        }else{
            setValidacion(false);
        }
    }

    return (
        <div>
            <form className="Idiomaform">
                <span>Idioma:</span>{' '}
                <input 
                    type="text"
                    placeholder='Agregar un idioma'
                    value={inputText} 
                    onChange={manejarFormulario}
                />
                <select 
                    value={nivel} 
                    onChange={manejarNivel}
                >
                    <option value="Basico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                </select>{" "}
                <button onClick={submit}>Añadir</button>
            </form>
            {
                !validacion &&
                <div className="validacion">Añada un idioma por favor</div>
            }
        </div>
    )
}

export default IdiomaForm