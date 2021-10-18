import React, {useState} from 'react';
import TIForm from './TIForm';
import Lenguaje from './Lenguaje';

function TIList(props) {
    const [lenguajes, setLenguaje] = useState(props.lista);

    const addLenguaje = (lenguaje) => {

        const newLenguaje = [lenguaje, ...lenguajes]

        setLenguaje(newLenguaje);
        props.setLengua(newLenguaje);
    }

    const borrarLenguaje = (id) => {
        const lenguajesFiltrados = lenguajes.filter((e, index) => index !== id);
        setLenguaje(lenguajesFiltrados);
        props.setLengua(lenguajesFiltrados);
    }

    const updateLenguaje = (id, lenguaje) => {
        const lenguajesUpdated = lenguajes.map((e,index) => {
            if(index === id){
                e = lenguaje;
            }

            return e;
        })

        setLenguaje(lenguajesUpdated);
        props.setLengua(lenguajesUpdated);
    }

    return (
        <div>
            <TIForm addNewLenguaje={addLenguaje} />
            <div className="TitlesList">
                {
                    lenguajes.map((e,index) => <Lenguaje 
                                        lenguaje={e} 
                                        borrar={borrarLenguaje}
                                        id={index}
                                        editar={updateLenguaje}
                                    />
                    )
                }
            </div>
        </div>
    )
}

export default TIList