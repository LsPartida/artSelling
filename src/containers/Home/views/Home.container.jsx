import React from 'react';
// * Components
import NavbarHome from '../../../shared/components/NavbarHome/NavbarHome.component';
import HomeComponent from './Home.component';
// * Containers
import ArtGallery from '../../ArtGallery/ArtGallery.container';
// * Styles
import './home.container.css';

function HomeContainer() {
  return (
    <div className='home-container'>
      <NavbarHome />
      <HomeComponent />
      <ArtGallery />
      {/* FOOTER */}
    </div>
  );
}

export default HomeContainer;
