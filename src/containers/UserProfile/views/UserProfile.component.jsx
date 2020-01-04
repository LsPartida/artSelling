import React from 'react';
// * Components
import UserProfileMenuComponent from '../components/UserProfileMenu.component';
import FormProduct from '../../../shared/components/FormProduct/FormProduct.component';
import UserProfileEdit from '../components/UserProfileEdit.component';
// * Utils
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
      <FormProduct />
    </div>
  );
};

export default UserProfileComponent;
