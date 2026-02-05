import { useState, useEffect } from 'react';
import './OrderDetailsPage.css';
import { orderDetailsData } from '@/data/orderDetailsData';
import { generateRestaurantDetails } from '@/data/restaurantDetailsData';
import { getPartnerDetails } from '@/data/deliveryPartnerDetailData';

import OrderMap from '@/components/orders/details/OrderMap';

import { LoadingSpinner, PageHeader, PageLayout, Toast } from '@chopin/ui-web';
import CustomerInfo from '@/components/orders/details/CustomerInfo';
import RestaurantInfo from '@/components/restaurant/details/RestaurantInfo';
import DeliveryPartnerInfo from '@/components/delivery/details/DeliveryPartnerInfo';
import OrderInfo from '@/components/orders/details/OrderInfo';
import OrderTracking from '@/components/orders/details/OrderTracking';

const OrderDetailsPage = () => {
  const [data, setData] = useState(null);
  const [restaurantData, setRestaurantData] = useState(null);
  const [deliveryData, setDeliveryData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchedData = orderDetailsData();
      setData(fetchedData);
    }, 500);

    setTimeout(() => {
      const fetchedData = generateRestaurantDetails();
      setRestaurantData(fetchedData);
    }, 600);

    setTimeout(() => {
      const fetchedData = getPartnerDetails();
      setDeliveryData(fetchedData);
    }, 600);
  }, []);

  if (!data) return <LoadingSpinner msg='Loading Order Details...' />

  const TopLeftSections = [
    {
      id: 'order-timeline',
      compo: <OrderTracking data={data.timeline} />
    },
    {
      id: 'primary-info',
      compo: <CustomerInfo data={data} />
    },
  ];

  const BottomLeftSections = [
    {
      id: 'rest-info',
      compo: <RestaurantInfo data={restaurantData} />
    },
    {
      id: 'del-info',
      compo: <DeliveryPartnerInfo data={deliveryData} />
    },
  ];


  const RightSections = [
    {
      id: 'order',
      compo: <OrderInfo
        data={data.orderSummary}
        bill={data.billDetails}
      />
    },
    // {
    //   id: 'ratings',
    //   compo: <Ratings rating={data.rating} data={data.reviews}/>
    // },
    {
      id: 'graph',
      compo: <OrderMap
        status={data.status}
        driver={data.driver}
        restaurant={data.restaurant}
      />
    }
  ];


  return (
    <div className="order-details-page">
      <PageHeader
        title="Order Details"
        subtitle={data.area}
        stats={[{ label: "Order ID", value: data.id }]}
      />

      <PageLayout
        TopLeftSections={TopLeftSections}
        BottomLeftSections={BottomLeftSections}
        RightSections={RightSections}
      />
    </div>
  );
};

export default OrderDetailsPage;