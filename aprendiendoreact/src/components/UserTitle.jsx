import React from 'react'

function UserTitle(props) {

    return (
        <div>
            {
            <div className="title">
                <span>{props.title}</span>
            </div>
            }
        </div>
    )
}

export default UserTitle