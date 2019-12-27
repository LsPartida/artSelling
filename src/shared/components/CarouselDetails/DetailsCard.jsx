import React from 'react';
import './detailsCard.css';

const ImageCardComponent = ({title, description, price}) => {
return (
    <div className='card'>
        <div className='card-container'>
            <h3 className='card-title'>{title}</h3>
            <p className='card-description'> {description}</p>
            <div className='money'>
            <i className='fas fa-dollar-sign'> {price} </i>
            </div>
            <div className='heart'>
            <i className='fas fa-heart'></i>
            </div>
        </div>
    </div>
);
};

ImageCardComponent.defaultProps = {
title: 'Agrega Titulo',
description: 'Agrega descripcion',
price: 'Proximamente',
//map: [map],
};

export default ImageCardComponent;