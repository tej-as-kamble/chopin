const RESTAURANTS = [
    "Spicy Tandoor", "Burger King - Downtown", "Pizza Hut - Mall",
    "Chai Point", "Samosa Singh", "The Bowl Company", "KFC - Central",
    "Wow! Momo", "Haldiram's", "Taco Bell", "Subway - Tech Park",
    "Biryani Blues", "Cafe Coffee Day", "Starbucks", "Dominos"
];
const STATUSES = ["Pending", "Pending", "Pending", "Approved", "Rejected"];
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    return date.toISOString().split('T')[0];
};
const DOC_TYPES = [
    "FSSAI License",
    "GST Certificate",
    "PAN Card",
    "Cancelled Cheque",
    "Kitchen Hygiene Photo",
    "Menu Pricing List",
    "Fire Safety NOC"
];


export const generateVerificationData = (count = 50) => {
    return Array.from({ length: count }, (_, index) => {
        const docType = getRandom(DOC_TYPES);

        return {
            id: (1000 + index).toString(),
            restaurant: getRandom(RESTAURANTS),
            docType: docType,
            status: getRandom(STATUSES),
            date: getRandomDate(),
        };
    });
};