import React from 'react';
import './HeaderContainer.css';


export const HeaderContainer = () => {

    const headerStyle = {
        width: '100%',
        padding: '2%',
        backgroundColor: "yellowgreen",
        color: 'black',
        textAlign: 'center'
    }

    return (
        <div style = { headerStyle }>
            <h1>.Net 5 and React Forms App</h1>
        </div>
    )
}

export default HeaderContainer;