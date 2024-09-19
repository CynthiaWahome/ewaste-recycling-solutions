import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import authService from '../../services/auth.service';

const Signup = () => {
  const toast = useToast();
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    const data = { username, password, name, email, role };
    try {
      const resp = await authService.registerUser(data);
      console.log(resp);
      if (resp.status === 201) {
        console.log('User created successfully');
        toast({
          title: 'Account Created',
          description: 'Check your email to verify your account',
          status: 'success',
          isClosable: true,
          duration: 9000
        });
        setIsLoading(!isLoading);
      } else if (resp.status === 409) {
        toast({
          title: 'Email is already in use',
          description: 'A user with that email already exists, try another one',
          status: 'error',
          isClosable: true,
          duration: 9000
        });
        setIsLoading(!isLoading);
      } else {
        toast({
          title: 'An unknown error occurred',
          description: 'Our team is aware and is working to fix this',
          status: 'error',
          isClosable: true,
          duration: 9000
        });
      }
    } catch (error) {
      console.error('Error during user registration:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        status: 'error',
        isClosable: true,
        duration: 9000
      });
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-green-50'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden'>
        <div className='bg-green-800 text-white text-center py-6'>
          <h2 className='text-2xl font-bold'>E-Waste Recycling Solutions</h2>
          <p className='text-lg'>Sign Up</p>
        </div>
        <div className='p-6'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Full name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div className='mb-4'>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div className='mb-6'>
              <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>

            <div className='mb-6'>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded'
                required
              >
                <option value='User'>User</option>
                <option value='Collector'>Collector</option>
              </select>
            </div>

            <button
              type='submit'
              className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              disabled={isLoading}
            >
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>
        <div className='bg-gray-50 px-4 py-3 text-center'>
          <p>
            Already have an account?{' '}
            <a
              href='/account/login'
              className='text-green-600 hover:text-green-800 font-semibold'
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
