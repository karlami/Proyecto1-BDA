import React, {useState} from 'react'

function Lenguaje(props) {

    const [modoEdit, setModoEdit] = useState(false);
    const [editTextLenguaje, setEditTextLenguaje] = useState(props.lenguaje);

    const borrarLenguaje = () => {
        props.borrar(props.id);
    }

    const editLenguaje = () => {
        setModoEdit(true);
    }

    const manejarEditLenguaje = (event) => {
        setEditTextLenguaje(event.target.value);
    }

    const submitEdit = (event) => {
        event.preventDefault();
        if(editTextLenguaje !== ""){
            props.editar(props.id, editTextLenguaje);
            //setEditTextLenguaje("");
            setModoEdit(false);
        }
    }

    const cancelarEdit = (event) => {
        event.preventDefault();
        setModoEdit(false);
    }

    return (
        <div>
            {
                !modoEdit ?
                <div className="lenguaje">
                    <span>{props.lenguaje}</span>
                    <span onClick={editLenguaje}>Editar</span>
                    <span onClick={borrarLenguaje}>Borrar</span>
                </div>
                :
                <form className="formEditLenguaje">
                    <input value={editTextLenguaje} onChange={manejarEditLenguaje} />
                    <button onClick={submitEdit}>Guardar</button>
                    <button onClick={cancelarEdit}>Cancelar</button>
                </form>
            }
        </div>
    )
}

export default Lenguaje