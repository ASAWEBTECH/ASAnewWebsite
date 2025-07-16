import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';

interface Event {
  type: 'holiday' | 'school' | 'vacation' | 'bridge';
  name: string;
}

interface EventType {
  color: string;
  label: string;
}

const DynamicCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  // Set client flag after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Updates clock every second, but only on client
  useEffect(() => {
    if (!isClient) return;
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [isClient]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Defining events by date (format: YYYY-MM-DD)
const events: Record<string, Event> = {
    // 2025 - August
    '2025-08-11': { type: 'school', name: 'Teachers Orientation Week' },
    '2025-08-12': { type: 'school', name: 'Teachers Orientation Week' },
    '2025-08-13': { type: 'school', name: 'Teachers Orientation Week' },
    '2025-08-14': { type: 'school', name: 'Teachers Orientation Week' },
    '2025-08-15': { type: 'school', name: 'Teachers Orientation Week' },
    '2025-08-18': { type: 'school', name: 'New Term Begins' },
    
    // 2025 - September
    '2025-09-17': { type: 'holiday', name: 'National Hero Day' },
    
    // 2025 - October
    '2025-10-24': { type: 'school', name: 'Professional Development Day' },
    
    // 2025 - November
    '2025-11-02': { type: 'holiday', name: 'All Souls Day' },
    '2025-11-10': { type: 'bridge', name: 'Bridge Day' },
    '2025-11-11': { type: 'holiday', name: 'Independence Day' },
    '2025-11-27': { type: 'holiday', name: 'Thanksgiving' },
    '2025-11-28': { type: 'holiday', name: 'Thanksgiving' },
    
    // 2025 - December
    '2025-12-19': { type: 'school', name: 'Sports Day' },
    '2025-12-20': { type: 'school', name: 'Food Donation Drive' },
    '2025-12-21': { type: 'school', name: 'Food Donation Drive' },
    '2025-12-25': { type: 'holiday', name: 'Christmas Day' },
    '2025-12-26': { type: 'bridge', name: 'Day off for Christmas Day' },
    
    // 2026 - January
    '2026-01-01': { type: 'holiday', name: 'New Year' },
    '2026-01-02': { type: 'bridge', name: 'Day off for New Year' },
    '2026-01-05': { type: 'school', name: 'Second Term Begins' },
    
    // 2026 - February
    '2026-02-04': { type: 'holiday', name: 'Liberation Movement Day' },
    
    // 2026 - March
    '2026-03-08': { type: 'holiday', name: 'International Woman\'s Day' },
    '2026-03-23': { type: 'holiday', name: 'Southern Africa Liberation Day' },
    '2026-03-24': { type: 'vacation', name: 'Spring Break' },
    '2026-03-25': { type: 'vacation', name: 'Spring Break' },
    '2026-03-26': { type: 'vacation', name: 'Spring Break' },
    '2026-03-27': { type: 'vacation', name: 'Spring Break' },
    '2026-03-28': { type: 'vacation', name: 'Spring Break' },
    '2026-03-29': { type: 'vacation', name: 'Spring Break' },
    '2026-03-30': { type: 'vacation', name: 'Spring Break' },
    '2026-03-31': { type: 'vacation', name: 'Spring Break' },
    
    // 2026 - April
    '2026-04-01': { type: 'vacation', name: 'Spring Break' },
    '2026-04-02': { type: 'vacation', name: 'Spring Break' },
    '2026-04-03': { type: 'holiday', name: 'Good Friday' },
    '2026-04-04': { type: 'holiday', name: 'Peace Day' },
    
    // 2026 - May
    '2026-05-01': { type: 'holiday', name: 'Labour Day' },
    
    // 2026 - June
    '2026-06-12': { type: 'school', name: 'Last Day of Term' },
    '2026-06-13': { type: 'school', name: 'Graduation Day' },
    '2026-06-15': { type: 'school', name: 'Digital Days' },
    '2026-06-16': { type: 'school', name: 'Digital Days' },
    '2026-06-17': { type: 'school', name: 'Digital Days' },
    '2026-06-18': { type: 'school', name: 'Digital Days' },
    '2026-06-19': { type: 'school', name: 'Digital Days' },
    '2026-06-20': { type: 'school', name: 'Digital Days' },
    '2026-06-21': { type: 'school', name: 'Digital Days' },
    '2026-06-22': { type: 'school', name: 'Digital Days' },
    '2026-06-23': { type: 'school', name: 'Digital Days' },
    '2026-06-24': { type: 'school', name: 'Digital Days' },
    '2026-06-25': { type: 'school', name: 'Digital Days' },
    '2026-06-26': { type: 'school', name: 'Digital Days' },
    '2026-06-27': { type: 'school', name: 'Digital Days' },
    '2026-06-28': { type: 'school', name: 'Digital Days' },
    '2026-06-29': { type: 'school', name: 'Digital Days' },
    '2026-06-30': { type: 'school', name: 'Digital Days' },
    
    // 2026 - July (School Holidays)
    '2026-07-01': { type: 'vacation', name: 'School Holidays' },
    '2026-07-02': { type: 'vacation', name: 'School Holidays' },
    '2026-07-03': { type: 'vacation', name: 'School Holidays' },
    '2026-07-04': { type: 'vacation', name: 'School Holidays' },
    '2026-07-05': { type: 'vacation', name: 'School Holidays' },
    '2026-07-06': { type: 'vacation', name: 'School Holidays' },
    '2026-07-07': { type: 'vacation', name: 'School Holidays' },
    '2026-07-08': { type: 'vacation', name: 'School Holidays' },
    '2026-07-09': { type: 'vacation', name: 'School Holidays' },
    '2026-07-10': { type: 'vacation', name: 'School Holidays' },
    '2026-07-11': { type: 'vacation', name: 'School Holidays' },
    '2026-07-12': { type: 'vacation', name: 'School Holidays' },
    '2026-07-13': { type: 'vacation', name: 'School Holidays' },
    '2026-07-14': { type: 'vacation', name: 'School Holidays' },
    '2026-07-15': { type: 'vacation', name: 'School Holidays' },
    '2026-07-16': { type: 'vacation', name: 'School Holidays' },
    '2026-07-17': { type: 'vacation', name: 'School Holidays' },
    '2026-07-18': { type: 'vacation', name: 'School Holidays' },
    '2026-07-19': { type: 'vacation', name: 'School Holidays' },
    '2026-07-20': { type: 'vacation', name: 'School Holidays' },
    '2026-07-21': { type: 'vacation', name: 'School Holidays' },
    '2026-07-22': { type: 'vacation', name: 'School Holidays' },
    '2026-07-23': { type: 'vacation', name: 'School Holidays' },
    '2026-07-24': { type: 'vacation', name: 'School Holidays' },
    '2026-07-25': { type: 'vacation', name: 'School Holidays' },
    '2026-07-26': { type: 'vacation', name: 'School Holidays' },
    '2026-07-27': { type: 'vacation', name: 'School Holidays' },
    '2026-07-28': { type: 'vacation', name: 'School Holidays' },
    '2026-07-29': { type: 'vacation', name: 'School Holidays' },
    '2026-07-30': { type: 'vacation', name: 'School Holidays' },
    '2026-07-31': { type: 'vacation', name: 'School Holidays' },
};

const eventTypes: Record<string, EventType> = {
    holiday: { color: 'bg-red-100 text-red-800 border-red-300', label: 'Holidays' },
    school: { color: 'bg-green-100 text-green-800 border-green-300', label: 'School Events' },
    vacation: { color: 'bg-purple-100 text-purple-800 border-purple-300', label: 'Vacations' },
    bridge: { color: 'bg-yellow-100 text-yellow-800 border-yellow-300', label: 'Bridge Days' }
};
  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // First day of the month
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  // Days from previous month to complete first week
  const daysFromPrevMonth = firstDayWeekday;
  const prevMonth = new Date(year, month - 1, 0);
  const daysInPrevMonth = prevMonth.getDate();

  // Days from next month to complete last week
  const totalCells = 42; // 6 weeks * 7 days
  const daysFromNextMonth = totalCells - daysInMonth - daysFromPrevMonth;

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(month + direction);
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  const isToday = (day: number) => {
    return today.getDate() === day && 
           today.getMonth() === month && 
           today.getFullYear() === year;
  };

  const isSelected = (day: number) => {
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === month && 
           selectedDate.getFullYear() === year;
  };

  const selectDate = (day: number) => {
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventForDate = (day: number): Event | null => {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events[dateString] || null;
  };

  const getEventsForCurrentMonth = () => {
    const monthEvents: Array<{day: number} & Event> = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const event = getEventForDate(day);
      if (event) {
        monthEvents.push({ day, ...event });
      }
    }
    return monthEvents;
  };

  const renderCalendarDays = () => {
    const days = [];

    // Days from previous month
    for (let i = daysInPrevMonth - daysFromPrevMonth + 1; i <= daysInPrevMonth; i++) {
      days.push(
        <div
          key={`prev-${i}`}
          className="p-2 text-gray-400 hover:bg-gray-100 cursor-pointer transition-colors rounded-lg"
        >
          {i}
        </div>
      );
    }

    // Days from current month
    for (let day = 1; day <= daysInMonth; day++) {
      const isCurrentDay = isToday(day);
      const isSelectedDay = isSelected(day);
      const event = getEventForDate(day);
      
      let dayClass = 'p-2 cursor-pointer transition-all duration-200 rounded-lg font-medium relative ';
      
      if (isCurrentDay) {
        dayClass += 'bg-blue-500 text-white shadow-lg transform scale-105 ';
      } else if (isSelectedDay) {
        dayClass += 'bg-blue-100 text-blue-600 ring-2 ring-blue-300 ';
      } else if (event && event.type in eventTypes) {
        dayClass += `${eventTypes[event.type].color} border-2 `;
      } else {
        dayClass += 'hover:bg-gray-100 text-gray-800 ';
      }
      
      days.push(
        <div
          key={day}
          onClick={() => selectDate(day)}
          className={dayClass}
          title={event ? event.name : ''}
        >
          {day}
          {event && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-current opacity-60"></div>
          )}
        </div>
      );
    }

    // Days from next month
    for (let i = 1; i <= daysFromNextMonth; i++) {
      days.push(
        <div
          key={`next-${i}`}
          className="p-2 text-gray-400 hover:bg-gray-100 cursor-pointer transition-colors rounded-lg"
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const selectedEvent = getEventForDate(selectedDate.getDate());
  const currentMonthEvents = getEventsForCurrentMonth();

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-blue-500 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <Calendar className="w-8 h-8" />
          <div className="text-right">
            <div className="flex items-center gap-2 text-sm opacity-90">
              <Clock className="w-4 h-4" />
              <span>{isClient ? formatTime(currentTime) : '--:--:--'}</span>
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-1">{monthNames[month]} {year}</h2>
          <p className="text-sm opacity-90">{formatDate(today)}</p>
        </div>
        
        {/* Current Month Events */}
        {currentMonthEvents.length > 0 && (
          <div className="mt-4 p-3 bg-blue-600 rounded-lg">
            <h3 className="text-sm font-semibold mb-2">Events This Month:</h3>
            <div className="space-y-1">
              {currentMonthEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-2 text-xs">
                  <span className="bg-white text-blue-600 px-2 py-1 rounded font-medium min-w-[24px] text-center">
                    {event.day}
                  </span>
                  <span className="text-blue-100">{event.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="bg-gray-50 p-3 border-b">
        <div className="text-xs font-semibold text-gray-600 mb-2">Legend:</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {Object.entries(eventTypes).map(([type, config]) => (
            <div key={type} className="flex items-center gap-1">
              <div className={`w-3 h-3 rounded border-2 ${config.color}`}></div>
              <span className="text-gray-700">{config.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between p-4 bg-gray-50">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center bg-white shadow-sm z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <button
          onClick={goToToday}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
        >
          Today
        </button>
        
        <button
          onClick={() => navigateMonth(1)}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center bg-white shadow-sm z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Days of the week */}
      <div className="grid grid-cols-7 gap-1 px-4 py-2 bg-gray-50">
        {dayNames.map(day => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 gap-1 p-4">
        {renderCalendarDays()}
      </div>

      {/* Footer with selected date */}
      <div className="p-4 bg-gray-50 border-t">
        <div className="text-center text-sm text-gray-600">
          <span className="font-medium">Selected Date:</span>
          <div className="text-blue-600 font-semibold mt-1">
            {formatDate(selectedDate)}
          </div>
          {selectedEvent && selectedEvent.type in eventTypes && (
            <div className={`mt-2 p-2 rounded-lg text-xs ${eventTypes[selectedEvent.type].color}`}>
              <strong>{selectedEvent.name}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicCalendar;