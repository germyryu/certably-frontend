import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Datepicker built with flatpickr */}
                <Datepicker />     
              </div>
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-6">
                {/* Add tenant button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4738 13.7533C7.98236 13.7533 5.96263 11.6702 5.96263 9.10053C5.96263 6.53087 7.98236 4.44775 10.4738 4.44775C12.9653 4.44775 14.985 6.53087 14.985 9.10053C14.985 11.6702 12.9653 13.7533 10.4738 13.7533ZM21.624 13.7533C21.0717 13.7533 20.624 13.3056 20.624 12.7533V10.2637H18.2406C17.6883 10.2637 17.2406 9.81602 17.2406 9.26374V8.93735C17.2406 8.38506 17.6883 7.93735 18.2406 7.93735H20.624V5.44777C20.624 4.89548 21.0717 4.44777 21.624 4.44777H21.8796C22.4319 4.44777 22.8796 4.89548 22.8796 5.44777V7.93735H25.263C25.8153 7.93735 26.263 8.38506 26.263 8.93735V9.26374C26.263 9.81602 25.8153 10.2637 25.263 10.2637H22.8796V12.7533C22.8796 13.3056 22.4319 13.7533 21.8796 13.7533H21.624Z" fill="white"/>
                    <path d="M0.324351 24.4539C0.761494 18.9023 5.1302 16.0798 10.455 16.0798C15.8548 16.0798 20.2912 18.7473 20.6217 24.4548C20.6348 24.6822 20.6217 25.3854 19.7745 25.3854C15.5953 25.3854 9.38518 25.3854 1.14409 25.3854C0.861252 25.3854 0.300539 24.7563 0.324351 24.4539Z" fill="white"/>
                  </svg>
                    <span className="hidden xs:block ml-2">Add Lessor</span>
                </button>

                {/* New button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.25506 3.12158H18.1491C18.5116 3.12158 18.8619 3.2529 19.1351 3.49125L25.2865 8.85756C25.613 9.14242 25.8004 9.55457 25.8004 9.9879V26.2595C25.8004 28.5505 25.775 28.7119 23.4965 28.7119H8.25506C5.97649 28.7119 5.95113 28.5505 5.95113 26.2595V5.57398C5.95113 3.28296 5.97649 3.12158 8.25506 3.12158Z" fill="white"/>
                    <rect x="8.43227" y="14.6372" width="11.1652" height="2.55902" rx="1" fill="indigo" opacity={0.5}/>
                    <rect x="8.43227" y="19.7551" width="6.2029" height="2.55903" rx="1" fill="indigo" opacity={0.5}/>
                  </svg>
                    <span className="hidden xs:block ml-2">File Claim</span>
                </button>      
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Card (Recent Activity) */}
              {/* <DashboardCard12 /> */}
              {/* Card (Income/Expenses) */}
              {/* <DashboardCard13 /> */}
              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
              {/* Line chart (Sales Over Time) */}
              {/* <DashboardCard08 /> */}
              {/* Stacked bar chart (Sales VS Refunds) */}
              {/* <DashboardCard09 /> */}
              {/* Bar chart (Direct vs Indirect) */}
              <DashboardCard04 />
              {/* Line chart (Real Time Value) */}
              {/* <DashboardCard05 /> */}
              {/* Doughnut chart (Top Countries) */}
              {/* <DashboardCard06 /> */}
              {/* Table (Top Channels) */}
              {/* <DashboardCard07 /> */}
              {/* Card (Customers) */}
              <DashboardCard10 />
              {/* Card (Reasons for Refunds) */}
              {/* <DashboardCard11 /> */}
              
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;