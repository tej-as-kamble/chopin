import { useState, useEffect } from 'react';
import './RestaurantsPage.css';
import { generateRestaurantsData } from '@/data/restaurantsData';
import { LoadingSpinner, PageHeader } from '@chopin/ui-web';
import RestaurantCard from '@/components/restaurant/RestaurantCard';
import PauseModal from '@/components/restaurant/PauseModal';
import EmptyState from '@/components/restaurant/EmptyState';

const AllRestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const loadData = () => {
      const data = generateRestaurantsData(20);
      setRestaurants(data);
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

    setRestaurants(prev => prev.map(rest =>
      rest.id === id ? { ...rest, status: 'Paused' } : rest
    ));

    setSelectedRestaurant(null);
  };

  const headerStats = [
    {
      label: "Total Restaurants",
      value: restaurants.length,
      className: ""
    },
  ]

  if (loading) return <LoadingSpinner msg='Loading Restaurants...' />;

  return (
    <div className="manager-dashboard">
      <PageHeader
        title="All Restaurants"
        subtitle="Area: Downtown Metro • Operations"
        stats={headerStats}
      />

      {restaurants.length === 0 ? (
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
      )}

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

export default AllRestaurantsPage;