import React, {useState} from 'react'

function Title(props) {

    const [modoEdit, setModoEdit] = useState(false);
    const [editTextTitle, setEditTextTitle] = useState(props.title);

    const borrarTitle = () => {
        props.borrar(props.id);
    }

    const editTitle = () => {
        setModoEdit(true);
    }

    const manejarEditTitle = (event) => {
        setEditTextTitle(event.target.value);
    }

    const submitEdit = (event) => {
        event.preventDefault();
        if(editTextTitle !== ""){
            props.editar(props.id, editTextTitle);
            //setEditTextTitle("");
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
                <div className="title">
                    <span>{props.title}</span>
                    <span onClick={editTitle}>Editar</span>
                    <span onClick={borrarTitle}>Borrar</span>
                </div>
                :
                <form className="formEditTitle">
                    <input value={editTextTitle} onChange={manejarEditTitle} />
                    <button onClick={submitEdit}>Guardar</button>
                    <button onClick={cancelarEdit}>Cancelar</button>
                </form>
            }
        </div>
    )
}

export default Title
