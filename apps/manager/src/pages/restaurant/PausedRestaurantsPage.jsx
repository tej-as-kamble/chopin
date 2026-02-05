import { useState, useEffect } from 'react';
import './RestaurantsPage.css';
import { generateRestaurantsData } from '@/data/restaurantsData';
import { LoadingSpinner, PageHeader } from '@chopin/ui-web';
import RestaurantCard from '@/components/restaurant/RestaurantCard';
import EmptyState from '@/components/restaurant/EmptyState';

const PausedRestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      const data = generateRestaurantsData(30);

      const pausedOnly = data.filter(rest => rest.status === 'Paused');

      setRestaurants(pausedOnly);
      setLoading(false);
    };

    setTimeout(loadData, 500);
  }, []);

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
        title="Offline Restaurants"
        subtitle="Area: Downtown Metro • Operations"
        stats={headerStats}
      />

      {loading ? (
        <LoadingSpinner msg='Loading Paused Restaurants...' />
      ) : (
        restaurants.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="restaurant-grid">
            {restaurants.map((rest) => (
              <RestaurantCard
                key={rest.id}
                data={rest}
                onPauseClick={() => { }}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default PausedRestaurantsPage;