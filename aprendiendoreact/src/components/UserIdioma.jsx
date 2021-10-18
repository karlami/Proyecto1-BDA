import React from 'react'

function UserIdioma(props) {

    return (
        <div>
            {
            <div className="title">
                <span>{props.idioma}</span>
                <span>{props.nivel}</span>
            </div>
            }
        </div>
    )
}

export default UserIdioma