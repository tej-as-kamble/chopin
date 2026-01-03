import "./SlotRow.css";

const SlotRow = ({ slot, dayIndex, slotIndex, schedule, setSchedule }) => {
  const update = (field, value) => {
    const updated = [...schedule.week];
    updated[dayIndex].slots[slotIndex][field] = value;
    setSchedule({ ...schedule, week: updated });
  };

  const remove = () => {
    const updated = [...schedule.week];
    updated[dayIndex].slots.splice(slotIndex, 1);
    setSchedule({ ...schedule, week: updated });
  };

  return (
    <div className="slot-row">
      <input type="time" value={slot.start} onChange={(e) => update("start", e.target.value)} />
      <span>–</span>
      <input type="time" value={slot.end} onChange={(e) => update("end", e.target.value)} />
      <button onClick={remove}>✕</button>
    </div>
  );
};

export default SlotRow;
