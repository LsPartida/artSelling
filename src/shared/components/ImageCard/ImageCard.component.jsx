import React from 'react';
// * Components
import Slideshow from '../Slideshow/Slideshow.component';
// * Styles
import './imageCard.component.css';

const ImageCardComponent = ({ footer, images, title, description }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <Slideshow images={images} />
      </div>
      <div className='card-container'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-description'>{description}</p>
        {footer && (
          <div className='card-footer'>
            <i className='fas fa-heart'></i>
            <i className='fas fa-ellipsis-h'></i>
          </div>
        )}
      </div>
    </div>
  );
};

ImageCardComponent.defaultProps = {
  footer: false
};

export default ImageCardComponent;
