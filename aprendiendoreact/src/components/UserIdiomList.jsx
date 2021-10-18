import React from 'react';
import UserIdioma from './UserIdioma';

function UserIdiomList(props) {
    const useridiomas = props.userIdiomas;

    return (
        <div>
            <div className="UserIdiomList">
                {
                    useridiomas.map((e,index) => <UserIdioma
                                        idioma={e[0]} 
                                        nivel={e[1]}
                                        id={index}
                                    />
                    )
                }
            </div>
        </div>
    )
}

export default UserIdiomList