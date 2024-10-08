import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Package, ClipboardList, User, Calendar } from 'lucide-react';
import { useAuth } from '../../hooks/auth';
import authService from '../../services/auth.service';
import { initializeContribution } from '../../reducers/contribution.reducer';
import { useDispatch } from 'react-redux';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const [pickupStats, setPickupStats] = useState({ completed: 0, pending: 0, scheduled: 0 });
  const navigate = useNavigate();
  const { getUser } = useAuth();
  const user = JSON.parse(getUser());

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await authService.userProfile(user.accessToken);
        if (response.status === 200) {
          setUserData(response.data.user);
          calculatePickupStats(response.data.user.orders);
          dispatch(initializeContribution((response.data.user.orders)));
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const calculatePickupStats = (orders) => {
    const stats = {
      completed: 0,
      pending: 0,
      scheduled: 0
    };

    orders.forEach(order => {
      switch (order.status) {
        case 'completed':
          stats.completed++;
          break;
        case 'initiated':
          stats.pending++;
          break;
        default:
          stats.scheduled++;
      }
    });

    setPickupStats(stats);
  };

  const quickActions = [
    { name: 'New Pickup Request', icon: <Truck size={24} />, action: () => navigate('/pickup/new') },
    { name: 'My Items', icon: <Package size={24} />, action: () => navigate('/items') },
    { name: 'Pickup History', icon: <ClipboardList size={24} />, action: () => navigate('/pickup/history') },
    { name: 'Edit Profile', icon: <User size={24} />, action: () => navigate('/account/profile') }
  ];

  if (!userData) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900' />
      </div>
    );
  }

  return (
    <div className='bg-green-50 min-h-screen p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>Welcome, {userData.name}!</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <div className='bg-white p-6 rounded-lg shadow'>
            <h2 className='text-xl font-semibold mb-4'>Your Pickup Requests</h2>
            <div className='flex justify-between'>
              <div>
                <p className='text-gray-600'>Completed</p>
                <p className='text-2xl font-bold text-green-600'>{pickupStats.completed}</p>
              </div>
              <div>
                <p className='text-gray-600'>Pending</p>
                <p className='text-2xl font-bold text-yellow-600'>{pickupStats.pending}</p>
              </div>
              <div>
                <p className='text-gray-600'>Scheduled</p>
                <p className='text-2xl font-bold text-blue-600'>{pickupStats.scheduled}</p>
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
                  className='flex flex-col items-center justify-center p-4 bg-green-100 rounded-lg hover:bg-green-200 transition duration-300'
                >
                  {action.icon}
                  <span className='mt-2 text-sm'>{action.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Upcoming Pickups</h2>
          <ul className='space-y-4'>
            {userData.orders && userData.orders.filter(order => order.status !== 'completed').slice(0, 2).map((order, index) => (
              <li key={index} className='flex items-center text-gray-600'>
                <Calendar size={20} className='mr-2' />
                <span>Pickup scheduled for {new Date(order.createdAt).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='bg-green-100 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>E-Waste Tip</h2>
          <p className='text-gray-700'>
            Before scheduling a pickup, make sure to back up your data and remove any personal information from your devices.
            This helps protect your privacy and makes the recycling process more efficient!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
