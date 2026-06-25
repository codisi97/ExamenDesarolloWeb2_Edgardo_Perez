'use client';

import { getPromedioCategoria } from '@/app/servicios/api';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Page() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Valor promedio por categoría',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    getPromedioCategoria().then((data) => {
      const labels = data.map((item: any) => item.category);
      const promedio = data.map((item: any) => item.valor_promedio);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Valor promedio por categoría',
            data: promedio,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    });
  }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}