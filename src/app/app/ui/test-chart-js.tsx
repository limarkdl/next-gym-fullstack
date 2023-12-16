'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [
  '12.09',
  '18.09',
  '22.10',
  '29.10',
  '30.10',
  '5.11',
  '10.11',
  '19.11',
  '24.11',
];

export const data = {
  labels,
  datasets: [
    {
      data: [65.0, 67.5, 66, 68.5, 69, 66, 72, 70.5, 71, 68.5],
      borderColor: 'rgba(255, 0, 0, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.2,
      pointRadius: 4,
    },
  ],
};

const TestChart = () => {
  return <Line options={options} data={data} />;
};

export default TestChart;
