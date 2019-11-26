import React from 'react';

// * Components
import ArtGallery from './ArtGallery.component';
// * Styles
import './artGallery.container.css';

const ArtContainerContainer = () => {
  return (
    <div className='artgallery-container'>
      <ArtGallery />
    </div>
  );
};

export default ArtContainerContainer;
