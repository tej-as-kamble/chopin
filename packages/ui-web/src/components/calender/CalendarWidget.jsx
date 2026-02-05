import './CalendarWidget.css';
import Calendar from 'react-calendar';

const PrevIcon = () => <span>&lt;</span>;
const NextIcon = () => <span>&gt;</span>;

const CalendarWidget = ({ selectedDate, onDateSelect }) => {
  return (
    <div className="cal-wrapper">
      <Calendar
        onChange={onDateSelect}
        value={selectedDate}
        prevLabel={<PrevIcon />}
        nextLabel={<NextIcon />}
        next2Label={null}
        prev2Label={null}
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString(locale, { weekday: 'narrow' })
        }
        calendarType="gregory"
        showNeighboringMonth={false}
        minDetail="month"
      />
    </div>
  );
};

export default CalendarWidget;