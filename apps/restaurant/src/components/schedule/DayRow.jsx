import { useState } from "react";
import SlotRow from "./SlotRow";
import AddSlotModal from "./AddSlotModal";
import "./DayRow.css";

const DayRow = ({ day, index, schedule, setSchedule }) => {
  const [showModal, setShowModal] = useState(false);

  const addSlot = (slot) => {
    const updated = [...schedule.week];
    updated[index].slots.push(slot);
    setSchedule({ ...schedule, week: updated });
    day.isClosed = false;
  };

  const clickSddSlot = () => {
    setShowModal(true);
  }

  return (
    <div className={`day-row ${day.isClosed ? "closed" : ""}`}>
      <div className="day-header">
        <span>{day.day}</span>

        <button className="add-slot-btn" onClick={clickSddSlot}>
          + Add Slot
        </button>
      </div>

      {day.isClosed ? (
        <div className="closed-text">Closed</div>
      ) : (
        day.slots.map((slot, i) => (
          <SlotRow key={i} slot={slot} />
        ))
      )}

      {showModal && (
        <AddSlotModal
          boundary={schedule.managerBoundary}
          existingSlots={day.slots}
          onClose={() => setShowModal(false)}
          onAdd={addSlot}
        />
      )}
    </div>
  );
};

export default DayRow;
