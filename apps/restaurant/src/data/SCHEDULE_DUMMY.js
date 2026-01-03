export const SCHEDULE_DUMMY = {
  managerBoundary: {
    start: "10:00",
    end: "23:00",
  },

  week: [
    {
      day: "Monday",
      isClosed: false,
      slots: [
        { start: "10:00", end: "14:30" },
        { start: "18:00", end: "22:30" },
      ],
    },
    {
      day: "Tuesday",
      isClosed: true,
      slots: [],
    },
    {
      day: "Wednesday",
      isClosed: false,
      slots: [{ start: "11:00", end: "20:00" }],
    },
    {
      day: "Thursday",
      isClosed: false,
      slots: [
        { start: "10:00", end: "15:00" },
        { start: "17:30", end: "22:00" },
      ],
    },
    {
      day: "Friday",
      isClosed: false,
      slots: [
        { start: "10:30", end: "15:30" },
        { start: "18:00", end: "23:00" },
      ],
    },
    {
      day: "Saturday",
      isClosed: false,
      slots: [{ start: "11:00", end: "23:00" }],
    },
    {
      day: "Sunday",
      isClosed: true,
      slots: [],
    },
  ],
};
