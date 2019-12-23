import React from 'react';

// * Styles
import './userProfileEdit.component.css';

const UserProfileEditComponent = ({
  userImage,
  userName,
  userDescription,
  userPhone,
  userFb,
  userTw,
  userIg
}) => {
  return (
    <div className='user-edit-container'>
      <img className='user-image' src={userImage} alt='user-image' />
      <h2 className='user-name'>{userName}</h2>

      <p className='user-description'>{`"${userDescription}"`}</p>
      <div className='user-phone-container'>
        <i className='fas fa-phone'></i>
        <h3 className='user-phone'>{userPhone}</h3>
      </div>

      <div className='user-socials'>
        <a className='user-social-link' href={userFb} target='_blank'>
          <i className='fab fa-facebook-square fa-2x'></i>
          <p className='user-social-text'>Facebook</p>
        </a>

        <a className='user-social-link' href={userTw} target='_blank'>
          <i className='fab fa-twitter-square fa-2x'></i>
          <p className='user-social-text'>Twitter</p>
        </a>

        <a className='user-social-link' href={userIg} target='_blank'>
          <i className='fab fa-instagram fa-2x'></i>
          <p className='user-social-text'>Instagram</p>
        </a>
      </div>
    </div>
  );
};

export default UserProfileEditComponent;
