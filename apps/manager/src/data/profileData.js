const firstNames = ["Rajesh", "Amit", "Priya", "Sneha", "Vikram", "Anjali", "Suresh", "Meera"];
const lastNames = ["Sharma", "Verma", "Patel", "Singh", "Gupta", "Kumar", "Reddy", "Iyer"];
const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune"];
const banks = ["HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank"];
const statuses = ["Completed", "Pending", "Processing"];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateManagerData = () => {
    return {
        personal: {
            fullName: `${getRandom(firstNames)} ${getRandom(lastNames)}`,
            role: "Senior Operations Manager",
            employeeId: `EMP-${getRandomInt(1000, 9999)}`,
            email: `manager.${getRandomInt(10, 99)}@fooddelivery.in`,
            phone: `+91 ${getRandomInt(70000, 99999)} ${getRandomInt(10000, 99999)}`,
            dob: "1988-04-12",
            joinDate: "2021-08-15",
            bloodGroup: "O+",
            emergencyContact: `+91 ${getRandomInt(70000, 99999)} ${getRandomInt(10000, 99999)}`,
            nationality: "Indian",
            gender: "Male",
            languages: ["English", "Hindi", "Marathi"],
        },
        address: {
            street: `${getRandomInt(1, 100)}, Galaxy Apartments, MG Road`,
            city: getRandom(cities),
            state: "Maharashtra",
            postalCode: `${getRandomInt(400001, 400099)}`,
            country: "India",
            type: "Permanent Residence",
        },
        bank: {
            accountName: "Rajesh Sharma",
            accountNumber: `${getRandomInt(1000, 9999)}XXXXXXXX${getRandomInt(1000, 9999)}`,
            bankName: getRandom(banks),
            ifsc: `${getRandom(banks).substring(0, 4).toUpperCase()}000${getRandomInt(1000, 9999)}`,
            branch: "Andheri West, Mumbai",
            pan: `ABCDE${getRandomInt(1000, 9999)}F`,
        },
        payouts: Array.from({ length: 8 }).map((_, i) => ({
            id: `TXN-${getRandomInt(100000, 999999)}`,
            date: `15 Mar`,
            amount: getRandomInt(45000, 55000),
            status: getRandom(statuses),
            type: "Salary",
            details: "Monthly Crediting",
        })),
    };
};