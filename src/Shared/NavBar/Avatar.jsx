import React from 'react';
import avatar from '../../assets/images/placeholder.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Avatar = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
            <img className='rounded-full' src={user && user.photoURL ? user.photoURL : avatar } alt="profile" height={'30'} width={'30'} />
        </div>
    );
};

export default Avatar;