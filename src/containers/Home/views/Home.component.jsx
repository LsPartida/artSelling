import React from 'react';
// * Components
import MainHome from './components/MainHome.component';
import ServicesHome from './components/ServicesHome.component';
import FormProduct from '../../../shared/components/FormProduct/FormProduct.component'

// * Styles
import './home.component.css';

const HomeComponent = () => {
  return (
    <div className='home-component'>
      <MainHome />
      <ServicesHome />
      <div className='home-section-3'>Seccion 3 - Mapa</div>
      <FormProduct/>
    </div>
  );
};

export default HomeComponent;
