
import { useState, useEffect } from 'react';
import './VerificationPage.css';
import { generateVerificationData } from '@/data/verificationData';
import { LoadingSpinner, PageHeader } from '@chopin/ui-web';
import VerificationList from '@/components/restaurant/verification/VerificationList';


function VerificationPage() {
    const [verificationData, setVerificationData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const data = generateVerificationData(25);
            setVerificationData(data);
            setLoading(false);
        }, 800);
    }, []);


    const headerStats = [
        {
            label: "Pending",
            value: verificationData.filter(t => t.status === 'Pending').length,
            className: "rvp-pending"
        },
        {
            label: "Approved",
            value: verificationData.filter(t => t.status === 'Approved').length,
        },
        {
            label: "Rejected",
            value: verificationData.filter(t => t.status === 'Rejected').length,
        }
    ];

    const filterOptions = [
        { value: '', label: 'All' },
        { value: 'Pending', label: 'Pending' },
        { value: 'Approved', label: 'Approved' },
        { value: 'Rejected', label: 'Rejected' },
    ];

    return (
        <div className="v-container">
            <PageHeader
                title="Restaurant Verification"
                subtitle="Area: Downtown Metro • Operations"
                stats={headerStats}
            />

            <main className="tp-main">
                {loading ? (
                    <LoadingSpinner msg='Syncing Verification List...' />
                ) : (
                    <VerificationList data={verificationData} filterOptions={filterOptions} />
                )}
            </main>
        </div >
    );
}

export default VerificationPage;