import React, {useState} from 'react'

function Idioma(props) {

    const [modoEdit, setModoEdit] = useState(false);
    const [editTextIdioma, setEditTextIdioma] = useState(props.idioma);
    const [nivel, setNivel] = useState("Basico");

    const borrarIdioma = () => {
        props.borrar(props.id);
    }

    const editIdioma = () => {
        setModoEdit(true);
    }

    const manejarEditIdioma = (event) => {
        setEditTextIdioma(event.target.value);
    }

    const submitEdit = (event) => {
        event.preventDefault();
        if(editTextIdioma !== ""){
            props.editar(props.id, [editTextIdioma,nivel]);
            //setEditTextIdioma("");
            setModoEdit(false);
        }
    }

    const cancelarEdit = (event) => {
        event.preventDefault();
        setModoEdit(false);
    }

    const manejarNivel = (event) => {
        setNivel(event.target.value);
    }

    return (
        <div>
            {
                !modoEdit ?
                <div className="idioma">
                    <span>{props.idioma}</span>
                    <span>{props.nivel}</span>
                    <span onClick={editIdioma}>Editar</span>
                    <span onClick={borrarIdioma}>Borrar</span>
                </div>
                :
                <form className="formEditIdioma">
                    <input value={editTextIdioma} onChange={manejarEditIdioma} />
                    <select 
                        value={nivel} 
                        onChange={manejarNivel}
                    >
                        <option value="Basico">Básico</option>
                        <option value="Intermedio">Intermedio</option>
                        <option value="Avanzado">Avanzado</option>
                    </select>
                    <button onClick={submitEdit}>Guardar</button>
                    <button onClick={cancelarEdit}>Cancelar</button>
                </form>
            }
        </div>
    )
}

export default Idioma