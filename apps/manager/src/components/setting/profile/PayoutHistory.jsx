import './PayoutHistory.css';
import { SectionHeader, TableTable } from '@chopin/ui-web';
import { GiCrystalGrowth } from "react-icons/gi";

const PayoutHistory = ({ data }) => {
    const columns = [
        {
            key: 'date',
            title: 'Date',
            width: '10%',
            render: (txn) => (
                <span>{txn.date}</span>
            )
        },
        {
            key: 'info',
            title: 'Info',
            width: '10%',
            render: (txn) => (
                <div className="pdp-payout-info">
                    <span className="pdp-payout-type">{txn.type}</span>
                    <span className="pdp-payout-meta">{txn.id} • {txn.details}</span>
                </div>
            )
        },
        {
            key: 'amount',
            title: 'Amount',
            width: '10%',
            render: (txn) => (
                <div className="pdp-payout-amount">+₹{txn.amount.toLocaleString()}</div>
            )
        },
        {
            key: 'status',
            title: 'Status',
            width: '10%',
            render: (txn) => (
                <div className={`pdp-payout-status ${txn.status.toLowerCase()}`}>{txn.status}</div>
            )
        },
    ]

    return (
        <>
            <SectionHeader
                heading={"Payout History"}
                icon={<GiCrystalGrowth />}
            />
            <div className="pdp-payout-card">
                <div className='pdp-payout-table'>
                    <TableTable
                        columns={columns}
                        data={data}
                    />
                </div>
                <div className="pdp-payout-footer">
                    <button className="pdp-btn-text">Download Statement</button>
                </div>

            </div>
        </>
    );
};

export default PayoutHistory;