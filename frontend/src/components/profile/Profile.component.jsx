import React, { useState, useEffect } from 'react';
import { UserCircle, Mail, User, MapPin, Calendar, Check } from 'lucide-react';
import { useAuth } from '../../hooks/auth';
import authService from '../../services/auth.service';

const UserProfile = () => {
  const { getUser } = useAuth();
  const authuser = JSON.parse(getUser());
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const resp = await authService.userProfile(authuser.accessToken); // Use authuser's token
        if (resp.status === 200) {
          setUser(resp.data.user);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [authuser.accessToken]); // Adding dependency for authuser accessToken

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser(user);
  };

  const handleSave = async () => {
    try {
      console.log('User updated');
      setUser(editedUser);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
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
      {/* Conditionally show verification message */}
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
          <UserCircle className='h-20 w-20 text-gray-300 mr-4' />
          <div className='flex items-center'>
            <h2 className='text-2xl font-bold mr-2'>{user.name}</h2>
            {user.verified && (
              <div className='relative'>
                <Check
                  className='h-6 w-6 text-white bg-blue-500 rounded-full p-1'
                  style={{ boxShadow: '0 0 0 2px white' }}
                />
              </div>
            )}
          </div>
        </div>
        <p className='text-gray-600 mb-4'>@{user.name}</p>

        <div className='space-y-4'>
          <div className='flex items-center'>
            <Mail className='h-5 w-5 text-gray-400 mr-2' />
            <span className='font-medium mr-2'>Email:</span>
            {isEditing
              ? (
                <input
                  type='email'
                  name='email'
                  value={user.email || 'example@example.com'}
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
                  value={user.username || 'John Doe'}
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
                  value={editedUser?.location || 'Not set'}
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
