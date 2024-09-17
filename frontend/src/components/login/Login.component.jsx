import React, { useState } from 'react';
import authService from '../../services/auth.service';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username: userName, password };
    const resp = await authService.loginUser(data);
    if (resp.status !== 200) {
      console.log('An error occured');
      setError('Invalid username or password');
      return;
    }
    console.log(JSON.stringify(resp.data));
    window.localStorage.setItem('user', resp.data.accessToken);

    setError('');
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-green-50'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden'>
        <div className='bg-green-800 text-white text-center py-6'>
          <h2 className='text-2xl font-bold'>E-Waste Recycling Solutions</h2>
          <p className='text-lg'>Login</p>
        </div>
        <div className='p-6'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div className='mb-6'>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            {error && (
              <div className='mb-4 text-red-500 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>{error}</span>
              </div>
            )}
            <div className='flex justify-between'>
              <button
                type='submit'
                className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              >
                Login
              </button>
              <a
                href='/account/reset'
                className='bg-red-700 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded'
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
        <div className='bg-gray-50 px-4 py-3 text-center'>
          <p>
            Don't have an account?{' '}
            <a
              href='/account/signup'
              className='text-green-600 hover:text-green-800 font-semibold'
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
