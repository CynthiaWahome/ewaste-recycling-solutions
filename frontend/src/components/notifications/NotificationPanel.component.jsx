import { Tab } from '@headlessui/react';

const notificationCategories = [
  {
    name: 'All',
    notifications: [
      {
        id: 1,
        title: 'Trash status has been updated',
        date: '5m ago',
        type: 'order'
      },
      {
        id: 2,
        title: 'Ready to pickup',
        date: '2h ago',
        type: 'order'
      }
    ]
  },
  {
    name: 'Unread',
    notifications: [
      {
        id: 1,
        title: 'Pickup just got shiped',
        date: '5m ago',
        type: 'order'
      }
    ]
  },
  {
    name: 'Important',
    notifications: [
      {
        id: 2,
        title: 'Your order has been shipped',
        date: '2h ago',
        type: 'order'
      }
    ]
  }
];

const NotificationPanel = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`absolute right-0 mt-2 w-80 rounded-md shadow-lg ${isOpen ? '' : 'hidden'}`}>
      <div className='rounded-md bg-white shadow-xs'>
        <div className='p-3'>
          <Tab.Group>
            <Tab.List className='flex space-x-1 rounded-xl bg-green-200 p-1'>
              {notificationCategories.map(({ name }) => (
                <Tab
                  key={name}
                  className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                      ${selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}`}
                >
                  {name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className='mt-2'>
              {notificationCategories.map(({ name, notifications }) => (
                <Tab.Panel
                  key={name}
                  className='rounded-xl bg-white p-3'
                >
                  <ul>
                    {notifications.map((notification) => (
                      <li
                        key={notification.id}
                        className='relative rounded-md p-3 hover:bg-gray-100'
                      >
                        <h3 className='text-sm font-medium leading-5'>
                          {notification.title}
                        </h3>
                        <ul className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500'>
                          <li>{notification.date}</li>
                          <li>&middot;</li>
                          <li>{notification.type}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
