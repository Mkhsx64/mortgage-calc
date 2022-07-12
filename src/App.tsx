import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="container min-h-screen flex justify-center w-full mx-auto">
        <div className="w-full p-6 bg-blue-100 dark:bg-slate-600">
          <div className="w-48 italic mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700 dark:text-white dark:border-red-500 ">Mortgage Calculator</div>
          <div className="p-2 text-center text-lg text-gray-700 dark:text-white">Lightweight API based mortgage calculator.</div>
          <form className="flex flex-row justify-center">
            <div className="flex flex-col">
              <label htmlFor="input1" className="m-2 text-lg text-gray-700 dark:text-white">Loan Amount</label>
              <input id="input1" typeof='number' className="m-2 text-center rounded-md focus:outline-none focus:ring-1 focus:ring-sky-700 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              <label htmlFor="input2" className="m-2 text-lg text-gray-700 dark:text-white">Home Value</label>
              <input id="input2" typeof='number' className="m-2 text-center rounded-md focus:outline-none focus:ring-1 focus:ring-sky-700 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              <label htmlFor="input3" className="m-2 text-lg text-gray-700 dark:text-white">Down Payment</label>
              <input id="input3" typeof='number' className="m-2 text-center rounded-md focus:outline-none focus:ring-1 focus:ring-sky-700 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              <label htmlFor="input4" className="m-2 text-lg text-gray-700 dark:text-white">Interest Rate</label>
              <input id="input4" typeof='number' className="m-2 text-center rounded-md focus:outline-none focus:ring-1 focus:ring-sky-700 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              </div>
              <div className="flex flex-col">
              <label htmlFor="input5" className="m-2 text-lg text-gray-700 dark:text-white">Duration (Years)</label>
              <input id="input5" typeof='number' className="m-2 text-center rounded-md focus:outline-none focus:ring-1 focus:ring-sky-700 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              <label htmlFor="input6" className="m-2 text-lg text-gray-700 dark:text-white">Monthly HOA</label>
              <input id="input6" typeof='number' className="m-2 text-center rounded-md focus:outline-none focus:ring-1 focus:ring-sky-700 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              <label htmlFor="input7" className="m-2 text-lg text-gray-700 dark:text-white">Annual Property Tax</label>
              <input id="input7" typeof='number' className="m-2 text-center rounded-md focus:outline-none focus:ring-1 focus:ring-sky-700 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              <label htmlFor="input8" className="m-2 text-lg text-gray-700 dark:text-white">Annual Home Insurance</label>
              <input id="input8" typeof='number' className="m-2 text-center rounded-md focus:outline-none focus:ring-1 focus:ring-sky-700 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
            </div>
          </form>
          <div className="flex justify-center m-10">
            <button className="bg-blue-500 text-gray-700  p-2 rounded dark:bg-slate-500 dark:text-white border-b-2 hover:bg-slate-300">Run Report</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
