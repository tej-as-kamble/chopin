import React, { useState } from "react";
import BankDetailsForm from "./BankDetailsForm";
import "./BankDetails.css";
import { BANK_DETAILS_DUMMY } from "@/data/BANK_DETAILS_DUMMY";


const BankDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bank, setBank] = useState(BANK_DETAILS_DUMMY);

  const isPending = bank.status === "pending";

  return (
    <div className="bd-wrapper">
      <div className="bd-card">
        <div className="bd-header">
          <h2>Bank Details</h2>
          <span className={`bd-status ${bank.status}`}>
            {bank.status.toUpperCase()}
          </span>
        </div>

        {!isEditing ? (
          <div className="bd-view">
            <div className="bd-row"><span>Account Holder</span>{bank.holderName}</div>
            <div className="bd-row"><span>Bank Name</span>{bank.bankName}</div>
            <div className="bd-row"><span>Account Number</span>{bank.accountNumber}</div>
            <div className="bd-row"><span>IFSC</span>{bank.ifsc}</div>
            <div className="bd-row"><span>Branch</span>{bank.branch}</div>

            <button
              className="bd-edit-btn"
              disabled={isPending}
              onClick={() => setIsEditing(true)}
            >
              Edit Bank Details
            </button>

            {isPending && (
              <p className="bd-info">
                Verification in progress. Editing disabled.
              </p>
            )}
          </div>
        ) : (
          <BankDetailsForm
            initialData={bank}
            onCancel={() => setIsEditing(false)}
            onSave={(data) => {
              setBank({ ...data, status: "pending" });
              setIsEditing(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BankDetails;
