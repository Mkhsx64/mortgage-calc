import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function App() {

  let setIcon = faSun as IconProp;
  const changeIcon = () => {
    const element = document.getElementById("parent");
    const themeElement = document.getElementById('themeMode');
    if (element?.classList.contains('dark')) {
      setIcon = faMoon;
      themeElement?.setAttribute('icon', 'faMoon');
      return;
    } else {
      setIcon = faSun;
      themeElement?.setAttribute('icon', 'faSun');
      return;
    }
  }

  return (
    <>
    {/*Wrapping div for toggling light/dark mode*/}
    <div id="parent">
      {/*Light/Dark mode slider to toggle between preferences*/}
      <div className="container flex justify-center w-full mx-auto space-x-4">
        <div className="w-full flex items-center justify-center bg-blue-300 dark:bg-slate-700 flex-row">
        <label className="switch">
          <input id="slider" type="checkbox" onClick={(() => {
            const element = document.getElementById("parent");
            element?.classList.toggle("dark");
            changeIcon();
          })}/>
          <span className="slider round"></span>
        </label>
        <FontAwesomeIcon id='themeMode' className="mx-2" icon={setIcon} />
        </div>
      </div>

      {/*Body section of the Mortgage Calculator */}
      <div className="container min-h-screen flex justify-center w-full mx-auto space-x-4">
        <div className="w-full p-6 bg-blue-100 dark:bg-slate-600">
          <div className="w-48 italic mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700 dark:text-white dark:border-red-500 ">Mortgage Calculator</div>
          <div className="p-2 text-center text-lg text-gray-700 dark:text-white">Lightweight API based mortgage calculator. <br/>Loan Amount or Home Value + Down Payment are required. Interest Rate is required.</div>
          <form className="flex flex-row justify-center">
            <div className="flex flex-col">
              <label htmlFor="iLoanAmount" className="m-2 text-lg text-gray-700 dark:text-white">Loan Amount</label>
              <input id="iLoanAmount" typeof='number' className="m-2 shadow-xl shadow-slate-700/50 dark:shadow-slate-700/90  text-center rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              <label htmlFor="iHomeValue" className="m-2 text-lg text-gray-700 dark:text-white">Home Value</label>
              <input id="iHomeValue" typeof='number' className="m-2 shadow-xl shadow-slate-700/50 dark:shadow-slate-700/90  text-center rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              <label htmlFor="iDownPayment" className="m-2 text-lg text-gray-700 dark:text-white">Down Payment</label>
              <input id="iDownPayment" typeof='number' className="m-2 shadow-xl shadow-slate-700/50 dark:shadow-slate-700/90  text-center rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              <label htmlFor="iInterestRate" className="m-2 text-lg text-gray-700 dark:text-white">Interest Rate</label>
              <input id="iInterestRate" typeof='number' className="m-2 shadow-xl shadow-slate-700/50 dark:shadow-slate-700/90  text-center rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              </div>
              <div className="flex flex-col">
              <label htmlFor="iDuration" className="m-2 text-lg text-gray-700 dark:text-white">Duration (Years)</label>
              <input id="iDuration" typeof='number' className="m-2 shadow-xl shadow-slate-700/50 dark:shadow-slate-700/90  text-center rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="30"></input>
              <label htmlFor="iMonthlyHOA" className="m-2 text-lg text-gray-700 dark:text-white">Monthly HOA</label>
              <input id="iMonthlyHOA" typeof='number' className="m-2 shadow-xl shadow-slate-700/50 dark:shadow-slate-700/90  text-center rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              <label htmlFor="iAnnualPT" className="m-2 text-lg text-gray-700 dark:text-white">Annual Property Tax</label>
              <input id="iAnnualPT" typeof='number' className="m-2 shadow-xl shadow-slate-700/50 dark:shadow-slate-700/90  text-center rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
              <label htmlFor="iAnnualHI" className="m-2 text-lg text-gray-700 dark:text-white">Annual Home Insurance</label>
              <input id="iAnnualHI" typeof='number' className="m-2 shadow-xl shadow-slate-700/50 dark:shadow-slate-700/90 text-center rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 dark:focus:ring-red-700 hover:bg-blue-200" placeholder="0"></input>
            </div>
          </form>
          <div className="flex justify-center m-10">
            <button type="submit" className="border-r-4 shadow-lg shadow-blue-500 border-blue-600 font-bold bg-blue-500 hover:bg-blue-300 text-gray-600  p-2 rounded dark:bg-slate-500 dark:text-white border-b-4 dark:shadow-slate-500 dark:border-slate-600 dark:hover:bg-slate-400 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">Run Report</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
