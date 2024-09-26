import AuthHeader from "../components/header/AuthHeader.component"
import Footer from "../components/footer/Footer.component"
import OrderDetail from "../components/order/orderDetails.component"

const orders = [
      {
        "creatorId": "66f044fec1437481bc2ac297",
        "imageUrl": "https://res.cloudinary.com/dkmdeg6fc/image/upload/v1727108981/orders/fb5xjiwqzsz9oxzyndar.png",
        "location": {
          "lat": 0,
          "lng": 0
        },
        "description": "Something unique",
        "tags": [
          "CPU",
          "Mobile Phone"
        ],
        "createdAt": "2024-09-23T16:30:27.475Z",
        "updatedAt": "2024-09-23T16:30:27.475Z",
        "collectorId": "66f044fec1437481bc2ac297",
        "status": "completed",
        "id": "66f197a37000687949b2387c"
      },
      {
        "status": "initiated",
        "creatorId": "66f044fec1437481bc2ac297",
        "imageUrl": "https://res.cloudinary.com/dkmdeg6fc/image/upload/v1727108981/orders/fb5xjiwqzsz9oxzyndar.png",
        "location": {
          "lat": 0,
          "lng": 0
        },
        "description": "Something unique",
        "tags": [
          "CPU",
          "Mobile Phone"
        ],
        "createdAt": "2024-09-23T16:31:51.619Z",
        "updatedAt": "2024-09-23T16:31:51.619Z",
        "id": "66f197f77000687949b23880"
      },
      {
        "status": "initiated",
        "creatorId": "66f044fec1437481bc2ac297",
        "imageUrl": "https://res.cloudinary.com/dkmdeg6fc/image/upload/v1727108981/orders/fb5xjiwqzsz9oxzyndar.png",
        "location": {
          "lat": 0,
          "lng": 0
        },
        "description": "Something unique",
        "tags": [
          "CPU",
          "Mobile Phone"
        ],
        "createdAt": "2024-09-23T16:32:34.153Z",
        "updatedAt": "2024-09-23T16:32:34.153Z",
        "id": "66f198227000687949b23884"
      }
    ]

const OrdersPage = () => {
    return (
        <>
            <AuthHeader/>
            <OrderDetail orders={orders} />
            <Footer/>
        </>
    )

}

export default OrdersPage