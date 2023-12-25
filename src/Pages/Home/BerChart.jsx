import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef();
  const chartInstance = useRef(null); // Store a reference to the chart instance

  useEffect(() => {
    // Destroy the existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create the new chart after destroying the existing one
    const ctx = chartRef.current.getContext('2d');

    // Define multiple datasets with different colors
    const data = {
      labels: ['Web development', 'Digital merketing', 'Software Development', 'Data Analytics', 'App development'],
      datasets: [
        {
          label: 'Done Task',
          data: [10, 20, 30, 40, 50],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'To Do Task',
          data: [30, 10, 45, 25, 60],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
        {
          label: 'Doing Task',
          data: [15, 35, 20, 54, 10],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return   <div className='mx-auto w-[92%] my-20'>
  <canvas ref={chartRef} />
  </div>
};

export default BarChart;
