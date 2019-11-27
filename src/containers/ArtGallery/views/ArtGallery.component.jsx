import React from 'react';
// * Components
import ArtGalleryMenuComponent from './components/ArtGalleryMenu.component';
import Card from '../../../shared/components/ImageCard/ImageCard.component';
// * Utils
import { images } from '../../../utils/images';
import NavbarHome from '../../../shared/components/NavbarHome/NavbarHome.component';
// * Styles
import './artGallery.component.css';

const ArtGalleryComponent = () => {
  return (
    <div className='art-gallery-container'>
      <NavbarHome />
      <ArtGalleryMenuComponent />
      <Card
        // images={images}
        title='Collar'
        description='Esta nuevo el pto'
        price='10.00'
        phone=''
        location=''
        userRouter=''
        footer={true}
      />
    </div>
  );
};

export default ArtGalleryComponent;
