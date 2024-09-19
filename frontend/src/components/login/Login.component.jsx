import { useToast, Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import authService from '../../services/auth.service';

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username: userName, password };

    try {
      setLoading(true);

      const resp = await authService.loginUser(data);

      if (resp.status !== 200) {
        return toast({
          title: 'Invalid Credentials',
          description: 'The username or password you entered is incorrect',
          status: 'error',
          duration: 9000,
          isClosable: true
        });
      }

      toast({
        title: 'Authenticated',
        description: 'Login successful',
        status: 'success',
        duration: 9000,
        isClosable: true
      });

      console.log(JSON.stringify(resp.data));
      login(resp.data);

      setTimeout(() => {
        navigate('/account/dashboard');
      }, 3000);
    } catch (err) {
      console.error('Error during login:', err);
      return toast({
        title: 'An unknown error occurred',
        description: 'Please try again later',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-green-50'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden'>
        <div className='bg-green-800 text-white text-center py-6'>
          <h2 className='text-2xl font-bold'>E-Waste Recycling Solutions</h2>
          <p className='text-lg'>Login</p>
        </div>
        <div className='p-6'>
          {loading
            ? (
              <div className='flex justify-center'>
                <Spinner size='xl' />
              </div>
              )
            : (
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

                <div className='flex justify-between'>
                  <button
                    type='submit'
                    className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                    disabled={loading}
                  >
                    {loading ? 'Logging In...' : 'Login'}
                  </button>
                  <a
                    href='/account/forgot'
                    className='bg-red-700 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded'
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
              )}
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
