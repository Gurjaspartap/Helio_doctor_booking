import React, { useState, useEffect } from 'react';

const BookingSlots = () => {
  const [next6Days, setNext6Days] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);

  // Generating the next 6 days from today's date
  useEffect(() => {
    const today = new Date();
    const daysArray = [];

    for (let i = 0; i < 6; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      daysArray.push({
        day: futureDate.toLocaleDateString('en-US', { weekday: 'short' }), // e.g., "Mon"
        date: futureDate.getDate(), // e.g., 25
        fullDate: futureDate, // Store full date to easily compare later
      });
    }
    setNext6Days(daysArray);
  }, []);

  // Function to handle date click
  const handleDateClick = (dateObj) => {
    setSelectedDate(dateObj); // Set the clicked date as the selected date
    generateTimeSlots(dateObj.fullDate); // Generate time slots for the selected date
  };

  // Function to generate time slots based on selected date
  const generateTimeSlots = (selectedDate) => {
    const slots = [];
    const startHour = 8; // Starting time is 8 AM
    const endHour = 12; // Ending time is 12 PM for example

    const currentHour = new Date().getHours(); // Current hour

    for (let hour = startHour; hour <= endHour; hour += 1) {
      const isPast = selectedDate.getDate() === new Date().getDate() && hour <= currentHour;
      const slotTime = `${Math.floor(hour)}:${hour % 1 === 0 ? '00' : '30'} ${hour >= 12 ? 'PM' : 'AM'}`;

      if (!isPast) {
        slots.push(slotTime); // Add only future time slots
      }
    }

    setTimeSlots(slots); // Set generated time slots
  };

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-xl font-semibold mb-4'>Booking Slots</h2>

      {/* Displaying next 6 days */}
      <div className='flex gap-4'>
        {next6Days.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(day)}
            className={`px-4 py-2 rounded-lg ${selectedDate?.date === day.date ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              }`}
          >
            <div>{day.day}</div>
            <div>{day.date}</div>
          </button>
        ))}
      </div>

      {/* Displaying time slots */}
      {selectedDate && (
        <div className='mt-6'>
          <h3 className='text-lg font-semibold mb-2'>Time Slots for {selectedDate.day} {selectedDate.date}</h3>
          <div className='flex gap-2 flex-wrap'>
            {timeSlots.length > 0 ? (
              timeSlots.map((slot, index) => (
                <div key={index} className='px-4 py-2 border rounded-lg cursor-pointer hover:bg-blue-300'>
                  {slot}
                </div>
              ))
            ) : (
              <div>No available time slots</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSlots;
