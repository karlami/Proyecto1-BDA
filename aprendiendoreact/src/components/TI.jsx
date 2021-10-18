import React, {useState} from 'react';
import TIList from './TIList';

function TI(props) {

    const [stateTI, setStateTI] = useState(props.estado);
    const [lenguajs, setStateLenguajs] = useState(props.lista);

    const submitTI = () => {
        setStateTI(!stateTI);
        props.setTI(!stateTI,lenguajs);
    }

    const updateLeng = (leng) => {
        setStateLenguajs(leng);
        props.setTI(stateTI,leng);
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={stateTI} onChange={submitTI}/>
                Pertenece al área de TI?
            </label>
            {
                stateTI ?
                <TIList lista={props.lista} setLengua={updateLeng}/>
                :
                <div/>
            }
            
        </div>
    )
}

export default TI
