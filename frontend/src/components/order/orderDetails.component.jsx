import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Package, Calendar, MapPin } from 'lucide-react';

const OrderList = ({ orders }) => {
  const navigate = useNavigate();

  const handleStartPickup = (orderId) => {
    navigate('/pickup/:id');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {orders.map((order) => (
        <div key={order.id} className="bg-white p-7 mt-8 rounded-lg shadow">
          <div className="mb-4">
            <img
              src={order.imageUrl}
              alt={order.description}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Package size={20} className="mr-2" />
              <span className="text-gray-600">{order.description}</span>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => handleStartPickup(order.id)}
            >
              Start Pickup
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-600 mb-4">
            <div>
              <Calendar size={16} className="inline-block mr-2" />
              <span>{new Date(order.createdAt).toLocaleDateString()}</span>
            </div>
            <div>
              <MapPin size={16} className="inline-block mr-2" />
              <span>
                Lat: {order.location.lat}, Lng: {order.location.lng}
              </span>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-gray-800 font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {order.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-600 px-2 py-1 rounded-full text-sm"
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