import React, {useState} from 'react';
import IdiomaForm from './IdiomaForm';
import Idioma from './Idioma';

function IdiomaList(props) {
    const [idiomas, setIdioma] = useState(props.lista);

    const addIdioma = (idioma) => {

        const newIdioma = [idioma, ...idiomas]

        setIdioma(newIdioma);
        props.setIdiom(newIdioma);
    }

    const borrarIdioma = (id) => {
        const idiomasFiltrados = idiomas.filter((e, index) => index !== id);
        setIdioma(idiomasFiltrados);
        props.setIdiom(idiomasFiltrados);
    }

    const updateIdioma = (id, idioma) => {
        const idiomasUpdated = idiomas.map((e,index) => {
            if(index === id){
                e = idioma;
            }

            return e;
        })

        setIdioma(idiomasUpdated);
        props.setIdiom(idiomasUpdated);
    }

    return (
        <div>
            <IdiomaForm addNewIdioma={addIdioma} />
            <div className="IdiomaList">
                {
                    idiomas.map((e,index) => <Idioma 
                                        idioma={e[0]} 
                                        nivel={e[1]}
                                        borrar={borrarIdioma}
                                        id={index}
                                        editar={updateIdioma}
                                    />
                    )
                }
            </div>
        </div>
    )
}

export default IdiomaList