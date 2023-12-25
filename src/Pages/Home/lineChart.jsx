import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Web development', 'Digital merketing', 'Software Development', 'Data Analytics', 'App development'],
      datasets: [
        {
          label: 'Done Task',
          data: [10, 40, 30, 65, 73],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
        },
        {
          label: 'To Do Task',
          data: [30, 10, 50, 30, 70],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          fill: false,
        },
        {
            label: 'Doing Task',
            data: [40, 60, 43, 70, 30],
            borderColor: 'rgba(155, 99, 132, 1)',
            borderWidth: 2,
            fill: false,
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
      type: 'line',
      data: data,
      options: options,
    });
  }, []);

  return   <div className='mx-auto w-[92%] my-20'>
  <canvas ref={chartRef} />
  </div>
};

export default LineChart;
