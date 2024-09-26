import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Package, Calendar, MapPin } from 'lucide-react';
import { useToast } from '@chakra-ui/react';
import orderService from '../../services/order.service';
import { useAuth } from '../../hooks/auth';

const OrderList = ({ orders }) => {
  const [ordersWithAddress, setOrdersWithAddress] = useState([]);
  const { getUser } = useAuth();
  const toast = useToast();

  const user = JSON.parse(getUser());
  const auth = user.accessToken;

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const updatedOrders = await Promise.all(
          orders.map(async (order) => {
            if (order.location && !order.formattedAddress) {
              try {
                const address = await orderService.reverseGeocode(
                  order.location.lat,
                  order.location.lng
                );
                return { ...order, formattedAddress: address };
              } catch (error) {
                console.error(`Failed to get address for order ${order.id}:`, error);
                return order;
              }
            }
            return order;
          })
        );
        setOrdersWithAddress(updatedOrders);
      } catch (error) {
        console.error('Error fetching addresses:', error);
        toast({
          title: 'Error fetching order details',
          description: 'There was an error loading the order details. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true
        });
      }
    };

    if (orders.length > 0) {
      fetchAddresses();
    }
  }, [orders, toast]);

  const handleStartPickup = async (orderId) => {
    const resp = await orderService.acceptOrder(orderId, auth);
    if (resp.status === 200) {
      toast({
        title: 'Pickup accepted successfully',
        isClosable: true,
        duration: 9000,
        position: 'top-right',
        description: 'You have accepted this pickup request',
        status: 'success'
      });
    } else {
      toast({
        title: 'Error accepting pickup request',
        description: resp.data?.error || 'The pickup might have been already accepted',
        duration: 9000,
        isClosable: true,
        status: 'warning',
        position: 'top-right'
      });
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3'>
      {ordersWithAddress.map((order) => (
        <div key={order.id} className='bg-green p-7 mt-8 rounded-lg shadow'>
          <div className='mb-4'>
            <img
              src={order.imageUrl}
              alt={order.description}
              className='w-full h-48 object-cover rounded-lg'
            />
          </div>
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center'>
              <Package size={20} className='mr-2' />
              <span className='text-gray-600'>{order.description}</span>
            </div>
            <button
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'
              onClick={() => handleStartPickup(order.id)}
            >
              Start Pickup
            </button>
          </div>
          <div className='grid grid-cols-1 gap-4 text-gray-600 mb-4'>
            <div>
              <Calendar size={16} className='inline-block mr-2' />
              <span>{new Date(order.createdAt).toLocaleDateString()}</span>
            </div>
            <div>
              <MapPin size={16} className='inline-block mr-2' />
              <span>
                {order.formattedAddress || `Lat: ${order.location.lat}, Lng: ${order.location.lng}`}
              </span>
            </div>
          </div>
          <div className='bg-blue-100 p-4 rounded-lg'>
            <h3 className='text-gray-800 font-semibold mb-2'>Tags</h3>
            <div className='flex flex-wrap gap-2'>
              {order.tags.map((tag, index) => (
                <span
                  key={index}
                  className='bg-blue-200 text-blue-600 px-2 py-1 rounded-full text-sm'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
