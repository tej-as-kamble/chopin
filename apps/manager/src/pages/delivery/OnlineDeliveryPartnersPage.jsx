import { useState, useEffect } from 'react';
import './DeliveryPartners.css';
import { generateDeliveryPartnersData } from '@/data/deliveryPartnerData'
import { LoadingSpinner, PageHeader } from '@chopin/ui-web';
import PartnerList from '@/components/delivery/PartnerList';

const OnlineDeliveryPartnersPage = () => {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = () => {
            const data = generateDeliveryPartnersData(60);
            const activeOnly = data.filter(partner => partner.status === 'Active' || partner.status === 'On Delivery');

            setPartners(activeOnly);
            setLoading(false);
        };

        setTimeout(loadData, 500);
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
    ];

    const filterOptions = [
        { value: '', label: 'All Active' },
        { value: 'Active', label: 'Active' },
        { value: 'On Delivery', label: 'On Delivery' },
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

export default OnlineDeliveryPartnersPage;