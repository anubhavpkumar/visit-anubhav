import React from 'react';
import './styles.css';

const Heading = props => {
    const {title} = props;
    return (
        <div className='heading'>
            <h1 className='titleText'>{title}</h1>
        </div>
    )
}

export default Heading;
