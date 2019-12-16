import React from 'react';

// * Components
import UserProfile from './UserProfile.component';
// * Styles
import './userProfile.container.css';

const UserProfileContainer = () => {
	return(
		<div className='user-profile-container'>
			<UserProfile />
		</div>
	);
};

export default UserProfileContainer;