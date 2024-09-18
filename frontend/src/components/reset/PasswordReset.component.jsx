import React, { useState } from 'react';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (email) {
      console.log(`Sending password reset link to ${email}`);
      setMessage('Reset instructions have been sent to your email.');
      setError('');
    } else {
      setError('Please enter a valid email.');
      setMessage('');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-green-50'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden'>
        <div className='bg-green-800 text-white text-center py-6'>
          <h2 className='text-2xl font-bold'>E-Waste Recycling Solutions</h2>
          <p className='text-lg'>Reset Your Password</p>
        </div>
        <div className='p-6'>
          <form onSubmit={handlePasswordReset}>
            <div className='mb-4'>
              <input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            {message && (
              <div className='mb-4 text-green-500'>
                <span>{message}</span>
              </div>
            )}
            {error && (
              <div className='mb-4 text-red-500'>
                <span>{error}</span>
              </div>
            )}
            <button
              type='submit'
              className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            >
              Send Reset Link
            </button>
          </form>
        </div>
        <div className='bg-gray-50 px-4 py-3 text-center'>
          <a
            href='/account/login'
            className='text-green-600 hover:text-green-800 font-semibold'
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
