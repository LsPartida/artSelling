import React from 'react';
import { Link } from 'react-router-dom';
// * Components
import Slideshow from '../Slideshow/Slideshow.component';
// * Styles
import './imageCard.component.css';
import { Button } from 'antd';
// * Utils
import briGlitch from '../../../media/localbri-glitch.png';

const ImageCardComponent = ({ footer, images, title, description, price }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <Slideshow images={images} />
      </div>
      <div className='card-container'>
        <h3 className='card-title'>{title}</h3>
        <div>
          <i className='fas fa-dollar-sign' /> {price}
        </div>
        <div>
          <i className='fas fa-map-marker-alt' /> Ubicación
        </div>
        {footer && (
          <div className='card-footer'>
            <i className='fas fa-heart'></i>
            <Link className='card-link' to='/about'>
              <Button className='card-button' icon='eye' type='primary'>
                Ver
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

ImageCardComponent.defaultProps = {
  title: 'Agrega Titulo',
  price: 'Proximamente',
  images: [briGlitch],
  footer: false
};

export default ImageCardComponent;
