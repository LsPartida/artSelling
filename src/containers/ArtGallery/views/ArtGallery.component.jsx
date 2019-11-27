import React from 'react';
// * Components
import ArtGalleryMenuComponent from './components/ArtGalleryMenu.component';
import NavbarHome from '../../../shared/components/NavbarHome/NavbarHome.component';
// * Styles
import './artGallery.component.css';

const ArtGalleryComponent = () => {
  return (
    <div className='art-gallery-container'>
      <NavbarHome />
      <ArtGalleryMenuComponent />
      <h1>AQUI DEBE IR LA GALERIA DE CARDS</h1>
    </div>
  );
};

export default ArtGalleryComponent;
