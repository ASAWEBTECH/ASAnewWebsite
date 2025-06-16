import React from 'react';
import { Calendar } from 'lucide-react';

export function CalendarHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <Calendar className="w-12 h-12 text-blue-600" />
        <h1 className="text-4xl font-bold text-blue-900 te">
          Academic Calendar 2024-2025
        </h1>
      </div>
    </div>
  );
}