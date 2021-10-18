import React, {useState} from 'react';
import TitleForm from './TitleForm';
import Title from './Title';

function TitlesList(props) {
    const [titles, setTitle] = useState(props.lista);

    const addTitle = (title) => {

        const newTitle = [title, ...titles]

        setTitle(newTitle);
        props.setTit(newTitle);
    }

    const borrarTitle = (id) => {
        const titlesFiltrados = titles.filter((e, index) => index !== id);
        setTitle(titlesFiltrados);
        props.setTit(titlesFiltrados);
    }

    const updateTitle = (id, title) => {
        const titlesUpdated = titles.map((e,index) => {
            if(index === id){
                e = title;
            }

            return e;
        })

        setTitle(titlesUpdated);
        props.setTit(titlesUpdated);
    }

    return (
        <div>
            <TitleForm addNewTitle={addTitle} />
            <div className="TitlesList">
                {
                    titles.map((e,index) => <Title 
                                        title={e} 
                                        borrar={borrarTitle}
                                        id={index}
                                        editar={updateTitle}
                                    />
                    )
                }
            </div>
        </div>
    )
}

export default TitlesList
