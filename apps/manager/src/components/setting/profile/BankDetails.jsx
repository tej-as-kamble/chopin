import './BankDetails.css';
import { SectionHeader } from '@chopin/ui-web';
import { RiBankFill } from "react-icons/ri";

const BankDetails = ({ data }) => {
    return (
        <>
            <SectionHeader
                heading={"Bank Details"}
                icon={<RiBankFill />}
            />
            <div className="bank-card">
                <div className="bank-grid">
                    <div className="bank-row full">
                        <label>Bank Name</label>
                        <div className="value-box">{data.bankName}</div>
                    </div>

                    <div className="bank-row">
                        <label>Account Number</label>
                        <div className="value-box mono">{data.accountNumber}</div>
                    </div>

                    <div className="bank-row">
                        <label>IFSC Code</label>
                        <div className="value-box mono">{data.ifsc}</div>
                    </div>

                    <div className="bank-row">
                        <label>Beneficiary Name</label>
                        <div className="value-box">{data.accountName}</div>
                    </div>

                    <div className="bank-row">
                        <label>PAN Number</label>
                        <div className="value-box mono">{data.pan}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BankDetails;