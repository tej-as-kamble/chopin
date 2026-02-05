const areas = [
    'Sector 12', 'Downtown', 'North Park', 'Riverside', 'Old Town', 'Airport Zone', 'Eastside', 'West End'
];
const statuses = ['active', 'on_delivery', 'idle', 'paused'];


function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }


const firstNames = ['Aarav', 'Vivaan', 'Aditya', 'Arjun', 'Krishna', 'Rohan', 'Ishaan', 'Karan', 'Sahil', 'Nikhil', 'Priya', 'Anaya', 'Sana', 'Riya', 'Meera', 'Isha'];
const lastNames = ['Kumar', 'Shah', 'Patel', 'Joshi', 'Gupta', 'Reddy', 'Singh', 'Mehta', 'Kapoor', 'Rao', 'Verma', 'Nair', 'Iyer', 'Chopra'];


const partners = [];
const COUNT = 350;
for (let i = 1; i <= COUNT; i++) {
    const name = `${pick(firstNames)} ${pick(lastNames)}`;
    const status = pick(statuses);
    const activeOrder = status === 'on_delivery' ? rand(10000, 19999) : null;
    const cancellations = rand(0, 5);
    const complaints = rand(0, 2);
    const inactivePeak = Math.random() < 0.06;
    const area = pick(areas);
    partners.push({
        id: 1000 + i,
        name,
        status,
        activeOrder,
        area,
        cancellations,
        complaints,
        inactivePeak
    });
}


export default partners;