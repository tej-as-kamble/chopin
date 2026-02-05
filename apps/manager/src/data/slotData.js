export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const statuses = ["Operational", "Restricted", "Maintenance", "High Demand"];

export const generateDayData = (dateOffset = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + dateOffset);

    const isWeekend = date.getDay() === 0 || date.getDay() === 6;

    return {
        id: `day-${dateOffset}`,
        date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        fullDate: date,
        status: isWeekend ? "High Demand" : statuses[getRandomInt(0, 2)],
        restaurantSlot: {
            start: "08:00 AM",
            end: isWeekend ? "11:59 PM" : "10:00 PM",
            activeCount: getRandomInt(120, 500)
        },
        riderSlot: {
            start: "07:30 AM",
            end: "11:59 PM",
            activeCount: getRandomInt(50, 200)
        },
        alerts: getRandomInt(0, 5) > 3 ? "Heavy Rain Expected" : null
    };
};

export const generateFutureData = (days = 7) => {
    return Array.from({ length: days }, (_, i) => generateDayData(i + 1));
};

export const getTodayData = () => generateDayData(0);