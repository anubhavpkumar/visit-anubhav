import React from 'react';
import './styles.css';

const Content = props => {
    const {children} = props;

    return (
        <div className='ContentWrapper'>
            {children}
        </div>
    )
}


export default Content;
