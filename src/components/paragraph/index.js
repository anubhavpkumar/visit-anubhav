import React from 'react';
import './styles.css';

const Paragraph = props => {
    const {para} = props;
    return (
        <div className='.ParagraphWrapper'>
            {para.map(par => <p className='SinglePara'>{par}</p>)}
        </div>
    )
}

export default Paragraph;
