import React from 'react';
// * Components
import UserProfileMenuComponent from '../components/UserProfileMenu.component';
import FormProduct from '../../../shared/components/FormProduct/FormProduct.component';
import UserProfileEdit from '../components/UserProfileEdit.component';
import ArtGalleryDetailsComponent from '../../ArtGallery/views/components/ArtGalleryDetails.component';
import ArtGallery from '../../ArtGallery/views/components/ArtGalleryCardContainer.component';
import Search from '../../../shared/components/SearchInput/Search.component';
// * Utils
import { carouselImages } from '../../../utils/images';
// * Styles
import './userProfile.component.css';

const UserProfileComponent = () => {
  return (
    <div className='user-profile-form-container'>
      <UserProfileMenuComponent />

      <UserProfileEdit
        userImage={'https://bit.ly/2prUcWu'}
        userName={'Albert Einstein'}
        userPhone={'3126660202'}
        userDescription={
          'Albert Einstein fue un físico alemán de origen judío, nacionalizado después suizo, austriaco y estadounidense. Se lo considera el científico más importante, conocido y popular del siglo XX.​​'
        }
        userFb={'https://www.facebook.com/NASA/'}
        userTw={'https://twitter.com/NASA'}
        userIg={'https://www.instagram.com/nasa/'}
      />

      <ArtGalleryDetailsComponent
        carouselImages={carouselImages}
        title={'Galeria Natural'}
        description={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eum perferendis sunt eaque, quis eligendi qui animi at est culpa beatae, iure quaerat labore. Repellendus ea earum facilis nesciunt quidem!'
        }
        price={'340.00'}
        location={'Zapopan, Guadalajara'}
      />

      <FormProduct />

      <div className='filter-search-container'>
        <Search />
      </div>
      <ArtGallery />
    </div>
  );
};

export default UserProfileComponent;
