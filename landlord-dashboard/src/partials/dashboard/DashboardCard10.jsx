import React from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-04.jpg';
import Image05 from '../../images/user-36-02.jpg';
import Image06 from '../../images/user-36-08.jpg';

function DashboardCard10() {

  const customers = [
    {
      id: '0',
      image: Image01,
      name: 'Jane Cooper',
      timeline: '5 months',
      phone: '(225) 555-0118',
      email: 'jane@microsoft.com',
      unit: 'B19',
      status: 'Inactive'
    },
    {
      id: '1',
      image: Image02,
      name: 'Floyd Miles',
      timeline: '4 months',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      unit: 'G3',
      status: 'Inactive'
    },
    {
      id: '2',
      image: Image03,
      name: 'Ronald Richards',
      timeline: '4 months',
      phone: '(302) 555-0107',
      email: 'ronald@adobe.com',
      unit: 'B4',
      status: 'Inactive'
    },
    {
      id: '3',
      image: Image04,
      name: 'Marvin McKinney',
      timeline: '10 months',
      phone: '(252) 555-0126',
      email: 'marvin@tesla.com',
      unit: 'C18',
      status: 'Active'
    },
    {
      id: '4',
      image: Image05,
      name: 'Jerome Bell',
      timeline: '10 months',
      phone: '(629) 555-0129',
      email: 'jerome@google.com',
      unit: 'F4',
      status: 'Active'
    },
    {
      id: '5',
      image: Image06,
      name: 'Kathryn Murphy',
      timeline: '18 months',
      phone: '(406) 555-0120',
      email: 'kathryn@colliers.com',
      unit: 'F9',
      status: 'Active'
    },
  ];

  return (
    <div className="col-span-full xl:col-span-full bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">All Tenants</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Timeline</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Phone Number</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Unit</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Status</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                          </div>
                          <div className="font-medium text-slate-800">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">{customer.timeline}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium">{customer.phone}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center font-medium">{customer.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center font-medium">{customer.unit}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className={`text-center font-medium ${customer.status === 'Inactive' ? 'bg-red-500/[0.8]' : 'bg-green-500/[0.8]'}`}>{customer.status}</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
