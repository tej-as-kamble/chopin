import { useState } from 'react';
import './DaySlotDetails.css';
import { generateDayData } from '@/data/slotData';
import { SectionHeader } from '@chopin/ui-web';
import { FaClock } from "react-icons/fa6";

const DaySlotDetails = ({ date }) => {
    const [editBtn, SetEditBtn] = useState(true);
    const data = generateDayData(0);

    const toggleEdit = () => {
        SetEditBtn(prev => !prev);
    }

    return (
        <>
            <SectionHeader
                heading={"Configuration"}
                icon={<FaClock />}
            />
            <div className="srp-details-container">
                <div className="srp-details-header">
                    <p>Slot for {date.toLocaleDateString()}</p>
                    {editBtn ? (
                        <button className="srp-btn-edit" onClick={() => toggleEdit()}>Edit</button>
                    ) : (
                        <button className="srp-btn-save" onClick={() => toggleEdit()}>Save</button>
                    )}
                </div>

                <div className="srp-inputs-row">
                    <div className="srp-input-group">
                        <label>Online From</label>
                        <input type="text" defaultValue={data.restaurantSlot.start} />
                    </div>
                    <div className="srp-input-group">
                        <label>Offline At</label>
                        <input type="text" defaultValue={data.restaurantSlot.end} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DaySlotDetails;