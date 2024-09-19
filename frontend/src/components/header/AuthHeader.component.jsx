import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle, LogOut, User, History, Bell, Loader, LayoutDashboard } from 'lucide-react';
import { Menu } from '@headlessui/react';
import NotificationPanel from '../notifications/NotificationPanel.component';

const AuthHeader = () => {
  const navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    window.localStorage.clear('user');
    setTimeout(() => {
      setIsLoggingOut(false);
      navigate('/account/login');
    }, 3300);
  };

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const menuItems = [
    { label: 'Profile', icon: User, href: '/account/profile' },
    { label: 'History', icon: History, href: '/pickup/history' },
    { label: 'Notifications', icon: Bell, href: '/account/notifications' },
    { label: 'Dashboard', icon: LayoutDashboard, href: '/account/dashboard' }
  ];

  return (
    <header className='bg-white shadow pb-6 lg:pb-0'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0'>
            <a href='/'>
              <img
                className='h-8 w-auto'
                src='/image.png'
                alt='Logo'
              />
            </a>
          </div>

          <div className='flex items-center'>
            <div className='mr-4'>
              <Menu as='div' className='relative inline-block text-left'>
                <Menu.Button className='flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
                  <span className='sr-only'>Open user menu</span>
                  <UserCircle className='h-8 w-8 text-gray-400' />
                </Menu.Button>
                <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='px-1 py-1'>
                    {menuItems.map((item) => (
                      <Menu.Item key={item.label}>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-green-500 text-white' : 'text-gray-900'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            onClick={() => navigate(item.href)}
                          >
                            <item.icon
                              className='w-5 h-5 mr-2'
                              aria-hidden='true'
                            />
                            {item.label}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>
            </div>

            <div className='mr-4 relative'>
              <button
                onClick={handleNotificationClick}
                className='p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
              >
                <span className='sr-only'>View notifications</span>
                <Bell className='h-6 w-6' />
              </button>
              {unreadNotifications > 0 && (
                <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                  {unreadNotifications}
                </span>
              )}
              <NotificationPanel isOpen={isNotificationOpen} setIsOpen={setIsNotificationOpen} />
            </div>

            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoggingOut
                ? (
                  <Loader className='h-4 w-4 mr-2 animate-spin' />
                  )
                : (
                  <LogOut className='h-4 w-4 mr-2' />
                  )}
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
