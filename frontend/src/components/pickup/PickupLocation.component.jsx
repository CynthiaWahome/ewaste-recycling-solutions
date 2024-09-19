import React from 'react';
import { UserCircle, Search } from 'lucide-react';

const PickupLocationMap = ({ formData }) => {
  console.log(formData);

  return (
    <div className='flex items-center justify-center max-w-3xl mx-auto mt-10 mb-6'>
      <div className='bg-white rounded-lg shadow-md overflow-hidden'>
        <div className='bg-green-400 p-4 text-white'>
          <p className='font-bold mb-2'>
            Do you know we generate 40 million tons of electronic waste every
            year, worldwide?
          </p>
          <p className='text-sm'>
            That's like throwing 800 laptops every second.
          </p>
        </div>

        <div className='p-4'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Enter pick-up point'
              className='w-full p-2 pl-10 pr-4 border border-gray-300 rounded-full'
            />
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
          </div>
        </div>

        <div className='relative h-64 bg-gray-200 mx-4 mb-4 rounded-lg overflow-hidden'>
          <img
            src='https://img.icons8.com/?size=100&id=ngxhKjJtc4LX&format=png&color=000000'
            alt='Map'
            className='w-full h-full object-cover'
          />
          <div className='absolute top-1/4 left-1/4 w-8 h-8 bg-red-500 rounded-full border-4 border-white transform -translate-x-1/2 -translate-y-1/2' />
          <div className='absolute top-1/2 left-1/2 w-12 h-12 bg-red-500 rounded-full border-4 border-white transform -translate-x-1/2 -translate-y-1/2' />
          <div className='absolute bottom-1/4 right-1/4 w-8 h-8 bg-red-500 rounded-full border-4 border-white transform -translate-x-1/2 -translate-y-1/2' />
        </div>
      </div>
    </div>
  );
};

export default PickupLocationMap;
