import React from 'react';
import BarChart from '../../charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Your Average Cost',
        data: [
          800, 1600, 900, 1300, 1950, 1700,
        ],
        backgroundColor: tailwindConfig().theme.colors.purple[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.purple[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Other\'s Average Cost',
        data: [
          4900, 2600, 5350, 4800, 5200, 4800,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-full bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Your Savings</h2>
        <p className="text-sm font-light text-slate-600">Compared to your neighbors</p>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={400} />
    </div>
  );
}

export default DashboardCard04;