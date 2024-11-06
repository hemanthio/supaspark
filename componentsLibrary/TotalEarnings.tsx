"use client"

import React, { useState } from 'react';
import NumberFlow, { type Value } from "@number-flow/react";


const monthlyData = [
  { month: "May", earnings: 12053 },
  { month: "Jun", earnings: 8197 },
  { month: "Jul", earnings: 15345 },
  { month: "Aug", earnings: 10932 },
  { month: "Sep", earnings: 20459 },
  { month: "Oct", earnings: 100 },
  { month: "Nov", earnings: 100 },
  { month: "Dec", earnings: 100 },
];

export default function CustomEarningsChart() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [displayedEarnings, setDisplayedEarnings] = useState(
    monthlyData.reduce((sum, data) => sum + data.earnings, 0)
  );

  // const [value, cycleValue] = useCycle(values);
  // useRootClick(cycleValue);

  const handleBarClick = (index: number) => {
    const clickedMonth = monthlyData[index].month;
    const clickedEarnings = monthlyData[index].earnings;
    setSelectedMonth(clickedMonth);
    setDisplayedEarnings(clickedEarnings);
  };

  return (
    <div className='h-screen flex justify-center items-center'>
    <div className="w-full max-w-sm p-8 font-sfpro bg-white rounded-lg shadow-lg">
      <h2 className="text-5xl font-bold "> 
      ₹<NumberFlow value={displayedEarnings} trend={false}/></h2>
      <p className="text-gray-500 mb-6">
        {selectedMonth ? `Total earnings ` : 'Total earnings'}
      </p>
      <div className="h-45 flex items-end">   
        {monthlyData.map((entry, index) => (
          <div
            key={index}
            onClick={() => handleBarClick(index)}
            style={{
              backgroundColor: entry.month === selectedMonth ? '#323232' : '#D2D2D2',
              width: '40px',
              borderRadius:"2px",
              height: `${entry.earnings / 150}px`, // Adjust height based on earnings
              margin: '0 4px',
              transition: 'background-color 0.3s',
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '14px',
                color: '#6B7280',
              }}
            >
              {entry.month}
            </span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}


