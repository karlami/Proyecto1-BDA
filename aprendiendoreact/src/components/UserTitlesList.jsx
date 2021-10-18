import React from 'react';
import UserTitle from './UserTitle';

function UserTitlesList(props) {
    const usertitles = props.userTitulos;

    return (
        <div>
            <div className="UserTitlesList">
                {
                    usertitles.map((e,index) => <UserTitle 
                                        title={e} 
                                        id={index}
                                    />
                    )
                }
            </div>
        </div>
    )
}

export default UserTitlesList