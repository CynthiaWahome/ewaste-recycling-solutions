import React, { useState, useEffect } from 'react';
import { UserCircle, Mail, User, MapPin, Calendar } from 'lucide-react';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser(user);
  };

  const handleSave = async (event) => {
    try {
      console.log('User updated');
      setUser(updatedUser);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  return (
    <div className='max-w-3xl mx-auto mt-10  mb-6 bg-white shadow-md rounded-lg overflow-hidden'>
      <div className='px-4 py-5 sm:px-6 bg-green-600 text-white'>
        <h3 className='text-lg leading-6 font-medium'>User Profile</h3>
      </div>
      <div className='px-4 py-5 sm:p-6'>
        <div className='flex items-center mb-4'>
          <UserCircle className='h-20 w-20 text-gray-300 mr-4' />
          <div>
            <h2 className='text-2xl font-bold'>John Doe</h2>
            <p className='text-gray-600'>@John Doe</p>
          </div>
        </div>

        <div className='space-y-4'>
          <div className='flex items-center'>
            <Mail className='h-5 w-5 text-gray-400 mr-2' />
            <span className='font-medium mr-2'>Email:</span>
            {isEditing
              ? (
                <input
                  type='email'
                  name='email'
                  value='jamesjohnathan78@gmail.com'
                  onChange={handleChange}
                  className='border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
                />
                )
              : (
                <span>Email</span>
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
                  value='James'
                  onChange={handleChange}
                  className='border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
                />
                )
              : (
                <span>John Doe</span>
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
                  value='Kenya'
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      location: [{ body: e.target.value, date: new Date() }]
                    })}
                  className='border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
                />
                )
              : (
                <span>"Not set" </span>
                )}
          </div>

          <div className='flex items-center'>
            <Calendar className='h-5 w-5 text-gray-400 mr-2' />
            <span className='font-medium mr-2'>Joined:</span>
            <span>{new Date().toLocaleDateString()}</span>
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
                  className='px-4 py-2 bg-red-600 text-gray-700 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
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
