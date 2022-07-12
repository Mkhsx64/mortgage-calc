import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full p-6 bg-blue-100 dark:bg-slate-600">
          <div className="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700 dark:text-white border-red-500">Mortgage Calculator</div>
          <div className="p-2 text-center text-lg text-gray-700 dark:text-white">Lightweight API based mortgage calculator.</div>
          <div className="flex justify-center flex-wrap p-10">
            <div className="relative w-48 h-64 m-5 bg-white shadow-lg dark:bg-slate-700">
              <div className=" w-48 h-20 bg-orange-500 dark:bg-red-500">
                <i className="flex items-center fas fa-bezier-curve fa-3x mx-auto text-white"></i>
              </div>
              <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase dark:text-white">TESTING</p>
              <p className="p-2 text-sm text-gray-700 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
              <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
                <i className="fas fa-chevron-right mt-2 text-orange-500"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row p-3 justify-center">
          <button className="bg-slate-500  p-2 rounded text-white border-b-2 hover:bg-slate-300">Any Clickers?</button>
        </div>
      </div>
    </>
  );
}

export default App;
