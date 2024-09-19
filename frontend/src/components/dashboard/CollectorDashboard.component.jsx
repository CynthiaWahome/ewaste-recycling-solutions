import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Truck,
  Package,
  ClipboardList,
  User,
  Calendar,
  MapPin
} from 'lucide-react';
import { useAuth } from '../../hooks/auth';

const CollectorDashboard = () => {
  const navigate = useNavigate();
  const [collectorName, setCollectorName] = useState('');
  const [collectionStats, setCollectionStats] = useState({
    completed: 0,
    pending: 0,
    today: 0
  });
  const { getUser } = useAuth();
  const user = JSON.parse(getUser());

  useEffect(() => {
    // TODO: Fetch collector data and stats from API
    setCollectorName(user.name);
    setCollectionStats({ completed: 15, pending: 5, today: 3 });
  }, []);

  const quickActions = [
    {
      name: 'View Pickup Requests',
      icon: <ClipboardList size={24} />,
      action: () => navigate('/pickup-requests')
    },
    {
      name: "Today's Route",
      icon: <MapPin size={24} />,
      action: () => navigate('/todays-route')
    },
    {
      name: 'Collection History',
      icon: <Truck size={24} />,
      action: () => navigate('/collection-history')
    },
    {
      name: 'Edit Profile',
      icon: <User size={24} />,
      action: () => navigate('/edit-profile')
    }
  ];

  return (
    <div className='bg-blue-50 min-h-screen p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>
          Welcome, Collector {collectorName}!
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <div className='bg-white p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold mb-4'>
              Collection Statistics
            </h2>
            <div className='flex justify-between'>
              <div>
                <p className='text-gray-600'>Completed</p>
                <p className='text-2xl font-bold text-green-600'>
                  {collectionStats.completed}
                </p>
              </div>
              <div>
                <p className='text-gray-600'>Pending</p>
                <p className='text-2xl font-bold text-yellow-600'>
                  {collectionStats.pending}
                </p>
              </div>
              <div>
                <p className='text-gray-600'>Today's Pickups</p>
                <p className='text-2xl font-bold text-blue-600'>
                  {collectionStats.today}
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold mb-4'>Quick Actions</h2>
            <div className='grid grid-cols-2 gap-4'>
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className='flex flex-col items-center justify-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition duration-300'
                >
                  {action.icon}
                  <span className='mt-2 text-sm'>{action.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow mb-8'>
          <h2 className='text-xl font-semibold mb-4'>
            Today's Pickup Requests
          </h2>
          <ul className='space-y-4'>
            <li className='flex items-center justify-between text-gray-600'>
              <div className='flex items-center'>
                <Package size={20} className='mr-2' />
                <span>123 Main St - 2 items</span>
              </div>
              <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>
                Start Pickup
              </button>
            </li>
            <li className='flex items-center justify-between text-gray-600'>
              <div className='flex items-center'>
                <Package size={20} className='mr-2' />
                <span>456 Elm St - 1 item</span>
              </div>
              <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>
                Start Pickup
              </button>
            </li>
          </ul>
        </div>

        <div className='bg-blue-100 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>Collector Tip</h2>
          <p className='text-gray-700'>
            Remember to always wear appropriate safety gear when handling
            e-waste. If you encounter any hazardous materials, report them
            immediately and do not attempt to collect without proper equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectorDashboard;
