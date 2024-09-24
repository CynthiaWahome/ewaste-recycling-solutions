import React from 'react';
import { useSelector } from 'react-redux';

const ContributionHistory = () => {
  const contributions = useSelector(state => state.contribution);

  return (
    <div className='font-sans text-gray-800  p-4 mb-4 mt-10  max-w-3xl mx-auto'>
      <div className='bg-white rounded-lg shadow-md overflow-hidden'>
        <div className='bg-green-200 p-4 m-4 rounded-lg text-green-800 text-center font-bold'>
          CONGRATULATIONS ON REDUCING THE CARBON FOOTPRINT!
        </div>

        <div className='flex justify-center space-x-4 my-4'>
          <img
            src='/confetti.png'
            alt='Confetti'
            className='w-16 h-16'
          />
          <img
            src='/trophy.png'
            alt='Trophy'
            className='w-16 h-16'
          />
        </div>

        <div className='p-4'>
          <h2 className='text-xl font-bold mb-4 text-center'>CONTRIBUTION HISTORY</h2>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border p-2 text-left'>Date</th>
                <th className='border p-2 text-left'>Item</th>
                <th className='border p-2 text-left'>Status</th>
              </tr>
            </thead>
            <tbody>
              {contributions.map((contribution, index) => (
                <tr key={index}>
                  <td className='border p-2'>{new Date(contribution.createdAt).toDateString()}</td>
                  <td className='border p-2'><img className='w-16 h-16' src={contribution.imageUrl} /></td>
                  <td className='border p-2'>{contribution.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContributionHistory;
