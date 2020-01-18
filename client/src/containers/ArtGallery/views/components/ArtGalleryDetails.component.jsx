import React from 'react';
// * components
import Carousel from '../../../../shared/components/CarouselDetails/CarouselDetails.component'
// * Styles
import './artGalleryDetails.component.css'
// * utils
import {carouselImages} from '../../../../utils/images'

import DetailsCard from '../../../../shared/components/CarouselDetails/DetailsCard';

import MapImage from '../../../../media/map.png';

import NavBarComponent from '../../../../shared/components/NavbarHome/NavbarHome.component';



const ArtDetailsComponent = () => {
  return (
    <div className='artDetails'>
      <NavBarComponent/>
    <div className='container'>
      <div className='carousel-container'>
        <Carousel 
          images={carouselImages}
        />
        <DetailsCard
        title='Titulo de la pelicula'
        description='Descripcion de la pelicula, año director sdjhdsjkdkjdshkdjweohdnsbxidbx xxnowdxñokzxjoajosxm'
        price='30 euros'
        />
        <div className='image'>
          <img src={MapImage}/>
        </div>
      </div>   
    </div>
    </div>
  );
};


export default ArtDetailsComponent;