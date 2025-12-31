
const randomPick = (arr) => arr[Math.floor(Math.random()*3)];

export const BANK_DETAILS_DUMMY = {
  holderName: "Tejas Kamble",
  bankName: "HDFC Bank",
  accountNumber: "XXXX1234",
  ifsc: "HDFC0001234",
  branch: "Pune",
  status: randomPick(["not_added", "verified", "pending"]),
};