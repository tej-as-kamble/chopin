import { useState, useEffect } from 'react';
import './RestaurantsPage.css';
import { generateRestaurantsData } from '@/data/restaurantsData';
import { LoadingSpinner, PageHeader } from '@chopin/ui-web';
import RestaurantCard from '@/components/restaurant/RestaurantCard';
import PauseModal from '@/components/restaurant/PauseModal';
import EmptyState from '@/components/restaurant/EmptyState';

const ActiveRestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const loadData = () => {
      const data = generateRestaurantsData(30);
      const activeOnly = data.filter(rest => rest.status === 'Active');

      setRestaurants(activeOnly);
      setLoading(false);
    };

    setTimeout(loadData, 500);
  }, []);

  const handlePauseClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleCloseModal = () => {
    setSelectedRestaurant(null);
  };

  const handleConfirmPause = (id, reason) => {
    console.log(`Pausing restaurant ${id} for reason: ${reason}`);

    setRestaurants(prev => prev.filter(rest => rest.id !== id));

    setSelectedRestaurant(null);
  };

  const headerStats = [
    {
      label: "Total Restaurants",
      value: 30,
      className: ""
    },
    {
      label: "Offline Restaurants",
      value: restaurants.length,
      className: ""
    },
  ]



  return (
    <div className="manager-dashboard">
      <PageHeader
        title="Online Restaurants"
        subtitle="Area: Downtown Metro • Operations"
        stats={headerStats}
      />

      {loading ? (
        <LoadingSpinner msg='Loading Active Restaurants...' />
      ) : (
        restaurants.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="restaurant-grid">
            {restaurants.map((rest) => (
              <RestaurantCard
                key={rest.id}
                data={rest}
                onPauseClick={handlePauseClick}
              />
            ))}
          </div>
        )
      )
      }

      {selectedRestaurant && (
        <PauseModal
          restaurant={selectedRestaurant}
          onClose={handleCloseModal}
          onConfirm={handleConfirmPause}
        />
      )}
    </div>
  );
};

export default ActiveRestaurantsPage;