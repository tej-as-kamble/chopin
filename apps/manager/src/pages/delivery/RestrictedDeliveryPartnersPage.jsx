import { useState, useEffect } from 'react';
import './DeliveryPartners.css';
import { generateDeliveryPartnersData } from '@/data/deliveryPartnerData';
import PartnerList from '@/components/delivery/PartnerList';
import { LoadingSpinner, PageHeader } from '@chopin/ui-web';

const RestrictedDeliveryPartnersPage = () => {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = () => {
            const data = generateDeliveryPartnersData(60);
            const activeOnly = data.filter(partner => partner.status === 'Restricted');

            setPartners(activeOnly);
            setLoading(false);
        };

        setTimeout(loadData, 500);
    }, []);

    const headerStats = [
        {
            label: "Restricted",
            value: partners.filter(t => t.status === "Restricted").length,
            className: ""
        },
    ];

    return (
        <div className="dp-page">
            <PageHeader
                title="Restricted Delivery Partners"
                subtitle="Area: Downtown Metro • Operations"
                stats={headerStats}
            />

            {loading ? (
                <LoadingSpinner msg='Syncing Delivery Partener List...' />
            ) : (
                <PartnerList data={partners} ToolbarReq={true} />
            )}
        </div>
    );
};

export default RestrictedDeliveryPartnersPage;