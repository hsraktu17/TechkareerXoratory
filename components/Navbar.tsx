"use client"

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Job preview');

  const tabs = ['Job preview', 'Applicants', 'Match', 'Messages'];

  return (
    <div className="border-b sticky top-0 bg-white z-50">
      <div className="p-4 px-6 flex items-center justify-between">
        <div className="bg-[#E7E7E7] text-red-600 py-[9px] px-[28px]">
          Logo
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`text-gray-500 py-2 transition-colors duration-200 ${
                  activeTab === tab
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'hover:text-red-500'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
