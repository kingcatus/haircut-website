import React, { useState } from "react";

const PRIMARY_BLUE = "#0033A0";
const HOVER_BLUE = "#1a4db3";

const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [selectedTime, setSelectedTime] = useState(null);

  // Simulate a single service for now
  const service = "Haircut";
  const price = "$25";

  // Generate next 7 days for the calendar
  const getNext7Days = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const handleConfirm = () => {
    if (selectedTime) {
      console.log({
        service,
        price,
        date: selectedDate,
        time: selectedTime,
      });
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
        {/* Left: Calendar and Time Slots */}
        <div className="flex-1 flex flex-col justify-center gap-10">
          <h2 className="text-3xl font-bold mb-2 text-center md:text-left" style={{ color: PRIMARY_BLUE }}>
            Book Your Appointment
          </h2>
          {/* Calendar */}
          <div className="mb-2 flex flex-col gap-3">
            <h3 className="text-lg font-semibold mb-1">Select a Date</h3>
            <div className="flex gap-2 overflow-x-auto pb-2 justify-center md:justify-start">
              {getNext7Days().map((date) => {
                const dateStr = date.toISOString().split("T")[0];
                const isSelected = selectedDate === dateStr;
                return (
                  <button
                    key={dateStr}
                    onClick={() => setSelectedDate(dateStr)}
                    className={`px-4 py-2 rounded-lg font-semibold border-2 transition-all duration-200 min-w-[90px] ${
                      isSelected
                        ? "bg-blue-700 border-blue-700 text-white"
                        : "bg-gray-800 border-gray-700 text-gray-200 hover:bg-blue-900 hover:border-blue-700"
                    }`}
                  >
                    <div className="text-sm font-bold">
                      {date.toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                    </div>
                    <div className="text-xs">
                      {date.toLocaleDateString(undefined, { weekday: "short" })}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          {/* Time Slots */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold mb-1">Select a Time</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`py-2 rounded-lg font-semibold border-2 transition-all duration-200 ${
                    selectedTime === slot
                      ? "bg-blue-700 border-blue-700 text-white"
                      : "bg-gray-800 border-gray-700 text-gray-200 hover:bg-blue-900 hover:border-blue-700"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Summary Card */}
        <div className="w-full md:w-96 bg-gray-800 rounded-xl p-8 flex flex-col items-center shadow-md justify-between self-center">
          <h3 className="text-xl font-bold mb-4 text-center" style={{ color: PRIMARY_BLUE }}>
            Appointment Summary
          </h3>
          <div className="mb-2 w-full flex justify-between whitespace-nowrap">
            <span className="font-semibold">Service:</span>
            <span>{service}</span>
          </div>
          <div className="mb-2 w-full flex justify-between whitespace-nowrap">
            <span className="font-semibold">Price:</span>
            <span>{price}</span>
          </div>
          <div className="mb-2 w-full flex justify-between whitespace-nowrap">
            <span className="font-semibold">Date:</span>
            <span>{selectedDate}</span>
          </div>
          <div className="mb-6 w-full flex justify-between whitespace-nowrap">
            <span className="font-semibold">Time:</span>
            <span>{selectedTime || "--"}</span>
          </div>
          <button
            className="w-full py-3 rounded-full font-bold text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-800/50 mt-4"
            style={{
              background: selectedTime ? PRIMARY_BLUE : "#444",
              color: "white",
              cursor: selectedTime ? "pointer" : "not-allowed",
              opacity: selectedTime ? 1 : 0.6,
            }}
            disabled={!selectedTime}
            onClick={handleConfirm}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default Booking;
