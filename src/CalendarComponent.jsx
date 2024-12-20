import React, { useState, useRef, useEffect } from "react";
import dayjs from "dayjs";



const CalendarComponent = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs()); // Current displayed month
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [isCheckIn, setIsCheckIn] = useState(true); // Track if selecting Check-in or Check-out

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  
  const toggleCalendar = (forCheckIn) => {
    setIsCheckIn(forCheckIn); // True for Check-in, false for Check-out
    setIsCalendarOpen(true);
    setIsGuestDropdownOpen(false); // Close guest dropdown if open
  };

  const toggleGuestDropdown = () => {
      setIsGuestDropdownOpen(!isGuestDropdownOpen);
      setIsCalendarOpen(false); // Close calendar if open
    };
    
    const goToPreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleDateSelect = (date) => {
      if (isCheckIn) {
          setCheckInDate(date);
          setCheckOutDate(null); // Reset Check-Out date
          setIsCheckIn(false); // Switch to Check-out after Check-in is selected
        } else {
            if (date.isAfter(checkInDate)) {
                setCheckOutDate(date);
                setIsCalendarOpen(false); // Close calendar after Check-out date is selected
            }
        }
    };
    

  const handleGuestChange = (type, action) => {
    if (type === "adults") {
      setAdults(action === "increment" ? adults + 1 : Math.max(0, adults - 1));
    } else if (type === "children") {
      setChildren(action === "increment" ? children + 1 : Math.max(0, children - 1));
    } else if (type === "infants") {
      setInfants(action === "increment" ? infants + 1 : Math.max(0, infants - 1));
    } else if (type === "pets") {
      setPets(action === "increment" ? pets + 1 : Math.max(0, pets - 1));
    }
  };

  const getGuestSummary = () => {
    const guestArray = [];
    if (adults > 0) guestArray.push(`${adults} Adults`);
    if (children > 0) guestArray.push(`${children} Children`);
    if (infants > 0) guestArray.push(`${infants} Infants`);
    if (pets > 0) guestArray.push(`${pets} Pets`);
    return guestArray.length > 0 ? guestArray.join(", ") : "Add guests";
  };

  const generateCalendarDays = (date) => {
    const startOfMonth = date.startOf("month");
    const endOfMonth = date.endOf("month");

    const startDay = startOfMonth.day(); // Day of the week (0 = Sunday)
    const totalDays = endOfMonth.date(); // Total days in the month

    const days = [];

    // Fill days from the previous month
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    // Fill current month's days
    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days;
  };

  const renderCalendarGrid = (date) => {
    const days = generateCalendarDays(date);

    return (
      <div className="grid grid-cols-7 gap-1 text-center text-gray-500 text-sm mb-4 font-ubuntu" >
        {/* Days of the Week */}
        <div className="font-semibold">Sun</div>
        <div className="font-semibold">Mon</div>
        <div className="font-semibold">Tue</div>
        <div className="font-semibold">Wed</div>
        <div className="font-semibold">Thu</div>
        <div className="font-semibold">Fri</div>
        <div className="font-semibold">Sat</div>

        {/* Calendar Days */}
        {days.map((day, index) => {
          const currentDay = date.date(day).startOf("day");
          const isPast = currentDay.isBefore(dayjs().startOf("day"));
          const isBeforeCheckIn =
            !isCheckIn && checkInDate && currentDay.isBefore(checkInDate);
          const isSelected =
            (checkInDate && checkInDate.isSame(currentDay)) ||
            (checkOutDate && checkOutDate.isSame(currentDay));

          return day ? (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                isPast || isBeforeCheckIn
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:bg-gray-100 cursor-pointer"
              } ${isSelected ? "bg-blue-500 text-white" : ""}`}
              onClick={() =>
                !(isPast || isBeforeCheckIn) && handleDateSelect(currentDay)
              }
            >
              {day}
            </div>
          ) : (
            <div key={index} />
          );
        })}
      </div>
    );
  };
  return (
    
    
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg border border-gray-300 rounded-full px-8 py-4 flex items-center justify-between space-x-4 font-ubuntu">

      {/* Search Tab */}
      <div className="flex items-center space-x-4 pb-6 border-b " > 
        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-500 ml-3">Where</label>
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full px-4 py-2  text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-ubuntu"
          />
        </div>
        <div className="flex-grow ">
          <label className="block text-sm font-medium text-gray-500 ml-3">Check in</label>
          <input
            type="text"
            placeholder="Add dates"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-ubuntu"
            value={checkInDate ? checkInDate.format("DD MMM YYYY") : ""}
            readOnly
            onClick={() => toggleCalendar(true)}
          />
        </div>
        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-500 ml-3">Check out</label>
          <input
            type="text"
            placeholder="Add dates"
            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-ubuntu"
            value={checkOutDate ? checkOutDate.format("DD MMM YYYY") : ""}
            readOnly
            onClick={() => toggleCalendar(false)}
          />
        </div>
        <div className="flex-grow relative " >
          <label className="block text-sm font-medium text-gray-500 ml-3">Who</label>
          <input
            type="text"
            placeholder="Add guests"
            className="w-full px-4 py-2  text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-ubuntu"
            readOnly
            value={getGuestSummary()}
            onClick={toggleGuestDropdown}
          />
          {isGuestDropdownOpen && (
            <div className="absolute top-14 left-0 w-64 bg-white border rounded-lg shadow-lg p-4 "  >
              <div className="flex justify-between py-2">
                <span>Adults</span>
                <div className="flex items-center space-x-2">
                  <button
                    className="w-8 h-8 border rounded-full text-gray-500"
                    onClick={() => handleGuestChange("adults", "decrement")}
                  >
                    -
                  </button>
                  <span>{adults}</span>
                  <button
                    className="w-8 h-8 border rounded-full text-gray-500"
                    onClick={() => handleGuestChange("adults", "increment")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between py-2">
                <span>Children</span>
                <div className="flex items-center space-x-2">
                  <button
                    className="w-8 h-8 border rounded-full text-gray-500"
                    onClick={() => handleGuestChange("children", "decrement")}
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button
                    className="w-8 h-8 border rounded-full text-gray-500"
                    onClick={() => handleGuestChange("children", "increment")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between py-2">
                <span>Infants</span>
                <div className="flex items-center space-x-2">
                  <button
                    className="w-8 h-8 border rounded-full text-gray-500"
                    onClick={() => handleGuestChange("infants", "decrement")}
                  >
                    -
                  </button>
                  <span>{infants}</span>
                  <button
                    className="w-8 h-8 border rounded-full text-gray-500"
                    onClick={() => handleGuestChange("infants", "increment")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between py-2">
                <span>Pets</span>
                <div className="flex items-center space-x-2">
                  <button
                    className="w-8 h-8 border rounded-full text-gray-500"
                    onClick={() => handleGuestChange("pets", "decrement")}
                  >
                    -
                  </button>
                  <span>{pets}</span>
                  <button
                    className="w-8 h-8 border rounded-full text-gray-500"
                    onClick={() => handleGuestChange("pets", "increment")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none font-ubuntu mt-4">
          Search
        </button>
      </div>

      {/* Calendar Section */}
      {isCalendarOpen && (
  <div
    className="absolute left-0 w-full bg-white shadow-lg rounded-lg pr-3 pl-2 pt-2 mx-auto font-ubuntu"
    style={{
      top: "100%", // Adjusts the positioning relative to the parent
      marginTop: "0.5rem", // Adds spacing below the trigger
      zIndex: 50, // Ensures it appears on top of other elements
    }}
  >
    {/* Header */}
    <div className="flex justify-between items-center pb-4 border-b">
      <button
        onClick={goToPreviousMonth}
        className="text-gray-500 hover:text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="flex space-x-8">
        <span className="text-lg font-medium">
          {currentDate.format("MMMM YYYY")}
        </span>
        <span className="text-lg font-medium">
          {currentDate.add(1, "month").format("MMMM YYYY")}
        </span>
      </div>
      <button
        onClick={goToNextMonth}
        className="text-gray-500 hover:text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

    {/* Two Calendars Side by Side */}
    <div className="grid grid-cols-2 gap-8">
      <div>{renderCalendarGrid(currentDate)}</div>
      <div>{renderCalendarGrid(currentDate.add(1, "month"))}</div>
    </div>
  </div>
)}

    </div>
  );
};

export default CalendarComponent;
