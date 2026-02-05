import { useState, useEffect } from 'react';
import './RestaurantDetailsPage.css';
import { generateRestaurantDetails } from '@/data/restaurantDetailsData';
import { LoadingSpinner, MetricCard, PageHeader, PageLayout, Toast } from '@chopin/ui-web';
import RestaurantInfo from '@/components/restaurant/details/RestaurantInfo';
import RestaurantAction from '@/components/restaurant/details/RestaurantAction';
import Ratings from '@/components/restaurant/details/Ratings';
import PauseOpsForm from '@/components/restaurant/forms/PauseOpsForm';
import WarningForm from '@/components/restaurant/forms/WarningForm';
import FlagForm from '@/components/restaurant/forms/FlagForm';

const RestaurantDetailsPage = () => {
  const [data, setData] = useState(null);
  const [activeForm, setActiveForm] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchedData = generateRestaurantDetails();
      setData(fetchedData);
    }, 600);
  }, []);

  if (!data) return <LoadingSpinner msg='Loading Details...' />

  const TopLeftSections = [
    {
      id: 'primary-info',
      compo: <RestaurantInfo data={data} />
    },
  ];

  const MiddleLeftSections = data.metrics.map((m) => (
    {
      id: m.id,
      compo: (
        <MetricCard
          label={m.label}
          value={m.value}
        />
      )
    }
  ));

  const RightSections = [
    {
      id: 'actions',
      compo: <RestaurantAction onOpenForm={setActiveForm} />
    },
    {
      id: 'ratings',
      compo: <Ratings rating={data.rating} data={data.reviews} />
    }
  ];


  const handleAction = (actionType, note) => {
    setActiveForm(null);
    setToast(`${actionType} successful: ${note}`);
    setTimeout(() => setToast(null), 1500);
  };


  const renderActiveModal = () => {
    switch (activeForm) {
      case 'pause':
        return <PauseOpsForm onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Pause", reason)} />;
      case 'warning':
        return <WarningForm onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Warning", reason)} />;
      case 'flag':
        return <FlagForm onClose={() => setActiveForm(null)} onConfirm={(reason) => handleAction("Flag", reason)} />;
      default: return null;
    }
  };

  return (
    <>
      <div className="rest-details-page">
        <PageHeader
          title={data.tradeName}
          subtitle={data.area}
          stats={[{ label: "Status", value: data.status }]}
        />

        <PageLayout
          TopLeftSections={TopLeftSections}
          MiddleLeftSections={MiddleLeftSections}
          RightSections={RightSections}
        />
      </div>

      {renderActiveModal()}
      {toast && <Toast msg={toast} pos='top-right' />}
    </>
  );
};

export default RestaurantDetailsPage;