import { useState, useEffect } from 'react';
import { LoadingSpinner, PageHeader } from '@chopin/ui-web';
import { generateDeliveryPartnersData } from '../../data/deliveryPartnerData'
import PartnerList from '@/components/delivery/PartnerList';
import './DeliveryPartners.css';

const DeliveryPartnersPage = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      const data = generateDeliveryPartnersData(60);
      setPartners(data);
      setLoading(false);
    }
    setTimeout(loadData, 800);
  }, []);


  const headerStats = [
    {
      label: "Online",
      value: partners.filter(t => t.status === "Active").length,
      className: ""
    },
    {
      label: "On Delivery",
      value: partners.filter(t => t.status === "On Delivery").length,
    },
    {
      label: "Offline",
      value: partners.filter(t => t.status === 'Paused').length,
    },
  ];

  const filterOptions = [
    { value: '', label: 'All Partners' },
    { value: 'Active', label: 'Active' },
    { value: 'On Delivery', label: 'On Delivery' },
    { value: 'Paused', label: 'Paused' },
    { value: 'Restricted', label: 'Restricted' },
  ];

  return (
    <div className="dp-page">
      <PageHeader
        title="Delivery Partners"
        subtitle="Area: Downtown Metro • Operations"
        stats={headerStats}
      />

      {loading ? (
        <LoadingSpinner msg='Syncing Delivery Partener List...' />
      ) : (
        <PartnerList data={partners} filterOptions={filterOptions} ToolbarReq={true} />
      )}
    </div>
  );
};

export default DeliveryPartnersPage;