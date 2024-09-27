import React, { useState, useEffect } from 'react';
import { UserCircle, Mail, User, MapPin, Calendar, Check, User2Icon } from 'lucide-react';
import { useAuth } from '../../hooks/auth';
import authService from '../../services/auth.service';
import orderService from '../../services/order.service';
import { useToast } from '@chakra-ui/react';

const UserProfile = () => {
  const { getUser } = useAuth();
  const authuser = JSON.parse(getUser());
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const resp = await authService.userProfile(authuser.accessToken);
        if (resp.status === 200) {
          setUser(resp.data.user);
          setEditedUser(resp.data.user);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [authuser.accessToken]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser(user);
  };

  const handleSave = async () => {
    try {
      setUser(editedUser);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleAccountChange = async () => {
    const newRole = user.role === 'user' ? 'Collector' : 'user';
    try {
      const resp = await authService.updateUserRole(authuser.accessToken);
      console.log(resp);
      if (resp.status === 200) {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        localStorage.setItem('user', JSON.stringify({ ...currentUser, role: newRole }));

        setUser({ ...user, role: newRole });

        return toast({
          title: 'Account changed ',
          isClosable: true,
          duration: 7000,
          position: 'top-right',
          description: `Your account has been changed to ${newRole}`,
          status: 'success'
        });
      } else {
        console.error('Failed to update user role');
      }
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'profiles');
      formData.append('cloud_name', 'dkmdeg6fc');

      const response = await orderService.cloudinaryUpload(formData);

      const data = response.data;

      if (data.secure_url) {
        // Update user profile with new image URL
        const updatedUser = { ...user, profileImage: data.secure_url };
        const resp = await authService.updateUserProfile({ profileImage: data.secure_url }, authuser.accessToken);
        if (resp.status === 200) {
          setUser(updatedUser);
          return toast({
            title: 'Profile updated successfully',
            isClosable: true,
            duration: 7000,
            position: 'top-right',
            description: 'Your profile has been updated successfully',
            status: 'success'
          });
        } else {
          console.error('Failed to update profile image');
        }
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsUploading(false);
    }
  };

  if (!user) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900' />
      </div>
    );
  }

  return (
    <div className='max-w-3xl mx-auto mt-10 mb-6 bg-white shadow-md rounded-lg overflow-hidden'>
      {!user.verified && (
        <div className='bg-yellow-100 text-yellow-800 p-4 text-center'>
          <p>
            Check your email to verify your account. <br />
            You must verify your email to enjoy full features.
          </p>
        </div>
      )}

      <div className='px-4 py-5 sm:px-6 bg-green-600 text-white'>
        <h3 className='text-lg leading-6 font-medium'>User Profile</h3>
      </div>
      <div className='px-4 py-5 sm:p-6'>
        <div className='flex items-center mb-4'>
          <label htmlFor='profile-image-upload' className='cursor-pointer'>
            {user.profileImage
              ? (
                <img
                  src={user.profileImage}
                  alt='Profile'
                  className='h-20 w-20 rounded-full object-cover mr-4'
                />
                )
              : (
                <UserCircle className='h-20 w-20 text-gray-300 mr-4' />
                )}
            <input
              id='profile-image-upload'
              type='file'
              accept='image/*'
              className='hidden'
              onChange={handleImageUpload}
              disabled={isUploading}
            />
          </label>
          <div className='flex items-center'>
            <h2 className='text-2xl font-bold mr-2'>{user.name}</h2>
            {user.verified && (
              <div className='relative'>
                <Check
                  className='h-6 w-6 text-white bg-blue-500 rounded-full p-1'
                  style={{ boxShadow: '0 0 0 3px white' }}
                />
              </div>
            )}
          </div>
        </div>
        {isUploading && <p className='text-sm text-gray-500'>Updating profile...</p>}
        <p className='text-gray-600 mb-4'>@{user.name}</p>

        <div className='space-y-4'>
          {/* User Role Section */}
          <div className='flex items-center'>
            <User2Icon className='h-5 w-5 text-gray-400 mr-2' />
            <span className='font-medium mr-2'>Account:</span>
            <span>{user.role}</span>
            <button
              onClick={handleAccountChange}
              className='ml-4 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
            >
              Change Account
            </button>
          </div>

          <div className='flex items-center'>
            <Mail className='h-5 w-5 text-gray-400 mr-2' />
            <span className='font-medium mr-2'>Email:</span>
            {isEditing
              ? (
                <input
                  type='email'
                  name='email'
                  value={editedUser?.email || ''}
                  onChange={handleChange}
                  className='border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
                />
                )
              : (
                <span>{user.email}</span>
                )}
          </div>

          <div className='flex items-center'>
            <User className='h-5 w-5 text-gray-400 mr-2' />
            <span className='font-medium mr-2'>Username:</span>
            {isEditing
              ? (
                <input
                  type='text'
                  name='username'
                  value={editedUser?.username || ''}
                  onChange={handleChange}
                  className='border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
                />
                )
              : (
                <span>{user.username}</span>
                )}
          </div>

          <div className='flex items-center'>
            <MapPin className='h-5 w-5 text-gray-400 mr-2' />
            <span className='font-medium mr-2'>Location:</span>
            {isEditing
              ? (
                <input
                  type='text'
                  name='location'
                  value={editedUser?.location || ''}
                  onChange={handleChange}
                  className='border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
                />
                )
              : (
                <span>{user.location || 'Not set'}</span>
                )}
          </div>

          <div className='flex items-center'>
            <Calendar className='h-5 w-5 text-gray-400 mr-2' />
            <span className='font-medium mr-2'>Joined:</span>
            <span>{new Date(user.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className='mt-6'>
          {isEditing
            ? (
              <div className='space-x-4'>
                <button
                  onClick={handleSave}
                  className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
                >
                  Cancel
                </button>
              </div>
              )
            : (
              <button
                onClick={handleEdit}
                className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
              >
                Edit Profile
              </button>
              )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
