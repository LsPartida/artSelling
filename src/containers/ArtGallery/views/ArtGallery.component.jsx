import React from 'react';

// * Components
import ArtGalleryMenuComponent from './components/ArtGalleryMenu.component';
import Card from '../../../shared/components/ImageCard/ImageCard.component';
// * Utils
import { images } from '../../../utils/images';
// * Styles
import './artGallery.component.css';

const ArtPreViewComponent = () => {
  return (
    <div className='artpreview-container'>
      <ArtGalleryMenuComponent />
      <Card
        images={images}
        title='Niño prieto'
        description='Casi no lo use, descuento al primero que pase por el'
        footer={true}
      />
    </div>
  );
};

export default ArtPreViewComponent;
