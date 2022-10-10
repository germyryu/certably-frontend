import React from 'react';

function WelcomeBanner() {
  return (
    <div className="relative bg-gradient-to-r from-violet-400 via-purple-200 to-purple-100 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">

      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">Good afternoon, Krish. 👋</h1>
        <p>Here is what’s happening with your tenants today:</p>
      </div>

    </div>
  );
}

export default WelcomeBanner;
