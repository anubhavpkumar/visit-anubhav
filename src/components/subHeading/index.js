import React from 'react';
import './styles.css';

const SubHeading = props => {
    const {title} = props;
    return (
        <div className='subHeadingContainer'>
            <h1 className='subTitleText'>{title}</h1>
        </div>
    )
}

export default SubHeading;
