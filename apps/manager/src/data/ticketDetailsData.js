export const getTicketDetails = () => {
  return {
    id: "TKT-8492",
    status: "Open",
    source: "Customer",
    name: "Jonny Pu",
    category: "Food Category",
    subject: "Food spilled entirely in transit",
    description: "Customer received the package but the soup container opened and spilled over the entire order. Photos attached by customer show completely damaged goods.",
    createdAt: new Date().toLocaleString(),
    contact: "+91 98135 31875",

    note: "Only if looks genuine then I will do refund",
    noteTime: "50 min ago",

    context: {
      orderId: "ORD-1000",
      customerId: "",
      deliveryPartId: "PTR-1000",
      restId: "REST-1000",
    },

    timeline: [
      {
        id: 2,
        author: "Sarah J. (Customer)",
        text: "My lunch is ruined. I can't eat this. Please help.",
        time: new Date().toLocaleString()
      },
      {
        id: 3,
        author: "Support Agent (You)",
        text: "We are trying to communicate with Restaurant, Please Wait.",
        time: new Date().toLocaleString()
      },
      {
        id: 4,
        author: "Sarah J. (Customer)",
        text: "Thanks for your responce",
        time: new Date().toLocaleString()
      }
    ]
  };
};