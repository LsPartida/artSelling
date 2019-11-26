import React from 'react';

// * Components
import ArtGalleryMenuComponent from './components/ArtGalleryMenu.component';
// * Styles
import './artGallery.component.css';

const ArtPreViewComponent = () => {
  return (
    <div className='artpreview-container'>
      <ArtGalleryMenuComponent />
    </div>
  );
};

export default ArtPreViewComponent;
