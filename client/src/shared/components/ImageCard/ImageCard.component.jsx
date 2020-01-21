import React, { useState } from 'react';
// * Components
import Slideshow from '../Slideshow/Slideshow.component';
import ArtGalleryDetailsComponent from '../../../containers/ArtGallery/views/components/ArtGalleryDetails.component';
// * Styles
import './imageCard.component.css';
// * Ant Design Components
import { Button, Modal } from 'antd';
// * Utils
import briGlitch from '../../../media/localbri-glitch.png';
import { carouselImages } from '../../../utils/images';

function ImageCardComponent({
  footer,
  images,
  title,
  description,
  price,
  likes,
  ubication
}) {
  // * Consts
  const [visible, setVisible] = useState(false);

  // * Methods for the modal
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  // * Create the correct Array for the Carousel
  const imagesArrayToCarouselArray = imagesArray => {
    let carouselArray = [];
    return carouselArray;
  };

  return (
    <div>
      <div className='card'>
        <div className='card-header'>
          <Slideshow images={images} />
          {console.log(images)}
        </div>
        <div className='card-container'>
          <h3 className='card-title'>{title}</h3>
          <div>
            <i className='fas fa-dollar-sign' /> {price}
          </div>
          <div>
            <i className='fas fa-map-marker-alt' /> {ubication}
          </div>
          {footer && (
            <div className='card-footer'>
              <div>
                <i className='fas fa-heart'></i>{' '}
                <label className='card-likes'>{likes}</label>
              </div>
              <div className='card-link'>
                <Button
                  className='card-button'
                  icon='eye'
                  type='primary'
                  onClick={showModal}
                >
                  Ver
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal
        className='imageCard-modal'
        visible={visible}
        onCancel={handleCancel}
        width={'50vw'}
      >
        <ArtGalleryDetailsComponent
          carouselImages={images}
          title={title}
          description={'Lorem ipsendi qui animi at est culpa beatae, iu!'}
          price={'340.00'}
          location={'Zapopan, Guadalajara'}
        />
      </Modal>
    </div>
  );
}

ImageCardComponent.defaultProps = {
  title: 'Agrega Titulo',
  price: 'Proximamente',
  images: [briGlitch],
  footer: false,
  likes: 43
};

export default ImageCardComponent;
