"use client"

import { useState } from "react";


export default function Sectionbar(){

    const [activeTab, setActiveTab] = useState('Job preview');

    const tabs = ['Job Preview', 'Applicants', 'Match', 'Messages']

    return <div className="">
        <div className="pt-4 px-10 flex">
        <div className="flex-1 flex justify-start">
          <div className="flex items-center gap-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`text-gray-500 py-2 transition-colors duration-200 pb-4 ${
                  activeTab === tab
                    ? 'text-red-500 font-semibold border-b-2 border-red-500'
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
}